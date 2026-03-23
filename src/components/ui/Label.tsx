import * as React from "react";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", children, ...props }: LabelProps) {
  return (
    <label
      className={`block font-label text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
