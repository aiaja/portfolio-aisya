"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    tag: { id: "SaaS Akademik · Lead Frontend Engineer", en: "Academic SaaS · Lead Frontend Engineer" },
    title: "FIK Apps",
    subtitle: { id: "Menskalakan Platform Akademik Tingkat Fakultas", en: "Scaling a Faculty-Wide Academic Platform" },
    metrics: [
      { value: "6,000+", label: { id: "Mahasiswa", en: "Students" } },
      { value: "178", label: { id: "Dosen", en: "Lecturers" } },
      { value: "190→25", label: { id: "Komponen", en: "Components" } },
      { value: "2→4", label: { id: "Peran RBAC", en: "RBAC Roles" } }
    ],
    slug: "fik-apps"
  },
  {
    tag: { id: "Kesehatan Publik · Product Manager", en: "Public Health · Product Manager" },
    title: "PILMO",
    subtitle: { id: "Dari Aplikasi Pengingat Menjadi Sistem Pendukung", en: "From Reminder App to Support System" },
    metrics: [
      { value: "18", label: { id: "Wawancara", en: "Interviews" } },
      { value: "3", label: { id: "Grup Pengguna", en: "User Groups" } },
      { value: "1", label: { id: "Pivot Tervalidasi", en: "Validated Pivot" } },
      { value: "Top 8", label: "HOLOGY 8.0" }
    ],
    slug: "pilmo"
  },
  {
    tag: { id: "SaaS Logistik · Product Manager & Frontend", en: "Logistics SaaS · Product Manager & Frontend" },
    title: "Fleet Management System",
    subtitle: { id: "Memimpin Melalui Ketidakpastian Produk", en: "Leading Through Product Uncertainty" },
    metrics: [
      { value: "7", label: { id: "Anggota Tim", en: "Team Members" } },
      { value: "Mining → Logistics", label: "Pivot" },
      { value: "IoT", label: "Integration" },
      { value: "OCR", label: "Audit Trail" }
    ],
    slug: "fleet-management"
  }
];

const SelectedStories = () => {
  const { t } = useLanguage();

  return (
    <section id="stories" className="py-24 border-t border-border">
      <div className="mb-16">
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Cerita Pilihan", en: "Selected Stories" })}
        </span>
        <h2 className="font-syne text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
          {t({ id: "Studi kasus dalam", en: "Case studies in" })}<br />
          {t({ id: "product thinking.", en: "product thinking." })}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-surface border border-border rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:border-border-strong transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-subtle mb-3 block">
                {t(story.tag)}
              </span>
              <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-text mb-2">
                {story.title}
              </h3>
              <p className="text-muted text-base italic mb-8">
                {t(story.subtitle)}
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-6">
                {story.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-syne text-xl md:text-2xl font-extrabold text-text leading-none">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-subtle uppercase tracking-wider font-bold">
                      {t(metric.label)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-primary border border-primary-20 rounded-full px-5 py-2.5 group-hover:bg-primary-10 transition-colors shrink-0">
              {t({ id: "Baca Studi Kasus", en: "Read Case Study" })}
              <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SelectedStories;
