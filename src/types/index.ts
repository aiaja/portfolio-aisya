export type Locale = "id" | "en";

export type BilingualText = {
  id: string;
  en: string;
};

// Helper to allow progressive migration
export type Translatable = string | BilingualText;

export type Project = {
  slug: string;
  title: string;
  description: Translatable;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "done" | "ongoing";
  role: Translatable;
  timeline: string;
  content: {
    problem: {
      summary: Translatable;
      details: Translatable[];
    };
    decision: {
      title: Translatable;
      description: Translatable;
    }[];
    impact?: Translatable;
    result: {
      summary: Translatable;
      learnings?: Translatable[];
      metrics?: {
        label: Translatable;
        value: string;
      }[];
    };
  };
};

export type Experience = {
  company: string;
  companyUrl: string;
  role: Translatable;
  type: Translatable;
  period: Translatable;
  points?: Translatable[];
};

export type Tech = {
  name: string;
  icon: string;
  category: "framework" | "language" | "tool";
};

export type Achievement = {
  slug: string;
  title: Translatable;
  event: string;
  organizer: string;
  year: string;
  award: Translatable;
  images?: string[];
  content: {
    insight: {
      summary: Translatable;
      details: Translatable[];
    };
    validation: {
      title: Translatable;
      description: Translatable;
    }[];
    pitch: {
      summary: Translatable;
      metrics?: {
        label: Translatable;
        value: string;
      }[];
    };
  };
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
  label: Translatable;
};

export type Activity = {
  prefix: Translatable;
  highlight: Translatable;
};

export type Profile = {
  name: string;
  firstName: string;
  role: Translatable;
  location: Translatable;
  email: string;
  cvUrl: string;
  available: boolean;
  bio: Translatable;
  socials: Social[];
  stats: Stat[];
  activities: Activity[];
};

export type Education = {
  school: string;
  degree: Translatable;
  gpa: string;
};
