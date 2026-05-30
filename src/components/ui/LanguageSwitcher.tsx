"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-charcoal/5 p-1 rounded-full border border-charcoal/10">
      <button
        onClick={() => setLocale("id")}
        className={cn(
          "px-3 py-1 rounded-full text-[10px] font-black transition-all",
          locale === "id"
            ? "bg-pink-primary text-beige shadow-sm"
            : "text-charcoal/40 hover:text-charcoal"
        )}
      >
        ID
      </button>
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "px-3 py-1 rounded-full text-[10px] font-black transition-all",
          locale === "en"
            ? "bg-pink-primary text-beige shadow-sm"
            : "text-charcoal/40 hover:text-charcoal"
        )}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
