"use client";

import { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  loading = false,
  showArrow = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:from-blue-700 hover:to-cyan-600 focus:ring-blue-200",

    secondary:
      "bg-slate-900 text-white shadow-lg hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl focus:ring-slate-300",

    outline:
      "border border-slate-300 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 hover:shadow-lg focus:ring-blue-200",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-blue-600",
  };

  return (
    <button
      className={`
        ${base}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity="0.25"
            />
            <path
              d="M22 12a10 10 0 0 1-10 10"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {children}

          {showArrow && (
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </>
      )}
    </button>
  );
}