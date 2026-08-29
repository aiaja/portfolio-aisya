"use client";

import { useLanguage } from "@/context/LanguageContext";
import Card from "../ui/Card";
import Section from "../ui/Section";
import Badge from "../ui/Badge";
import { experiencesV2 } from "@/data/experience";

const ExperienceGrid = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" background="transparent" withBorder={false} className="bg-surface-2/40">
      <div className="mb-12 md:mb-16">
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t({ id: "Jejak Rekayasa & Kepemimpinan", en: "Engineering & Leadership Track" })}
        </span>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] tracking-tight text-text mb-4">
          {t({ id: "Pengalaman Kerja &", en: "Professional Experience &" })}
          <br />
          <span className="text-primary italic font-serif">
            {t({ id: "Dampak Teruji.", en: "Proven Impact." })}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiencesV2.map((exp, i) => (
          <Card
            key={i}
            variant="surface"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col justify-between p-6"
          >
            <div>
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-text">
                    {exp.org}
                  </h3>
                  <span className="text-[11px] font-mono text-subtle font-medium">
                    {t(exp.period)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {t(exp.role)}
                </p>
              </div>

              {/* Impacts */}
              <ul className="flex flex-col gap-3 list-none p-0 my-5">
                {exp.impacts.map((impact, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-xs text-muted leading-relaxed">
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
            </div>

            {/* Technologies */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border mt-auto">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="subtle" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceGrid;
