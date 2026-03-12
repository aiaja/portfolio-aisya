export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "done" | "ongoing";
};

export const projects: Project[] = [
  {
    title: "Nexa Diesel Track",
    description:
      "A SaaS platform to digitalize fleet management for logistics companies. A multi-tenant solution enabling companies to manage multiple fleets in one integrated system.",
    image: "/images/nexa-diesel.png",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Leaflet"],
    status: "ongoing",
  },
  {
    title: "ECOPOS",
    description:
      "A modern Point of Sales web platform for transaction management, featuring transaction recording, product management, and a sales monitoring dashboard.",
    image: "/images/ecopos.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/aiaja/ecopos-frontend",
    status: "done",
  },
  {
    title: "DINACOM 2025",
    description:
      "A national-scale competition registration website serving hundreds of participants, built with a responsive layout and reliable validation system.",
    image: "/images/dinacom.png",
    tags: ["React.js", "Tailwind CSS"],
    status: "done",
  },
  {
    title: "Meetozy",
    description:
      "A gamified virtual office platform that combines game elements to boost productivity and remote team collaboration.",
    image: "/images/meetozy.png",
    tags: ["N8N"],
    status: "done",
  },
];