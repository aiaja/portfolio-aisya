import { Profile } from "@/types";

export const profile: Profile = {
  name: "Aisya Nur Syakbani",
  firstName: "Aisya",
  role: {
    id: "Frontend Engineer & Strategis Produk",
    en: "Frontend Engineer & Product Strategist",
  },
  location: {
    id: "Semarang, Indonesia",
    en: "Semarang, Indonesia",
  },
  email: "aisyafirst@gmail.com",
  cvUrl: "/cv-aisya.pdf",
  available: true,
  bio: {
    id: "Saya membangun teknologi dengan memikirkan dampak nyata bagi manusia. Mulai dari merancang sistem darurat tanpa layar hingga menskalakan infrastruktur fakultas, saya memadukan empati pengguna yang mendalam dengan standar rekayasa yang ketat untuk menghasilkan solusi pragmatis yang berpusat pada manusia.",
    en: "I build technology with human impact in mind. Whether it's designing screen-less emergency systems or scaling faculty infrastructure, I combine deep user empathy with strict engineering standards to deliver pragmatic, human-centric solutions.",
  },
  socials: [
    {
      label: "github.com/aiaja",
      href: "https://github.com/aiaja",
      icon: "github",
    },
    {
      label: "linkedin.com/in/aisyanrs",
      href: "https://linkedin.com/in/aisyanrs",
      icon: "linkedin",
    },
    {
      label: "aisyafirst@gmail.com",
      href: "mailto:aisyafirst@gmail.com",
      icon: "mail",
    },
  ],
  stats: [
    { value: "5+", label: { id: "Proyek selesai", en: "Projects done" } },
    { value: "6+", label: { id: "Penghargaan", en: "Achievements" } },
    { value: "3.78", label: { id: "IPK", en: "GPA" } },
    { value: "14+", label: { id: "Teknologi", en: "Tech stack" } },
  ],
  activities: [
    { 
      prefix: { id: "Frontend Developer di", en: "Frontend Developer at" }, 
      highlight: "Bengkel Koding UDINUS" 
    },
    { 
      prefix: { id: "Vice President di", en: "Vice President at" }, 
      highlight: "DNCC" 
    },
    { 
      prefix: { id: "Juara/Finalis di", en: "Winner/Finalist at" }, 
      highlight: { id: "6+ Hackathon Nasional", en: "6+ National Hackathons" } 
    },
  ],
};
