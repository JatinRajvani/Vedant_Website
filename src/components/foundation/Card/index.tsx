import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated" | "featured" | "transparent";
  hover?: boolean;
}

export default function Card({
  children,
  variant = "default",
  hover = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 bg-white shadow-sm border border-zinc-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
