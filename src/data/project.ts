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
image: "https://placehold.co/600x400/125464/F7F4D5?text=Nexa+Diesel+Track",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Leaflet"],
    status: "ongoing",
  },
  {
    title: "ECOPOS",
    description:
      "A modern Point of Sales web platform for transaction management, featuring transaction recording, product management, and a sales monitoring dashboard.",
 image: "https://placehold.co/600x400/CB9289/F7F4D5?text=ECOPOS",    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/aiaja/ecopos-frontend",
    status: "done",
  },
  {
    title: "DINACOM 2025",
    description:
      "A national-scale competition registration website serving hundreds of participants, built with a responsive layout and reliable validation system.",
image: "https://placehold.co/600x400/1C7A8F/F7F4D5?text=DINACOM+2025",    tags: ["React.js", "Tailwind CSS"],
    status: "done",
  },
  {
    title: "Meetozy",
    description:
      "A gamified virtual office platform that combines game elements to boost productivity and remote team collaboration.",
    image: "https://placehold.co/600x400/2C2C2A/F7F4D5?text=Meetozy",
    tags: ["N8N"],
    status: "done",
  },
];