"use client";

import { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "none" | "sm" | "md" | "lg";
type ButtonPadding = "none" | "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  padding?: ButtonPadding;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  external?: boolean;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  padding,
  className,
  icon,
  iconPosition = "right",
  href,
  external,
  onClick,
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none no-underline cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary: "bg-primary text-white shadow-md shadow-primary/20 hover:opacity-90 active:opacity-100",
    secondary: "bg-surface-2 text-text border border-border-strong hover:bg-surface-3 active:bg-surface-2",
    outline: "border border-border-strong bg-transparent text-text hover:border-text hover:bg-surface-2",
    ghost: "text-primary border border-primary/20 bg-transparent hover:bg-primary-10",
  };

  const sizes = {
    none: "",
    sm: "px-4 py-2 text-xs min-h-[44px]",
    md: "px-6 py-2.5 text-sm min-h-[44px]",
    lg: "px-8 py-3.5 text-base min-h-[48px]",
  };

  const paddings = {
    none: "p-0",
    sm: "p-2 min-h-[44px] min-w-[44px]",
    md: "p-3 min-h-[44px] min-w-[44px]",
    lg: "p-4 min-h-[48px] min-w-[48px]",
  };

  const activePadding = padding ? paddings[padding] : sizes[size];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], activePadding, className);

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...(props as any)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} onClick={onClick} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      onClick={onClick}
      {...(props as any)}
    >
      {content}
    </button>
  );
};

export default Button;
