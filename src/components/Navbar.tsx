"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const { t } = useLanguage();

 const navLinks = [
  { label: t({ id: "Karya", en: "Work" }), href: "#stories" },
  { label: t({ id: "Pengalaman", en: "Experience" }), href: "#experience" },
  { label: t({ id: "Keahlian", en: "Skills" }), href: "#skills" },
 ];

 useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // Lock body scroll when mobile menu is open
 useEffect(() => {
  if (isOpen) {
   document.body.style.overflow = "hidden";
  } else {
   document.body.style.overflow = "unset";
  }
  return () => {
   document.body.style.overflow = "unset";
  };
 }, [isOpen]);

 return (
  <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
   <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className={cn(
     "pointer-events-auto flex items-center gap-2 p-1.5 md:p-2 rounded-full border transition-all duration-500",
     scrolled
      ? "bg-bg/90 backdrop-blur-xl border-black/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]"
      : "bg-surface/80 backdrop-blur-md border-black/[0.06] shadow-[0_6px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]",
    )}
   >
    {/* 3D Skeuomorphic Brand Badge */}
    <Button
     href="#hero"
     variant="ghost"
     padding="none"
     className="group/logo flex items-center p-0.5 rounded-full border-none hover:bg-transparent shadow-none hover:shadow-none hover:translate-y-0"
     aria-label="Home"
    >
      <div className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-3.5 md:py-2 bg-gradient-to-b from-white via-surface-2 to-surface-3 backdrop-blur-xl border border-black/[0.08] rounded-full shadow-[0_3px_0_0_rgba(0,0,0,0.06),0_6px_14px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.04)] group-hover/logo:border-primary/40 group-hover/logo:-translate-y-0.5 group-hover/logo:shadow-[0_4px_0_0_rgba(0,0,0,0.08),0_8px_18px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] active:translate-y-[1.5px] active:shadow-[0_1px_0_0_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-150 relative overflow-hidden">
       {/* Dynamic Specular Gloss Sweep Effect */}
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/logo:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
       
       <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white font-black text-[9px] md:text-[10px] shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] bg-surface relative z-10 overflow-hidden border border-black/[0.06]">
        <img
         src="/char/main.svg"
         alt="Aisya Logo"
         className="w-full h-full object-cover"
        />
       </div>
       
       <span className="hidden md:block font-black text-[10px] uppercase tracking-[0.25em] text-text relative z-10 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
        <span className="text-primary">Portfolio </span>Aisya
       </span>
      </div>
    </Button>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-1 px-1">
     {navLinks.map((link) => (
      <Button
       key={link.label}
       href={link.href}
       variant="ghost"
       size="sm"
       className="text-muted hover:text-text min-h-[38px] px-4 text-xs font-semibold"
      >
       {link.label}
      </Button>
     ))}
    </div>

    <div className="hidden md:flex items-center gap-2 pr-1">
     <div className="w-[1px] h-5 bg-border mx-1" />

     <LanguageSwitcher />

     {/* 3D Skeuomorphic CTA */}
     <Button
      href="#contact"
      variant="primary"
      size="sm"
      className="min-h-[38px] px-5 text-xs tracking-wide"
     >
      {t({ id: "Kontak", en: "Let's Talk" })}
     </Button>
    </div>

    {/* Mobile Toggle */}
    <div className="flex md:hidden items-center gap-1 pr-1">
     <Button
      variant="secondary"
      size="sm"
      padding="none"
      className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
     >
      {isOpen ? <X size={18} /> : <Menu size={18} />}
     </Button>
    </div>
   </motion.nav>

   {/* Mobile Menu Overlay */}
   <AnimatePresence>
    {isOpen && (
     <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      className="absolute top-16 left-4 right-4 bg-gradient-to-b from-surface via-bg to-surface-2 border border-black/[0.08] rounded-[28px] shadow-[0_16px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] p-6 md:hidden pointer-events-auto max-h-[calc(100vh-100px)] overflow-y-auto"
     >
      <div className="flex flex-col gap-6">
       <div className="flex flex-col gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-subtle px-1">
         Navigation
        </span>
        <div className="flex flex-col gap-2">
         {navLinks.map((link) => (
          <Button
           key={link.label}
           href={link.href}
           variant="outline"
           size="md"
           onClick={() => setIsOpen(false)}
           className="w-full justify-start text-base font-bold px-4 py-3 min-h-[48px]"
          >
           {link.label}
          </Button>
         ))}
        </div>
       </div>

       <div className="pt-6 border-t border-border flex flex-col gap-6">
        <div className="flex flex-col gap-4">
         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-subtle px-1">
          Language
         </span>
         <div className="w-fit">
          <LanguageSwitcher />
         </div>
        </div>

        <Button
         href="#contact"
         variant="primary"
         size="lg"
         onClick={() => setIsOpen(false)}
         className="w-full justify-center text-base py-3.5"
        >
         {t({ id: "Hubungi Saya", en: "Let's Talk" })}
        </Button>
       </div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </header>
 );
};

export default Navbar;
