import React from "react";
import Image from "next/image";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";

// =======================================================
// TYPESCRIPT CONCEPT 4: Typing Primitive Types
// =======================================================
// We specify types for standard primitives like:
// - text: string (for text paragraphs)
// - rating: number (for numerical counts like stars)
export interface TestimonialCardProps {
  name: string;
  course: string;
  text: string;
  imageSrc?: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  course,
  text,
  imageSrc,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card
      variant="default"
      hover={true}
      className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 relative overflow-hidden"
    >
      {/* Decorative Quote Icon in background */}
      <div className="absolute top-4 right-4 text-zinc-100 dark:text-zinc-800/40 pointer-events-none">
        <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.995 2.638-4.995 5.848h5v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.996 2.638-4.996 5.848h4.983v10h-9.983z" />
        </svg>
      </div>

      {/* 1. Star Rating (visual loop) */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => {
          const active = index < rating;
          return (
            <svg
              key={index}
              className={`h-4.5 w-4.5 ${active ? "text-amber-400 fill-current" : "text-zinc-200 dark:text-zinc-700"}`}
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={active ? "0" : "1.5"}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>

      {/* 2. Review Text Paragraph */}
      <Typography
        variant="body"
        className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed italic flex-grow text-left"
      >
        &ldquo;{text}&rdquo;
      </Typography>

      {/* 3. Student Profile Info Footer */}
      <div className="flex items-center gap-3.5 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
        <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0 bg-zinc-50 dark:bg-zinc-800">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="40px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
              <svg className="h-5 w-5 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="text-left">
          <Typography variant="h3" as="h5" className="font-bold text-sm text-brand-dark dark:text-white leading-tight">
            {name}
          </Typography>
          <Typography variant="caption" className="block text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
            {course}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

