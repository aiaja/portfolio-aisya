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
  { label: t({ id: "Proses", en: "Process" }), href: "#how" },
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
      ? "bg-bg/80 backdrop-blur-xl border-border shadow-2xl shadow-primary/5"
      : "bg-surface/50 backdrop-blur-md border-border/50 shadow-sm",
    )}
   >
    {/* Glossy Brand Badge */}
    <Button
     href="#hero"
     variant="ghost"
     padding="none"
     className="group/logo flex items-center p-1 rounded-full border-none hover:bg-transparent"
     aria-label="Home"
    >
      <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2.5 bg-surface-2/40 backdrop-blur-xl border border-border-strong rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.05)] group-hover/logo:border-primary/40 transition-all relative overflow-hidden">
       {/* Dynamic Gloss Sweep Effect */}
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/logo:translate-x-full transition-transform duration-1000" />
       
       <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center text-white font-black text-[9px] md:text-[10px] shrink-0 shadow-sm relative z-10">
        
       <img
        src="/char/main.svg"
        alt="Aisya Logo"
        className="rouded-full w-8 flex"
       />
       </div>
       
       <span className="hidden md:block font-black text-[10px] uppercase tracking-[0.25em] text-text relative z-10">
        <span className="text-primary">Portfolio </span>Aisya<span className="text-primary">.</span>
       </span>
      </div>
    </Button>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-1 px-2">
     {navLinks.map((link) => (
      <Button
       key={link.label}
       href={link.href}
       variant="ghost"
       size="sm"
       className="border-transparent text-muted hover:text-text hover:bg-primary-10 min-h-[44px] px-5"
      >
       {link.label}
      </Button>
     ))}
    </div>

    <div className="hidden md:flex items-center gap-2 pr-1">
     <div className="w-[1px] h-6 bg-border mx-2" />

     <div className="flex items-center bg-surface-2 border border-border rounded-full p-1 min-h-[44px]">
      <LanguageSwitcher />
     </div>

     <Button
      href="#contact"
      variant="ghost"
      size="sm"
      className="rounded-full shadow-none min-h-[44px] px-6"
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
      className="w-10 h-10 md:w-11 md:h-11 rounded-full shrink-0"
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
      className="absolute top-16 left-4 right-4 bg-bg border border-border rounded-[32px] shadow-2xl p-6 md:hidden pointer-events-auto max-h-[calc(100vh-100px)] overflow-y-auto"
     >
      <div className="flex flex-col gap-6">
       <div className="flex flex-col gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-subtle px-1">
         Navigation
        </span>
        <div className="flex flex-col gap-1">
         {navLinks.map((link) => (
          <Button
           key={link.label}
           href={link.href}
           variant="ghost"
           size="lg"
           onClick={() => setIsOpen(false)}
           className="text-2xl font-extrabold justify-start px-1 border-none hover:bg-transparent hover:text-primary transition-colors h-auto py-2"
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
         size="lg"
         onClick={() => setIsOpen(false)}
         className="w-full justify-center text-lg py-4"
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

