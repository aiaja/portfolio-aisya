"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lightbulb, CheckCircle2, Mic2, Award, Sparkles, Target, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Achievement } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface AchievementDetailContentProps {
  achievement: Achievement;
}

const AchievementDetailContent = ({ achievement }: AchievementDetailContentProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Back Navigation */}
      <nav className="max-w-6xl mx-auto mb-8 p-6">
        <Link 
          href="/#experience" 
          className="inline-flex items-center gap-2 text-charcoal/40 hover:text-charcoal transition-colors text-xs font-bold uppercase tracking-widest no-underline group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t({ id: "Kembali ke Pengalaman", en: "Back to Experience" })}
        </Link>
      </nav>

      {/* HEADER / HERO */}
      <header className="max-w-4xl mx-auto mb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="px-3 py-1 bg-pink-primary text-beige text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-pink-primary/20">
            {t(achievement.award)}
          </span>
          <span className="text-[10px] font-mono text-charcoal/40 font-bold uppercase tracking-tighter">
            {achievement.year}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6"
        >
          {achievement.event}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-charcoal/60 font-medium leading-relaxed max-w-3xl mb-12"
        >
          {t(achievement.title)}
        </motion.p>

        {/* Metadata Grid (Organizer, Award, Timeline) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-charcoal/10"
        >
          <div className="col-span-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-1">
              {t({ id: "Penyelenggara", en: "Organizer" })}
            </p>
            <p className="font-bold text-sm">{achievement.organizer}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-1">
              {t({ id: "Penghargaan", en: "Award" })}
            </p>
            <p className="font-bold text-sm">{t(achievement.award)}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-1">
              {t({ id: "Waktu", en: "Timeline" })}
            </p>
            <p className="font-bold text-sm">{achievement.year}</p>
          </div>
        </motion.div>
      </header>

      {/* EDITORIAL NARRATIVE (Modular I-V-P) */}
      <article className="max-w-4xl mx-auto space-y-32 px-6">
        
        {/* 01. INSIGHT (I) - Using Problem box style */}
        <section>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black italic text-pink-primary">01</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">Insight</span>
              </h2>
              <p className="text-sm text-charcoal/40 font-medium leading-relaxed">
                {t({ 
                  id: "Titik awal penemuan masalah dan peluang inovasi.", 
                  en: "The starting point of identifying problems and innovation opportunities." 
                })}
              </p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <div className="bg-charcoal text-beige p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <Target className="absolute -right-4 -bottom-4 text-white/5 size-32" />
                <p className="text-2xl md:text-3xl font-black leading-tight italic mb-6">
                  &ldquo;{t(achievement.content.insight.summary)}&rdquo;
                </p>
                <div className="h-1 w-20 bg-pink-primary rounded-full mb-8" />
                <ul className="space-y-4">
                  {achievement.content.insight.details.map((detail, i) => (
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

        {/* 02. VALIDATION (V) - Using Decision card style */}
        <section>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black italic text-charcoal/20">02</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">Validation</span>
              </h2>
              <p className="text-sm text-charcoal/40 font-medium leading-relaxed">
                {t({ 
                  id: "Bagaimana ide diuji dan divalidasi ke lapangan atau data.", 
                  en: "How the idea was tested and validated in the field or through data." 
                })}
              </p>
            </div>
            <div className="md:w-2/3 space-y-6">
              {achievement.content.validation.map((v, i) => (
                <div 
                  key={i} 
                  className="group p-8 rounded-[2rem] border border-charcoal/10 hover:border-pink-primary/30 bg-white/50 backdrop-blur-sm transition-all hover:shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-pink-primary/10 transition-colors">
                      <CheckCircle2 className="text-charcoal/30 group-hover:text-pink-primary size-5 transition-colors" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-charcoal">
                      {t(v.title)}
                    </h3>
                  </div>
                  <p className="text-charcoal/60 font-medium leading-relaxed pl-14">
                    {t(v.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. PITCH (P) - Using Result style */}
        <section>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black italic text-green-primary">03</span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">Pitch</span>
              </h2>
              <p className="text-sm text-charcoal/40 font-medium leading-relaxed">
                {t({ 
                  id: "Penyampaian visi dan strategi produk di hadapan juri.", 
                  en: "Communicating the product vision and strategy to the judges." 
                })}
              </p>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="p-10 bg-white border border-charcoal/10 rounded-[2.5rem] shadow-xl relative group overflow-hidden">
                <Mic2 className="absolute -right-4 -bottom-4 text-charcoal/5 size-32 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-black leading-relaxed italic text-charcoal">
                  &ldquo;{t(achievement.content.pitch.summary)}&rdquo;
                </p>
              </div>

              {achievement.content.pitch.metrics && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievement.content.pitch.metrics.map((metric, i) => (
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

        {/* EVIDENCE & MOMENTS (Optional) */}
        {achievement.images && achievement.images.length > 0 && (
          <section className="pt-24 border-t border-charcoal/5">
             <h2 className="flex items-center gap-4 mb-12">
                <Award className="text-pink-primary size-6" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/50">
                  {t({ id: "Bukti & Momen", en: "Evidence & Moments" })}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievement.images.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-[2rem] overflow-hidden bg-charcoal/5 shadow-lg group">
                    <Image 
                      src={img} 
                      alt={`Documentation ${i}`} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
          </section>
        )}

      </article>

      {/* FOOTER CTA */}
      <div className="max-w-4xl mx-auto mt-48 mb-24 px-6 text-center">
        <p className="text-charcoal/30 text-xs font-black uppercase tracking-[0.4em] mb-8">
          {t({ id: "Selesai Membaca?", en: "Finished Reading?" })}
        </p>
        <Link 
          href="/#experience"
          className="inline-flex items-center gap-4 px-12 py-6 bg-charcoal text-beige rounded-full font-black uppercase tracking-widest text-xs hover:bg-pink-primary transition-all shadow-2xl no-underline"
        >
          {t({ id: "Kembali ke Homepage", en: "Return to Homepage" })}
          <ArrowLeft size={16} className="rotate-180" />
        </Link>
      </div>
    </>
  );
};

export default AchievementDetailContent;
