import { ProjectDetailV2 } from "../project-details";

export const fmsData: ProjectDetailV2 = {
  slug: "fleet-management",
  hero: {
    title: { line1: "Fleet Management System:", line2: "Leading Through Uncertainty." },
    tagline: {
      en: "How a rejected mining solution evolved into a logistics fleet platform through market validation, team leadership, and continuous adaptation.",
      id: "Bagaimana solusi pertambangan yang ditolak berkembang menjadi platform manajemen armada logistik melalui validasi pasar, kepemimpinan tim, dan adaptasi berkelanjutan.",
    },
    stats: [
      { label: { en: "Team Members", id: "Anggota Tim" }, value: "7" },
      { label: { en: "Market Pivot", id: "Pivot Pasar" }, value: "1"},
    ],
    role: { en: "Product Manager & Frontend", id: "Product Manager & Frontend" },
    team: { en: "7 Multidisciplinary Members", id: "7 Anggota Multidisiplin" },
    image: "/images/FLEET MANAGEMENT SYSTEM.svg",
  },
  context: {
    title: { en: "The Cost of Silence.", id: "Biaya dari Sebuah Keheningan." },
    description: {
      en: "The project started as a mining fleet monitoring solution focused on fuel fraud prevention. After completing the web platform and submitting funding proposals, stakeholders stopped responding. We had no feedback, no funding, and no clear direction.",
      id: "Proyek ini dimulai sebagai solusi monitoring armada pertambangan yang berfokus pada pencegahan kecurangan BBM. Setelah platform web selesai dibangun dan proposal pendanaan diajukan, stakeholder berhenti merespons. Kami tidak memiliki feedback, pendanaan, maupun arah yang jelas.",
    },
    points: [
      { en: "Funding Proposal Rejected", id: "Proposal Pendanaan Ditolak" },
      { en: "Stakeholders Went Silent", id: "Stakeholder Tidak Merespons" },
    ],
  },
  decision: {
    title: { en: "Pivot or Fade Away.", id: "Pivot atau Menghilang." },
    description: {
      en: "The team faced a difficult choice: abandon the project or challenge our assumptions. Rather than waiting indefinitely, I led discussions to revalidate the market, identify alternative industries, and redefine our roadmap.",
      id: "Tim menghadapi pilihan sulit: menghentikan proyek atau mempertanyakan kembali asumsi yang kami miliki. Daripada menunggu tanpa kepastian, saya memimpin diskusi untuk memvalidasi ulang pasar, mencari industri alternatif, dan mendefinisikan ulang roadmap produk.",
    },
    options: [
      {
        label: "Option A",
        name: "Wait for Stakeholders",
        status: { en: "⚠ Project Stagnation", id: "⚠ Proyek Berhenti" },
        selected: false,
      },
      {
        label: "Option B",
        name: "Market Pivot & Rebuild",
        status: { en: "✓ New Opportunities", id: "✓ Peluang Baru" },
        selected: true,
      },
    ],
  },
  solutions: {
    title: { en: "Adapting the Product", id: "Mengadaptasi Produk" },
    items: [
      {
        title: { en: "Mining → Logistics", id: "Tambang → Logistik" },
        description: {
          en: "Validated new industries and discovered logistics offered stronger opportunities for fleet monitoring and operational visibility.",
          id: "Memvalidasi industri baru dan menemukan bahwa sektor logistik menawarkan peluang yang lebih kuat untuk monitoring armada dan visibilitas operasional.",
        },
        icon: "ShieldCheck",
        colSpan: 5,
      },
      {
        title: { en: "Learning IoT from Scratch", id: "Belajar IoT dari Nol" },
        description: {
          en: "When the team lacked IoT expertise, I encouraged members to learn together, seek mentors, and collaborate with robotics communities and engineering faculty.",
          id: "Ketika tim belum memiliki keahlian IoT, saya mendorong anggota tim untuk belajar bersama, mencari mentor, dan berkolaborasi dengan komunitas robotik serta fakultas teknik.",
        },
        icon: "FileCode",
        colSpan: 7,
      },
      {
        title: { en: "Practical over Perfect", id: "Praktik di atas Ideal" },
        description: {
          en: "Instead of pursuing complex banking integrations, we implemented OCR-based fuel receipt verification to solve the immediate auditing problem.",
          id: "Alih-alih mengejar integrasi perbankan yang kompleks, kami mengimplementasikan verifikasi struk BBM berbasis OCR untuk menyelesaikan kebutuhan audit secara cepat dan realistis.",
        },
        icon: "Layout",
        colSpan: 7,
      },
      {
        title: { en: "Unified Monitoring Platform", id: "Platform Pemantauan Terpadu" },
        description: {
          en: "Combined fleet visibility, fuel tracking, anomaly detection, and operational monitoring into a single management dashboard.",
          id: "Menggabungkan visibilitas armada, pelacakan BBM, deteksi anomali, dan monitoring operasional ke dalam satu dashboard terpadu.",
        },
        icon: "Table",
        colSpan: 5,
      },
    ],
  },
  reflection: {
    quote: {
      en: "A product doesn't fail when a proposal is rejected. It fails when the team stops adapting.",
      id: "Sebuah produk tidak gagal saat proposal ditolak. Produk gagal ketika tim berhenti beradaptasi.",
    },
    description: {
      en: "This project taught me that leadership is often less about giving answers and more about creating momentum when uncertainty appears. Market validation, team alignment, and continuous learning became just as important as building the product itself.",
      id: "Proyek ini mengajarkan saya bahwa kepemimpinan sering kali bukan tentang memberikan jawaban, tetapi menciptakan momentum ketika ketidakpastian muncul. Validasi pasar, penyelarasan tim, dan pembelajaran berkelanjutan menjadi sama pentingnya dengan membangun produknya sendiri.",
    },
  },
};
