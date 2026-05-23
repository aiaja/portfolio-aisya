export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "done" | "ongoing";
  role: string;
  timeline: string;
  content: {
    challenge: string;
    process: string;
    impact: {
      label: string;
      value: string;
    }[];
  };
};

export type Experience = {
  company: string;
  companyUrl: string;
  role: string;
  type: string;
  period: string;
};

export type Tech = {
  name: string;
  icon: string;
  category: "framework" | "language" | "tool";
};

export type Achievement = {
  title: string;
  event: string;
  organizer: string;
  year: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export type Social = {
  label: string;
  href: string;
  icon: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Activity = {
  prefix: string;
  highlight: string;
};

export type Profile = {
  name: string;
  firstName: string;
  role: string;
  location: string;
  email: string;
  cvUrl: string;
  available: boolean;
  bio: string;
  socials: Social[];
  stats: Stat[];
  activities: Activity[];
};

export type Education = {
  school: string;
  degree: string;
  gpa: string;
};
