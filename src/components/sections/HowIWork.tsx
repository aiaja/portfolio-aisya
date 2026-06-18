"use client";

import { useLanguage } from "@/context/LanguageContext";
import Card from "../ui/Card";
import Section from "../ui/Section";

import { steps } from "@/data/how-i-work";

const HowIWork = () => {
 const { t } = useLanguage();

 return (
  <Section id="how" background="surface">
   <div className="mb-12 md:mb-16">
    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
     {t({ id: "Cara Saya Bekerja", en: "How I Work" })}
    </span>
    <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
     {t({
      id: "Dari pertanyaan menjadi produk.",
      en: "From question to product.",
     })}
    </h2>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    {steps.map((step, i) => (
     <Card
      key={i}
      variant="default"
      padding="md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="flex flex-col h-full"
     >
      <div className="w-12 h-12 rounded-xl bg-surface border border-border-strong flex items-center justify-center font-extrabold text-primary mb-6 shadow-sm shrink-0">
       {step.number}
      </div>

      <h3 className="text-xl font-bold text-text mb-3">
       {t(step.name)}
      </h3>

      <p className="text-muted text-[14px] leading-relaxed mb-6 flex-1">
       {t(step.desc)}
      </p>

      <ul className="space-y-3 pt-6 border-t border-border">
       {step.items.map((item, idx) => (
        <li
         key={idx}
         className="flex items-center gap-2.5 text-[12px] text-text font-medium"
        >
         <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
         {t(item)}
        </li>
       ))}
      </ul>
     </Card>
    ))}
   </div>
  </Section>
 );
};

export default HowIWork;

