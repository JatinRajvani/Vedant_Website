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
  const Component = as || (variant === "body" ? "p" : variant === "caption" ? "span" : "h2");
  return (
    <Component
      className={`${color} ${weight} ${align} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
