"use client";

import { techStack } from "@/data/techstack";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Skills = () => {
  const { t } = useLanguage();

  // Curate remaining stack (excluding the 5 in Hero)
  const remainingStack = techStack.filter(
    (tech) =>
      !["Next.js", "React", "TypeScript", "Figma", "Cursor"].includes(tech.name)
  );

  return (
    <section
      id="skills"
      className="relative z-20 -my-7 max-w-7xl mx-auto px-6 md:px-12 select-none"
    >
      <div className="border border-primary/20 py-3.5 px-6 md:px-10 rounded-full bg-white shadow-[0_4px_20px_rgba(203,146,137,0.08)] flex flex-col md:flex-row items-center gap-4 md:gap-8 overflow-hidden">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary shrink-0 leading-none">
          {t({ id: "Teknologi Lainnya", en: "Other Tech Stack" })}
        </p>
        
        {/* Scrolling Marquee with Icons and Names */}
        <div className="overflow-hidden flex whitespace-nowrap mask-marquee flex-1 relative w-full">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 pr-6 shrink-0 items-center"
          >
            {/* Double the array for seamless scrolling loop */}
            {[...remainingStack, ...remainingStack].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-100 bg-[#fafafa] shadow-[0_1px_3px_rgba(0,0,0,0.02)] whitespace-nowrap hover:scale-105 hover:border-primary/30 transition-all duration-200 cursor-default"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-3.5 h-3.5 object-contain"
                />
                <span className="text-[11px] font-bold text-[#1e1e1e] tracking-tight leading-none">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-marquee {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default Skills;
