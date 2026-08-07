import React from "react";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "body"
    | "caption"
    | "label"
    | "statistic";
  color?: string;
  weight?: string;
  align?: string;
  as?: React.ElementType;
}

const variantStyles = {
  display: "text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-brand-dark dark:text-white",
  h1: "text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-brand-dark dark:text-white",
  h2: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-brand-dark dark:text-white",
  h3: "text-xl sm:text-2xl font-semibold leading-snug text-brand-dark dark:text-white",
  body: "text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed",
  caption: "text-xs sm:text-sm text-zinc-500 dark:text-zinc-500",
  label: "text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-red dark:text-brand-red-400",
  statistic: "text-4xl sm:text-5xl lg:text-6xl font-black text-brand-blue dark:text-brand-blue-400 tracking-tight",
};

const defaultElement = {
  display: "h1" as const,
  h1: "h1" as const,
  h2: "h2" as const,
  h3: "h3" as const,
  body: "p" as const,
  caption: "span" as const,
  label: "span" as const,
  statistic: "span" as const,
};

export default function Typography({
  children,
  variant = "body",
  color = "",
  weight = "",
  align = "",
  as,
  className = "",
  ...props
}: TypographyProps) {
  const Component = as || defaultElement[variant] || "span";
  
  const styles = [
    variantStyles[variant] || "",
    color,
    weight,
    align,
    className
  ].filter(Boolean).join(" ");

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
}

