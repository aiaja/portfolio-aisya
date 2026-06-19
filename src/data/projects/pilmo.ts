import { ProjectDetailV2 } from "../project-details";

export const pilmoData: ProjectDetailV2 = {
  slug: "pilmo",
  hero: {
    title: { line1: "PILMO:", line2: "Beyond Reminders." },
    tagline: {
      en: "From an elderly medication reminder to a comprehensive support ecosystem for Tuberculosis (TB) patients.",
      id: "Dari pengingat obat lansia menjadi ekosistem dukungan komprehensif untuk pasien Tuberkulosis (TBC).",
    },
    stats: [
      { label: { en: "Interviews", id: "Wawancara" }, value: "19+" },
      { label: { en: "National Rank", id: "Peringkat Nasional" }, value: "Top 8" },
    ],
    role: { en: "Product Lead", id: "Product Lead" },
    team: { en: "Research & Strategy", id: "Riset & Strategi" },
    image: "/images/PILMO.svg",
  },
  context: {
    title: { en: "A failed hypothesis.", id: "Hipotesis yang gagal." },
    description: {
      en: "PILMO started as a personal project to remind my grandmother to take hypertension medication. I assumed forgetting was a reminder problem. Field research at a local elderly clinic (Posyandu) proved me wrong: my target users didn't use smartphones.",
      id: "PILMO dimulai sebagai proyek pribadi untuk mengingatkan nenek saya minum obat hipertensi. Saya berasumsi lupa adalah masalah pengingat. Riset lapangan di Posyandu Lansia membuktikan saya salah: pengguna target saya tidak menggunakan smartphone.",
    },
    points: [
      { en: "Our users didn't use smartphones.", id: "Target Pengguna kami tidak menggunakan smartphone." },
      { en: "Symptom of a Deeper Issue", id: "Gejala dari Masalah yang Lebih Dalam" },
    ],
  },
  decision: {
    title: { en: "Pivoting the Problem.", id: "Pivoting Masalah." },
    description: {
      en: "Instead of forcing the idea, I researched long-term medication adherence and discovered Indonesia's TB crisis. Speaking with patients revealed the real issue: severe side effects, isolation, and emotional exhaustion.",
      id: "Alih-alih memaksakan ide, saya meneliti kepatuhan pengobatan jangka panjang dan menemukan krisis TBC di Indonesia. Berbicara dengan pasien mengungkapkan masalah sebenarnya: efek samping yang parah, isolasi, dan kelelahan emosional.",
    },
    options: [
      {
        label: "Assumption",
        name: "Reminder App",
        status: { en: "⚠ Ignored Emotional Context", id: "⚠ Mengabaikan Konteks Emosional" },
        selected: false,
      },
      {
        label: "Validation",
        name: "Support Ecosystem",
        status: { en: "✓ Solved the Root Cause", id: "✓ Memecahkan Akar Masalah" },
        selected: true,
      },
    ],
  },
  solutions: {
    title: { en: "Designing for Humans.", id: "Mendesain untuk Manusia." },
    items: [
      {
        title: { en: "Voice of Trust", id: "Suara Kepercayaan" },
        description: {
          en: "A 3-level reminder system utilizing voices of trusted family members to boost emotional motivation.",
          id: "Sistem pengingat 3 tingkat menggunakan suara anggota keluarga terpercaya untuk meningkatkan motivasi emosional.",
        },
        icon: "Layout",
        colSpan: 5,
      },
      {
        title: { en: "Removed Feature Bloat", id: "Menghapus Fitur Berlebih" },
        description: {
          en: "Scrapped real-time location and medication scanning. Focus shifted purely to reducing friction.",
          id: "Menghapus lokasi real-time dan pemindaian obat. Fokus beralih murni pada pengurangan hambatan.",
        },
        icon: "ShieldCheck",
        colSpan: 7,
      },
      {
        title: { en: "Stakeholder Workflows", id: "Alur Kerja Pemangku Kepentingan" },
        description: {
          en: "Designed dashboards that integrate into existing healthcare worker workflows without adding administrative burden.",
          id: "Merancang dashboard yang terintegrasi dengan alur kerja tenaga kesehatan tanpa menambah beban administratif.",
        },
        icon: "Table",
        colSpan: 7,
      },
      {
        title: { en: "Anonymous Community", id: "Komunitas Anonim" },
        description: {
          en: "A safe space to combat the social stigma and isolation commonly associated with TB treatment.",
          id: "Ruang aman untuk memerangi stigma sosial dan isolasi yang sering dikaitkan dengan pengobatan TBC.",
        },
        icon: "FileCode",
        colSpan: 5,
      },
    ],
  },
  reflection: {
    quote: {
      en: "Medication adherence is not a reminder problem. It is a support-system problem.",
      id: "Kepatuhan pengobatan bukanlah masalah pengingat. Ini adalah masalah sistem dukungan.",
    },
    description: {
      en: "PILMO taught me that solving healthcare problems requires understanding people before building technology. Technology alone cannot solve emotional exhaustion, but it can create an environment where people feel supported enough to continue treatment.",
      id: "PILMO mengajarkan saya bahwa memecahkan masalah kesehatan membutuhkan pemahaman tentang manusia sebelum membangun teknologi. Teknologi saja tidak bisa menyelesaikan kelelahan emosional, tapi bisa menciptakan lingkungan di mana orang merasa cukup didukung untuk melanjutkan pengobatan.",
    },
  },
};
