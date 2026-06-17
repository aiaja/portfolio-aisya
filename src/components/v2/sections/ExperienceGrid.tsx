"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const experiences = [
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

const ExperienceGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-surface border-t border-border">
      <div className="mb-14">
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Pengalaman", en: "Experience" })}
        </span>
        <h2 className="font-syne text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text mb-4">
          {t({ id: "Tempat Saya Bekerja", en: "Where I've worked" })}<br />
          {t({ id: "dan Apa yang Saya Bangun.", en: "and what I've built." })}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg border border-border rounded-2xl p-6 flex flex-col"
          >
            <h3 className="font-syne text-lg font-bold text-text mb-1">
              {exp.org}
            </h3>
            <span className="text-[12px] text-subtle mb-6 block">
              {t(exp.period)}
            </span>
            
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {exp.impacts.map((impact, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-[13px] text-muted leading-relaxed">
                    {t(impact.text)}{" "}
                    {impact.highlight && (
                      <span className="font-bold text-text">{t(impact.highlight)}</span>
                    )}{" "}
                    {impact.suffix && t(impact.suffix)}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceGrid;
