import React from "react";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";

// =======================================================
// TYPESCRIPT CONCEPT 6: Optional Actions & String Formats
// =======================================================
// - "href?: string" and "actionText?: string" allows us to build
//   an optional link trigger. If they are provided, the card becomes
//   interactive (displays a click action).
export interface ContactCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
  actionText?: string;
}

export default function ContactCard({
  title,
  value,
  icon,
  href,
  actionText,
}: ContactCardProps) {
  const isLink = Boolean(href && actionText);

  return (
    <Card
      variant="default"
      hover={isLink}
      className="flex flex-col p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-left h-full"
    >
      {/* 1. Icon Container */}
      <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-blue-50 dark:bg-brand-blue-900/20 text-brand-blue dark:text-brand-blue-400 shrink-0 mb-5">
        {icon}
      </div>

      {/* 2. Text Details */}
      <div className="flex-grow space-y-2">
        <Typography variant="h3" as="h4" className="font-bold text-lg text-brand-dark dark:text-white leading-tight">
          {title}
        </Typography>

        <Typography variant="body" className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
          {value}
        </Typography>
      </div>

      {/* Optional Action link (e.g. Call Helpline / View Map) */}
      {isLink && (
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mt-5">
          <a
            href={href}
            className="text-sm font-bold text-brand-red hover:text-brand-red-700 dark:hover:text-brand-red-400 inline-flex items-center gap-1 group/link outline-none focus-visible:underline"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {actionText}
            <svg className="h-4 w-4 transform group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </Card>
  );
}

