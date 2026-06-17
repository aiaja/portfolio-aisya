"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    name: { id: "Temukan", en: "Discover" },
    desc: {
      id: "Masalah jarang sekali seperti yang pertama kali terlihat. Saya mulai dengan observasi lapangan dan wawancara pengguna sebelum menyentuh alat apa pun.",
      en: "Problems are rarely what they first appear. I start with field observations and user interviews before touching any tool."
    },
    items: [
      { id: "Wawancara & observasi pengguna", en: "User interviews & observation" },
      { id: "Pemetaan pemangku kepentingan", en: "Stakeholder mapping" },
      { id: "Validasi masalah", en: "Problem validation" },
      { id: "Riset pasar & konteks", en: "Market & context research" }
    ]
  },
  {
    number: "02",
    name: { id: "Putuskan", en: "Decide" },
    desc: {
      id: "Rekayasa yang baik dimulai dengan trade-off yang baik. Saya memfasilitasi penyelarasan antara kebutuhan pengguna, kendala teknis, dan tenggat waktu.",
      en: "Good engineering starts with good trade-offs. I facilitate alignment between user needs, technical constraints, and timelines."
    },
    items: [
      { id: "Analisis trade-off", en: "Trade-off analysis" },
      { id: "Prioritas fitur", en: "Feature prioritization" },
      { id: "Penyelarasan pemangku kepentingan", en: "Stakeholder alignment" },
      { id: "Pivot berbasis bukti", en: "Evidence-based pivots" }
    ]
  },
  {
    number: "03",
    name: { id: "Bangun", en: "Build" },
    desc: {
      id: "Saya mengode frontend, mengoordinasikan tim lintas fungsi, dan melakukan iterasi berdasarkan penggunaan nyata — bukan asumsi.",
      en: "I code the frontend, coordinate cross-functional teams, and iterate based on real usage — not assumptions."
    },
    items: [
      { id: "Frontend React / Next.js", en: "React / Next.js frontend" },
      { id: "Arsitektur komponen", en: "Component architecture" },
      { id: "Koordinasi lintas fungsi", en: "Cross-functional coordination" },
      { id: "Pengiriman iteratif", en: "Iterative delivery" }
    ]
  }
];

const HowIWork = () => {
  const { t } = useLanguage();

  return (
    <section id="how" className="py-24 bg-surface border-t border-border">
      <div className="mb-16">
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Cara Saya Bekerja", en: "How I Work" })}
        </span>
        <h2 className="font-syne text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
          {t({ id: "Dari pertanyaan menjadi produk.", en: "From question to product." })}
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[0.5px] bg-border-strong z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-bg border border-border-strong flex items-center justify-center font-syne font-extrabold text-primary mb-6 shadow-sm">
                {step.number}
              </div>
              
              <h3 className="font-syne text-xl font-bold text-text mb-3">
                {t(step.name)}
              </h3>
              
              <p className="text-muted text-[14px] leading-relaxed mb-6">
                {t(step.desc)}
              </p>
              
              <ul className="space-y-2.5">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[13px] text-text font-medium">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
