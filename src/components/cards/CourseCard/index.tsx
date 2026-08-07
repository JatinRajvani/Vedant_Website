import React from "react";
import Image from "next/image";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";
import Button from "../../foundation/Button";

// ==========================================
// TYPESCRIPT CONCEPT 1: Props Interface
// ==========================================
// We define a contract (an Interface) specifying what properties (props) 
// this component accepts. 
// Adding "?" after a key (e.g. imageSrc?: string) means it is optional.
export interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  mode: string;
  imageSrc?: string;
  badge?: string;
  href?: string;
  featured?: boolean;
}

export default function CourseCard({
  title,
  description,
  duration,
  mode,
  imageSrc,
  badge,
  href = "/courses",
  featured = false,
}: CourseCardProps) {
  return (
    <Card
      variant={featured ? "featured" : "default"}
      hover={true}
      className="flex flex-col h-full overflow-hidden !p-0 border border-zinc-100 dark:border-zinc-800 text-left bg-white dark:bg-zinc-900 group"
    >
      {/* 1. Image Banner Area */}
      <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-w-770px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          /* Premium fallback gradient when no image is provided */
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-950 flex items-center justify-center">
            <svg className="h-12 w-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        )}

        {/* Badge Overlay */}
        {badge && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-brand-red rounded-full shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* 2. Card Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <Typography variant="h3" as="h3" className="font-bold text-brand-dark dark:text-white">
          {title}
        </Typography>

        <Typography variant="body" className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
          {description}
        </Typography>

        {/* Course Parameters Grid */}
        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
          {/* Duration */}
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
            <svg className="h-4.5 w-4.5 text-brand-blue dark:text-brand-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <Typography variant="caption" className="font-medium text-zinc-700 dark:text-zinc-300">
              Duration: <span className="font-semibold text-brand-dark dark:text-white">{duration}</span>
            </Typography>
          </div>

          {/* Study Mode */}
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
            <svg className="h-4.5 w-4.5 text-brand-blue dark:text-brand-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <Typography variant="caption" className="font-medium text-zinc-700 dark:text-zinc-300">
              Mode: <span className="font-semibold text-brand-dark dark:text-white">{mode}</span>
            </Typography>
          </div>
        </div>

        {/* 3. CTA Action */}
        <div className="mt-6 pt-4">
          <Button variant="outline" size="sm" href={href} className="w-full flex items-center justify-center gap-2 group/btn">
            View Details
            <svg className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  );
}

