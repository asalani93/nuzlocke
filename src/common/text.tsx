import type React from "react";

export interface TextProps {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export function Text({ children, className, inline }: TextProps) {
  return inline ?? false ? (
    <span className={className}>{children}</span>
  ) : (
    <div className={className}>{children}</div>
  );
}
