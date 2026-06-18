import { Translatable } from "@/types";
import { fikAppsData } from "./projects/fik-apps";
import { fmsData } from "./projects/fms";
import { pilmoData } from "./projects/pilmo";

export interface ProjectDetailV2 {
  slug: string;
  hero: {
    title: { line1: string; line2: string };
    tagline: Translatable;
    stats: { label: Translatable; value: string }[];
    role: Translatable;
    team: Translatable;
    image?: string;
  };
  context: {
    title: Translatable;
    description: Translatable;
    points: Translatable[];
  };
  decision: {
    title: Translatable;
    description: Translatable;
    options: {
      label: string;
      name: string;
      status: Translatable;
      selected: boolean;
    }[];
  };
  solutions: {
    title: Translatable;
    items: {
      title: Translatable;
      description: Translatable;
      tags?: string[];
      icon?: string;
      colSpan: number;
    }[];
  };
  reflection: {
    quote: Translatable;
    description: Translatable;
  };
}

export const projectDetailsV2: Record<string, ProjectDetailV2> = {
  "fik-apps": fikAppsData,
  "fms": fmsData,
  "pilmo": pilmoData,
};
