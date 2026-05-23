import { Profile } from "@/types";

export const profile: Profile = {
  name: "Aisya Nur Syakbani",
  firstName: "Aisya",
  role: "Frontend Developer",
  location: "Semarang, Indonesia",
  email: "aisyafirst@gmail.com",
  cvUrl: "/cv_aisya.pdf",
  available: true,
  bio: "A passionate Frontend Developer & Tech Leader with a hustler mindset. I bridge the gap between clean code and products that people actually use.",
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
    { prefix: "Interning at", highlight: "Bengkel Koding" },
    { prefix: "Vice President at", highlight: "DNCC" },
    { prefix: "Building", highlight: "Nexa Diesel Track" },
    { prefix: "Computer Science Student at", highlight: "UDINUS" },
  ],
};
