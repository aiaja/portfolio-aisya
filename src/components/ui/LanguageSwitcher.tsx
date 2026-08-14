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
      className="inline-flex items-center gap-1 bg-surface-2 p-1 rounded-full border border-border"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLocale(option.id)}
          aria-pressed={locale === option.id}
          aria-label={option.ariaLabel}
          className={cn(
            "relative px-3 py-1.5 min-h-[36px] min-w-[36px] rounded-full text-xs font-mono font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 select-none",
            locale === option.id
              ? "text-white"
              : "text-muted hover:text-text"
          )}
        >
          <span className="relative z-10">{option.label}</span>
          {locale === option.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full shadow-sm"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
