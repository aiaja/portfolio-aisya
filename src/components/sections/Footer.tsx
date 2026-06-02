"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo & credit */}
          <div className="text-center md:text-left">
            <p className="text-green-primary font-bold text-lg">Portfolio Aisya</p>
            <p className="text-charcoal/50 text-xs mt-1 flex items-center gap-1 justify-center md:justify-start">
              {t({ id: "Dibuat dengan", en: "Built with" })} <Heart size={10} className="text-pink-primary fill-pink-primary" /> {t({ id: "oleh", en: "by" })} {profile.name}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {profile.socials.map((social) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Mail;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-charcoal/50 hover:text-green-primary transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-charcoal/40 text-xs">
            © {new Date().getFullYear()} {profile.name}. {t({ id: "Hak cipta dilindungi undang-undang.", en: "All rights reserved." })}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;