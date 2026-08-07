import React from "react";
import Link from "next/link";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "icon";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  href?: string;
  children?: React.ReactNode;
}

export type ButtonProps = BaseButtonProps & 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps>;

const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed cursor-pointer";

const variantStyles = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-800 hover:shadow-md hover:shadow-brand-blue-900/10 focus-visible:ring-brand-blue-500 border border-transparent",
  secondary: "bg-brand-red text-white hover:bg-brand-red-600 hover:shadow-md hover:shadow-brand-red-900/10 focus-visible:ring-brand-red-500 border border-transparent",
  outline: "bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue-50 focus-visible:ring-brand-blue-500",
  ghost: "bg-transparent text-brand-blue hover:bg-brand-blue-50 hover:text-brand-blue-800 focus-visible:ring-brand-blue-500",
  link: "bg-transparent text-brand-blue hover:underline p-0 h-auto rounded-none font-semibold focus-visible:ring-0 focus-visible:ring-offset-0 inline",
  icon: "p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:ring-zinc-400 shadow-sm"
};

const sizeStyles = {
  sm: "text-xs px-3.5 py-2 rounded-md",
  md: "text-sm px-5 py-2.5 rounded-lg",
  lg: "text-base px-6 py-3.5 rounded-xl"
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const isLink = variant === "link";
  const isIcon = variant === "icon";

  const sizeClass = isLink || isIcon ? "" : sizeStyles[size];
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeClass} ${className}`;

  const Spinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={loading || props.disabled}
      aria-busy={loading}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

