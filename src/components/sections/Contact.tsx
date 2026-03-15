import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <SectionTitle label="Get In Touch" title="Contact Me" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Card 1 — CTA utama */}
        <BentoCard variant="green" className="md:col-span-2 flex flex-col justify-between min-h-[220px]">
          <div>
            <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase mb-3">
              Open for opportunities
            </p>
            <h3 className="text-beige text-2xl md:text-3xl font-bold leading-tight mb-3">
              Let&apos;s work <span className="text-pink-primary">together!</span> ✨
            </h3>
            <p className="text-beige/75 text-sm leading-relaxed max-w-md">
              I&apos;m currently open for internship, freelance, and collaboration opportunities.
              Feel free to reach out — I&apos;d love to connect!
            </p>
          </div>
          <a
            href="mailto:aisyafirst@gmail.com"
            className="inline-flex items-center gap-2 bg-beige text-green-primary text-sm font-semibold rounded-full hover:bg-pink-primary hover:text-beige transition-all duration-200 no-underline self-start mt-6"
            style={{ padding: "10px 24px" }}
          >
            <Send size={14} />
            Send me an email
          </a>
        </BentoCard>

        {/* Card 2 — Info */}
        <BentoCard variant="pink" className="flex flex-col justify-between">
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase mb-4">
            Find me
          </p>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-beige/20 flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-beige" />
              </div>
              <div>
                <p className="text-beige font-medium text-sm">Location</p>
                <p className="text-beige/70 text-xs">Semarang, Indonesia 🇮🇩</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-beige/20 flex items-center justify-center shrink-0">
                <Mail size={14} className="text-beige" />
              </div>
              <div>
                <p className="text-beige font-medium text-sm">Email</p>
                <a
                  href="mailto:aisyafirst@gmail.com"
                  className="text-beige/70 text-xs hover:text-beige transition-colors no-underline"
                >
                  aisyafirst@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-beige/20 flex items-center justify-center shrink-0">
                <Linkedin size={14} className="text-beige" />
              </div>
              <div>
                <p className="text-beige font-medium text-sm">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/aisyanrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beige/70 text-xs hover:text-beige transition-colors no-underline"
                >
                  linkedin.com/in/aisyanrs
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-beige/20 flex items-center justify-center shrink-0">
                <Github size={14} className="text-beige" />
              </div>
              <div>
                <p className="text-beige font-medium text-sm">GitHub</p>
                <a
                  href="https://github.com/aiaja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beige/70 text-xs hover:text-beige transition-colors no-underline"
                >
                  github.com/aiaja
                </a>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 3 — Response time */}
        <BentoCard variant="charcoal" className="flex flex-col justify-center items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-pink-primary/20 flex items-center justify-center">
            <Mail size={20} className="text-pink-primary" />
          </div>
          <div>
            <p className="text-beige font-bold text-lg">Quick Response</p>
            <p className="text-beige/60 text-sm mt-1">
              Usually replies within <span className="text-pink-primary font-semibold">24 hours</span>
            </p>
          </div>
        </BentoCard>

        {/* Card 4 — Availability */}
        <BentoCard variant="pink-light" className="flex flex-col justify-center gap-3">
          <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase">
            Availability
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { type: "Internship", available: true },
              { type: "Freelance", available: true },
              { type: "Full-time", available: false },
              { type: "Collaboration", available: true },
            ].map(({ type, available }) => (
              <div key={type} className="flex items-center justify-between">
                <span className="text-charcoal text-sm">{type}</span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full"
                  style={{ padding: "3px 10px",
                    backgroundColor: available ? "rgba(18,84,100,0.1)" : "rgba(44,44,42,0.08)",
                    color: available ? "#125464" : "#9a9a96"
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: available ? "#125464" : "#9a9a96" }}
                  />
                  {available ? "Open" : "Not now"}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Card 5 — Quote */}
        <BentoCard variant="beige" className="flex flex-col justify-center gap-3">
          <p className="text-charcoal/40 text-xs font-semibold tracking-widest uppercase">
            My motto
          </p>
          <blockquote className="text-charcoal text-base font-medium leading-relaxed">
            &ldquo;Bridging the gap between writing clean code and shipping products that people actually use.&rdquo;
          </blockquote>
          <p className="text-charcoal/50 text-sm">— Aisya Nur Syakbani</p>
        </BentoCard>

      </div>
    </section>
  );
}