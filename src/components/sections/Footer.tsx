"use client";

import { profile } from "@/data/v3/profile";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
 const { t } = useLanguage();

 return (
  <footer className="mt-20 border-t border-border">
   <div className="max-w-[960px] mx-auto px-6 md:px-8 py-12 md:py-16">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
     {/* Name & Title */}
     <div className="text-center md:text-left">
      <p className="text-subtle text-[13px] font-medium uppercase tracking-widest">
       {profile.name}
      </p>
     </div>

     {/* Socials - Simplified to Text Links as per editorial style */}
     <div className="flex items-center gap-8">
      {profile.socials.map((social) => (
       <a
        key={social.label}
        href={social.href}
        target={social.href.startsWith("http") ? "_blank" : undefined}
        rel={
         social.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
        }
        className="text-subtle text-[11px] font-bold uppercase tracking-widest hover:text-text focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded transition-colors no-underline"
       >
        {social.label}
       </a>
      ))}
     </div>

     {/* Copyright */}
     <p className="text-subtle text-[11px] font-medium uppercase tracking-widest">
      © {new Date().getFullYear()}{" "}
      {t({ id: "Hak Cipta", en: "All Rights Reserved" })}
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;

