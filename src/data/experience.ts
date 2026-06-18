import { Translatable } from "@/types";

export interface Impact {
  text: Translatable;
  highlight?: Translatable;
  suffix?: Translatable;
}

export interface ExperienceV2 {
  org: string;
  period: Translatable;
  impacts: Impact[];
}

export const experiencesV2: ExperienceV2[] = [
  {
    org: "Bengkel Koding",
    period: { id: "Sept 2025 – Sekarang", en: "Sept 2025 – Present" },
    impacts: [
      { 
        text: { id: "Strategi produk & prioritas fitur di berbagai", en: "Product strategy & feature prioritization across" },
        highlight: { id: "produk SaaS nyata", en: "real-world SaaS products" }
      },
      { 
        text: { id: "Memimpin frontend untuk", en: "Led frontend for" },
        highlight: { id: "platform akademik & logistik", en: "academic & logistics platforms" }
      },
      { 
        text: { id: "Mentori", en: "Mentored" },
        highlight: { id: "30+ mahasiswa", en: "30+ students" },
        suffix: { id: "dalam Laravel, MVC, dan praktik perangkat lunak", en: "in Laravel, MVC, and software practices" }
      }
    ]
  },
  {
    org: "DNCC",
    period: { id: "Agu 2024 – Sekarang · Wakil Presiden", en: "Aug 2024 – Present · Vice President" },
    impacts: [
      { 
        text: { id: "Menjalankan program upskilling dengan", en: "Ran upskilling program with" },
        highlight: { id: "66 peserta", en: "66 participants" }
      },
      { 
        text: { id: "Menghasilkan", en: "Produced" },
        highlight: { id: "15 proyek siap portofolio", en: "15 portfolio-ready projects" },
        suffix: { id: "di 6 track berbeda", en: "across 6 tracks" }
      },
      { 
        text: { id: "Meluncurkan", en: "Launched" },
        highlight: { id: "hackathon 12 jam pertama", en: "first 12-hour hackathon" },
        suffix: { id: "di universitas", en: "at the university" }
      }
    ]
  },
  {
    org: "Teaching Assistant",
    period: { id: "Sept 2025 – Sekarang · Bengkel Koding", en: "Sept 2025 – Present · Bengkel Koding" },
    impacts: [
      { 
        text: { id: "Membimbing debugging, arsitektur, dan pembelajaran berbasis proyek", en: "Guided debugging, architecture, and project-based learning" }
      },
      { 
        text: { id: "Meninjau", en: "Reviewed" },
        highlight: { id: "proyek Laravel fullstack", en: "fullstack Laravel projects" },
        suffix: { id: "— dari desain DB hingga deployment", en: "— DB design to deployment" }
      },
      { 
        text: { id: "Komunikasi teknis di berbagai", en: "Technical communication across" },
        highlight: { id: "tingkat keahlian", en: "varied skill levels" }
      }
    ]
  }
];
