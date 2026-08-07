import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated" | "featured" | "transparent";
  hover?: boolean;
}

const variantStyles = {
  default: "bg-white border border-zinc-100 shadow-sm dark:bg-zinc-900 dark:border-zinc-800",
  outlined: "bg-transparent border-2 border-zinc-200 dark:border-zinc-700",
  elevated: "bg-white border border-zinc-50/50 shadow-xl shadow-zinc-200/30 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none",
  featured: "bg-white border-2 border-brand-blue shadow-lg shadow-brand-blue-900/5 dark:bg-zinc-900 dark:border-brand-blue-500",
  transparent: "bg-transparent border-none shadow-none p-0"
};

export default function Card({
  children,
  variant = "default",
  hover = true,
  className = "",
  ...props
}: CardProps) {
  const isTransparent = variant === "transparent";
  
  const hoverClass = hover && !isTransparent
    ? "hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none hover:border-zinc-200/80 dark:hover:border-zinc-700"
    : "";

  const baseStyles = isTransparent ? "" : "rounded-2xl p-6 transition-all duration-300 ease-out";
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${hoverClass} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

