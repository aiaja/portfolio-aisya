"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";
import Section from "../ui/Section";
import { contactData, contactLinks } from "@/data/contact";

const iconMap: Record<string, any> = {
 Mail,
 Linkedin,
 Github,
};

const ContactEditorial = () => {
 const { t } = useLanguage();

 return (
  <Section id="contact" background="surface">
   <div className="max-w-[600px]">
    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
     {t({ id: "Kontak", en: "Contact" })}
    </span>
    <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.15] text-text mb-4">
     {t(contactData.title)}
     <br />
     <span className="text-primary">{t(contactData.highlight)}</span>
    </h2>
    <p className="text-muted text-base leading-relaxed mb-10">
     {t(contactData.description)}
    </p>

    <div className="flex flex-col gap-2">
     {contactLinks.map((link, i) => {
      const Icon = iconMap[link.icon];
      return (
       <a
        key={i}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group no-underline block"
       >
        <Card
         variant="default"
         padding="sm"
         className="flex items-center gap-4 hover:border-primary/20 hover:bg-primary-10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
        >
         <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
          {Icon && <Icon size={16} />}
         </div>
         <div className="min-w-0 flex-1">
          <div className="text-[13px] font-bold text-text leading-tight truncate">
           {link.label}
          </div>
          <div className="text-[12px] text-subtle break-all sm:break-normal truncate">
           {link.value}
          </div>
         </div>
         <ArrowUpRight
          size={16}
          className="ml-auto text-subtle group-hover:text-primary transition-colors shrink-0"
         />
        </Card>
       </a>
      );
     })}
    </div>
   </div>
  </Section>
 );
};

export default ContactEditorial;

