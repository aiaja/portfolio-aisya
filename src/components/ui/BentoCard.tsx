"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "green" | "pink" | "beige" | "charcoal" | "pink-light" | "white";
  noHover?: boolean;
};

const variantStyles: Record<string, string> = {
  green: "bg-green-primary text-beige",
  pink: "bg-pink-primary text-beige",
  beige: "bg-beige text-charcoal border border-charcoal/5",
  charcoal: "bg-charcoal text-beige",
  "pink-light": "bg-pink-light text-charcoal",
  white: "bg-white text-charcoal border border-charcoal/5 shadow-sm",
};

const BentoCard = ({
  children,
  className = "",
  variant = "beige",
  noHover = false,
}: BentoCardProps) => {
  return (
    <motion.div
      whileHover={noHover ? {} : { y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "rounded-[2rem] p-6 overflow-hidden relative group",
        variantStyles[variant],
        className
      )}
    >
      {/* Subtle Refraction Border for dark variants */}
      {(variant === "green" || variant === "charcoal" || variant === "pink") && (
        <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};

export default BentoCard;
