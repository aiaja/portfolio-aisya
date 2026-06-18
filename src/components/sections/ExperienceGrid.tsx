"use client";

import { useLanguage } from "@/context/LanguageContext";
import Card from "../ui/Card";
import Section from "../ui/Section";

import { experiencesV2 } from "@/data/experience";

const ExperienceGrid = () => {
 const { t } = useLanguage();

 return (
  <Section id="experience" background="surface">
   <div className="mb-12 md:mb-16">
    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
     {t({ id: "Pengalaman", en: "Experience" })}
    </span>
    <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text mb-4">
     {t({ id: "Tempat Saya Bekerja", en: "Where I've worked" })}
     <br />
     {t({ id: "dan Apa yang Saya Bangun.", en: "and what I've built." })}
    </h2>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    {experiencesV2.map((exp, i) => (
     <Card
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="bg-bg border border-border rounded-2xl p-6 flex flex-col"
     >
      <h3 className="text-lg font-bold text-text mb-1">
       {exp.org}
      </h3>
      <span className="text-[12px] text-subtle mb-6 block">
       {t(exp.period)}
      </span>

      <ul className="flex flex-col gap-4 list-none p-0 m-0">
       {exp.impacts.map((impact, idx) => (
        <li key={idx} className="flex gap-3 items-start">
         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
         <p className="text-[13px] text-muted leading-relaxed">
          {t(impact.text)}{" "}
          {impact.highlight && (
           <span className="font-bold text-text">
            {t(impact.highlight)}
           </span>
          )}{" "}
          {impact.suffix && t(impact.suffix)}
         </p>
        </li>
       ))}
      </ul>
     </Card>
    ))}
   </div>
  </Section>
 );
};

export default ExperienceGrid;

