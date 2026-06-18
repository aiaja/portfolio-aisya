import { Translatable } from "@/types";

export interface TrustItem {
  icon: string;
  text: Translatable;
  sub: Translatable;
}

export const trustItems: TrustItem[] = [
  {
    icon: "Star",
    text: "GPA 3.78 / 4.00",
    sub: { id: "Ilmu Komputer", en: "Computer Science" },
  },
  {
    icon: "Monitor",
    text: "Frontend Engineer",
    sub: "Bengkel Koding",
  },
  {
    icon: "Users",
    text: "Vice President",
    sub: "Dian Nuswantoro CC",
  },
  {
    icon: "GraduationCap",
    text: "Teaching Assistant",
    sub: "Laravel · MVC",
  },
  {
    icon: "Award",
    text: { id: "Finalis Nasional", en: "National Finalist" },
    sub: { id: "5 Kompetisi", en: "5 Competitions" },
  },
];
