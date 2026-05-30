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
    id: "Vice President di DNCC dan Frontend Engineer yang berfokus pada transformasi digital. Dari mengoptimalkan logistik SaaS hingga memenangkan penghargaan 'Best Speaker' dalam pitching produk, saya membangun teknologi yang menyelesaikan masalah nyata.",
    en: "Vice President at DNCC and Frontend Engineer focused on digital transformation. From optimizing SaaS logistics to winning 'Best Speaker' awards in product pitching, I build technology that solves real-world problems.",
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
      prefix: { id: "Vice President di", en: "Vice President at" }, 
      highlight: "DNCC" 
    },
    { 
      prefix: { id: "Juara/Finalis di", en: "Winner/Finalist at" }, 
      highlight: { id: "5+ Hackathon Nasional", en: "5+ National Hackathons" } 
    },
    { 
      prefix: { id: "Lead Developer di", en: "Lead Developer at" }, 
      highlight: "Nexa Diesel Track" 
    },
  ],
};
