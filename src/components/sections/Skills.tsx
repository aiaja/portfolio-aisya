"use client";

import { techStack } from "@/data/techstack";
import { useLanguage } from "@/context/LanguageContext";
import Section from "../ui/Section";
import Badge from "../ui/Badge";

const Skills = () => {
  const { t } = useLanguage();

  const frameworks = techStack.filter((t) => t.category === "framework");
  const languages = techStack.filter((t) => t.category === "language");
  const tools = techStack.filter((t) => t.category === "tool");

  const categories = [
    {
      title: { id: "Frameworks & Library", en: "Frameworks & Libraries" },
      items: frameworks,
    },
    {
      title: { id: "Bahasa Pemrograman", en: "Languages" },
      items: languages,
    },
    {
      title: { id: "Tools & Ekosistem", en: "Tools & Ecosystem" },
      items: tools,
    },
  ];

  return (
    <Section id="skills" background="bg">
      <div className="mb-12 md:mb-16">
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t({ id: "Keahlian & Perkakas", en: "Skills & Tooling" })}
        </span>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] tracking-tight text-text mb-4">
          {t({ id: "Teknologi yang Saya Gunakan", en: "Technologies I Use" })}
          <br />
          <span className="text-primary italic font-serif">
            {t({ id: "untuk Membangun Produk.", en: "to Build Products." })}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-bento border border-border bg-surface shadow-subtle flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-5 pb-3 border-b border-border">
                {t(category.title)}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-2 border border-border hover:border-primary/30 transition-colors"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs font-bold text-text">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
