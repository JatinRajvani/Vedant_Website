import React from "react";
import Image from "next/image";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";

// We specify types for standard primitives like:
// - text?: string (optional text paragraph)
// - youtubeId?: string (optional video ID)
export interface TestimonialCardProps {
  name: string;
  course: string;
  text?: string;
  imageSrc?: string;
  youtubeId?: string;
}

export default function TestimonialCard({
  name,
  course,
  text,
  imageSrc,
  youtubeId,
}: TestimonialCardProps) {
  return (
    <Card
      variant="default"
      hover={true}
      className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 relative overflow-hidden text-left"
    >
      {/* Decorative Quote Icon in background */}
      <div className="absolute top-6 right-6 text-zinc-100 dark:text-zinc-800/40 pointer-events-none">
        <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.995 2.638-4.995 5.848h5v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.996 2.638-4.996 5.848h4.983v10h-9.983z" />
        </svg>
      </div>

      {/* 1. Student Profile Info Header */}
      <div className="flex items-center gap-3.5 mb-5 relative z-10">
        <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="44px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
              <svg className="h-6 w-6 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div>
          <Typography variant="h3" as="h5" className="font-bold text-sm text-brand-dark dark:text-white leading-tight">
            {name}
          </Typography>
          <Typography variant="caption" className="block text-[11px] text-zinc-400 dark:text-zinc-500 font-medium mt-0.5">
            {course}
          </Typography>
        </div>
      </div>

      {/* 2. YouTube Video (Visual block if provided) */}
      {youtubeId && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 shrink-0 bg-zinc-950 group/video cursor-pointer">
          <Image
            src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
            alt={`${name} Video Testimonial`}
            fill
            className="object-cover opacity-85 group-hover/video:scale-105 transition-transform duration-300"
          />
          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/35 transition-colors duration-300"
            aria-label="Play video testimonial"
          >
            <div className="h-10 w-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg group-hover/video:scale-110 transition-transform duration-300">
              <svg className="h-5 w-5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      )}

      {/* 3. Review Text Description (if provided) */}
      {text && (
        <Typography
          variant="body"
          className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed italic flex-grow text-left"
        >
          &ldquo;{text}&rdquo;
        </Typography>
      )}
    </Card>
  );
}

