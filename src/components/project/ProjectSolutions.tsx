"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetailV2 } from "@/data/project-details";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { cn } from "@/lib/utils";
import { Table, Layout, ShieldCheck, FileCode } from "lucide-react";

const iconMap: Record<string, any> = {
 Table,
 Layout,
 ShieldCheck,
 FileCode,
};

interface ProjectSolutionsProps {
 solutions: ProjectDetailV2["solutions"];
}

const ProjectSolutions = ({ solutions }: ProjectSolutionsProps) => {
 const { t } = useLanguage();

 return (
  <Section id="execution" background="surface">
   <div className="mb-16">
    <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
     {t({ en: "The Execution", id: "Eksekusi" })}
    </span>
    <h2 className="text-4xl font-extrabold text-text">
     {t(solutions.title)}
    </h2>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
    {solutions.items.map((item, i) => {
     const Icon = item.icon ? iconMap[item.icon] : null;
     return (
      <Card
       key={i}
       className={cn(
        "p-8 bg-bg flex flex-col justify-between group",
        item.colSpan === 7 ? "md:col-span-7" : "md:col-span-5",
       )}
      >
       <div>
        <div className="flex items-center gap-4 mb-4">
         {Icon && (
          <div className="p-2 bg-primary-10 rounded-lg text-primary">
           <Icon size={20} />
          </div>
         )}
         <h3 className="text-xl font-bold text-text">
          {t(item.title)}
         </h3>
        </div>
        <p className="text-sm text-muted leading-relaxed">
         {t(item.description)}
        </p>
       </div>
       {item.tags && (
        <div className="flex flex-wrap gap-2 mt-8">
         {item.tags.map((tag) => (
          <span
           key={tag}
           className="px-3 py-1 bg-surface-2 rounded-full text-[9px] font-black uppercase tracking-widest text-subtle"
          >
           {tag}
          </span>
         ))}
        </div>
       )}
      </Card>
     );
    })}
   </div>
  </Section>
 );
};

export default ProjectSolutions;

