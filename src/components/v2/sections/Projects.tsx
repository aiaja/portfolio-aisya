"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Activity } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "@/data/project";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <SectionTitle
        label={t({
          id: "Produk & Catatan Perubahan",
          en: "Product & Changelog",
        })}
        title={t({ id: "Karya Unggulan", en: "Featured Works" })}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
        {/* 1. HERO HIGHLIGHT (2x2 Span) */}
        <BentoCard
          variant="charcoal"
          className="md:col-span-2 md:row-span-2 flex flex-col group p-0"
        >
          <div className="relative w-full h-[300px] overflow-hidden">
            {projects[0].image && (
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />

            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-pink-primary text-beige text-[9px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {t({ id: "Terbaru", en: "Latest" })}
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-beige text-[9px] font-black uppercase tracking-widest rounded-full">
                AI & SaaS
              </span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-beige text-3xl font-black italic tracking-tighter uppercase leading-none mb-3">
                {projects[0].title}
              </h3>
              <p className="text-beige/60 text-xs font-medium leading-relaxed line-clamp-2">
                {t(projects[0].description)}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                {projects[0].tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-white/10 text-beige/40 text-[9px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${projects[0].slug}`}
                className="w-12 h-12 rounded-full bg-pink-primary text-beige flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-pink-primary/20"
              >
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* 2. MINI HIGHLIGHT A (1x1 Span) */}
        <BentoCard
          className="md:col-span-1 flex flex-col group p-0"
          variant="green"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            {projects[1].image && (
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-green via-green/20 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-0.5 bg-charcoal/10 backdrop-blur-sm text-charcoal/60 text-[8px] font-black uppercase tracking-widest rounded">
                Faculty Mgt
              </span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-black italic uppercase leading-none text-beige mb-2">
                {projects[1].title}
              </h3>
              <p className="text-beige/60 text-[10px] font-medium line-clamp-2">
                {t(projects[1].description)}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                {projects[1].tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-white/10 text-beige/40 text-[9px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${projects[1].slug}`}
                className="w-8 h-8 rounded-full bg-white/10 text-beige flex items-center justify-center hover:bg-pink-primary transition-all shrink-0"
              >
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* 3. MINI HIGHLIGHT B (1x1 Span) */}
        <BentoCard
          className="md:col-span-1 flex flex-col group p-0"
          variant="pink-light"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            {projects[2].image && (
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-light via-pink-light/20 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-0.5 bg-charcoal/10 backdrop-blur-sm text-charcoal/60 text-[8px] font-black uppercase tracking-widest rounded">
                Logistics SaaS
              </span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-black italic uppercase leading-none text-charcoal mb-2">
                {projects[2].title}
              </h3>
              <p className="text-charcoal/60 text-[10px] font-medium line-clamp-2">
                {t(projects[2].description)}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                {projects[2].tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-charcoal/10 text-charcoal/40 text-[9px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${projects[2].slug}`}
                className="w-8 h-8 rounded-full bg-charcoal/10 text-charcoal flex items-center justify-center hover:bg-pink-primary group-hover:text-beige transition-all shrink-0"
              >
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* 4. MINI HIGHLIGHT C (1x1 Span) */}
        <BentoCard
          className="md:col-span-1 flex flex-col group p-0"
          variant="white"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            {projects[3].image && (
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-0.5 bg-charcoal/5 backdrop-blur-sm text-charcoal/60 text-[8px] font-black uppercase tracking-widest rounded">
                {t({ id: "Manajemen Poliklinik", en: "Polyclinic Management" })}
              </span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-black italic uppercase leading-none text-charcoal mb-2">
                {projects[3].title}
              </h3>
              <p className="text-charcoal/60 text-[10px] font-medium line-clamp-2">
                {t(projects[3].description)}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                {projects[3].tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-charcoal/5 text-charcoal/40 text-[9px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${projects[3].slug}`}
                className="w-8 h-8 rounded-full bg-charcoal/5 text-charcoal flex items-center justify-center hover:bg-pink-primary group-hover:text-beige transition-all shrink-0"
              >
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* 5. ARCHIVE CTA CARD (1x1 Span) */}
        <BentoCard
          variant="white"
          className="md:col-span-1 flex flex-col items-center justify-center text-center p-8 bg-transparent border-2 border-dashed border-charcoal/10 hover:border-pink-primary/30 transition-all group overflow-hidden relative"
          noHover
        >
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-charcoal/20 flex items-center justify-center mb-4 group-hover:border-pink-primary group-hover:scale-110 transition-all">
             <ArrowRight size={20} className="text-charcoal/40 group-hover:text-pink-primary -rotate-45 transition-transform" />
          </div>
          <h3 className="text-charcoal font-black text-sm uppercase tracking-tight leading-tight mb-2">
            {t({ id: "Arsip Proyek", en: "Project Archive" })}
          </h3>
          <p className="text-charcoal/40 text-[9px] font-medium max-w-[120px]">
            {t({ id: "Lihat 10+ studi kasus lainnya.", en: "Explore 10+ more case studies." })}
          </p>
          <Link href="/projects" className="absolute inset-0 z-10" />

          {/* Subtle Pulse indicator */}
          <div className="absolute top-6 right-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-primary"></span>
            </span>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default Projects;
;
