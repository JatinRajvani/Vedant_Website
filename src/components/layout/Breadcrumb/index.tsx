"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typography from "../../foundation/Typography";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  const resolvedItems = React.useMemo(() => {
    if (items) return items;

    const segments = pathname.split("/").filter(Boolean);
    const pathItems: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];

    let currentHref = "";
    segments.forEach((segment) => {
      if (segment === "components" || segment === "(website)") return;
      
      currentHref += `/${segment}`;
      const formattedLabel = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      pathItems.push({
        label: formattedLabel,
        href: currentHref
      });
    });

    return pathItems;
  }, [items, pathname]);

  if (pathname === "/") return null;

  return (
    <nav className="flex items-center text-xs sm:text-sm text-zinc-500 py-4.5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5 md:space-x-2 flex-wrap">
        {resolvedItems.map((item, index) => {
          const isLast = index === resolvedItems.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-zinc-400 mx-1.5 md:mx-2 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}

              {isLast || !item.href ? (
                <Typography
                  variant="caption"
                  className="font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {item.label}
                </Typography>
              ) : (
                <Link
                  href={item.href}
                  className="text-zinc-500 hover:text-brand-blue dark:hover:text-white transition-colors font-medium outline-none focus-visible:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

