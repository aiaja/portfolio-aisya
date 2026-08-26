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
    "group/btn relative inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-150 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none no-underline cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:transform-none disabled:shadow-none select-none transform-gpu";

  const variants = {
    primary:
      "bg-gradient-to-b from-[oklch(75%_0.194_13.428)] via-primary to-[oklch(63%_0.194_13.428)] text-white border border-white/25 shadow-[0_3.5px_0_0_oklch(52%_0.194_13.428),0_6px_16px_oklch(var(--primary)/0.3),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-105 hover:-translate-y-0.5 hover:shadow-[0_4.5px_0_0_oklch(52%_0.194_13.428),0_8px_20px_oklch(var(--primary)/0.38),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(0,0,0,0.2)] active:translate-y-[2.5px] active:shadow-[0_1px_0_0_oklch(52%_0.194_13.428),0_2px_4px_oklch(var(--primary)/0.2),inset_0_2px_4px_rgba(0,0,0,0.25)]",
    secondary:
      "bg-gradient-to-b from-white via-surface-2 to-surface-3 text-text border border-black/[0.08] shadow-[0_3px_0_0_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.04)] hover:border-black/[0.14] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.08),0_6px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] active:translate-y-[2px] active:shadow-[0_1px_0_0_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.03),inset_0_2px_4px_rgba(0,0,0,0.06)]",
    outline:
      "bg-gradient-to-b from-surface/90 to-surface-2/90 backdrop-blur-md text-text border border-border-strong shadow-[0_2.5px_0_0_rgba(0,0,0,0.05),0_3px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.03)] hover:border-text/30 hover:-translate-y-0.5 hover:shadow-[0_3.5px_0_0_rgba(0,0,0,0.06),0_6px_14px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] active:translate-y-[2px] active:shadow-[0_0.5px_0_0_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(0,0,0,0.05)]",
    ghost:
      "text-text border border-transparent hover:border-border-strong hover:bg-gradient-to-b hover:from-white/80 hover:to-surface-2/80 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.05),0_3px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.06)]",
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
