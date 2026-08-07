import React from "react";
import Image from "next/image";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";
import Button from "../../foundation/Button";

// =======================================================
// TYPESCRIPT CONCEPT 2: Union Types and Arrays
// =======================================================
// - "layout?: 'horizontal' | 'vertical'" uses a literal union. 
//   This restricts the layout variable to ONLY these two exact strings. 
//   Any other value will trigger a compile-time TypeScript error.
// - "details?: string[]" defines a property containing an array of strings.
export interface FacultyCardProps {
  name: string;
  designation: string;
  experience: string;
  imageSrc?: string;
  details?: string[];
  href?: string;
  layout?: "horizontal" | "vertical";
}

export default function FacultyCard({
  name,
  designation,
  experience,
  imageSrc,
  details = [],
  href = "/about",
  layout = "vertical",
}: FacultyCardProps) {
  const isHorizontal = layout === "horizontal";

  // Define styling wrappers based on horizontal/vertical toggles
  const cardClasses = isHorizontal
    ? "flex flex-col md:flex-row gap-6 p-0 overflow-hidden relative"
    : "flex flex-col h-full overflow-hidden text-center";

  const imageWrapperClasses = isHorizontal
    ? "relative w-full md:w-56 lg:w-64 h-64 md:h-auto overflow-hidden shrink-0"
    : "relative w-full h-72 bg-zinc-100 overflow-hidden shrink-0";

  return (
    <Card variant="default" hover={true} className={cardClasses}>
      {/* Subtle Dot Grid background for founders (horizontal style) */}
      {isHorizontal && (
        <div className="absolute bottom-4 right-4 text-zinc-100 dark:text-zinc-800 pointer-events-none hidden sm:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <circle cx="10" cy="10" r="2" />
            <circle cx="30" cy="10" r="2" />
            <circle cx="50" cy="10" r="2" />
            <circle cx="10" cy="30" r="2" />
            <circle cx="30" cy="30" r="2" />
            <circle cx="50" cy="30" r="2" />
            <circle cx="10" cy="50" r="2" />
            <circle cx="30" cy="50" r="2" />
            <circle cx="50" cy="50" r="2" />
          </svg>
        </div>
      )}

      {/* 1. Portrait Frame */}
      <div className={imageWrapperClasses}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes={isHorizontal ? "(max-w-770px) 100vw, 250px" : "(max-w-770px) 100vw, 300px"}
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
            <svg className="h-16 w-16 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        )}
      </div>

      {/* 2. Text Content */}
      <div className={`flex flex-col justify-center p-6 text-left ${isHorizontal ? "md:p-8 md:pr-16" : ""}`}>
        <Typography variant="h3" as="h3" className="font-bold text-brand-dark dark:text-white leading-tight">
          {name}
        </Typography>

        <Typography variant="label" className="mt-1 text-brand-red dark:text-brand-red-400">
          {designation}
        </Typography>

        <Typography variant="caption" className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">
          {experience}
        </Typography>

        {/* bullet points listing (e.g. Sunil Sir concept clarity) */}
        {details.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <svg className="h-4 w-4 text-brand-blue dark:text-brand-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <Button variant="outline" size="sm" href={href} className="inline-flex items-center gap-2 group/btn">
            View Profile
            <svg className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  );
}

