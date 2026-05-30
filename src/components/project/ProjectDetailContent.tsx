"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Lightbulb, Target, Trophy, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          <span className="px-3 py-1 bg-pink-primary/10 text-pink-primary text-[10px] font-black uppercase tracking-widest rounded">
            {project.status === "ongoing" ? t({ id: "Berjalan", en: "Ongoing" }) : t({ id: "Selesai", en: "Completed" })}
          </span>
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1 bg-charcoal/5 text-charcoal/40 text-[10px] font-black uppercase tracking-widest rounded">
              {tag}
            </span>
          ))}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6"
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-charcoal/60 font-medium leading-relaxed max-w-3xl mb-12"
        >
          {t(project.description)}
        </motion.p>

        {/* Metadata Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-charcoal/10"
        >
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
        </motion.div>
      </header>

      {/* MAIN HERO IMAGE */}
      <section className="max-w-6xl mx-auto mb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-charcoal/5 shadow-2xl"
        >
          {project.image && (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
          )}
        </motion.div>
      </section>

      {/* EDITORIAL NARRATIVE (Modular P-D-R) */}
      <article className="max-w-4xl mx-auto space-y-32 px-6">
        
        {/* 01. THE PROBLEM (P) */}
        <section>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black italic text-pink-primary">01</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
                  {t({ id: "Masalah", en: "Problem" })}
                </span>
              </h2>
              <p className="text-sm text-charcoal/40 font-medium leading-relaxed">
                {t({ 
                  id: "Mengidentifikasi akar permasalahan dan hambatan operasional di lapangan.", 
                  en: "Identifying the root causes and operational bottlenecks in the field." 
                })}
              </p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <div className="bg-charcoal text-beige p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <Target className="absolute -right-4 -bottom-4 text-white/5 size-32" />
                <p className="text-2xl md:text-3xl font-black leading-tight italic mb-6">
                  &ldquo;{t(project.content.problem.summary)}&rdquo;
                </p>
                <div className="h-1 w-20 bg-pink-primary rounded-full mb-8" />
                <ul className="space-y-4">
                  {project.content.problem.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-beige/70 font-medium">
                      <span className="text-pink-primary font-black mt-1">/</span>
                      {t(detail)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 02. THE DECISION (D) */}
        <section>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black italic text-charcoal/20">02</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
                  {t({ id: "Keputusan", en: "Decision" })}
                </span>
              </h2>
              <p className="text-sm text-charcoal/40 font-medium leading-relaxed">
                {t({ 
                  id: "Langkah strategis dan rekayasa teknologi untuk memecahkan tantangan.", 
                  en: "Strategic steps and engineering choices to solve the challenges." 
                })}
              </p>
            </div>
            <div className="md:w-2/3 space-y-6">
              {project.content.decision.map((d, i) => (
                <div 
                  key={i} 
                  className="group p-8 rounded-[2rem] border border-charcoal/10 hover:border-pink-primary/30 bg-white/50 backdrop-blur-sm transition-all hover:shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-pink-primary/10 transition-colors">
                      <Lightbulb className="text-charcoal/30 group-hover:text-pink-primary size-5 transition-colors" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-charcoal">
                      {t(d.title)}
                    </h3>
                  </div>
                  <p className="text-charcoal/60 font-medium leading-relaxed pl-14">
                    {t(d.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. THE RESULT (R) */}
        <section>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black italic text-green-primary">03</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
                  {t({ id: "Hasil", en: "Result" })}
                </span>
              </h2>
              <p className="text-sm text-charcoal/40 font-medium leading-relaxed">
                {t({ 
                  id: "Dampak yang dihasilkan, pencapaian, dan pelajaran berharga yang didapat.", 
                  en: "Produced impact, achievements, and valuable lessons learned." 
                })}
              </p>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="space-y-6">
                <p className="text-2xl font-bold leading-relaxed text-charcoal">
                  {t(project.content.result.summary)}
                </p>
                
                {project.content.result.learnings && (
                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30">
                      {t({ id: "Pelajaran Berharga", en: "Key Learnings" })}
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {project.content.result.learnings.map((learning, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-green-primary/5 rounded-xl border border-green-primary/10">
                          <CheckCircle2 className="text-green-primary size-4 shrink-0" />
                          <p className="text-sm font-bold text-green-primary/80">{t(learning)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {project.content.result.metrics && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.content.result.metrics.map((metric, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "p-10 rounded-[2.5rem] border border-charcoal/5 relative overflow-hidden group",
                        i % 2 === 0 ? "bg-[#F7F4D5]" : "bg-white"
                      )}
                    >
                      <Trophy className="absolute -right-4 -bottom-4 text-charcoal/5 size-24 group-hover:scale-110 transition-transform" />
                      <p className="text-5xl font-black text-charcoal mb-2 italic tracking-tighter font-mono">{metric.value}</p>
                      <p className="text-xs font-black uppercase tracking-widest text-charcoal/50">{t(metric.label)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

      </article>

      {/* BOTTOM LINKS */}
      <div className="max-w-4xl mx-auto mt-32 mb-24 pt-12 border-t border-charcoal/10 flex flex-wrap gap-4 px-6">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] flex items-center justify-between p-6 bg-charcoal text-[#F7F4D5] rounded-[2rem] hover:-translate-y-1 transition-all no-underline shadow-xl group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Github size={20} />
              </div>
              <span className="font-black uppercase tracking-widest text-xs">
                {t({ id: "Lihat Kode Sumber", en: "View Source Code" })}
              </span>
            </div>
            <ArrowLeft className="rotate-180 opacity-20 group-hover:opacity-100 transition-all" size={20} />
          </a>
        )}
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] flex items-center justify-between p-6 bg-pink-primary text-beige rounded-[2rem] hover:-translate-y-1 transition-all no-underline shadow-xl group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Trophy size={20} />
              </div>
              <span className="font-black uppercase tracking-widest text-xs">
                {t({ id: "Demo Aplikasi", en: "Live Demo" })}
              </span>
            </div>
            <ArrowLeft className="rotate-180 opacity-20 group-hover:opacity-100 transition-all" size={20} />
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectDetailContent;
