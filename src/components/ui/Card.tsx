"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "default" | "surface" | "surface-2" | "outline" | "glass" | "dashed";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  accent?: boolean;
}

const Card = ({
  children,
  className,
  variant = "default",
  padding = "md",
  hoverable = true,
  accent = false,
  ...props
}: CardProps) => {
  const paddings = {
    none: "p-0",
    sm: "p-4 md:p-5",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  const variants = {
    default: "bg-bg border-border text-text",
    surface: "bg-surface border-border text-text shadow-subtle",
    "surface-2": "bg-surface-2 border-border text-text",
    outline: "bg-transparent border-border-strong text-text",
    glass: "bg-surface/80 backdrop-blur-md border-border/80 text-text",
    dashed: "bg-transparent border-2 border-dashed border-border-strong text-text",
  };

  return (
    <motion.div
      whileHover={hoverable ? { y: -2 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "rounded-bento border transition-all duration-300 relative overflow-hidden",
        variants[variant],
        paddings[padding],
        hoverable && "hover:border-primary/25 hover:shadow-card",
        className
      )}
      {...props}
    >
      {accent && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {children}
    </motion.div>
  );
};

export default Card;
