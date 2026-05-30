"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, Translatable } from "@/types";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (data: Translatable) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en"); // Default to English

  // Load from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("portfolio-locale") as Locale;
    if (savedLocale && (savedLocale === "id" || savedLocale === "en")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
  };

  const t = (data: Translatable): string => {
    if (!data) return "";
    if (typeof data === "string") return data;
    return data[locale] || data["en"]; // Fallback to English if current locale is missing
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
