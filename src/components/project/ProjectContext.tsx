"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetailV2 } from "@/data/project-details";
import Section from "../ui/Section";

interface ProjectContextProps {
 context: ProjectDetailV2["context"];
}

const ProjectContext = ({ context }: ProjectContextProps) => {
 const { t } = useLanguage();

 return (
  <Section id="context" background="surface">
   <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
    <div>
     <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
      {t({ en: "The Context", id: "Konteks" })}
     </span>
     <h2 className="text-4xl font-extrabold leading-tight mb-6 text-text">
      {t(context.title)}
     </h2>
    </div>
    <div className="space-y-6">
     <p className="text-lg text-muted leading-relaxed">
      {t(context.description)}
     </p>
     <div className="grid grid-cols-1 gap-3 pt-6">
      {context.points.map((point, i) => (
       <div
        key={i}
        className="flex items-center gap-4 p-4 bg-bg border border-border rounded-2xl"
       >
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-sm font-bold text-text">{t(point)}</span>
       </div>
      ))}
     </div>
    </div>
   </div>
  </Section>
 );
};

export default ProjectContext;

