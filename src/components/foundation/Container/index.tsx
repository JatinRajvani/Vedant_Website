import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "full";
}

export default function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 w-full max-w-7xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
