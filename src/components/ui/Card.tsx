"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
 children: ReactNode;
 variant?: "default" | "surface" | "glass" | "dashed";
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
  sm: "p-4",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
 };

 const variants = {
  default: "bg-bg border-border",
  surface: "bg-surface border-border",
  glass: "bg-white/5 backdrop-blur-md border-white/10",
  dashed: "bg-transparent border-2 border-dashed border-border-strong",
 };

 return (
  <motion.div
   whileHover={hoverable ? { y: -2 } : {}}
   className={cn(
    "rounded-2xl border transition-all duration-300 relative overflow-hidden",
    variants[variant],
    paddings[padding],
    hoverable && "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
    className
   )}
   {...props}
  >
   {accent && (
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
   )}
   {children}
  </motion.div>
 );
};

export default Card;

