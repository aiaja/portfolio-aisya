"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t({ id: "Karya", en: "Work" }), href: "#projects" },
    { label: t({ id: "Tentang", en: "About" }), href: "#hero" },
    { label: t({ id: "Kontak", en: "Contact" }), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-14 flex items-center border-b",
        scrolled 
          ? "bg-bg/90 backdrop-blur-md border-border shadow-sm" 
          : "bg-bg/80 backdrop-blur-sm border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">

        {/* Logo */}
        <a 
          href="#" 
          className="font-syne font-bold text-[17px] text-text hover:opacity-75 transition-opacity no-underline"
        >
          Aisya
        </a>

        {/* Desktop Links & Switcher */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-muted text-sm font-medium hover:text-text transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-border pl-8">
            <LanguageSwitcher />
            <a 
              href="#contact" 
              className="text-primary text-[13px] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity no-underline"
            >
              {t({ id: "Hubungi", en: "Let's Talk" })}
            </a>
          </div>
        </div>

        {/* Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-2 transition-colors text-text border-none bg-transparent cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          "absolute top-14 left-0 right-0 md:hidden transition-all duration-300 overflow-hidden bg-bg border-b border-border shadow-lg",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted text-base font-bold font-syne uppercase tracking-tight hover:text-text transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-primary text-sm font-bold uppercase tracking-widest no-underline"
            >
              {t({ id: "Hubungi", en: "Let's Talk" })}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
