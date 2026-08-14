import { Translatable } from "@/types";
import { ComparisonItem } from "@/components/project/blocks/BeforeAfterBlock";
import { ArchitectureLayer } from "@/components/project/blocks/ArchitectureBlock";
import { MetricItem } from "@/components/project/blocks/MetricBlock";
import { OutcomeItem } from "@/components/project/blocks/OutcomeBlock";
import { DecisionOption } from "@/components/project/blocks/DecisionBlock";
import { ImplementationModule } from "@/components/project/blocks/TechnicalImplementation";

import { fikAppsData } from "./projects/fik-apps";
import { fmsData } from "./projects/fms";
import { pilmoData } from "./projects/pilmo";
import { aifaData } from "./projects/aifa";
import { oneCallData } from "./projects/one-call";

export interface ProjectDetailV2 {
  slug: string;
  hero: {
    title: { line1: string; line2?: string };
    tagline: Translatable;
    category?: Translatable;
    stats?: { label: Translatable; value: string }[];
    role: Translatable;
    timeline?: Translatable;
    team: Translatable;
    organization?: Translatable;
    technologies?: string[];
    image?: string;
  };
  context: {
    title: Translatable;
    description: Translatable;
    problemStatement?: Translatable;
    challenges?: Translatable[];
    objectives?: Translatable[];
    points?: Translatable[];
  };
  metrics?: MetricItem[];
  comparisons?: ComparisonItem[];
  decision: {
    title: Translatable;
    description: Translatable;
    options: DecisionOption[];
    rationale?: Translatable;
  };
  architecture?: {
    title: Translatable;
    description: Translatable;
    layers: ArchitectureLayer[];
  };
  solutions: {
    title: Translatable;
    description?: Translatable;
    items: ImplementationModule[];
  };
  evidence?: {
    title: Translatable;
    description?: Translatable;
    image?: string;
    caption?: Translatable;
    insights?: { title: Translatable; value: string; description?: Translatable }[];
  };
  outcomes?: {
    title: Translatable;
    description?: Translatable;
    items: OutcomeItem[];
    testimonial?: {
      quote: Translatable;
      author: string;
      role: Translatable;
    };
  };
  reflection: {
    quote: Translatable;
    description: Translatable;
    takeaways?: Translatable[];
  };
}

export const projectDetailsV2: Record<string, ProjectDetailV2> = {
  "fik-apps": fikAppsData,
  "fleet-management": fmsData,
  "pilmo": pilmoData,
  "aifa": aifaData,
  "onecall": oneCallData,
};
