import { Translatable } from "@/types";
import { profile } from "@/data/v3/profile";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contactData = {
  title: { id: "Tertarik membangun", en: "Interested in building" },
  highlight: { id: "produk yang bermakna?", en: "meaningful products?" },
  description: { 
    id: "Saya sedang mencari kesempatan magang di mana riset dan rekayasa berjalan beriringan. Mari mengobrol.", 
    en: "I'm looking for internship opportunities where research and engineering go hand in hand. Let's talk." 
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
