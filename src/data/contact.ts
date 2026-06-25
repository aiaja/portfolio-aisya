import { Translatable } from "@/types";
import { profile } from "@/data/v3/profile";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contactData = {
  title: { id: "Mari terhubung.", en: "Let's connect." },
  highlight: { id: "Hubungi saya.", en: "Get in touch." },
  description: { 
    id: "Saya terbuka untuk peluang magang (internship) sebagai Frontend Engineer atau Product Strategist. Silakan hubungi saya melalui kontak di bawah.", 
    en: "I am open to internship opportunities as a Frontend Engineer or Product Strategist. Feel free to reach out via any of the channels below." 
  } as Translatable
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "Mail"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aisyanrs",
    href: "https://linkedin.com/in/aisyanrs",
    icon: "Linkedin"
  },
  {
    label: "GitHub",
    value: "github.com/aiaja",
    href: "https://github.com/aiaja",
    icon: "Github"
  }
];
