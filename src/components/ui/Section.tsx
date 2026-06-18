"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
 id?: string;
 children: ReactNode;
 className?: string;
 background?: "bg" | "surface";
 withBorder?: boolean;
}

const Section = ({
 id,
 children,
 className,
 background = "bg",
 withBorder = true,
}: SectionProps) => {
 return (
  <section
   id={id}
   className={cn(
    "py-16 md:py-24 transition-colors",
    background === "surface" ? "bg-surface" : "bg-bg",
    withBorder && "border-t border-border",
    className
   )}
  >
   <div className="max-w-[960px] mx-auto px-6 md:px-8">
    {children}
   </div>
  </section>
 );
};

export default Section;

