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
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles = "w-full rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed";
  const primaryStyles = "bg-primary-container text-on-primary font-bold py-4 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary-container/10 disabled:hover:scale-100 disabled:active:scale-100 disabled:shadow-none";
  const outlineStyles = "bg-transparent border border-outline-variant/30 text-on-surface py-3 font-semibold hover:bg-surface-bright transition-colors disabled:hover:bg-transparent";

  const styles = `${baseStyles} ${variant === "primary" ? primaryStyles : outlineStyles} ${className}`;

  return (
    <button className={styles} type={type} {...props}>
      {children}
      {icon}
    </button>
  );
}
