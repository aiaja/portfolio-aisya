import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aifa",
    title: "AIFA",
    description: {
      id: "Asisten keuangan berbasis AI untuk UMKM yang mengotomatiskan ekstraksi invoice, pembuatan proposal bisnis, dan penjadwalan staf dalam satu platform.",
      en: "An AI-powered financial assistant for SMEs that automates and integrates invoice extraction, business proposal generation, and staff scheduling in a single platform.",
    },
    image: "/images/aifa.png",
    tags: ["ReactJS", "LangChain", "Google Vision AI", "OR-Tools"],
    status: "done",
    role: {
      id: "Product Strategist & Team Lead",
      en: "Product Strategist & Team Lead",
    },
    timeline: "2025",
    content: {
      challenge: {
        id: "65 juta UMKM di Indonesia menyumbang 61% PDB, namun mayoritas masih terjebak dalam pengelolaan operasional manual yang terfragmentasi. Inkonsistensi data antar sistem menyebabkan 'bottleneck' administratif yang menghambat skala bisnis.",
        en: "65 million SMEs in Indonesia contribute 61% of the GDP, yet the majority are still trapped in fragmented manual operational management. Data inconsistency across systems creates administrative bottlenecks that hinder business scaling.",
      },
      process: {
        id: "Merancang arsitektur Multi-Agent Orchestration menggunakan LangChain untuk mengintegrasikan Google Vision (OCR), Google OR-Tools, dan Gemini AI ke dalam satu alur kerja yang kontekstual dan interoperable.",
        en: "Designed a Multi-Agent Orchestration architecture using LangChain to integrate Google Vision (OCR), Google OR-Tools, and Gemini AI into one contextual and interoperable workflow.",
      },
      impact: [
        { label: { id: "Prestasi", en: "Achievement" }, value: "National Finalist Arkavidia ITB" },
        { label: { id: "Inovasi", en: "Innovation" }, value: "Multi-Agent AI Orchestration" },
      ],
    },
  },
  {
    slug: "nexa-diesel-track",
    title: "Nexa Diesel Track",
    description: {
      id: "Platform SaaS untuk mendigitalisasi manajemen armada bagi perusahaan logistik. Solusi multi-tenant yang memungkinkan pengelolaan banyak armada dalam satu sistem terintegrasi.",
      en: "A SaaS platform to digitalize fleet management for logistics companies. A multi-tenant solution enabling companies to manage multiple fleets in one integrated system.",
    },
    image: "/images/nexa-diesel.png",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Leaflet"],
    status: "ongoing",
    role: {
      id: "Lead Frontend Developer",
      en: "Lead Frontend Developer",
    },
    timeline: "2024 - Present",
    content: {
      challenge: {
        id: "Merefaktorisasi arsitektur untuk menangani jangkauan internet yang tidak terduga di area blank spot dan merancang sistem universal untuk berbagai peran pengguna (manajer hingga driver).",
        en: "Refactoring the architecture to handle unpredictable internet coverage in blank spot areas and designing a universal system for various user roles (managers to drivers).",
      },
      process: {
        id: "Migrasi backend ke Laravel untuk percepatan time-to-market dan implementasi OCR Receipt Scanner untuk otomasi klaim biaya perjalanan driver tanpa hambatan hukum gateway pembayaran.",
        en: "Migrated backend to Laravel for faster time-to-market and implemented an OCR Receipt Scanner to automate driver expense claims without payment gateway legal hurdles.",
      },
      impact: [
        { label: { id: "Efisiensi", en: "Efficiency" }, value: "40% Gain" },
        { label: { id: "Unit Aktif", en: "Active Units" }, value: "500+" },
      ],
    },
  },
  {
    slug: "ecopos",
    title: "ECOPOS",
    description: {
      id: "Platform web Point of Sales modern untuk manajemen transaksi, menampilkan pencatatan transaksi, manajemen produk, dan dashboard pemantauan penjualan.",
      en: "A modern Point of Sales web platform for transaction management, featuring transaction recording, product management, and a sales monitoring dashboard.",
    },
    image: "/images/ecopos.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/aiaja/ecopos-frontend",
    status: "done",
    role: {
      id: "Frontend Developer",
      en: "Frontend Developer",
    },
    timeline: "2023 - 2024",
    content: {
      challenge: {
        id: "Menciptakan sistem kasir yang ringan, responsif, dan mudah digunakan oleh UMKM dengan fitur pelaporan yang akurat.",
        en: "Creating a lightweight, responsive, and easy-to-use POS system for SMEs with accurate reporting features.",
      },
      process: {
        id: "Menggunakan Tailwind CSS untuk styling yang cepat dan Shadcn UI untuk komponen yang konsisten, serta optimasi state management untuk transaksi cepat.",
        en: "Used Tailwind CSS for rapid styling and Shadcn UI for consistent components, along with state management optimization for fast transactions.",
      },
      impact: [
        { label: { id: "Kecepatan", en: "Speed" }, value: "2x faster" },
        { label: { id: "Kepuasan", en: "Satisfaction" }, value: "95%" },
      ],
    },
  },
];
