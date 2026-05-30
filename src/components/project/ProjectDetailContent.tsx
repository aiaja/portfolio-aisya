"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailContentProps {
  project: Project;
}

const ProjectDetailContent = ({ project }: ProjectDetailContentProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Back Navigation */}
      <nav className="max-w-6xl mx-auto mb-8 p-6">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-charcoal/40 hover:text-charcoal transition-colors text-xs font-bold uppercase tracking-widest no-underline group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t({ id: "Kembali ke Proyek", en: "Back to Projects" })}
        </Link>
      </nav>

      {/* HEADER / HERO */}
      <header className="max-w-4xl mx-auto mb-16 px-6">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-pink-primary/10 text-pink-primary text-[10px] font-black uppercase tracking-widest rounded">
            {project.status === "ongoing" ? t({ id: "Berjalan", en: "Ongoing" }) : t({ id: "Selesai", en: "Completed" })}
          </span>
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1 bg-charcoal/5 text-charcoal/40 text-[10px] font-black uppercase tracking-widest rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6">
          {project.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-charcoal/60 font-medium leading-relaxed max-w-3xl mb-12">
          {t(project.description)}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-charcoal/10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-1">
              {t({ id: "Peran", en: "Role" })}
            </p>
            <p className="font-bold text-sm">{t(project.role)}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-1">
              {t({ id: "Waktu", en: "Timeline" })}
            </p>
            <p className="font-bold text-sm">{project.timeline || "2024"}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-1">Tech Stack</p>
            <p className="font-bold text-sm truncate">{project.tags.join(", ")}</p>
          </div>
        </div>
      </header>

      {/* MAIN HERO IMAGE */}
      <section className="max-w-6xl mx-auto mb-24 px-6">
        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-charcoal/5">
          {project.image && (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
            />
          )}
        </div>
      </section>

      {/* EDITORIAL NARRATIVE (CBL) */}
      <article className="max-w-3xl mx-auto space-y-20 px-6">
        
        {/* 01. The Challenge (Callout Box) */}
        <section>
          <h2 className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-black italic text-pink-primary">01</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
              {t({ id: "Konteks & Tantangan", en: "Context & Challenge" })}
            </span>
          </h2>
          <div className="bg-charcoal text-beige p-8 md:p-10 rounded-[2rem] shadow-xl">
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              &ldquo;{t(project.content.challenge)}&rdquo;
            </p>
          </div>
        </section>

        {/* 02. The Process (Editorial Flow) */}
        <section>
          <h2 className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-black italic text-charcoal/20">02</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
              {t({ id: "Solusi & Arsitektur", en: "Solution & Architecture" })}
            </span>
          </h2>
          <div className="text-lg text-charcoal/80 font-medium leading-relaxed space-y-6">
            {t(project.content.process).split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* 03. Impact & Results (Horizontal Cards) */}
        <section>
          <h2 className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-black italic text-green-primary">03</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
              {t({ id: "Dampak", en: "The Impact" })}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.content.impact.map((metric, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-8 rounded-[2rem] border border-charcoal/5",
                  i % 2 === 0 ? "bg-[#F7F4D5]" : "bg-white"
                )}
              >
                <p className="text-5xl font-black text-charcoal mb-2 italic tracking-tighter">{metric.value}</p>
                <p className="text-xs font-black uppercase tracking-widest text-charcoal/50">{t(metric.label)}</p>
              </div>
            ))}
          </div>
        </section>

      </article>

      {/* BOTTOM LINKS */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-charcoal/10 flex gap-4 px-6">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-between p-6 bg-charcoal text-[#F7F4D5] rounded-2xl hover:-translate-y-1 transition-transform no-underline shadow-lg"
          >
            <span className="font-black uppercase tracking-widest text-xs">
              {t({ id: "Lihat Kode Sumber", en: "View Source Code" })}
            </span>
            <Github size={20} />
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectDetailContent;
