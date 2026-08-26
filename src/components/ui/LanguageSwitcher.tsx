"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  const options: { id: "id" | "en"; label: string; ariaLabel: string }[] = [
    { id: "id", label: "ID", ariaLabel: "Ganti bahasa ke Bahasa Indonesia" },
    { id: "en", label: "EN", ariaLabel: "Switch language to English" },
  ];

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center gap-0.5 bg-gradient-to-b from-surface-3 via-surface-2 to-surface-2 p-1 rounded-full border border-black/[0.08] shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)]"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLocale(option.id)}
          aria-pressed={locale === option.id}
          aria-label={option.ariaLabel}
          className={cn(
            "relative px-3 py-1 min-h-[32px] min-w-[34px] rounded-full text-xs font-mono font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 select-none cursor-pointer active:scale-95",
            locale === option.id
              ? "text-white"
              : "text-muted hover:text-text hover:bg-black/[0.03]"
          )}
        >
          <span className={cn("relative z-10", locale === option.id && "drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]")}>
            {option.label}
          </span>
          {locale === option.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-b from-[oklch(75%_0.194_13.428)] via-primary to-[oklch(63%_0.194_13.428)] rounded-full shadow-[0_2px_0_0_oklch(52%_0.194_13.428),0_4px_8px_oklch(var(--primary)/0.25),inset_0_1px_0_rgba(255,255,255,0.45)] border border-white/20"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
