"use client";

import { useLanguage } from "@/context/LanguageContext";
import Card from "../ui/Card";
import Section from "../ui/Section";

import { whyIBuildStories } from "@/data/why-i-build";

const WhyIBuild = () => {
 const { t } = useLanguage();

 return (
  <Section id="why">
   <div className="mb-12 md:mb-16">
    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
     {t({ id: "Mengapa Saya Membangun", en: "Why I Build" })}
    </span>
    <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text mb-4">
     {t({ id: "Masalah berbeda.", en: "Different problems." })}
     <br />
     {t({ id: "Rasa ingin tahu yang sama.", en: "Same curiosity." })}
    </h2>
    <p className="text-muted text-lg italic">
     {t({
      id: "Mengapa ini terjadi? Dan bagaimana teknologi bisa membantu?",
      en: "Why does this happen? And how can technology help?",
     })}
    </p>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {whyIBuildStories.map((story, i) => (
     <Card
      key={i}
      variant="surface"
      padding="md"
      accent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group"
     >
      <span className="inline-block text-[11px] font-medium tracking-[0.08em] uppercase text-primary bg-primary-10 px-2 py-0.5 rounded-full mb-4">
       {t(story.tag)}
      </span>

      <h3 className="text-lg font-bold text-text mb-3">
       {story.title}
      </h3>

      <p className="text-muted text-sm leading-relaxed mb-5">
       {t(story.problem)}
      </p>

      <blockquote className="text-text text-sm italic leading-relaxed pl-3 border-l-2 border-primary">
       "{t(story.quote)}"
      </blockquote>
     </Card>
    ))}
   </div>
  </Section>
 );
};

export default WhyIBuild;

