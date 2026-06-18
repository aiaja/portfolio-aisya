"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
 const { locale, setLocale } = useLanguage();

 const options = [
  { id: "id", label: "ID" },
  { id: "en", label: "EN" },
 ];

 return (
  <div className="flex items-center gap-1">
   {options.map((option) => (
    <button
     key={option.id}
     onClick={() => setLocale(option.id as any)}
     className={cn(
      "relative px-3 min-h-[32px] rounded-full text-[10px] font-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
      locale === option.id
       ? "text-white"
       : "text-muted hover:text-text"
     )}
    >
     <span className="relative z-10">{option.label}</span>
     {locale === option.id && (
      <motion.div
       layoutId="activeTab"
       className="absolute inset-0 bg-primary rounded-full"
       transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
      />
     )}
    </button>
   ))}
  </div>
 );
};

export default LanguageSwitcher;

