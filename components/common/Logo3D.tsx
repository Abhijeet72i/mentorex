"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState, type PointerEvent } from "react";
import { Montserrat } from "next/font/google";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
});

type Props = {
  /** Emblem width in px. Wordmark scales from this. Navbar ≈ 44–56, footer/hero ≈ 90–190. */
  size?: number;
  /** Wrap in a link. Pass `null` for no link. */
  href?: string | null;
  /** "light" = for light backgrounds, "dark" = for dark backgrounds. */
  tone?: "light" | "dark";
  /** Tagline text. `false` hides it. Defaults to shown only when size >= 64. */
  tagline?: string | false;
  /** Cap toss: once per browser session, every load, or never. */
  cap?: "once" | "always" | "never";
  /** Tilt with the pointer. */
  interactive?: boolean;
  className?: string;
};

const BASE_RX = -6;
const BASE_RY = 12;

export default function Logo3D({
  size = 56,
  href = "/",
  tone = "light",
  tagline,
  cap = "once",
  interactive = true,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"pending" | "fly" | "rest">("pending");

  const rx = useMotionValue(BASE_RX);
  const ry = useMotionValue(BASE_RY);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });

  useEffect(() => {
    if (reduce || cap === "never") {
      setPhase("rest");
      return;
    }
    if (cap === "once") {
      try {
        if (sessionStorage.getItem("mx-cap-flown")) {
          setPhase("rest");
          return;
        }
        sessionStorage.setItem("mx-cap-flown", "1");
      } catch {}
    }
    setPhase("fly");
  }, [reduce, cap]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 50);
    rx.set(-py * 30);
  };
  const onLeave = () => {
    rx.set(BASE_RX);
    ry.set(BASE_RY);
  };

  // ---- geometry (everything scales from `size`) ----
  const layers = size >= 120 ? 16 : size >= 64 ? 12 : 8;
  const depth = size * 0.136;
  const step = depth / layers;
  const half = depth / 2;
  const zAt = (i: number) => -i * step + half;
  const k = size / 190;
  const fs = size * 0.62;
  const showTag =
    tagline === false ? null : tagline ?? (size >= 64 ? "A DIGITAL CHOICE." : null);
  const navy = tone === "dark" ? "#3a6ea5" : "#1e3a5f";
  const tagColor = tone === "dark" ? "#8fa3b8" : "#5b6f86";
  const indices = Array.from({ length: layers + 1 }, (_, n) => layers - n);

  // ---- cap animation ----
  const restZ = half + 8 * k;
  const flight = {
    x: ["-260%", "-150%", "60%", "-30%", "0%", "0%", "0%"],
    y: ["-560%", "-380%", "-260%", "-130%", "-24%", "3%", "0%"],
    z: [320 * k, 260 * k, 200 * k, 120 * k, half + 30 * k, half + 6 * k, restZ],
    rotateX: [60, 200, 420, 560, 700, 720, 720],
    rotateY: [0, 300, 620, 900, 1080, 1080, 1080],
    rotateZ: [-50, -20, 40, -15, 0, 0, 0],
    scale: [2.2, 1.9, 1.6, 1.25, 1.05, 1, 1],
    opacity: [0, 1, 1, 1, 1, 1, 1],
  };
  const restPose = { x: "0%", y: "0%", z: restZ, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, opacity: 1 };

  const mark = (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ display: "inline-block", perspective: size * 6 }}
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: size * 0.15,
          transformStyle: "preserve-3d",
          rotateX: srx,
          rotateY: sry,
        }}
      >
        {/* Emblem */}
        <div
          style={{
            position: "relative",
            width: size,
            aspectRatio: "280 / 250",
            transformStyle: "preserve-3d",
            flexShrink: 0,
          }}
        >
          {indices.map((i) => (
            <img
              key={i}
              src="/logo/emblem.png"
              alt=""
              aria-hidden
              draggable={false}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                transform: `translateZ(${zAt(i)}px)`,
                filter: i > 0 ? `brightness(${0.35 + 0.25 * (1 - i / layers)})` : undefined,
              }}
            />
          ))}

          {/* landing glow */}
          {phase === "fly" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0.9, 0] }}
              transition={{ duration: 3.4, times: [0, 0.9, 0.94, 1] }}
              style={{
                position: "absolute",
                left: "15%",
                top: "0%",
                width: "70%",
                aspectRatio: "1",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(244,124,47,.55), transparent 65%)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* Graduation cap */}
          <motion.div
            initial={{ ...restPose, opacity: 0 }}
            animate={phase === "fly" ? flight : phase === "rest" ? restPose : { opacity: 0 }}
            transition={
              phase === "fly"
                ? { duration: 2.8, times: [0, 0.15, 0.4, 0.65, 0.85, 0.93, 1], ease: "easeInOut" }
                : { duration: 0.3 }
            }
            style={{
              position: "absolute",
              left: "20.71%",
              top: "4%",
              width: "58.57%",
              height: "30.4%",
              transformStyle: "preserve-3d",
            }}
          >
            {[7, 6, 5, 4, 3, 2, 1, 0].map((i) => (
              <img
                key={i}
                src="/logo/cap.png"
                alt=""
                aria-hidden
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  transform: `translateZ(${-i * step * 0.9}px)`,
                  filter: i > 0 ? `brightness(${0.4 + 0.3 * (1 - i / 7)})` : undefined,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Wordmark */}
        <div style={{ transformStyle: "preserve-3d" }}>
          <div
            className={mont.className}
            style={{
              position: "relative",
              fontSize: fs,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
              transformStyle: "preserve-3d",
            }}
          >
            <span style={{ visibility: "hidden" }}>MentorEx</span>
            {indices.map((i) => {
              const b = i > 0 ? 0.3 + 0.25 * (1 - i / layers) : 1;
              const f = i > 0 ? `brightness(${b})` : undefined;
              return (
                <span
                  key={i}
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transform: `translateZ(${zAt(i)}px)`,
                  }}
                >
                  <span style={{ color: navy, filter: f }}>Mentor</span>
                  <span style={{ color: "#f47c2f", filter: f }}>Ex</span>
                </span>
              );
            })}
          </div>
          {showTag && (
            <div
              className={mont.className}
              style={{
                marginTop: fs * 0.35,
                fontSize: Math.max(fs * 0.2, 8),
                fontWeight: 600,
                letterSpacing: "0.14em",
                textAlign: "center",
                whiteSpace: "nowrap",
                color: tagColor,
                transform: "translateZ(6px)",
              }}
            >
              — {showTag} —
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  if (href === null) {
    return (
      <div role="img" aria-label="MentorEx" className={className}>
        {mark}
      </div>
    );
  }
  return (
    <Link href={href} aria-label="MentorEx – home" className={className} style={{ display: "inline-block" }}>
      {mark}
    </Link>
  );
}
