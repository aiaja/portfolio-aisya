"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetailV2 } from "@/data/project-details";
import Section from "../ui/Section";
import { cn } from "@/lib/utils";

interface ProjectDecisionProps {
 decision: ProjectDetailV2["decision"];
}

const ProjectDecision = ({ decision }: ProjectDecisionProps) => {
 const { t } = useLanguage();

 return (
  <Section id="decision">
   <div className="bg-primary-10/30 border border-primary-20 rounded-[40px] p-12 md:p-16 relative overflow-hidden">
    <div className="relative z-10 max-w-[640px]">
     <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-6 block">
      {t({ en: "The Decision", id: "Keputusan" })}
     </span>
     <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-text">
      {t(decision.title)}
     </h2>
     <p className="text-xl text-muted mb-10 leading-relaxed">
      {t(decision.description)}
     </p>
     <div className="flex flex-col md:flex-row gap-6">
      {decision.options.map((option, i) => (
       <div
        key={i}
        className={cn(
         "flex-1 p-6 rounded-2xl transition-all",
         option.selected
          ? "bg-bg border-2 border-primary shadow-xl shadow-primary/5"
          : "bg-bg border border-border opacity-50 grayscale",
        )}
       >
        <div
         className={cn(
          "text-[10px] font-black uppercase mb-2",
          option.selected ? "text-primary" : "text-subtle",
         )}
        >
         {option.label}
        </div>
        <div className="font-bold mb-1 text-text">{option.name}</div>
        <div
         className={cn(
          "text-xs font-bold",
          option.selected ? "text-green-600" : "text-red-500",
         )}
        >
         {t(option.status)}
        </div>
       </div>
      ))}
     </div>
    </div>
    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
   </div>
  </Section>
 );
};

export default ProjectDecision;

