"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { Layers, Database, Globe, Shield, Terminal, ArrowDown } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface ArchitectureLayer {
  name: string;
  role: Translatable;
  technologies: string[];
  description: Translatable;
  keyContracts?: string[];
}

export interface ArchitectureBlockProps {
  id?: string;
  label?: Translatable;
  title: Translatable;
  description: Translatable;
  layers: ArchitectureLayer[];
}

export default function ArchitectureBlock({
  id = "architecture",
  label = { id: "Arsitektur Sistem", en: "System Architecture" },
  title,
  description,
  layers,
}: ArchitectureBlockProps) {
  const { t } = useLanguage();

  const layerIcons = [Globe, Layers, Shield, Database];

  return (
    <Section id={id} background="bg">
      <div className="max-w-[850px] mx-auto">
        
        {/* Header */}
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t(label)}
        </span>
        <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-text mb-4">
          {t(title)}
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
          {t(description)}
        </p>

        {/* Stacked Layer Visual Representation */}
        <div className="space-y-3">
          {layers.map((layer, idx) => {
            const Icon = layerIcons[idx % layerIcons.length];
            return (
              <div key={idx} className="relative">
                <Card
                  variant="surface"
                  className="p-5 md:p-6 hover:border-primary/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-10 border border-primary-20 flex items-center justify-center text-primary shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-text">
                          {layer.name}
                        </h3>
                        <span className="text-xs font-mono text-primary font-medium">
                          {t(layer.role)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {layer.technologies.map((tech) => (
                        <Badge key={tech} variant="subtle" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted leading-relaxed">
                    {t(layer.description)}
                  </p>

                  {layer.keyContracts && layer.keyContracts.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-subtle">
                        Contracts:
                      </span>
                      {layer.keyContracts.map((c) => (
                        <code
                          key={c}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 border border-border text-text"
                        >
                          {c}
                        </code>
                      ))}
                    </div>
                  )}
                </Card>

                {idx < layers.length - 1 && (
                  <div className="flex justify-center my-1 text-subtle">
                    <ArrowDown size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
