import React from "react";
import Link from "next/link";
import "../../app/globals.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
  children?: React.ReactNode;
  target?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  target,
  ...props
}: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
