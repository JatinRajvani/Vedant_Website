import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "default" | "light" | "dark" | "gradient";
  spacing?: "default" | "small" | "large";
}

const backgroundStyles = {
  default: "bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
  light: "bg-zinc-50/80 text-zinc-900 dark:bg-zinc-900/50 dark:text-zinc-50",
  dark: "bg-zinc-950 text-white dark:bg-black dark:text-zinc-100",
  gradient: "bg-gradient-to-br from-brand-blue-950 via-[#051429] to-brand-blue-950 text-white"
};

const spacingStyles = {
  default: "py-16 md:py-24",
  small: "py-8 md:py-12",
  large: "py-24 md:py-36"
};

export default function Section({
  children,
  background = "default",
  spacing = "default",
  className = "",
  ...props
}: SectionProps) {
  const bgClass = backgroundStyles[background] || backgroundStyles.default;
  const spacingClass = spacingStyles[spacing] || spacingStyles.default;

  return (
    <section
      className={`${bgClass} ${spacingClass} relative overflow-hidden transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

