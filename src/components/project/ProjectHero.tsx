"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetailV2 } from "@/data/project-details";
import { ArrowLeft } from "lucide-react";
import Button from "../ui/Button";

interface ProjectHeroProps {
  hero: ProjectDetailV2["hero"];
}

const ProjectHero = ({ hero }: ProjectHeroProps) => {
  const { t } = useLanguage();

  return (
    <header id="hero" className="pt-24 pb-12 md:pt-32 md:pb-20 px-6">
      <div className="max-w-[960px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button
            href="/projects/"
            variant="ghost"
            size="sm"
            icon={<ArrowLeft size={14} />}
            iconPosition="left"
            className="border-transparent px-0 hover:bg-transparent hover:translate-x-[-4px]"
          >
            {t({ en: "Back to Work", id: "Kembali ke Karya" })}
          </Button>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
          <div className="max-w-[700px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-6 bg-primary-10 px-3 py-1 rounded-full"
            >
              {t(hero.role)} · {t(hero.team)}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight mb-8"
            >
              {hero.title.line1}
              <br />
              <span className="italic text-primary">{hero.title.line2}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted leading-relaxed"
            >
              {t(hero.tagline)}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            {hero.stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-surface border border-border rounded-3xl min-w-[140px]"
              >
                <div className="text-3xl font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-subtle">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="aspect-[16/9] bg-surface-2 border border-border-strong rounded-[40px] overflow-hidden relative group"
        >
          {hero.image ? (
            <Image
              src={hero.image}
              alt={t(hero.tagline)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-subtle font-bold uppercase tracking-widest opacity-20 text-center px-8">
              {t({
                en: "Case Study Visual Placeholder",
                id: "Placeholder Visual Studi Kasus",
              })}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.div>
      </div>
    </header>
  );
};

export default ProjectHero;
