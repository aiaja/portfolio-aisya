"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { GitCommit, Check, AlertTriangle, HelpCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface DecisionOption {
  label: string;
  name: string;
  description?: Translatable;
  status: Translatable;
  tradeoffs?: Translatable[];
  selected: boolean;
}

export interface DecisionBlockProps {
  id?: string;
  label?: Translatable;
  title: Translatable;
  description: Translatable;
  options: DecisionOption[];
  rationale?: Translatable;
  background?: "bg" | "surface" | "surface-2";
}

export default function DecisionBlock({
  id = "decision",
  label = { id: "Kompromi & Keputusan", en: "Trade-offs & Decision" },
  title,
  description,
  options,
  rationale,
  background = "bg",
}: DecisionBlockProps) {
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
        <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
          {t(description)}
        </p>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {options.map((opt, idx) => (
            <Card
              key={idx}
              variant={opt.selected ? "surface" : "surface-2"}
              className={`p-6 flex flex-col justify-between ${
                opt.selected
                  ? "border-primary/40 shadow-card ring-1 ring-primary/20"
                  : "border-border opacity-85"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
                    {opt.label}
                  </span>
                  <Badge
                    variant={opt.selected ? "primary" : "outline"}
                    size="sm"
                  >
                    {t(opt.status)}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-text mb-2">
                  {opt.name}
                </h3>

                {opt.description && (
                  <p className="text-xs md:text-sm text-muted leading-relaxed mb-4">
                    {t(opt.description)}
                  </p>
                )}

                {opt.tradeoffs && opt.tradeoffs.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-border mt-3">
                    <div className="text-[10px] font-mono uppercase font-bold text-subtle">
                      {t({ id: "Implikasi:", en: "Trade-offs:" })}
                    </div>
                    {opt.tradeoffs.map((to, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-muted">
                        <span className="text-primary font-bold">•</span>
                        <span>{t(to)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center gap-2">
                {opt.selected ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary font-mono">
                    <Check size={14} />
                    {t({ id: "Keputusan Terpilih", en: "Selected Architecture" })}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-subtle font-mono">
                    <AlertTriangle size={14} />
                    {t({ id: "Ditolak / Risiko Tinggi", en: "Rejected Path" })}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Rationale Footer Callout */}
        {rationale && (
          <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3">
            <GitCommit size={18} className="text-primary mt-0.5 shrink-0" />
            <p className="text-xs md:text-sm text-muted leading-relaxed">
              <strong className="text-text">{t({ id: "Alasan Utama: ", en: "Rationale: " })}</strong>
              {t(rationale)}
            </p>
          </div>
        )}

      </div>
    </Section>
  );
}
