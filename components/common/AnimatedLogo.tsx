"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [animateCap, setAnimateCap] = useState(false);

  const playAnimation = () => {
    setAnimateCap(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimateCap(true);
      });
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      playAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="mentorExLogo"
        onMouseEnter={playAnimation}
        role="img"
        aria-label="MentorEx - An Educated Choice"
      >
        {/* MAIN EMBLEM */}
        <img
          src="/mentorex-logo.png"
          alt="MentorEx"
          className="mentorExMainLogo"
        />

        {/* FLYING GRADUATION CAP */}
        <img
          src="/graduation-cap.png"
          alt=""
          className={`mentorExCap ${
            animateCap ? "mentorExCapAnimate" : ""
          }`}
        />

        {/* WORDMARK + TAGLINE */}
        <div className="mentorExText">
          <div className="mentorExWord">
            <span className="mentorText">Mentor</span>
            <span className="exText">Ex</span>
          </div>

          <div className="mentorExTagline">
            — AN EDUCATED CHOICE. —
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =====================================
           MAIN LOGO
        ====================================== */
        .mentorExLogo {
          position: relative;

          width: 340px;
          height: 105px;

          display: flex;
          align-items: center;

          cursor: pointer;
          overflow: visible;
        }

        /* =====================================
           EMBLEM
        ====================================== */
        .mentorExMainLogo {
          width: 95px;
          height: 95px;

          object-fit: contain;
          flex-shrink: 0;

          display: block;
        }

        /* =====================================
           TEXT AREA
        ====================================== */
        .mentorExText {
          display: flex;
          flex-direction: column;
          justify-content: center;

          margin-left: 16px;
          margin-top: 2px;

          line-height: 1;
        }

        /* =====================================
           MENTOREX
        ====================================== */
        .mentorExWord {
          display: flex;
          align-items: center;

          line-height: 1;
          white-space: nowrap;
        }

        .mentorText {
          font-size: 41px;
          font-weight: 800;

          color: #2c5077;

          letter-spacing: -1.5px;
        }

        .exText {
          font-size: 41px;
          font-weight: 800;

          color: #f47c2f;

          letter-spacing: -1.5px;
        }

        /* =====================================
           TAGLINE
        ====================================== */
        .mentorExTagline {
          margin-top: 7px;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 1.5px;

          color: #555555;

          white-space: nowrap;
          text-align: center;
        }

        /* =====================================
           GRADUATION CAP
        ====================================== */
        .mentorExCap {
          position: absolute;

          /*
            Centered over the 95px emblem.
          */
          left: 20px;
          top: 0px;

          width: 55px;
          height: auto;

          object-fit: contain;

          z-index: 10;

          pointer-events: none;

          transform: translate3d(0, -125px, 0);

          opacity: 1;
        }

        /* =====================================
           CAP ANIMATION
        ====================================== */
        .mentorExCapAnimate {
          animation: mentorExCapFly 1.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes mentorExCapFly {
          0% {
            transform: translate3d(0, -125px, 0)
              rotate(-8deg);
          }

          20% {
            transform: translate3d(-4px, -100px, 0)
              rotate(-5deg);
          }

          40% {
            transform: translate3d(4px, -70px, 0)
              rotate(3deg);
          }

          60% {
            transform: translate3d(-3px, -35px, 0)
              rotate(-2deg);
          }

          78% {
            transform: translate3d(2px, -10px, 0)
              rotate(1deg);
          }

          90% {
            transform: translate3d(-1px, 2px, 0)
              rotate(0deg);
          }

          100% {
            transform: translate3d(0, 0, 0)
              rotate(0deg);
          }
        }

        /* =====================================
           MOBILE
        ====================================== */
        @media (max-width: 640px) {
          .mentorExLogo {
            width: 285px;
            height: 90px;
          }

          .mentorExMainLogo {
            width: 78px;
            height: 78px;
          }

          .mentorExText {
            margin-left: 12px;
          }

          .mentorText,
          .exText {
            font-size: 34px;
          }

          .mentorExTagline {
            font-size: 7.5px;
            letter-spacing: 1.2px;
            margin-top: 5px;
          }

          .mentorExCap {
            left: 16px;
            top: 0px;
            width: 45px;
          }
        }
      `}</style>
    </>
  );
}