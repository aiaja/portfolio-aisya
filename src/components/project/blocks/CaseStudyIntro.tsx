"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { AlertCircle, Target, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export interface CaseStudyIntroProps {
  id?: string;
  label?: Translatable;
  title: Translatable;
  description: Translatable;
  problemStatement?: Translatable;
  challenges?: Translatable[];
  objectives?: Translatable[];
}

export default function CaseStudyIntro({
  id = "context",
  label = { id: "Konteks & Masalah", en: "Context & Problem" },
  title,
  description,
  problemStatement,
  challenges,
  objectives,
}: CaseStudyIntroProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background="bg">
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t(label)}
        </span>
        <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-text mb-6">
          {t(title)}
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
          {t(description)}
        </p>

        {/* Problem Statement Callout */}
        {problemStatement && (
          <Card variant="surface-2" className="border-l-4 border-l-primary p-5 md:p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-1">
                  {t({ id: "Pernyataan Masalah Inti", en: "Core Problem Statement" })}
                </h4>
                <p className="text-sm font-semibold text-text leading-relaxed">
                  {t(problemStatement)}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Key Challenges & Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {challenges && challenges.length > 0 && (
            <div className="p-5 rounded-bento bg-surface border border-border">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-4 pb-2 border-b border-border">
                {t({ id: "Tantangan Utama", en: "Key Friction Points" })}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span>{t(c)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {objectives && objectives.length > 0 && (
            <div className="p-5 rounded-bento bg-surface border border-border">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-4 pb-2 border-b border-border">
                {t({ id: "Target Solusi", en: "Engineering Objectives" })}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-text font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{t(obj)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </Section>
  );
}
