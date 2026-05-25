import { Mail, Github, Linkedin, MapPin, Download, ExternalLink, Activity } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <SectionTitle label="Get In Touch" title="Let&apos;s Connect" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
        {/* 1. REFINED MAIN CTA (3x1) */}
        <BentoCard
          variant="green"
          className="md:col-span-3 flex flex-col justify-between min-h-[350px] border border-white/5 shadow-2xl p-8 md:p-12 relative"
        >
          <div className="flex flex-col gap-6">
            <div className="max-w-xl">
              <p className="text-beige/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Let&apos;s work together
              </p>
              <h3 className="text-beige text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
                Designing for <br />{" "}
                <span className="text-pink-primary underline decoration-4 underline-offset-8">
                  human impact.
                </span>
              </h3>
              <p className="text-beige/60 text-sm font-medium leading-relaxed max-w-sm">
                Blending engineering execution with product strategy. I build
                tools that empower users and solve real-world problems.
              </p>
            </div>

            {/* Action Row: Side-by-Side Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <a
                href={`mailto:${profile.email}`}
                className="w-full sm:w-auto px-10 py-4 bg-beige text-green-primary rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-pink-primary hover:text-beige transition-all shadow-xl no-underline text-center"
              >
                Start a Conversation
              </a>
              
              <a 
                href={profile.cvUrl} 
                download
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-charcoal text-beige rounded-full font-black uppercase tracking-widest text-[10px] border border-white/10 hover:border-pink-primary transition-all shadow-xl no-underline group/cv"
              >
                <Download size={14} className="text-beige group-hover/cv:-translate-y-0.5 transition-transform" strokeWidth={3} />
                Get My CV
              </a>
            </div>
          </div>

          {/* Location Anchor (Bottom Right) */}
          <div className="md:absolute bottom-12 right-12 text-right mt-8 md:mt-0">
            <p className="text-beige/30 text-[8px] font-black uppercase tracking-widest mb-1">
              Based in
            </p>
            <h4 className="text-beige font-black text-xs uppercase tracking-widest leading-none">
              {profile.location.split(",")[0]}, {profile.location.split(",")[1]}
            </h4>
          </div>
        </BentoCard>

        {/* 2. SOCIAL LIST (1x1 Vertical) */}
        <BentoCard
          variant="white"
          className="md:col-span-1 flex flex-col gap-6 h-full shadow-2xl overflow-hidden p-8"
          noHover
        >
          <div className="flex justify-between items-center">
            <p className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em]">
              Socials
            </p>
            <Activity size={16} className="text-pink-primary animate-pulse" />
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item block p-4 bg-charcoal/5 rounded-2xl border border-charcoal/5 hover:border-pink-primary/30 transition-all no-underline"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-charcoal font-black text-[9px] uppercase tracking-widest">
                    {social.icon}
                  </span>
                  <ExternalLink
                    size={10}
                    className="text-charcoal/20 group-hover/item:text-pink-primary transition-colors"
                  />
                </div>
                <p className="text-charcoal/40 text-[8px] font-mono font-bold truncate">
                  {social.label}
                </p>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-charcoal/5 mt-auto text-center">
            <p className="text-charcoal/30 text-[8px] font-black uppercase tracking-[0.2em]">
              Usually replies in &lt; 24h
            </p>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default Contact;
