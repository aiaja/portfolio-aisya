import { ProjectDetailV2 } from "../project-details";

export const fmsData: ProjectDetailV2 = {
  slug: "fms",
  hero: {
    title: { line1: "Fleet Management System:", line2: "Strategy & Pivot." },
    tagline: {
      en: "From a rejected mining solution to a scalable fleet monitoring platform reducing fuel fraud.",
      id: "Dari solusi tambang yang ditolak menjadi platform monitoring armada skala besar yang mengurangi kecurangan BBM.",
    },
    stats: [
      { label: { en: "Team Size", id: "Ukuran Tim" }, value: "7" },
      { label: { en: "Cost Discovery", id: "Penemuan Biaya" }, value: "16x" },
    ],
    role: { en: "Product Manager & Frontend", id: "Product Manager & Frontend" },
    team: { en: "7 Multidisciplinary", id: "7 Multidisiplin" },
    image: "/images/FLEET MANAGEMENT SYSTEM.svg",
  },
  context: {
    title: { en: "The Cost of Silence.", id: "Biaya dari Sebuah Keheningan." },
    description: {
      en: "After building a technically complete solution for the mining sector, we faced total silence from stakeholders. We realized that a product can be perfect on paper but fail due to implementation costs and market misalignment.",
      id: "Setelah membangun solusi yang lengkap secara teknis untuk sektor pertambangan, kami menghadapi keheningan total dari pemangku kepentingan. Kami menyadari bahwa sebuah produk bisa sempurna di atas kertas namun gagal karena biaya implementasi dan ketidaksesuaian pasar.",
    },
    points: [
      { en: "Prohibitive Hardware Costs", id: "Biaya Perangkat Keras yang Terlalu Mahal" },
      { en: "Lack of Market Validation", id: "Kurangnya Validasi Pasar" },
    ],
  },
  decision: {
    title: { en: "Pivot or Fade Away.", id: "Pivot atau Menghilang." },
    description: {
      en: "Rather than waiting for a rejected proposal, I led the team to reassess the market. We had to choose between removing core features to save costs or redesigning the entire expertise and architecture.",
      id: "Daripada menunggu proposal yang ditolak, saya memimpin tim untuk menilai kembali pasar. Kami harus memilih antara menghapus fitur inti untuk menghemat biaya atau mendesain ulang seluruh keahlian dan arsitektur.",
    },
    options: [
      {
        label: "Option A",
        name: "Remove IoT Features",
        status: { en: "⚠ Loss of Core Value", id: "⚠ Kehilangan Nilai Inti" },
        selected: false,
      },
      {
        label: "Option B",
        name: "Build IoT Expertise & Pivot",
        status: { en: "✓ High Effort / High Viability", id: "✓ Usaha Tinggi / Kelayakan Tinggi" },
        selected: true,
      },
    ],
  },
  solutions: {
    title: { en: "Adaptability as a Feature.", id: "Adaptabilitas sebagai Fitur." },
    items: [
      {
        title: { en: "Cost-Effective IoT", id: "IoT Hemat Biaya" },
        description: {
          en: "Discovered alternative sensor architectures that reduced hardware costs by 16x.",
          id: "Menemukan arsitektur sensor alternatif yang mengurangi biaya perangkat keras hingga 16x.",
        },
        icon: "ShieldCheck",
        colSpan: 5,
      },
      {
        title: { en: "OCR Audit System", id: "Sistem Audit OCR" },
        description: {
          en: "Replaced complex banking integrations with mobile OCR to verify fuel receipts instantly.",
          id: "Mengganti integrasi perbankan yang kompleks dengan OCR mobile untuk memverifikasi struk BBM secara instan.",
        },
        icon: "FileCode",
        colSpan: 7,
      },
      {
        title: { en: "Logistics Market Pivot", id: "Pivot Pasar Logistik" },
        description: {
          en: "Shifted focus from static mining routes to dynamic logistics schedules.",
          id: "Mengalihkan fokus dari rute tambang yang statis ke jadwal logistik yang dinamis.",
        },
        icon: "Layout",
        colSpan: 7,
      },
      {
        title: { en: "Unified Fleet Dashboard", id: "Dashboard Armada Terpadu" },
        description: {
          en: "Real-time monitoring for fuel consumption and vehicle activity anomalies.",
          id: "Pemantauan real-time untuk konsumsi BBM dan anomali aktivitas kendaraan.",
        },
        icon: "Table",
        colSpan: 5,
      },
    ],
  },
  reflection: {
    quote: {
      en: "Products succeed when technology, business constraints, and stakeholder needs align.",
      id: "Produk berhasil ketika teknologi, kendala bisnis, dan kebutuhan pemangku kepentingan selaras.",
    },
    description: {
      en: "The most difficult decision was choosing to pivot when the original direction stalled. It taught me that following requirements isn't enough; you must solve the cost of adoption.",
      id: "Keputusan tersulit adalah memilih untuk melakukan pivot ketika arah awal terhenti. Ini mengajarkan saya bahwa mengikuti persyaratan saja tidak cukup; Anda harus menyelesaikan masalah biaya adopsi.",
    },
  },
};
