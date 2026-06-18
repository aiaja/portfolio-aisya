import { ProjectDetailV2 } from "../project-details";

export const fikAppsData: ProjectDetailV2 = {
  slug: "fik-apps",
  hero: {
    title: { line1: "Scaling FIK Apps:", line2: "Department to Faculty." },
    tagline: {
      en: "How we transformed a fragmented academic ecosystem into a unified faculty platform serving 6,000+ students.",
      id: "Bagaimana kami mentransformasi ekosistem akademik yang terfragmentasi menjadi platform fakultas terpadu untuk 6.000+ mahasiswa.",
    },
    stats: [
      { label: { en: "Students", id: "Mahasiswa" }, value: "6,000+" },
      { label: { en: "Lecturers", id: "Dosen" }, value: "178" },
    ],
    role: { en: "Frontend Lead", id: "Frontend Lead" },
    team: { en: "4 Engineers", id: "4 Engineer" },
    image: "/images/FIK APPS.svg",
  },
  context: {
    title: { en: "A fragmented foundation.", id: "Fondasi yang terfragmentasi." },
    description: {
      en: "The faculty had multiple study programs developed in isolation. This led to a 'UI Wild West'—duplicate components, inconsistent branding, and a code structure that was impossible to maintain at scale.",
      id: "Fakultas memiliki beberapa program studi yang dikembangkan secara terpisah. Hal ini menyebabkan 'UI Wild West'—komponen duplikat, branding tidak konsisten, dan struktur kode yang mustahil dipelihara dalam skala besar.",
    },
    points: [
      { en: "190+ Scattered Components", id: "190+ Komponen Tersebar" },
      { en: "Inconsistent User Experience", id: "Pengalaman Pengguna Tidak Konsisten" },
    ],
  },
  decision: {
    title: { en: "Scalability over Perfection.", id: "Skalabilitas di atas Kesempurnaan." },
    description: {
      en: "As an engineer, I wanted a full rewrite. But the risk was too high—it would break production for active programs. I chose an incremental transformation instead.",
      id: "Sebagai engineer, saya ingin refactor total. Namun risikonya terlalu tinggi—akan merusak produksi bagi program studi yang aktif. Saya memilih transformasi bertahap.",
    },
    options: [
      {
        label: "Option A",
        name: "Full Rewrite",
        status: { en: "⚠ High Risk / Breakage", id: "⚠ Risiko Tinggi / Rusak" },
        selected: false,
      },
      {
        label: "Option B",
        name: "Incremental Refactor",
        status: { en: "✓ Zero Downtime / Safe", id: "✓ Tanpa Downtime / Aman" },
        selected: true,
      },
    ],
  },
  solutions: {
    title: { en: "Building the Ecosystem.", id: "Membangun Ekosistem." },
    items: [
      {
        title: { en: "Modular RBAC Redesign", id: "Redesain RBAC Modular" },
        description: {
          en: "Transitioned from simple Admin roles to a 4-tier system matching faculty hierarchy.",
          id: "Transisi dari role Admin sederhana ke sistem 4-tier yang sesuai hierarki fakultas.",
        },
        tags: ["Super", "Web", "Program", "Coord"],
        colSpan: 7,
      },
      {
        title: { en: "190+ → 25", id: "190+ → 25" },
        description: {
          en: "Consolidated scattered components into a unified Shared System.",
          id: "Mengonsolidasi komponen yang tersebar ke dalam satu Shared System.",
        },
        colSpan: 5,
      },
      {
        title: { en: "Template-based CMS", id: "CMS Berbasis Template" },
        description: {
          en: "A compromise between flexibility and faculty-wide branding consistency.",
          id: "Kompromi antara fleksibilitas dan konsistensi branding fakultas.",
        },
        colSpan: 5,
      },
      {
        title: { en: "Global Data-Table", id: "Data-Table Global" },
        description: {
          en: "One standardized component to rule all academic data views.",
          id: "Satu komponen standar untuk mengatur semua tampilan data akademik.",
        },
        icon: "Table",
        colSpan: 7,
      },
    ],
  },
  reflection: {
    quote: {
      en: "The best solution isn't always the most technically ideal one. It's the one that survives the real world.",
      id: "Solusi terbaik tidak selalu yang paling ideal secara teknis. Tapi yang bisa bertahan di dunia nyata.",
    },
    description: {
      en: "Engineering decisions must balance user needs, business risks, and legacy systems. Incremental transformation gave us more impact than a rewrite ever could.",
      id: "Keputusan engineering harus menyeimbangkan kebutuhan pengguna, risiko bisnis, dan sistem lama. Transformasi bertahap memberi dampak lebih besar daripada rewrite total.",
    },
  },
};
