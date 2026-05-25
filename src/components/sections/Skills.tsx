import Marquee from "@/components/ui/Marquee";
import { marqueeSkills } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="border-y border-charcoal/5 py-4 my-8 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30 shrink-0">
          Key Stack
        </p>
        <Marquee items={marqueeSkills} speed={50} className="flex-1" />
      </div>
    </section>
  );
};

export default Skills;
