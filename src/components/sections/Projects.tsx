import Image from "next/image";
import { ExternalLink, Github, Clock } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/project";

const Projects = () => {
  return (
    <section id="projects" className="py-8">
      <SectionTitle label="My Work" title="Featured Projects" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Project 1 — Large featured */}
        <BentoCard
          variant="charcoal"
          className="md:col-span-2 flex flex-col justify-between min-h-[320px]"
        >
          {/* Image */}
          <div
            className="relative w-full rounded-xl overflow-hidden mb-4"
            style={{ height: "180px" }}
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              sizes="600px"
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            {/* Status badge */}
            <div className="absolute top-3 right-3">
              {projects[0].status === "ongoing" ? (
                <span
                  className="inline-flex items-center gap-1.5 bg-pink-primary text-beige text-xs font-semibold rounded-full"
                  style={{ padding: "4px 10px" }}
                >
                  <Clock size={10} />
                  Ongoing
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 bg-green-primary text-beige text-xs font-semibold rounded-full"
                  style={{ padding: "4px 10px" }}
                >
                  Done
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-beige font-bold text-xl">{projects[0].title}</h3>
            <p className="text-beige/70 text-sm leading-relaxed">{projects[0].description}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {projects[0].tags.map((tag) => (
                <Badge key={tag} label={tag} variant="outline" size="sm" />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-4">
            {projects[0].githubUrl && (
              <a
                href={projects[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-beige/70 hover:text-pink-primary transition-colors no-underline text-sm"
              >
                <Github size={16} />
                Source
              </a>
            )}
            {projects[0].liveUrl && (
              <a
                href={projects[0].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-beige/70 hover:text-pink-primary transition-colors no-underline text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {projects[0].status === "ongoing" && !projects[0].liveUrl && (
              <span className="text-beige/40 text-xs italic">Private project</span>
            )}
          </div>
        </BentoCard>

        {/* Project 2 — Small */}
        <BentoCard
          variant="green"
          className="flex flex-col justify-between min-h-[320px]"
        >
          <div
            className="relative w-full rounded-xl overflow-hidden mb-4"
            style={{ height: "140px" }}
          >
            <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              sizes="300px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-primary/60 to-transparent" />
            <div className="absolute top-3 right-3">
              <span
                className="inline-flex items-center bg-beige/20 text-beige text-xs font-semibold rounded-full"
                style={{ padding: "4px 10px" }}
              >
                Done
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-beige font-bold text-lg">{projects[1].title}</h3>
            <p className="text-beige/70 text-sm leading-relaxed line-clamp-3">{projects[1].description}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {projects[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-beige/10 text-beige/80 rounded-full"
                  style={{ padding: "3px 10px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            {projects[1].githubUrl && (
              <a
                href={projects[1].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-beige/70 hover:text-pink-primary transition-colors no-underline text-sm"
              >
                <Github size={16} />
                Source
              </a>
            )}
          </div>
        </BentoCard>

        {/* Project 3 */}
        <BentoCard
          variant="pink-light"
          className="flex flex-col justify-between min-h-[280px]"
        >
          <div
            className="relative w-full rounded-xl overflow-hidden mb-4"
            style={{ height: "130px" }}
          >
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              sizes="300px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-light/60 to-transparent" />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-charcoal font-bold text-lg">{projects[2].title}</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-2">{projects[2].description}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {projects[2].tags.map((tag) => (
                <Badge key={tag} label={tag} variant="green" size="sm" />
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Project 4 */}
        <BentoCard
          variant="pink"
          className="flex flex-col justify-between min-h-[280px]"
        >
          <div
            className="relative w-full rounded-xl overflow-hidden mb-4"
            style={{ height: "130px" }}
          >
            <Image
              src={projects[3].image}
              alt={projects[3].title}
              fill
              sizes="300px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-primary/60 to-transparent" />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-beige font-bold text-lg">{projects[3].title}</h3>
            <p className="text-beige/70 text-sm leading-relaxed line-clamp-2">{projects[3].description}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {projects[3].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-beige/20 text-beige rounded-full"
                  style={{ padding: "3px 10px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* CTA Card */}
        <BentoCard
          variant="beige"
          className="flex flex-col items-center justify-center text-center gap-4 min-h-[280px]"
        >
          <div
            className="w-12 h-12 rounded-full bg-green-primary flex items-center justify-center"
          >
            <Github size={22} className="text-beige" />
          </div>
          <div>
            <p className="text-charcoal font-bold text-lg">See more projects</p>
            <p className="text-charcoal/60 text-sm mt-1">
              Check out my GitHub for more work
            </p>
          </div>
          <a
            href="https://github.com/aiaja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-primary text-beige text-sm font-semibold rounded-full hover:bg-green-secondary transition-colors no-underline"
            style={{ padding: "8px 20px" }}
          >
            <Github size={14} />
            Visit GitHub
          </a>
        </BentoCard>

      </div>
    </section>
  );
};

export default Projects;