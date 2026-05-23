import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "nexa-diesel-track",
    title: "Nexa Diesel Track",
    description:
      "A SaaS platform to digitalize fleet management for logistics companies. A multi-tenant solution enabling companies to manage multiple fleets in one integrated system.",
    image: "/images/nexa-diesel.png",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Leaflet"],
    status: "ongoing",
    role: "Lead Frontend Developer",
    timeline: "2024 - Present",
    content: {
      challenge: "Digitalisasi armada logistik manual menjadi sistem terintegrasi yang mampu menangani 100+ unit secara real-time dengan efisiensi pemantauan yang tinggi.",
      process: "Membangun dashboard multi-tenant menggunakan Next.js App Router untuk performa optimal, serta integrasi Leaflet.js untuk pelacakan armada secara geografis.",
      impact: [
        { label: "Efficiency Gain", value: "40%" },
        { label: "Active Units", value: "500+" },
      ],
    },
  },
  {
    slug: "ecopos",
    title: "ECOPOS",
    description:
      "A modern Point of Sales web platform for transaction management, featuring transaction recording, product management, and a sales monitoring dashboard.",
    image: "/images/ecopos.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/aiaja/ecopos-frontend",
    status: "done",
    role: "Frontend Developer",
    timeline: "2023 - 2024",
    content: {
      challenge: "Menciptakan sistem kasir yang ringan, responsif, dan mudah digunakan oleh UMKM dengan fitur pelaporan yang akurat.",
      process: "Menggunakan Tailwind CSS untuk styling yang cepat dan Shadcn UI untuk komponen yang konsisten, serta optimasi state management untuk transaksi cepat.",
      impact: [
        { label: "Transaction Speed", value: "2x faster" },
        { label: "User Satisfaction", value: "95%" },
      ],
    },
  },
  {
    slug: "dinacom-2025",
    title: "DINACOM 2025",
    description:
      "A national-scale competition registration website serving hundreds of participants, built with a responsive layout and reliable validation system.",
    image: "/images/dinacom.png",
    tags: ["React.js", "Tailwind CSS"],
    status: "done",
    role: "Web Developer",
    timeline: "2024",
    content: {
      challenge: "Menangani lonjakan traffic pendaftaran kompetisi nasional dengan sistem validasi form yang ketat namun tetap user-friendly.",
      process: "Implementasi React hook form untuk manajemen form yang efisien dan integrasi API yang handal untuk proses registrasi.",
      impact: [
        { label: "Participants", value: "500+" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
  },
  {
    slug: "meetozy",
    title: "Meetozy",
    description:
      "A gamified virtual office platform that combines game elements to boost productivity and remote team collaboration.",
    image: "/images/meetozy.png",
    tags: ["N8N"],
    status: "done",
    role: "Automation Engineer",
    timeline: "2023",
    content: {
      challenge: "Mengintegrasikan berbagai alat produktivitas ke dalam satu platform gamifikasi menggunakan alur kerja otomatisasi.",
      process: "Memanfaatkan N8N untuk membangun alur kerja otomatisasi yang menghubungkan elemen permainan dengan aktivitas kerja nyata.",
      impact: [
        { label: "Workflows", value: "12+" },
        { label: "Engagement", value: "High" },
      ],
    },
  },
];
