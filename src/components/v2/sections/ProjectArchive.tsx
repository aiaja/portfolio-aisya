"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const archiveItems = [
  {
    name: "AIFA",
    desc: {
      id: "Asisten keuangan bertenaga AI untuk rekonsiliasi faktur UMKM. Top 10, Hackvidia 2025.",
      en: "AI-powered finance assistant for SME invoice reconciliation. Top 10, Hackvidia 2025."
    }
  },
  {
    name: "OneCall",
    desc: {
      id: "Respon darurat melalui pemicu tombol daya & fallback SMS. Juara 3, 2 kompetisi nasional.",
      en: "Emergency response via power-button trigger & SMS fallback. 3rd place, 2 national competitions."
    }
  },
  {
    name: "Poliklinik",
    desc: {
      id: "Sistem manajemen klinik dengan auth, admin pasien, dan pengujian otomatis. Laravel fullstack.",
      en: "Clinic management system with auth, patient admin, and automated testing. Laravel fullstack."
    }
  }
];

const ProjectArchive = () => {
  const { t } = useLanguage();

  return (
    <section id="archive" className="py-24 border-t border-border">
      <div className="mb-14">
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Arsip", en: "Archive" })}
        </span>
        <h2 className="font-syne text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
          {t({ id: "Proyek Lainnya.", en: "More projects." })}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
        {archiveItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface border border-border rounded-xl p-5 hover:border-border-strong transition-colors"
          >
            <h3 className="text-sm font-bold text-text mb-1">
              {item.name}
            </h3>
            <p className="text-subtle text-[12px] leading-relaxed">
              {t(item.desc)}
            </p>
          </motion.div>
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-bold text-muted border border-border-strong rounded-full px-6 py-2.5 hover:bg-surface-2 hover:text-text transition-all no-underline"
      >
        {t({ id: "Lihat Semua Proyek", en: "More Projects" })}
        <ArrowRight size={14} />
      </Link>
    </section>
  );
};

export default ProjectArchive;
