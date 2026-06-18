import { Translatable } from "@/types";

export interface Step {
  number: string;
  name: Translatable;
  desc: Translatable;
  items: Translatable[];
}

export const steps: Step[] = [
  {
    number: "01",
    name: { id: "Temukan", en: "Discover" },
    desc: {
      id: "Masalah jarang sekali seperti yang pertama kali terlihat. Saya mulai dengan observasi lapangan dan wawancara pengguna sebelum menyentuh alat apa pun.",
      en: "Problems are rarely what they first appear. I start with field observations and user interviews before touching any tool."
    },
    items: [
      { id: "Wawancara & observasi pengguna", en: "User interviews & observation" },
      { id: "Pemetaan pemangku kepentingan", en: "Stakeholder mapping" },
      { id: "Validasi masalah", en: "Problem validation" },
      { id: "Riset pasar & konteks", en: "Market & context research" }
    ]
  },
  {
    number: "02",
    name: { id: "Putuskan", en: "Decide" },
    desc: {
      id: "Rekayasa yang baik dimulai dengan trade-off yang baik. Saya memfacilitasi penyelarasan antara kebutuhan pengguna, kendala teknis, dan tenggat waktu.",
      en: "Good engineering starts with good trade-offs. I facilitate alignment between user needs, technical constraints, and timelines."
    },
    items: [
      { id: "Analisis trade-off", en: "Trade-off analysis" },
      { id: "Prioritas fitur", en: "Feature prioritization" },
      { id: "Penyelarasan pemangku kepentingan", en: "Stakeholder alignment" },
      { id: "Pivot berbasis bukti", en: "Evidence-based pivots" }
    ]
  },
  {
    number: "03",
    name: { id: "Bangun", en: "Build" },
    desc: {
      id: "Saya mengode frontend, mengoordinasikan tim lintas fungsi, dan melakukan iterasi berdasarkan penggunaan nyata — bukan asumsi.",
      en: "I code the frontend, coordinate cross-functional teams, and iterate based on real usage — not assumptions."
    },
    items: [
      { id: "Frontend React / Next.js", en: "React / Next.js frontend" },
      { id: "Arsitektur komponen", en: "Component architecture" },
      { id: "Koordinasi lintas fungsi", en: "Cross-functional coordination" },
      { id: "Pengiriman iteratif", en: "Iterative delivery" }
    ]
  }
];
