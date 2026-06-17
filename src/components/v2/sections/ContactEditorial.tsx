"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const ContactEditorial = () => {
  const { t } = useLanguage();

  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail size={16} />
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aisyanrs",
      href: "https://linkedin.com/in/aisyanrs",
      icon: <Linkedin size={16} />
    },
    {
      label: "GitHub",
      value: "github.com/aiaja",
      href: "https://github.com/aiaja",
      icon: <Github size={16} />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface border-t border-border">
      <div className="max-w-[600px]">
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Kontak", en: "Contact" })}
        </span>
        <h2 className="font-syne text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.15] text-text mb-4">
          {t({ id: "Tertarik membangun", en: "Interested in building" })}<br />
          <span className="text-primary">{t({ id: "produk yang bermakna?", en: "meaningful products?" })}</span>
        </h2>
        <p className="text-muted text-base leading-relaxed mb-10">
          {t({ 
            id: "Saya sedang mencari kesempatan magang di mana riset dan rekayasa berjalan beriringan. Mari mengobrol.", 
            en: "I'm looking for internship opportunities where research and engineering go hand in hand. Let's talk." 
          })}
        </p>

        <div className="flex flex-col gap-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-bg border border-border rounded-xl hover:border-primary/20 hover:bg-primary-10 transition-all group no-underline"
            >
              <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                {link.icon}
              </div>
              <div>
                <div className="text-[13px] font-bold text-text leading-tight">{link.label}</div>
                <div className="text-[12px] text-subtle">{link.value}</div>
              </div>
              <ArrowUpRight size={16} className="ml-auto text-subtle group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactEditorial;
