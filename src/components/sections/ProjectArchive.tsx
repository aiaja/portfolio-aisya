"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Section from "../ui/Section";

import { archiveItems } from "@/data/project-archive";

const ProjectArchive = () => {
 const { t } = useLanguage();

 return (
  <Section id="archive">
   <div className="mb-12 md:mb-16">
    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
     {t({ id: "Arsip", en: "Archive" })}
    </span>
    <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
     {t({ id: "Proyek Lainnya.", en: "More projects." })}
    </h2>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
    {archiveItems.map((item, i) => (
     <Card
      key={i}
      variant="surface"
      padding="sm"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
     >
      <h3 className="text-sm font-bold text-text mb-1">{item.name}</h3>
      <p className="text-subtle text-[12px] leading-relaxed">
       {t(item.desc)}
      </p>
     </Card>
    ))}
   </div>

   <Button
    href="/projects"
    variant="outline"
    size="sm"
    icon={<ArrowRight size={14} />}
   >
    {t({ id: "Lihat Semua Proyek", en: "More Projects" })}
   </Button>
  </Section>
 );
};

export default ProjectArchive;

