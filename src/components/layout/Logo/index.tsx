import React from "react";
import Link from "next/link";

export interface LogoProps {
  variant?: "default" | "white" | "icon";
  className?: string;
}

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const isWhite = variant === "white";
  const isIconOnly = variant === "icon";

  const textColor = isWhite ? "text-white" : "text-brand-blue-950 dark:text-white";
  const subtextColor = isWhite ? "text-zinc-300" : "text-brand-red dark:text-brand-red-400";

  const logoIcon = (
    <svg
      className="h-10 w-10 shrink-0"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle Background */}
      <circle cx="50" cy="50" r="46" stroke={isWhite ? "#ffffff" : "#1e3a8a"} strokeWidth="4" className="opacity-10" />
      
      {/* Red Curved Accent */}
      <path
        d="M20 50C20 33.4315 33.4315 20 50 20C55 20 62 23 66 26C60 30 55 35 50 42C44 50 42 58 46 64C48 67 52 70 56 72C40 76 20 66 20 50Z"
        fill="#ef4444"
      />
      
      {/* Blue Curved Accent */}
      <path
        d="M80 50C80 66.5685 66.5685 80 50 80C45 80 38 77 34 74C40 70 45 65 50 58C56 50 58 42 54 36C52 33 48 30 44 28C60 24 80 34 80 50Z"
        fill="#1e3a8a"
      />
      
      {/* Academic Shield / Cap emblem in the middle */}
      <path
        d="M50 32L68 41L50 50L32 41L50 32Z"
        fill={isWhite ? "#ffffff" : "#0f172a"}
      />
      <path
        d="M38 46V56C38 60 50 64 50 64C50 64 62 60 62 56V46L50 52L38 46Z"
        fill={isWhite ? "#ffffff" : "#0f172a"}
      />
      {/* Tassel */}
      <path
        d="M60 43V52C60 54 58 56 58 56"
        stroke={isWhite ? "#ffffff" : "#0f172a"}
        strokeWidth="2"
      />
    </svg>
  );

  if (isIconOnly) {
    return (
      <Link href="/" className={`inline-flex items-center outline-none ${className}`} aria-label="Vedant Academy Home">
        {logoIcon}
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-3 outline-none ${className}`} aria-label="Vedant Academy Home">
      {logoIcon}
      <div className="flex flex-col">
        <span className={`text-lg font-black tracking-tight leading-none uppercase ${textColor}`}>
          Vedant Academy
        </span>
        <span className={`text-[10px] font-bold tracking-wider leading-none uppercase mt-1 ${subtextColor}`}>
          Exclusively for CMA
        </span>
      </div>
    </Link>
  );
}
