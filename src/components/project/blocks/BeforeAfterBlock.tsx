"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";

export interface ComparisonItem {
  feature: Translatable;
  before: Translatable;
  after: Translatable;
  impact?: Translatable;
}

export interface BeforeAfterBlockProps {
  id?: string;
  label?: Translatable;
  title?: Translatable;
  description?: Translatable;
  beforeTitle?: Translatable;
  afterTitle?: Translatable;
  comparisons: ComparisonItem[];
  background?: "bg" | "surface" | "surface-2";
}

export default function BeforeAfterBlock({
  id = "comparison",
  label = { id: "Transformasi Arsitektur", en: "Architectural Transformation" },
  title = { id: "Evolusi Arsitektur: Legacy vs Modern", en: "Architectural Evolution: Legacy vs Modern" },
  description,
  beforeTitle = { id: "Sebelum (Legacy System)", en: "Before (Legacy Architecture)" },
  afterTitle = { id: "Sesudah (Sistem Terpadu)", en: "After (Modern System)" },
  comparisons,
  background = "surface-2",
}: BeforeAfterBlockProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background={background}>
      <div className="max-w-[860px] mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-2 block select-none">
            {t(label)}
          </span>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-text tracking-tight mb-3">
            {t(title)}
          </h2>
          {description && (
            <p className="text-muted text-sm md:text-base leading-relaxed">
              {t(description)}
            </p>
          )}
        </div>

        {/* Comparison Table / Cards */}
        <div className="space-y-4">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-bento border border-border bg-surface p-5 shadow-subtle grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center"
            >
              {/* Before Column */}
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col justify-between h-full">
                <div className="flex items-center gap-2 text-red-700 text-xs font-mono font-bold uppercase mb-2">
                  <XCircle size={15} className="shrink-0" />
                  <span>{t(beforeTitle)}</span>
                </div>
                <div className="text-xs md:text-sm font-semibold text-text mb-1">
                  {t(item.feature)}
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {t(item.before)}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden md:flex items-center justify-center text-primary">
                <ArrowRight size={20} />
              </div>

              {/* After Column */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between h-full">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold uppercase mb-2">
                  <CheckCircle2 size={15} className="shrink-0" />
                  <span>{t(afterTitle)}</span>
                </div>
                <div className="text-xs md:text-sm font-semibold text-text mb-1">
                  {t(item.feature)}
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {t(item.after)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
