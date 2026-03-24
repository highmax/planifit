"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import {useTranslations} from "next-intl";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input({
  className = "",
  type,
  icon,
  ...props
}: InputProps) {
  const t = useTranslations('Input');
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const baseInputStyles = "w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-3 text-on-surface placeholder-outline focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none";
  const paddingLeft = icon ? "pl-10" : "px-4";
  const paddingRight = isPassword ? "pr-12" : "pr-4";
  
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" aria-hidden="true">
          {icon}
        </span>
      )}
      <input
        type={inputType}
        className={`${baseInputStyles} ${paddingLeft} ${paddingRight} ${className}`}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
          aria-label={showPassword ? t('hidePassword') : t('showPassword')}
          aria-pressed={showPassword}
        >
          {showPassword ? <EyeOff size={20} strokeWidth={1.5} /> : <Eye size={20} strokeWidth={1.5} />}
        </button>
      )}
    </div>
  );
}
