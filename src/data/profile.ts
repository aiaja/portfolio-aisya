import { Profile } from "@/types";

export const profile: Profile = {
  name: "Aisya Nur Syakbani",
  firstName: "Aisya",
  role: "Frontend Engineer & Product Strategist",
  location: "Semarang, Indonesia",
  email: "aisyafirst@gmail.com",
  cvUrl: "/cv-aisya.pdf",
  available: true,
  bio: "Vice President di DNCC dan Frontend Engineer yang berfokus pada transformasi digital. Dari mengoptimalkan logistik SaaS hingga memenangkan penghargaan 'Best Speaker' dalam pitching produk, saya membangun teknologi yang menyelesaikan masalah nyata.",
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
    { value: "4+", label: "Projects done" },
    { value: "6+", label: "Achievements" },
    { value: "3.78", label: "GPA" },
    { value: "12+", label: "Tech stack" },
  ],
  activities: [
    { prefix: "Vice President at", highlight: "DNCC" },
    { prefix: "Winner/Finalist at", highlight: "5+ National Hackathons" },
    { prefix: "Lead Developer at", highlight: "Nexa Diesel Track" },
  ],
};
