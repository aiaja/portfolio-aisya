import { ProjectDetailV2 } from "../project-details";

export const aifaData: ProjectDetailV2 = {
  slug: "aifa",
  hero: {
    title: { line1: "AIFA:", line2: "Automation Starts with Observation" },
    tagline: {
      en: "A financial assistant born from observing how small businesses spend hours reconciling receipts, spreadsheets, and cash records.",
      id: "Asisten keuangan yang lahir dari observasi bagaimana UMKM menghabiskan waktu berjam-jam mencocokkan struk, spreadsheet, dan catatan kas.",
    },
    stats: [
      { label: { en: "Cafe Observations", id: "Observasi Cafe" }, value: "3" },
      { label: { en: "Interviews", id: "Wawancara" }, value: "1"},
    ],
    role: { en: "Product Strategist", id: "Product Strategist" },
    team: { en: "5 Members", id: "5 Anggota" },
    image: "/images/AIFA.svg",
  },
  context: {
    title: { en: "The Work Nobody Notices.", id: "Pekerjaan yang Tidak Terlihat." },
    description: {
      en: "While working from cafes, I noticed a repetitive process happening every night. Staff collected paper receipts throughout the day, then manually compared them against POS transactions and cash records before re-entering everything into spreadsheets and financial books.",
      id: "Saat sering bekerja dari cafe, saya melihat proses berulang yang terjadi setiap malam. Staf mengumpulkan struk sepanjang hari, lalu mencocokkannya secara manual dengan transaksi POS dan catatan kas sebelum menulis ulang semuanya ke spreadsheet dan buku keuangan.",
    },
    points: [
      { en: "Manual Receipt Reconciliation", id: "Rekonsiliasi Struk Manual" },
      { en: "Repeated Data Entry", id: "Pengisian Data Berulang" },
    ],
  },
  decision: {
    title: { en: "Automate the Workflow, Not the Person.", id: "Otomatisasi Proses, Bukan Orangnya." },
    description: {
      en: "Rather than building a generic AI assistant, we focused on the most repetitive part of the workflow: extracting and organizing expense records from physical invoices.",
      id: "Alih-alih membangun AI assistant generik, kami memilih fokus pada bagian workflow yang paling repetitif: mengekstrak dan mengorganisasi data pengeluaran dari invoice fisik.",
    },
    options: [
      {
        label: "Option A",
        name: "Manual Recording",
        status: { en: "⚠ Time Consuming", id: "⚠ Memakan Waktu" },
        selected: false,
      },
      {
        label: "Option B",
        name: "Automated Extraction",
        status: { en: "✓ Faster Workflow", id: "✓ Workflow Lebih Cepat" },
        selected: true,
      },
    ],
  },
  solutions: {
    title: { en: "Reducing Operational Friction.", id: "Mengurangi Friksi Operasional." },
    items: [
      {
        title: { en: "Invoice Scanning", id: "Pemindaian Invoice" },
        description: {
          en: "Users simply upload a receipt or invoice instead of manually typing expense records.",
          id: "Pengguna cukup mengunggah invoice atau struk tanpa perlu menulis ulang data pengeluaran secara manual.",
        },
        icon: "ShieldCheck",
        colSpan: 5,
      },
      {
        title: { en: "OCR Extraction", id: "Ekstraksi OCR" },
        description: {
          en: "Automatically extracts dates, amounts, vendors, and transaction information from physical documents.",
          id: "Secara otomatis mengekstrak tanggal, jumlah, penjual, dan informasi transaksi dari dokumen fisik.",
        },
        icon: "FileCode",
        colSpan: 7,
      },
      {
        title: { en: "Smart Categorization", id: "Kategorisasi Otomatis" },
        description: {
          en: "Transforms unstructured receipt data into organized financial records.",
          id: "Memberikan visibilitas pengeluaran yang lebih jelas tanpa bergantung pada spreadsheet manual.",
        },
        icon: "Layout",
        colSpan: 7,
      },
    //   {
    //     title: { en: "Unified Monitoring Platform", id: "Platform Pemantauan Terpadu" },
    //     description: {
    //       en: "Combined fleet visibility, fuel tracking, anomaly detection, and operational monitoring into a single management dashboard.",
    //       id: "Menggabungkan visibilitas armada, pelacakan BBM, deteksi anomali, dan monitoring operasional ke dalam satu dashboard terpadu.",
    //     },
    //     icon: "Table",
    //     colSpan: 5,
    //   },
    ],
  },
  reflection: {
    quote: {
      en: "The best automation opportunities are often hidden inside everyday routines.",
      id: "Peluang otomasi terbaik sering tersembunyi di dalam rutinitas sehari-hari.",
    },
    description: {
      en: "This project taught me that technology should follow operational realities. Before introducing AI, it was more important to understand how people actually worked, where time was lost, and why errors occurred in the first place.",
      id: "Proyek ini mengajarkan saya bahwa teknologi harus mengikuti realitas operasional. Sebelum menggunakan AI, yang lebih penting adalah memahami bagaimana orang bekerja, di mana waktu terbuang, dan mengapa kesalahan bisa terjadi sejak awal.",
    },
  },
};
