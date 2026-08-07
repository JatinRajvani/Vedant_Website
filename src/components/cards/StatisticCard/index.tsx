import React from "react";
import Card from "../../foundation/Card";
import Typography from "../../foundation/Typography";

// =======================================================
// TYPESCRIPT CONCEPT 5: Typing React.ReactNode
// =======================================================
// "icon?: React.ReactNode" specifies that this property accepts 
// any renderable React node: strings, numbers, custom icons, SVGs, or JSX.
export interface StatisticCardProps {
  value: string; // e.g. "1000+"
  label: string; // e.g. "CMA Qualifiers"
  icon?: React.ReactNode;
  layout?: "vertical" | "horizontal";
  floating?: boolean; // If true, applies extra hover shadows for hero display
}

export default function StatisticCard({
  value,
  label,
  icon,
  layout = "vertical",
  floating = false,
}: StatisticCardProps) {
  const isHorizontal = layout === "horizontal";

  const cardClasses = [
    "flex items-center",
    isHorizontal ? "flex-row gap-4 p-4.5 text-left" : "flex-col text-center p-6",
    floating ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg border border-zinc-100/50 dark:border-zinc-800/50" : "bg-transparent border-none shadow-none !p-0",
  ].filter(Boolean).join(" ");

  const iconWrapperClasses = [
    "flex items-center justify-center shrink-0 rounded-full",
    floating ? "h-11 w-11 bg-brand-blue-50 dark:bg-brand-blue-900/20 text-brand-blue dark:text-brand-blue-400" : "h-14 w-14 bg-zinc-50 dark:bg-zinc-800 text-brand-blue dark:text-brand-blue-400 mb-4",
  ].filter(Boolean).join(" ");

  return (
    <Card variant={floating ? "default" : "transparent"} hover={floating} className={cardClasses}>
      {/* Icon Badge container */}
      {icon && <div className={iconWrapperClasses}>{icon}</div>}

      {/* Numeric Highlights & labels */}
      <div className={isHorizontal ? "" : "space-y-1"}>
        <Typography
          variant="statistic"
          className={`font-black ${floating ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl lg:text-5xl"}`}
        >
          {value}
        </Typography>
        <Typography
          variant="caption"
          className={`block text-zinc-500 dark:text-zinc-400 font-semibold leading-tight ${floating ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm mt-1"}`}
        >
          {label}
        </Typography>
      </div>
    </Card>
  );
}

