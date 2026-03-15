import BentoCard from "../ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";
import { achievements } from "@/data/achievements";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <SectionTitle label="My Journey" title="Experience & Achievements" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Experience List */}
        <BentoCard variant="green" className="md:col-span-2 flex flex-col gap-6">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase">
            Work & Organization
          </p>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* Timeline dot */}
                <div className="flex flex-col items-center mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-primary shrink-0" />
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-beige/20 mt-1" style={{ minHeight: "40px" }} />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-beige font-bold text-base hover:text-pink-primary transition-colors no-underline"
                      >
                        {exp.company}
                      </a>
                      <p className="text-beige/80 text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block bg-beige/10 text-beige/70 text-xs font-medium rounded-full" style={{ padding: "3px 10px" }}>
                        {exp.type}
                      </span>
                      <p className="text-beige/50 text-xs mt-1">{exp.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* About Me Card */}
        <BentoCard variant="pink-light" className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase mb-4">
              About Me
            </p>
            <p className="text-charcoal text-sm leading-relaxed">
              Active student in semester 5 of Informatics Engineering at{" "}
              <span className="font-semibold text-green-primary">Universitas Dian Nuswantoro</span>,
              with a strong interest in{" "}
              <span className="font-semibold text-green-primary">Project Management</span> and{" "}
              <span className="font-semibold text-green-primary">Web Development</span>.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mt-3">
              Experienced in website development, project management, and actively involved in
              tech organizations and leadership roles. I love bridging the gap between writing
              clean code and shipping products that people actually use.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase mb-1">
              Education
            </p>
            <div className="bg-white/50 rounded-xl p-4">
              <p className="text-green-primary font-bold text-sm">Universitas Dian Nuswantoro</p>
              <p className="text-charcoal/70 text-xs mt-0.5">S1 Informatics Engineering</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-charcoal/50 text-xs">GPA</span>
                <span className="text-green-primary font-bold text-sm">3.72</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Achievements */}
        <BentoCard variant="charcoal" className="md:col-span-3 flex flex-col gap-6">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase">
            Competitions & Achievements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="bg-beige/5 rounded-xl p-4 border border-beige/10 hover:border-pink-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className="inline-block bg-pink-primary text-beige text-xs font-bold rounded-full"
                    style={{ padding: "3px 10px" }}
                  >
                    {ach.title}
                  </span>
                  <span className="text-beige/40 text-xs shrink-0">{ach.year}</span>
                </div>
                <p className="text-beige font-semibold text-sm">{ach.event}</p>
                <p className="text-beige/50 text-xs mt-0.5">{ach.organizer}</p>
                <p className="text-beige/70 text-xs mt-2 leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>
        </BentoCard>

      </div>
    </section>
  );
}