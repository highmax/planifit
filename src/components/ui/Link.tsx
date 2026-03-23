import NextLink from "next/link";
import * as React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "energetic" | "primary" | "default";
}

export function Link({ className = "", variant = "default", href, children, ...props }: LinkProps) {
  const styles = {
    energetic: "text-[11px] font-semibold text-primary hover:underline transition-all",
    primary: "text-primary font-bold hover:underline",
    default: "text-on-surface hover:underline transition-all"
  };

  return (
    <NextLink
      href={href}
      className={`${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
}
