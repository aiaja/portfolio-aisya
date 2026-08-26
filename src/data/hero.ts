import { Translatable } from "@/types";

export const heroData = {
  title: {
    line1: "Product-Minded",
    line2: "Frontend Engineer"
  },
  description: {
    id: "Sistem frontend yang saya bangun kini dipakai 6.000+ mahasiswa dan 178 dosen — hasil dari riset lapangan dan wawancara pemangku kepentingan yang diterjemahkan langsung jadi produk nyata.",
    en: "I've shipped frontend systems now used by 6,000+ students and 178 lecturers — turning field research and stakeholder interviews into interfaces that actually ship."
  } as Translatable,
  cta: {
    primary: { id: "Lihat Karya Saya", en: "View My Work" },
    secondary: { id: "Resume", en: "Resume" }
  }
};
