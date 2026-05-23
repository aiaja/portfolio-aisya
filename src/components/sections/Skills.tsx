"use client";

import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Marquee from "@/components/ui/Marquee";
import { techStack } from "@/data/techstack";
import { marqueeSkills, softSkills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import Image from "next/image";
import { motion } from "framer-motion";

const frameworks = techStack.filter((t) => t.category === "framework");
const languages = techStack.filter((t) => t.category === "language");
const tools = techStack.filter((t) => t.category === "tool");

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <SectionTitle label="Expertise" title="Skills & Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Marquee Skills — full width header-like */}
        <BentoCard variant="charcoal" className="md:col-span-4 overflow-hidden py-10">
          <p className="text-beige/30 text-[10px] font-black uppercase tracking-[0.2em] mb-8 px-4">
            Technical Keywords
          </p>
          <div className="flex flex-col gap-6">
            <Marquee items={marqueeSkills} direction="left" speed={45} />
            <Marquee items={marqueeSkills} direction="right" speed={55} />
          </div>
        </BentoCard>

        {/* Core Tech Stack Section */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Frameworks & Libraries */}
          <BentoCard variant="pink-light" className="flex flex-col gap-6 p-8">
            <p className="text-charcoal/40 text-[10px] font-black uppercase tracking-[0.2em]">
              Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/80 border border-charcoal/5 rounded-full px-4 py-2"
                >
                  <div className="relative w-4 h-4 shrink-0 grayscale hover:grayscale-0 transition-all">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-charcoal text-[11px] font-black uppercase tracking-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Languages */}
          <BentoCard variant="green" className="flex flex-col gap-6 p-8">
            <p className="text-beige/40 text-[10px] font-black uppercase tracking-[0.2em]">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/10 border border-white/5 rounded-full px-4 py-2"
                >
                  <div className="relative w-4 h-4 shrink-0 grayscale invert hover:grayscale-0 hover:invert-0 transition-all">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-beige text-[11px] font-black uppercase tracking-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Tools */}
          <BentoCard variant="pink" className="flex flex-col gap-6 p-8">
            <p className="text-beige/40 text-[10px] font-black uppercase tracking-[0.2em]">
              Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/10 border border-white/5 rounded-full px-4 py-2"
                >
                  <div className="relative w-4 h-4 shrink-0 grayscale invert hover:grayscale-0 hover:invert-0 transition-all">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-beige text-[11px] font-black uppercase tracking-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Certifications (Wide) */}
          <BentoCard variant="white" className="md:col-span-3 flex flex-col gap-6 p-8">
            <p className="text-charcoal/40 text-[10px] font-black uppercase tracking-[0.2em]">
              Certifications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="group relative bg-beige/30 hover:bg-beige/50 border border-charcoal/5 rounded-2xl p-5 transition-all"
                >
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                  <p className="text-charcoal font-black text-sm leading-tight uppercase tracking-tight mb-2">
                    {cert.title}
                  </p>
                  <p className="text-charcoal/50 text-[10px] font-bold uppercase tracking-widest">{cert.issuer}</p>
                  <p className="text-charcoal/30 text-[9px] font-mono mt-2">{cert.year}</p>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Sidebar Section */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {/* Soft Skills */}
          <BentoCard variant="beige" className="flex-1 flex flex-col gap-6 p-8">
            <p className="text-charcoal/40 text-[10px] font-black uppercase tracking-[0.2em]">
              Human Skills
            </p>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-pink-primary rounded-full" />
                  <span className="text-charcoal font-black text-xs uppercase tracking-tight">{skill}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* CTA Card */}
          <BentoCard variant="charcoal" className="p-8 group cursor-pointer overflow-hidden relative">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-green-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <h4 className="text-beige font-black text-xl italic leading-none mb-2">Need a partner?</h4>
            <p className="text-beige/40 text-[10px] font-bold uppercase tracking-[0.2em]">Let&apos;s build something great</p>
          </BentoCard>
        </div>

      </div>
    </section>
  );
};

export default Skills;
