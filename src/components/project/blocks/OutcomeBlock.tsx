"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { CheckCircle2, TrendingUp, Users2, ShieldAlert } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export interface OutcomeItem {
  title: Translatable;
  description: Translatable;
  metricHighlight?: string;
}

export interface OutcomeBlockProps {
  id?: string;
  label?: Translatable;
  title: Translatable;
  description?: Translatable;
  outcomes: OutcomeItem[];
  testimonial?: {
    quote: Translatable;
    author: string;
    role: Translatable;
  };
  background?: "bg" | "surface" | "surface-2";
}

export default function OutcomeBlock({
  id = "outcomes",
  label = { id: "Dampak & Hasil", en: "Results & Business Value" },
  title,
  description,
  outcomes,
  testimonial,
  background = "bg",
}: OutcomeBlockProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background={background}>
      <div className="max-w-[860px] mx-auto">
        
        {/* Header */}
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t(label)}
        </span>
        <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-text mb-4">
          {t(title)}
        </h2>
        {description && (
          <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
            {t(description)}
          </p>
        )}

        {/* Outcomes List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {outcomes.map((item, idx) => (
            <Card key={idx} variant="surface" className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <h3 className="text-sm md:text-base font-bold text-text">
                    {t(item.title)}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  {t(item.description)}
                </p>
              </div>

              {item.metricHighlight && (
                <div className="mt-4 pt-3 border-t border-border flex items-center gap-1.5 text-xs font-mono font-bold text-primary">
                  <TrendingUp size={14} />
                  <span>{item.metricHighlight}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Testimonial / Stakeholder Feedback */}
        {testimonial && (
          <div className="p-6 rounded-bento bg-surface border border-border border-l-4 border-l-primary">
            <p className="text-sm md:text-base italic text-text leading-relaxed mb-3">
              "{t(testimonial.quote)}"
            </p>
            <div className="text-xs font-mono">
              <span className="font-bold text-text">{testimonial.author}</span>
              <span className="text-subtle"> — {t(testimonial.role)}</span>
            </div>
          </div>
        )}

      </div>
    </Section>
  );
}
