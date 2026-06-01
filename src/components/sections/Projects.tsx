"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Activity } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
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
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-green via-green/20 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-0.5 bg-charcoal/10 backdrop-blur-sm text-charcoal/60 text-[8px] font-black uppercase tracking-widest rounded">
                Faculty Management
              </span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-black italic uppercase leading-none text-beige mb-2">
                {projects[1].title}
              </h3>
              <p className="text-beige/60 text-[10px] font-medium line-clamp-5">
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

        {/* 3. PROJECT LOG (1x2 Span - BOXED LIST) */}
        <BentoCard
          variant="white"
          className="md:col-span-1 md:row-span-2 flex flex-col gap-6 h-full shadow-2xl overflow-hidden"
          noHover
        >
          <div className="flex justify-between items-center">
            <p className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em]">
              Project Log
            </p>
            <Activity size={16} className="text-pink-primary animate-pulse" />
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group/item block p-5 bg-charcoal/5 rounded-2xl border border-charcoal/5 hover:border-pink-primary/30 transition-all no-underline"
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={cn(
                      "px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded text-beige",
                      project.status === "done"
                        ? "bg-green-primary"
                        : "bg-pink-primary",
                    )}
                  >
                    {project.status === "done"
                      ? t({ id: "Selesai", en: "Done" })
                      : t({ id: "Berjalan", en: "Ongoing" })}
                  </span>
                  <ArrowRight
                    size={10}
                    className="text-charcoal/20 group-hover/item:text-pink-primary group-hover/item:translate-x-0.5 transition-all"
                  />
                </div>
                <h4 className="text-xs font-black uppercase tracking-tight mb-1 group-hover/item:text-pink-primary transition-colors text-charcoal leading-tight">
                  {project.title}
                </h4>
                <p className="text-[9px] text-charcoal/40 leading-relaxed line-clamp-2">
                  {t(project.description)}
                </p>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-charcoal/5 mt-auto">
            <Link
              href="https://github.com/aiaja"
              target="_blank"
              className="w-full inline-flex justify-center items-center px-4 py-3 bg-charcoal/5 border border-charcoal/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-pink-primary hover:text-beige transition-all no-underline text-charcoal"
            >
              Github Profile
            </Link>
          </div>
        </BentoCard>

        {/* 4. MINI HIGHLIGHT B (1x1 Span) */}
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
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-light via-pink-light/20 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-0.5 bg-charcoal/10 backdrop-blur-sm text-charcoal/60 text-[8px] font-black uppercase tracking-widest rounded">
                Fleet Management System
              </span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-black italic uppercase leading-none text-charcoal mb-2">
                {projects[2].title}
              </h3>
              <p className="text-charcoal/60 text-[10px] font-medium line-clamp-5">
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
                className="w-8 h-8 rounded-full bg-charcoal/10 text-charcoal flex items-center justify-center hover:bg-pink-primary transition-all shrink-0"
              >
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </BentoCard>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(203, 146, 137, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(203, 146, 137, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Projects;
