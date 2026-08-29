"use client";

import React, { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon" | "none";
export type ButtonPadding = "none" | "sm" | "md" | "lg";

export interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  padding?: ButtonPadding;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  external?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: ReactNode;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  tabIndex?: number;
}

export const Button = ({
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
  disabled = false,
  loading = false,
  loadingText,
  type = "button",
  ...props
}: ButtonProps) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    none: "",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    icon: "btn-icon",
  };

  const paddingOverrides: Record<ButtonPadding, string> = {
    none: "!p-0 !min-h-0 !min-w-0",
    sm: "!p-2 !min-h-[38px] !min-w-[38px]",
    md: "!p-3 !min-h-[46px] !min-w-[46px]",
    lg: "!p-4 !min-h-[52px] !min-w-[52px]",
  };

  const isActuallyDisabled = disabled || loading;

  const combinedClassName = cn(
    "btn",
    variantClasses[variant],
    size !== "none" && sizeClasses[size],
    padding && paddingOverrides[padding],
    isActuallyDisabled && "is-disabled",
    loading && "is-loading",
    className
  );

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <span className="btn-spinner" aria-hidden="true" />
          <span className="btn-label">{loadingText || children}</span>
        </>
      );
    }

    return (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0 inline-flex items-center" aria-hidden="true">
            {icon}
          </span>
        )}
        {children && <span className="btn-label">{children}</span>}
        {icon && iconPosition === "right" && (
          <span className="shrink-0 inline-flex items-center" aria-hidden="true">
            {icon}
          </span>
        )}
      </>
    );
  };

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={isActuallyDisabled ? undefined : href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          onClick={isActuallyDisabled ? (e) => e.preventDefault() : (onClick as any)}
          aria-disabled={isActuallyDisabled ? "true" : undefined}
          aria-busy={loading ? "true" : undefined}
          tabIndex={isActuallyDisabled ? -1 : props.tabIndex}
          {...(props as any)}
        >
          {renderContent()}
        </a>
      );
    }

    return (
      <Link
        href={isActuallyDisabled ? "#" : href}
        className={combinedClassName}
        onClick={isActuallyDisabled ? (e) => e.preventDefault() : (onClick as any)}
        aria-disabled={isActuallyDisabled ? "true" : undefined}
        aria-busy={loading ? "true" : undefined}
        tabIndex={isActuallyDisabled ? -1 : props.tabIndex}
        {...(props as any)}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isActuallyDisabled}
      className={combinedClassName}
      onClick={onClick as any}
      aria-disabled={isActuallyDisabled ? "true" : undefined}
      aria-busy={loading ? "true" : undefined}
      {...(props as any)}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
