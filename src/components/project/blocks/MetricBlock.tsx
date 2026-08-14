"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface MetricItem {
  value: string;
  label: Translatable;
  description?: Translatable;
  trend?: string;
  badge?: Translatable;
}

export interface MetricBlockProps {
  id?: string;
  label?: Translatable;
  title?: Translatable;
  description?: Translatable;
  metrics: MetricItem[];
}

export default function MetricBlock({
  id = "metrics",
  label = { id: "Dampak Terukur", en: "Measurable Impact" },
  title = { id: "Metrik & Hasil Rekayasa", en: "Key Engineering Metrics" },
  description,
  metrics,
}: MetricBlockProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background="surface-2">
      <div className="max-w-[900px] mx-auto">
        {title && (
          <div className="mb-10 text-center">
            {label && (
              <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-2 block select-none">
                {t(label)}
              </span>
            )}
            <h2 className="text-[clamp(24px,3.5vw,34px)] font-extrabold text-text tracking-tight">
              {t(title)}
            </h2>
            {description && (
              <p className="text-muted text-sm md:text-base mt-2 max-w-xl mx-auto">
                {t(description)}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <Card
              key={idx}
              variant="surface"
              className="p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-2xl md:text-3xl font-extrabold text-text tracking-tight">
                    {item.value}
                  </span>
                  {item.badge && (
                    <Badge variant="primary" size="sm">
                      {t(item.badge)}
                    </Badge>
                  )}
                </div>

                <div className="text-xs font-mono font-bold uppercase text-primary tracking-wider mb-2">
                  {t(item.label)}
                </div>
              </div>

              {item.description && (
                <p className="text-xs text-muted leading-relaxed mt-2 pt-2 border-t border-border">
                  {t(item.description)}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
