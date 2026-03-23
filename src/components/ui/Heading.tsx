import * as React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
  className = "",
  level = 1,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as React.ElementType;
  return (
    <Tag className={`font-headline ${className}`} {...props}>
      {children}
    </Tag>
  );
}
