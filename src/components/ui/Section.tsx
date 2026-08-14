"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "bg" | "surface" | "surface-2";
  withBorder?: boolean;
  size?: "default" | "wide" | "narrow";
}

const Section = ({
  id,
  children,
  className,
  background = "bg",
  withBorder = true,
  size = "default",
}: SectionProps) => {
  const backgrounds = {
    bg: "bg-bg",
    surface: "bg-surface",
    "surface-2": "bg-surface-2",
  };

  const containerSizes = {
    default: "max-w-[1000px]",
    wide: "max-w-7xl",
    narrow: "max-w-3xl",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 transition-colors relative",
        backgrounds[background],
        withBorder && "border-t border-border",
        className
      )}
    >
      <div className={cn("mx-auto px-6 md:px-8 w-full", containerSizes[size])}>
        {children}
      </div>
    </section>
  );
};

export default Section;
