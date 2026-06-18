"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetailV2 } from "@/data/project-details";
import Section from "../ui/Section";

interface ProjectReflectionProps {
 reflection: ProjectDetailV2["reflection"];
 slug: string;
}

const ProjectReflection = ({ reflection, slug }: ProjectReflectionProps) => {
 const { t } = useLanguage();

 return (
  <>
   <Section id="reflection">
    <div className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-16 items-center">
     <div className="w-24 h-24 rounded-full bg-primary-10 border border-primary-20 shrink-0 flex items-center justify-center font-black text-3xl text-primary shadow-inner">
      A
     </div>
     <div>
      <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
       {t({ en: "Reflection", id: "Refleksi" })}
      </span>
      <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-6 italic text-text">
       "{t(reflection.quote)}"
      </p>
      <p className="text-lg text-muted leading-relaxed">
       {t(reflection.description)}
      </p>
     </div>
    </div>
   </Section>

   <footer className="py-12 border-t border-border bg-surface text-center">
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-subtle">
     Case Study · {slug.toUpperCase().replace("-", " ")} ·{" "}
     {new Date().getFullYear()}
    </p>
   </footer>
  </>
 );
};

export default ProjectReflection;

