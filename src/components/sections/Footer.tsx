"use client";

import { profile } from "@/data/v3/profile";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-border bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Name & Title */}
          <p className="text-subtle text-[11px] font-bold uppercase tracking-widest text-center sm:text-left">
            {profile.name}
          </p>

          {/* Copyright */}
          <p className="text-subtle text-[11px] font-medium uppercase tracking-widest text-center sm:text-right">
            © {new Date().getFullYear()}{" "}
            {t({ id: "Hak Cipta", en: "All Rights Reserved" })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
