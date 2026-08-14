"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { Code2, ShieldCheck, Cpu, LayoutGrid, CheckCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface ImplementationModule {
  title: Translatable;
  description: Translatable;
  tags?: string[];
  icon?: string;
  codeSnippet?: string;
  highlights?: Translatable[];
  colSpan?: number;
}

export interface TechnicalImplementationProps {
  id?: string;
  label?: Translatable;
  title: Translatable;
  description?: Translatable;
  modules: ImplementationModule[];
  background?: "bg" | "surface" | "surface-2";
}

export default function TechnicalImplementation({
  id = "implementation",
  label = { id: "Implementasi Rekayasa", en: "Technical Execution" },
  title,
  description,
  modules,
  background = "bg",
}: TechnicalImplementationProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background={background}>
      <div className="max-w-[860px] mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-2 block select-none">
            {t(label)}
          </span>
          <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-text mb-3">
            {t(title)}
          </h2>
          {description && (
            <p className="text-muted text-base md:text-lg leading-relaxed">
              {t(description)}
            </p>
          )}
        </div>

        {/* Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {modules.map((mod, idx) => {
            const spanClass =
              mod.colSpan === 7
                ? "md:col-span-7"
                : mod.colSpan === 5
                ? "md:col-span-5"
                : mod.colSpan === 6
                ? "md:col-span-6"
                : "md:col-span-12";

            return (
              <Card
                key={idx}
                variant="surface"
                className={`p-6 flex flex-col justify-between ${spanClass}`}
              >
                <div>
                  {mod.tags && mod.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {mod.tags.map((tag) => (
                        <Badge key={tag} variant="primary" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-text mb-2">
                    {t(mod.title)}
                  </h3>

                  <p className="text-xs md:text-sm text-muted leading-relaxed mb-4">
                    {t(mod.description)}
                  </p>

                  {mod.highlights && mod.highlights.length > 0 && (
                    <ul className="space-y-1.5 list-none p-0 my-3">
                      {mod.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted">
                          <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{t(h)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {mod.codeSnippet && (
                  <div className="mt-4 pt-3 border-t border-border">
                    <pre className="p-3 rounded-lg bg-bg border border-border text-[11px] font-mono text-text overflow-x-auto">
                      <code>{mod.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
