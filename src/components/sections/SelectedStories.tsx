"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Section from "../ui/Section";

import { selectedStories } from "@/data/selected-stories";

const SelectedStories = () => {
 const { t } = useLanguage();

 return (
  <Section id="stories">
   <div className="mb-12 md:mb-16">
    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
     {t({ id: "Cerita Pilihan", en: "Selected Stories" })}
    </span>
    <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
     {t({ id: "Studi kasus dalam", en: "Case studies in" })}
     <br />
     {t({ id: "product thinking.", en: "product thinking." })}
    </h2>
   </div>

   <div className="flex flex-col gap-4">
    {selectedStories.map((story, i) => (
     <Link
      key={i}
      href={`/projects/${story.slug}`}
      className="no-underline group"
     >
      <Card
       variant="surface"
       padding="lg"
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: i * 0.1 }}
       className="flex flex-col gap-10 hover:border-border-strong focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      >
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
         <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-subtle mb-3 block">
          {t(story.tag)}
         </span>
         <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-2">
          {story.title}
         </h3>
         <p className="text-muted text-base italic">
          {t(story.subtitle)}
         </p>
        </div>

        <Button
         variant="ghost"
         size="sm"
         icon={<ArrowRight size={14} />}
         className="shrink-0"
        >
         {t({ id: "Baca Studi Kasus", en: "Read Case Study" })}
        </Button>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-stretch">
        {story.metrics.map((metric, idx) => (
         <Card
          key={idx}
          variant="default"
          padding="none"
          hoverable={false}
          className="bg-bg/50 backdrop-blur-sm flex flex-col justify-center px-4 py-4 min-h-[80px]"
         >
          <div className="text-[15px] md:text-md font-extrabold text-text mb-1 leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
           {metric.value}
          </div>
          <div className="text-[9px] text-subtle uppercase tracking-widest font-bold">
           {t(metric.label)}
          </div>
         </Card>
        ))}
       </div>
      </Card>
     </Link>
    ))}
   </div>
  </Section>
 );
};

export default SelectedStories;

