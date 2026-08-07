import React from "react";
import Image from "next/image";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";

// =======================================================
// TYPESCRIPT CONCEPT 3: Destructuring & Optional values
// =======================================================
// We destructure our Props object directly in the function arguments:
// ({ name, rank, ... }: ResultCardProps).
// We can assign fallbacks directly during destructuring (e.g. year = "2026").
export interface ResultCardProps {
  name: string;
  rank: string; // e.g. "AIR 12"
  course: string; // e.g. "CMA Foundation"
  score?: string; // e.g. "360/400"
  year?: string; // e.g. "June 2026"
  imageSrc?: string;
}

export default function ResultCard({
  name,
  rank,
  course,
  score,
  year = "CMA Qualifier",
  imageSrc,
}: ResultCardProps) {
  return (
    <Card
      variant="elevated"
      hover={true}
      className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 border border-zinc-50 dark:border-zinc-800"
    >
      {/* 1. Portrait Circle frame with Overlay Rank badge */}
      <div className="relative h-28 w-28 shrink-0 mb-4">
        <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="112px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-brand-blue-50 to-brand-blue-100 dark:from-zinc-800 dark:to-zinc-900">
              <svg className="h-10 w-10 text-brand-blue-400 dark:text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          )}
        </div>

        {/* Floating Rank Badge (e.g. AIR 12) */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-black uppercase tracking-wider text-white bg-brand-blue rounded-full shadow-md shrink-0 whitespace-nowrap z-10">
          {rank}
        </span>
      </div>

      {/* 2. Topper details */}
      <div className="space-y-1">
        <Typography variant="h3" as="h4" className="font-bold text-base text-brand-dark dark:text-white mt-2">
          {name}
        </Typography>

        <Typography variant="caption" className="block text-brand-red dark:text-brand-red-400 font-semibold tracking-wide uppercase text-[11px]">
          {course}
        </Typography>

        {score && (
          <Typography variant="caption" className="block font-bold text-zinc-700 dark:text-zinc-300 text-xs mt-1 bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded-md inline-block">
            Score: {score}
          </Typography>
        )}

        <Typography variant="caption" className="block text-zinc-400 dark:text-zinc-500 text-[11px] mt-1 font-medium">
          {year}
        </Typography>
      </div>
    </Card>
  );
}

