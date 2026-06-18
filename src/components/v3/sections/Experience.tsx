"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BentoCard from "../ui/BentoCard";
import SectionTitle from "@/components/v3/ui/SectionTitle";
import { experiences } from "@/data/v3/experience";
import { achievements } from "@/data/v3/achievements";
import { education } from "@/data/v3/education";
import { profile } from "@/data/v3/profile";
import { Plus, Award, ArrowRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { projects } from "@/data/v3/project";

const Experience = () => {
 const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
 const { t } = useLanguage();

 const toggleExpand = (index: number) => {
  setExpandedIndex(expandedIndex === index ? null : index);
 };

 return (
  <section id="experience" className="py-24">
   <SectionTitle
    label={t({ id: "Perjalanan Profesional", en: "Professional Journey" })}
    title={t({
     id: "Pengalaman & Prestasi",
     en: "Experience & Achievements",
    })}
   />

   <div className="flex flex-col gap-4">
    {/* Row 1: Work Experience & Achievements */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
     {/* 1. Work & Organization Card (2 Columns - Collapsible) */}
     <BentoCard
      variant="green"
      className="md:col-span-2 flex flex-col gap-8 h-full min-h-[450px]"
     >
      <p className="text-beige/30 text-[10px] font-black uppercase tracking-[0.2em]">
       {t({ id: "Pekerjaan & Kepemimpinan", en: "Work & Leadership" })}
      </p>
      <div className="flex flex-col gap-10">
       {experiences.map((exp, i) => (
        <div
         key={i}
         className="group cursor-pointer"
         onClick={() => toggleExpand(i)}
        >
         <div className="flex justify-between items-start">
          <div className="flex gap-4">
           <div
            className={cn(
             "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 transition-all duration-300 shadow-inner",
             expandedIndex === i
              ? "bg-pink-primary rotate-45"
              : "bg-white/10",
            )}
           >
            <Plus
             size={14}
             className={cn(
              "transition-colors",
              expandedIndex === i
               ? "text-beige"
               : "text-beige/40",
             )}
            />
           </div>
           <div>
            <h3
             className={cn(
              "text-xl font-black tracking-tight leading-none transition-colors w-fit",
              expandedIndex === i
               ? "text-pink-primary"
               : "text-beige hover:text-pink-primary",
             )}
            >
             {exp.company}
            </h3>
            <p className="text-beige/50 text-sm font-medium mt-2 italic">
             {t(exp.role)}
            </p>
           </div>{" "}
          </div>

          <div className="text-right shrink-0">
           <span className="px-2 py-1 bg-white/10 text-[9px] font-black uppercase tracking-widest rounded border border-white/5">
            {t(exp.type)}
           </span>
           <p className="text-beige/30 text-[10px] font-mono mt-2 uppercase tracking-tighter font-bold">
            {t(exp.period)}
           </p>
          </div>
         </div>

         <AnimatePresence>
          {expandedIndex === i && exp.points && (
           <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
           >
            <ul className="mt-6 space-y-3 border-l border-white/10 pl-6 py-1 ml-4">
             {exp.points.map((point, idx) => (
              <li
               key={idx}
               className="text-sm text-beige/70 leading-relaxed font-medium"
              >
               <span className="text-pink-primary mr-2">✦</span>
               {t(point)}
              </li>
             ))}
            </ul>
           </motion.div>
          )}
         </AnimatePresence>
        </div>
       ))}
      </div>
     </BentoCard>

     {/* 2. Achievements Card (1 Column - Scrollable) */}
     <BentoCard
      variant="charcoal"
      className="md:col-span-1 md:row-span-2 flex flex-col gap-6 h-[450px] shadow-2xl overflow-hidden"
      noHover
     >
      <div className="flex justify-between items-center">
       <p className="text-beige/30 text-[10px] font-black uppercase tracking-[0.2em]">
        {t({ id: "Prestasi", en: "Achievements" })}
       </p>
       <Award size={16} className="text-pink-primary animate-pulse" />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
       {achievements.map((ach, i) => (
        <Link
         key={i}
         href={`/achievements/${ach.slug}`}
         className="group/item block p-5 bg-white/5 rounded-2xl border border-charcoal/5 hover:border-pink-primary/30 transition-all no-underline"
        >
         <div className="flex justify-between items-start mb-3">
          <span
           className={cn(
            "px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded text-beige",
            i % 2 === 0 ? "bg-pink-primary" : "bg-green-primary",
           )}
          >
           {t(ach.title)}
          </span>
          <ArrowRight
           size={10}
           className="text-beige/20 group-hover:text-pink-primary group-hover:translate-x-0.5 transition-all"
          />
         </div>
         <h4 className="text-xs font-black uppercase tracking-tight group-hover/item:text-pink-primary transition-colors text-beige leading-tight m-0">
          {ach.event}
         </h4>
         <p className="text-[9px] text-beige/40 leading-relaxed line-clamp-1 italic m-0">
          {t(ach.content.pitch.summary)}
         </p>
         <p className="text-[8px] font-mono text-beige/20 mt-1 font-bold uppercase tracking-tighter m-0">
          {ach.year} —{" "}
          {t({ id: "Lihat Perjalanan", en: "View Journey" })}
         </p>
        </Link>
       ))}
      </div>

      <div className="pt-4 border-t border-white/5 mt-auto">
       <Link
        href="/achievements"
        className="w-full inline-flex justify-center items-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-pink-primary transition-all no-underline text-beige group/btn"
       >
        {t({
         id: "Jelajahi Proses di Balik Layar",
         en: "Explore the Process",
        })}
        <ArrowRight
         size={12}
         className="ml-2 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all"
        />
       </Link>
      </div>
     </BentoCard>
    </div>
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

export default Experience;

