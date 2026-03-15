import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Marquee from "@/components/ui/Marquee";
import { techStack } from "@/data/techstack";
import Image from "next/image";

const skills = [
  "Frontend Development",
  "UI/UX Design",
  "Responsive Web Design",
  "Project Management",
  "Team Leadership",
  "REST API Integration",
  "Version Control (Git)",
  "Wireframing & Mockups",
  "Design Systems",
  "Agile / Scrum",
];

const frameworks = techStack.filter((t) => t.category === "framework");
const languages = techStack.filter((t) => t.category === "language");
const tools = techStack.filter((t) => t.category === "tool");

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionTitle label="What I Know" title="Skills & Tech Stack" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Marquee Skills — full width */}
        <BentoCard variant="green" className="md:col-span-3 overflow-hidden">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase mb-4">
            Skill set
          </p>
          <div className="flex flex-col gap-3">
            <Marquee items={skills} direction="left" speed={60} />
            <Marquee items={skills} direction="right" speed={60} />
          </div>
        </BentoCard>

        {/* Frameworks & Libraries */}
        <BentoCard variant="pink-light" className="flex flex-col gap-4">
          <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase">
            Frameworks & Libraries
          </p>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2"
              >
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-xs font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Languages */}
        <BentoCard variant="charcoal" className="flex flex-col gap-4">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase">
            Languages
          </p>
          <div className="flex flex-wrap gap-3">
            {languages.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-beige/10 rounded-xl px-3 py-2"
              >
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <span className="text-beige text-xs font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Tools */}
        <BentoCard variant="pink" className="flex flex-col gap-4">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase">
            Tools
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-beige/10 rounded-xl px-3 py-2"
              >
                <div className="relative w-5 h-5 shrink-0">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <span className="text-beige text-xs font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Certifications */}
        <BentoCard variant="beige" className="md:col-span-2 flex flex-col gap-4">
          <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase">
            Certifications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: "Associate Data Scientist", issuer: "BNSP", year: "2025" },
              { title: "Getting Started with Deep Learning", issuer: "NVIDIA", year: "2024" },
              { title: "Backend Developer", issuer: "Doscom University", year: "2024" },
            ].map((cert) => (
              <div
                key={cert.title}
                className="bg-white/50 rounded-xl p-3 flex flex-col gap-1"
              >
                <p className="text-green-primary font-semibold text-xs leading-snug">
                  {cert.title}
                </p>
                <p className="text-charcoal/60 text-xs">{cert.issuer}</p>
                <p className="text-charcoal/40 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Soft Skills */}
        <BentoCard variant="green" className="flex flex-col gap-4">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase">
            Soft Skills
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Project Management",
              "Team Leadership",
              "Effective Communication",
              "Problem Solving",
              "Critical Thinking",
              "Organizational Skills",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="text-pink-primary text-sm shrink-0">→</span>
                <span className="text-beige/80 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </BentoCard>

      </div>
    </section>
  );
}