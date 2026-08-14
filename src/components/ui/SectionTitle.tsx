"use client";

import { Translatable } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: Translatable;
  title: Translatable;
  description?: Translatable;
  align?: "left" | "center";
  className?: string;
}

const SectionTitle = ({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) => {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {label && (
        <span className="inline-block text-subtle text-[11px] font-mono font-bold tracking-[0.15em] uppercase mb-3 select-none">
          {t(label)}
        </span>
      )}
      <h2 className="text-text text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.12] tracking-tight">
        {t(title)}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg leading-relaxed mt-3">
          {t(description)}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
