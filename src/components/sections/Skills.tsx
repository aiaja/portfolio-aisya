"use client";

import { techStack } from "@/data/techstack";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Skills = () => {
  const { t } = useLanguage();

  // Curate remaining stack (excluding the 5 in Hero)
  const remainingStack = techStack.filter(
    (tech) =>
      !["Next.js", "React", "TypeScript", "Figma", "Laravel"].includes(tech.name)
  );

  return (
    <section
      id="skills"
      className="border-y border-gray-200 py-6 my-12 overflow-hidden bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e1e1e]/40 shrink-0">
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
            className="flex gap-6 pr-6 shrink-0"
          >
            {/* Double the array for seamless scrolling loop */}
            {[...remainingStack, ...remainingStack].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm whitespace-nowrap hover:scale-105 transition-transform duration-200 cursor-default"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs font-bold text-[#1e1e1e] tracking-tight">
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
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default Skills;
