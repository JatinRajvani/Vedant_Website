import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "default" | "light" | "dark" | "gradient";
  spacing?: "default" | "small" | "large";
}

export default function Section({
  children,
  background = "default",
  spacing = "default",
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
