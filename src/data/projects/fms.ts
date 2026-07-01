import { ProjectDetailV2 } from "../project-details";

export const fmsData: ProjectDetailV2 = {
  slug: "fleet-management",

  hero: {
    title: {
      line1: "Keeping a Product Alive.",
      line2: "When Everything Changed.",
    },
    tagline: {
      en: "How a rejected mining solution evolved into a logistics fleet platform through market validation, continuous learning, and team leadership.",
      id: "Bagaimana solusi pertambangan yang ditolak berkembang menjadi platform manajemen armada logistik melalui validasi pasar, pembelajaran berkelanjutan, dan kepemimpinan tim.",
    },
    stats: [
      {
        label: {
          en: "Team Members",
          id: "Anggota Tim",
        },
        value: "7",
      },
      {
        label: {
          en: "Industry Pivot",
          id: "Pivot Industri",
        },
        value: "Mining → Logistics",
      },
    ],
    role: {
      en: "Product Manager & Frontend Engineer",
      id: "Product Manager & Frontend Engineer",
    },
    team: {
      en: "7 Multidisciplinary Members",
      id: "7 Anggota Multidisiplin",
    },
    image: "/images/FLEET MANAGEMENT SYSTEM.svg",
  },

  context: {
    title: {
      en: "When the Roadmap Suddenly Ended.",
      id: "Saat Roadmap Tiba-Tiba Berhenti.",
    },
    description: {
      en: "The project began as a mining fleet monitoring platform focused on preventing fuel fraud. After completing the web application and submitting funding proposals, our proposal was rejected. Stakeholders stopped responding, the IoT implementation stalled, and the team lost its direction.",
      id: "Proyek ini dimulai sebagai platform monitoring armada pertambangan untuk mencegah kecurangan BBM. Setelah aplikasi web selesai dan proposal pendanaan diajukan, proposal kami ditolak. Stakeholder berhenti merespons, implementasi IoT terhenti, dan tim kehilangan arah.",
    },
    points: [
      {
        en: "Funding Proposal Rejected",
        id: "Proposal Pendanaan Ditolak",
      },
      {
        en: "No Stakeholder Feedback",
        id: "Tidak Ada Feedback Stakeholder",
      },
    ],
  },

  decision: {
    title: {
      en: "Don't Wait. Validate Again.",
      id: "Jangan Menunggu. Validasi Lagi.",
    },
    description: {
      en: "Instead of waiting for uncertain stakeholders, I led the team to revisit our assumptions. We interviewed new industries, validated alternative use cases, and decided to pivot toward logistics, where fleet visibility remained a critical operational problem.",
      id: "Daripada menunggu stakeholder tanpa kepastian, saya mengajak tim memvalidasi ulang asumsi kami. Kami mewawancarai industri lain, mencari use case baru, dan memutuskan pivot ke sektor logistik yang masih memiliki kebutuhan besar terhadap monitoring armada.",
    },
    options: [
      {
        label: "Option A",
        name: "Wait for Stakeholder Response",
        status: {
          en: "⚠ No Progress",
          id: "⚠ Tidak Ada Perkembangan",
        },
        selected: false,
      },
      {
        label: "Option B",
        name: "Pivot & Revalidate",
        status: {
          en: "✓ New Market Opportunity",
          id: "✓ Peluang Pasar Baru",
        },
        selected: true,
      },
    ],
  },

  solutions: {
    title: {
      en: "Rebuilding with Better Assumptions.",
      id: "Membangun Ulang dengan Asumsi yang Lebih Baik.",
    },

    items: [
      {
        title: {
          en: "Market Validation",
          id: "Validasi Pasar",
        },
        description: {
          en: "Interviewed mining practitioners and explored alternative industries. We discovered logistics provided stronger product-market fit while preserving our original vision of fleet monitoring.",
          id: "Melakukan validasi dengan praktisi pertambangan dan mengeksplorasi industri lain. Kami menemukan bahwa logistik memiliki product-market fit yang lebih kuat tanpa meninggalkan visi awal monitoring armada.",
        },
        colSpan: 7,
      },

      {
        title: {
          en: "Building IoT Capability",
          id: "Membangun Kapabilitas IoT",
        },
        description: {
          en: "Our team had no IoT experience. I encouraged members to learn together by reaching out to engineering lecturers, joining robotics communities, and finding mentors before building our first prototype.",
          id: "Tim kami belum memiliki pengalaman IoT. Saya mengajak anggota tim belajar bersama melalui dosen teknik, komunitas robotik, dan mentor sebelum membangun prototype pertama.",
        },
        colSpan: 5,
      },

      {
        title: {
          en: "Practical Product Decisions",
          id: "Keputusan Produk yang Realistis",
        },
        description: {
          en: "We replaced our original banking integration plan with OCR-based receipt verification. It solved the same auditing problem while avoiding legal complexity and reducing implementation effort.",
          id: "Kami mengganti rencana integrasi perbankan dengan verifikasi struk berbasis OCR. Solusi ini menyelesaikan kebutuhan audit yang sama tanpa kompleksitas legal dan dengan implementasi yang jauh lebih realistis.",
        },
        colSpan: 5,
      },

      {
        title: {
          en: "Operational Visibility",
          id: "Visibilitas Operasional",
        },
        description: {
          en: "Designed an integrated platform combining GPS tracking, fuel monitoring, speed anomalies, OCR receipts, and audit workflows into one operational dashboard.",
          id: "Merancang platform terpadu yang menggabungkan pelacakan GPS, monitoring BBM, deteksi anomali kecepatan, OCR struk, serta workflow audit ke dalam satu dashboard operasional.",
        },
        colSpan: 7,
      },
    ],
  },

  reflection: {
    quote: {
      en: "Leadership isn't about having all the answers. It's about giving people a reason to keep moving when the roadmap disappears.",
      id: "Kepemimpinan bukan tentang memiliki semua jawaban. Tetapi tentang memberi alasan kepada tim untuk tetap melangkah ketika roadmap menghilang.",
    },

    description: {
      en: "Before this project, I believed that following a PRD was enough to deliver a successful product. This experience taught me that products constantly evolve through uncertainty. Sometimes the most valuable contribution isn't writing code—it's helping the team adapt, learn, and move forward together.",
      id: "Sebelum proyek ini, saya berpikir bahwa mengikuti PRD sudah cukup untuk menghasilkan produk yang baik. Pengalaman ini mengajarkan saya bahwa produk terus berkembang di tengah ketidakpastian. Terkadang kontribusi terbesar bukanlah menulis kode, melainkan membantu tim beradaptasi, belajar, dan terus bergerak bersama.",
    },
  },
};