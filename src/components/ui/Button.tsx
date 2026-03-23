import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
}

export function Button({
  className = "",
  variant = "primary",
  icon,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "w-full rounded-lg flex items-center justify-center gap-2 transition-all";
  const primaryStyles = "bg-primary-container text-on-primary font-bold py-4 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary-container/10";
  const outlineStyles = "bg-transparent border border-outline-variant/30 text-on-surface py-3 font-semibold hover:bg-surface-bright transition-colors";

  const styles = `${baseStyles} ${variant === "primary" ? primaryStyles : outlineStyles} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
      {icon}
    </button>
  );
}
