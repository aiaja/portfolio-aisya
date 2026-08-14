import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "primary" | "secondary" | "outline" | "subtle";
export type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  icon?: ReactNode;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  icon,
}: BadgeProps) {
  const variants = {
    default: "bg-surface border border-border text-muted",
    primary: "bg-primary-10 border border-primary-20 text-primary",
    secondary: "bg-surface-2 border border-border-strong text-text",
    outline: "bg-transparent border border-border text-subtle",
    subtle: "bg-bg border border-border text-muted",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-md tracking-tight leading-none shrink-0 select-none",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
