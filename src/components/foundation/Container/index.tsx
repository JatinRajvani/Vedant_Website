import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "full";
}

const sizeStyles = {
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
  full: "max-w-full"
};

export default function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeClass = sizeStyles[size] || sizeStyles.default;
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

