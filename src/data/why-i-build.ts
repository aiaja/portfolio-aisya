import { Translatable } from "@/types";

export interface WhyIBuildStory {
  tag: Translatable;
  title: string;
  problem: Translatable;
  quote: Translatable;
}

export const whyIBuildStories: WhyIBuildStory[] = [
  {
    tag: { id: "Infrastruktur", en: "Infrastructure" },
    title: "FIK Apps",
    problem: {
      id: "Dibangun untuk satu departemen. Diperlukan untuk diskalakan ke seluruh fakultas.",
      en: "Built for one department. Needed to scale to an entire faculty."
    },
    quote: {
      id: "Skalabilitas bukan tentang menambah fitur. Ini tentang menghapus apa yang rusak.",
      en: "Scaling isn't about adding features. It's about removing what breaks."
    }
  },
  {
    tag: { id: "Kesehatan", en: "Health" },
    title: "PILMO",
    problem: {
      id: "Dimulai dengan nenek saya. Berakhir dengan masalah kesehatan masyarakat.",
      en: "Started with my grandmother. Ended with a public-health problem."
    },
    quote: {
      id: "Kami tidak butuh aplikasi pengingat. Kami butuh sistem pendukung.",
      en: "We didn't need a reminder app. We needed a support system."
    }
  },
  {
    tag: { id: "Keselamatan", en: "Safety" },
    title: "OneCall",
    problem: {
      id: "Saya kehilangan seorang teman karena begal. Respons darurat seharusnya tidak bergantung pada membuka kunci ponsel.",
      en: "I lost my friend because of a robbery. Emergency response shouldn't depend on unlocking a phone."
    },
    quote: {
      id: "UI terbaik adalah tanpa UI — ketika detik sangat berharga, setiap ketukan layar terasa sangat mahal.",
      en: "The best UI is no UI — when seconds count, every tap costs too much."
    }
  },
];
