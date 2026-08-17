import { ProjectDetailV2 } from "../project-details";

export const aifaData: ProjectDetailV2 = {
  slug: "aifa",

  hero: {
    title: {
      line1: "Automation Starts with Observation.",
      line2: "The AIFA Financial Intelligence Platform.",
    },
    tagline: {
      en: "Born from observing café closing routines, AIFA eliminates repetitive SME bookkeeping by converting physical invoices into structured financial ledgers via Vision OCR and multi-agent orchestration.",
      id: "Berawal dari observasi rutinitas tutup buku café, AIFA mengeliminasi pembukuan manual UMKM dengan mengubah struk fisik menjadi catatan keuangan terstruktur melalui Vision OCR dan orkestrasi multi-agent.",
    },
    category: {
      en: "SME FinTech & Applied AI",
      id: "FinTech UMKM & Applied AI",
    },
    role: {
      en: "Product Strategist & Lead Designer",
      id: "Product Strategist & Lead Designer",
    },
    timeline: {
      en: "Discovery, Hackathon & Prototype (Arkavidia ITB)",
      id: "Riset Lapangan, Hackathon & Prototipe (Arkavidia ITB)",
    },
    team: {
      en: "5 Cross-Functional Members (Product, ML/Backend, Frontend, Data, Pitch Specialist)",
      id: "5 Anggota Tim Lintas Disiplin (Product, ML/Backend, Frontend, Data, Pitch Specialist)",
    },
    organization: {
      en: "AIFA (National Finalist — Arkavidia ITB)",
      id: "AIFA (Finalis Nasional — Arkavidia ITB)",
    },
    technologies: [
      "Product Strategy",
      "Field Observation",
      "Google Vision OCR",
      "Gemini AI / LLM",
      "LangChain",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image: "/images/AIFA.svg",
    stats: [
      {
        label: { en: "Field Observations", id: "Observasi Lapangan" },
        value: "3 F&B SMEs",
      },
      {
        label: { en: "National Competition", id: "Kompetisi Nasional" },
        value: "ITB Finalist",
      },
      {
        label: { en: "Extraction Pipeline", id: "Pipeline Ekstraksi" },
        value: "OCR + NLP",
      },
      {
        label: { en: "Data Flow", id: "Alur Data" },
        value: "Zero Excel",
      },
    ],
  },

  context: {
    title: {
      en: "The Invisible Operational Chaos Behind Cozy Local Cafés.",
      id: "Kekacauan Operasional yang Tak Terlihat di Balik Café Lokal.",
    },
    description: {
      en: "Indonesia is home to over 65 million SMEs contributing 61% of national GDP, yet more than 90% still manage daily finances manually. While frequently working from local coffee shops in Semarang, I noticed a painful ritual customers never see: after closing the doors, staff spent nearly an hour gathering crumpled paper receipts from bags and chat screenshots, cross-referencing cash drawers, and manually typing numbers into disorganized Excel spreadsheets.\n\nAt month-end, compiling financial reports consumed one to two full working days. This friction wasn't just a nuisance—it caused frequent calculation errors, lost expense records, and distorted cash flow tracking. Because their books were inaccurate, these thriving small businesses remained ineligible for formal bank credit and business growth funding.",
      id: "Indonesia memiliki lebih dari 65 juta UMKM yang menyumbang 61% PDB nasional, namun lebih dari 90% masih mengelola keuangan harian secara manual. Saat sering bekerja dari café lokal di Semarang, saya melihat rutinitas melelahkan yang tidak pernah dilihat pelanggan: setelah jam tutup toko, staf menghabiskan hampir satu jam mengumpulkan struk kertas kusut dari kantong dan screenshot chat, mencocokkan uang kas, lalu mengetik ulang ke spreadsheet Excel.\n\nDi akhir bulan, rekapitulasi laporan keuangan menghabiskan 1 hingga 2 hari kerja penuh. Friksi ini bukan sekadar repot—tetapi memicu salah hitung, struk hilang, dan distorsi arus kas. Akibat pembukuan yang tidak rapi, bisnis yang berpotensi maju ini kehilangan kesempatan mengajukan permodalan usaha dan kredit perbankan.",
    },
    challenges: [
      {
        en: "Fragmented Expense Sources: Paper receipts, thermal printouts, supplier WhatsApp invoices, and bank transfer screenshots scattered with no single repository.",
        id: "Sumber Bukti Pengeluaran Terfragmentasi: Struk fisik, kertas termal, tagihan WhatsApp supplier, dan screenshot transfer bank tercecer tanpa repositori terpadu.",
      },
      {
        en: "Closing Time Double-Entry Burden: Purchasing staff losing 45–60 minutes every night manually copying prices and line items into spreadsheets.",
        id: "Beban Input Ganda Tiap Tutup Toko: Staf purchasing kehilangan 45–60 menit setiap malam mengetik ulang rincian harga barang ke Excel.",
      },
      {
        en: "Data Inaccuracy & Financial Blind Spots: Typos and missing thermal receipts lead to inaccurate cost-of-goods-sold (COGS) and blind pricing decisions.",
        id: "Inakurasi Data & Titik Buta Finansial: Typo dan struk termal yang memudar menyebabkan perhitungan HPP (COGS) keliru dan penetapan harga tanpa dasar data.",
      },
      {
        en: "High Cognitive Burden of Complex ERPs: Existing enterprise accounting software is too bloated, costly, and complex for non-technical SME staff.",
        id: "Tingginya Beban Kognitif Software ERP: Software akuntansi korporat terlalu rumit, mahal, dan sulit digunakan oleh staf UMKM non-teknis.",
      },
    ],
    objectives: [
      {
        en: "Build an unobtrusive '1-snap' receipt ingestion flow that turns unstructured receipt images into structured ledger entries.",
        id: "Membangun alur input struk '1-snap' yang mengubah foto dokumen tidak terstruktur menjadi catatan jurnal rapi.",
      },
      {
        en: "Automate semantic expense categorization (Raw Materials, Operations, Utilities, Stock) without manual rule setups.",
        id: "Mengotomatiskan kategorisasi pos belanja (Bahan Baku, Operasional, Utilitas, Stok) tanpa konfigurasi manual yang rumit.",
      },
      {
        en: "Deliver real-time cash flow dashboards and export-ready financial summaries for SME owners.",
        id: "Menyediakan dashboard arus kas realtime dan ringkasan keuangan siap ekspor bagi pemilik usaha.",
      },
      {
        en: "Validate usability and business viability directly with local Semarang F&B café purchasing staff.",
        id: "Memvalidasi kemudahan penggunaan dan kelayakan bisnis langsung bersama staf purchasing café F&B di Semarang.",
      },
    ],
  },

  metrics: [
    {
      value: "3",
      label: { en: "Field Café Observations", id: "Observasi Café Lapangan" },
      description: {
        en: "Direct on-site observation of closing routines, receipt handling, and purchasing workflows across local F&B businesses in Semarang.",
        id: "Observasi langsung di lokasi terkait rutinitas tutup buku, pengelolaan struk, dan alur belanja UMKM F&B di Semarang.",
      },
      badge: { en: "Field Research", id: "Riset Lapangan" },
    },
    {
      value: "Finalist",
      label: { en: "Arkavidia ITB Hackathon", id: "Hackathon Arkavidia ITB" },
      description: {
        en: "Selected as National Finalist at Institut Teknologi Bandung for innovative multi-agent AI orchestration applied to SME operations.",
        id: "Terpilih sebagai Finalis Nasional di ITB atas inovasi orkestrasi multi-agent AI yang diterapkan pada efisiensi operasional UMKM.",
      },
      badge: { en: "National Competition", id: "Kompetisi Nasional" },
    },
    {
      value: "4-Step",
      label: { en: "Automated Ingestion Pipeline", id: "Pipeline Ekstraksi Dokumen" },
      description: {
        en: "Pre-processing, Google Vision OCR, Gemini semantic classification, and relational database reconciliation.",
        id: "Pre-processing, Google Vision OCR, klasifikasi semantik Gemini, dan rekonsiliasi database relasional.",
      },
      badge: { en: "Vision + LLM", id: "Vision + LLM" },
    },
    {
      value: "Zero",
      label: { en: "Manual Excel Retyping", id: "Input Ulang Excel Manual" },
      description: {
        en: "Eliminates nightly manual transcriptions by directly streaming parsed receipt items into organized ledger categories.",
        id: "Mengeliminasi transkripsi manual tiap malam dengan menyalurkan hasil scan langsung ke pos akun pembukuan terorganisir.",
      },
      badge: { en: "Workflow Automation", id: "Automasi Alur Kerja" },
    },
  ],

  comparisons: [
    {
      feature: { en: "Receipt Ingestion Flow", id: "Alur Input Struk & Nota" },
      before: {
        en: "Staff collect crumpled thermal receipts in physical bags and manually retype line items into Excel every night.",
        id: "Staf mengumpulkan struk kertas kusut di kantong dan mengetik ulang satu per satu ke Excel setiap malam.",
      },
      after: {
        en: "Snap a photo via mobile or web; Google Vision OCR extracts vendor, date, line items, and totals in seconds.",
        id: "Cukup foto nota via mobile atau web; Google Vision OCR mengekstrak toko, tanggal, item barang, dan total dalam hitungan detik.",
      },
      impact: {
        en: "Eliminates Nightly Typing Bottlenecks",
        id: "Mengeliminasi Bottleneck Input Tiap Malam",
      },
    },
    {
      feature: { en: "Expense Categorization", id: "Kategorisasi Pos Belanja" },
      before: {
        en: "Manual guesswork where different staff members tag items inconsistently across separate sheets.",
        id: "Tebak-tebakan manual di mana staf yang berbeda menandai pos belanja secara tidak konsisten.",
      },
      after: {
        en: "LLM semantic reasoning automatically maps extracted line items into standardized accounting buckets (COGS, Ops, Utilities).",
        id: "Penalaran semantik LLM secara otomatis memetakan item belanja ke pos akuntansi standar (HPP, Operasional, Utilitas).",
      },
      impact: {
        en: "Standardized & Clean Chart of Accounts",
        id: "Pos Akuntansi Rapi & Terstandar",
      },
    },
    {
      feature: { en: "Financial Reporting Speed", id: "Kecepatan Laporan Keuangan" },
      before: {
        en: "Owner must wait 1–2 days at month-end for staff to reconcile missing receipts, check bank records, and build summary decks.",
        id: "Owner harus menunggu 1–2 hari di akhir bulan bagi staf untuk mencocokkan struk hilang dan membuat laporan rekap.",
      },
      after: {
        en: "Live dashboard updates continuously as receipts are verified, providing instant cash flow and expense analytics.",
        id: "Dashboard live terbarui otomatis saat struk diverifikasi, menyajikan analitik arus kas dan pengeluaran seketika.",
      },
      impact: {
        en: "Real-Time Operational Visibility",
        id: "Visibilitas Finansial Realtime",
      },
    },
    {
      feature: { en: "Data Verification & Errors", id: "Verifikasi Data & Penanganan Typo" },
      before: {
        en: "Faded thermal text and manual typing mistakes lead to unnoticed financial discrepancies and inaccurate tax reporting.",
        id: "Teks struk termal pudar dan salah ketik manual memicu selisih pembukuan dan perhitungan pajak yang keliru.",
      },
      after: {
        en: "Interactive side-by-side OCR review UI highlights low-confidence fields for quick 1-tap confirmation before commit.",
        id: "Antarmuka review side-by-side menandai field yang meragukan untuk konfirmasi 1-ketuk sebelum tersimpan.",
      },
      impact: {
        en: "High Accuracy with Human Oversight",
        id: "Akurasi Tinggi dengan Kontrol Manusia",
      },
    },
  ],

  decision: {
    title: {
      en: "Scope Discipline: Solve One Core Operational Bottleneck Exceptionally Well.",
      id: "Disiplin Scope: Selesaikan Satu Bottleneck Operasional Utama Secara Solid.",
    },
    description: {
      en: "During early ideation for the Arkavidia ITB hackathon, the team proposed an all-in-one 'Super Assistant' with automated business proposal drafting, employee shift optimization, and predictive inventory forecasting. As Product Strategist, I pushed the team to narrow our focus to the single highest-friction problem: document understanding and receipt reconciliation.",
      id: "Saat ideasi awal hackathon Arkavidia ITB, tim sempat mengusulkan 'Super Assistant' serba ada dengan generator proposal bisnis, penjadwalan shift karyawan, dan prediksi stok. Sebagai Product Strategist, saya mengarahkan tim untuk memangkas fitur berlebih dan fokus total pada titik friksi terbesar: pemahaman dokumen dan rekonsiliasi struk.",
    },
    options: [
      {
        label: "Option A",
        name: "Broad Business 'Super Assistant' (Proposals + Scheduling + Inventory)",
        description: {
          en: "Attempting to build automated proposal generators, staff scheduling algorithms (Google OR-Tools), and AI financial advice simultaneously.",
          id: "Mencoba membangun generator proposal, penjadwalan shift karyawan (Google OR-Tools), dan saran finansial AI secara bersamaan.",
        },
        status: {
          en: "Over-Scoped & Diluted Value Proposition",
          id: "Over-Scope & Nilai Produk Menjadi Kabur",
        },
        tradeoffs: [
          {
            en: "Diffuses engineering effort across 4 unrelated features during a tight hackathon timeline",
            id: "Memecah fokus tim rekayasa ke 4 fitur yang tidak saling terkait di tengah tenggat hackathon",
          },
          {
            en: "Fails to solve the urgent daily receipt reconciliation pain point with sufficient depth",
            id: "Gagal menyelesaikan titik sakit rekonsiliasi struk harian dengan kedalaman solusi yang matang",
          },
        ],
        selected: false,
      },
      {
        label: "Option B",
        name: "Focused Receipt Intelligence & Live Cash Ledger Platform",
        description: {
          en: "Relentlessly focus on the 4-step OCR + NLP invoice scanning pipeline, structured expense categorization, and clean real-time financial dashboards.",
          id: "Fokus mendalam pada pipeline pemindaian nota OCR + NLP 4 tahap, kategorisasi belanja terstruktur, dan dashboard keuangan realtime yang bersih.",
        },
        status: {
          en: "Sharp Value Proposition & High Usability",
          id: "Fokus Tajam & Kemudahan Pakai Tinggi",
        },
        tradeoffs: [
          {
            en: "Requires rigorous OCR pre-processing and confidence thresholding to handle blurry thermal receipts",
            id: "Membutuhkan pre-processing OCR yang kuat untuk mengatasi kertas termal buram dan kusut",
          },
          {
            en: "Delivers an immediate, tangible 10x workflow improvement for real café purchasing staff",
            id: "Memberikan peningkatan efisiensi alur kerja nyata yang langsung dirasakan staf café",
          },
        ],
        selected: true,
      },
    ],
    rationale: {
      en: "Option B allowed us to deliver an impeccably functional MVP. Presenting a deep, production-grade document intelligence platform rather than a shallow prototype with too many half-baked features is what secured our place as National Finalists at Arkavidia ITB.",
      id: "Opsi B memungkinkan kami menghasilkan MVP yang bekerja sempurna. Menampilkan platform pemahaman dokumen yang matang dan siap pakai daripada prototipe dangkal dengan terlalu banyak fitur setengah jadi adalah kunci keberhasilan kami terpilih sebagai Finalis Nasional di Arkavidia ITB.",
    },
  },

  architecture: {
    title: {
      en: "Four-Tier Applied AI Financial Pipeline Architecture.",
      id: "Arsitektur Empat Lapisan Pipeline Keuangan Applied AI.",
    },
    description: {
      en: "How AIFA orchestrates document computer vision, semantic language processing, relational ledger persistence, and interactive review interfaces.",
      id: "Bagaimana AIFA mengorkestrasi computer vision dokumen, pemrosesan bahasa semantik, penyimpanan jurnal relasional, dan antarmuka tinjauan interaktif.",
    },
    layers: [
      {
        name: "Layer 1: Capture & Pre-Processing UI (@/apps/web-client)",
        role: { en: "Receipt Image Capture & Side-by-Side Review", id: "Pengambilan Foto Struk & Review Side-by-Side" },
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas Image Thresholding"],
        description: {
          en: "Mobile and web capture interface featuring image quality checks, bounding box overlays, and editable extraction review forms.",
          id: "Antarmuka web dan mobile dengan pengecekan kualitas gambar, overlay bounding box hasil scan, dan form review interaktif.",
        },
        keyContracts: ["ReceiptUploadPayload", "BoundingBoxOverlay", "VerifiedExpenseForm"],
      },
      {
        name: "Layer 2: Vision OCR & Text Normalization (@/services/ocr)",
        role: { en: "Optical Character Recognition & Text Extraction", id: "Optical Character Recognition & Ekstraksi Teks" },
        technologies: ["Google Vision API", "Sharp Image Processing", "Zod Validation"],
        description: {
          en: "Extracts raw text blocks, coordinates, total values, timestamps, and merchant names with confidence scoring.",
          id: "Mengekstrak blok teks, koordinat, total nilai uang, tanggal, dan nama toko disertai skor keyakinan ekstraksi.",
        },
        keyContracts: ["RawOCRTextBlock", "NormalizedReceiptData", "ConfidenceMetrics"],
      },
      {
        name: "Layer 3: Semantic LLM Categorization Engine (@/services/ai)",
        role: { en: "Chart of Accounts Mapping & Anomaly Detection", id: "Pemetaan Pos Akuntansi & Deteksi Anomali" },
        technologies: ["Gemini 1.5 Flash / Pro", "LangChain Orchestrator", "Structured JSON Schema"],
        description: {
          en: "Interprets unstructured product line items and maps them into standard accounting categories (COGS, Ops, Utilities) without rigid regex rules.",
          id: "Memahami nama item belanja yang tidak terstruktur dan memetakan ke pos akuntansi standar tanpa aturan regex kaku.",
        },
        keyContracts: ["SemanticClassificationPrompt", "StructuredExpenseRecord", "TaxCalculationSchema"],
      },
      {
        name: "Layer 4: Relational Ledger & Analytics Store (PostgreSQL)",
        role: { en: "ACID Ledger Persistence & Cash Flow Aggregations", id: "Penyimpanan Jurnal ACID & Agregasi Arus Kas" },
        technologies: ["PostgreSQL", "Prisma ORM", "SQL Aggregation Views"],
        description: {
          en: "Maintains balanced double-entry accounting records, merchant expenditure histories, and real-time cash flow chart datasets.",
          id: "Menyimpan catatan jurnal pembukuan berimbang, riwayat belanja per supplier, dan dataset grafik arus kas realtime.",
        },
        keyContracts: ["LedgerTransactionEntity", "MonthlyCashFlowSummary", "MerchantExpenseHistory"],
      },
    ],
  },

  solutions: {
    title: {
      en: "Core Modules & Technical Implementations.",
      id: "Modul Inti & Implementasi Rekayasa.",
    },
    description: {
      en: "Deep dive into the specific systems designed to convert chaotic physical receipts into audit-grade financial records.",
      id: "Penjelasan mendalam mengenai modul yang dirancang untuk mengubah struk fisik yang berantakan menjadi catatan finansial siap audit.",
    },
    items: [
      {
        title: {
          en: "4-Stage Vision OCR & Document Pre-Processing Pipeline",
          id: "Pipeline Pre-processing & Vision OCR 4 Tahap",
        },
        description: {
          en: "Thermal café receipts are notorious for low contrast, creases, and fading ink. AIFA applies client-side canvas thresholding and contrast normalization before sending images to Google Vision OCR, ensuring high text extraction reliability across low-light camera captures.",
          id: "Struk kertas termal café terkenal rentan pudar, kusut, dan minim kontras. AIFA menerapkan thresholding dan normalisasi kontras sebelum mengirim gambar ke Google Vision OCR, memastikan ekstraksi teks tetap akurat meski foto diambil dalam pencahayaan minim.",
        },
        tags: ["BUILT", "Google Vision", "Document AI", "Pre-processing"],
        colSpan: 7,
        highlights: [
          {
            en: "Canvas-based image contrast enhancement handles faded thermal receipts",
            id: "Peningkatan kontras gambar berbasis canvas mampu membaca struk termal yang memudar",
          },
          {
            en: "Extracts vendor name, transaction date, line items, and total amount accurately",
            id: "Mengekstrak nama toko, tanggal transaksi, rincian barang, dan total belanja secara presisi",
          },
        ],
      },
      {
        title: {
          en: "Semantic LLM Chart-of-Accounts Classifier",
          id: "Pengklasifikasi Pos Akuntansi Berbasis LLM Semantik",
        },
        description: {
          en: "Traditional regex scripts fail when item names vary (e.g. 'Fresh Milk 1L' vs 'Susu Diamond 1000ml'). AIFA uses Gemini AI orchestrated with LangChain to classify items into structured expense categories (Raw Materials, Bar Supplies, Maintenance, Utilities) automatically.",
          id: "Script regex konvensional gagal saat nama barang bervariasi (contoh: 'Fresh Milk 1L' vs 'Susu Diamond 1000ml'). AIFA memanfaatkan Gemini AI via LangChain untuk mengklasifikasikan item ke pos akun pembukuan standar secara otomatis.",
        },
        tags: ["BUILT", "Gemini AI", "LangChain", "Semantic NLP"],
        colSpan: 5,
        highlights: [
          {
            en: "Understands unstructured product slang without manual regex maintenance",
            id: "Mampu memahami singkatan dan nama barang tanpa perawatan aturan regex manual",
          },
          {
            en: "Formats outputs strictly into typed JSON schemas for database persistence",
            id: "Memformat output ke dalam skema JSON bertipe untuk penyimpanan database yang aman",
          },
        ],
      },
      {
        title: {
          en: "Side-by-Side Human-in-the-Loop Verification UI",
          id: "Antarmuka Verifikasi Side-by-Side dengan Kontrol Pengguna",
        },
        description: {
          en: "To maintain 100% financial audit trust, AIFA provides an interactive review interface. The user sees the original receipt image on the left with interactive bounding boxes and the extracted form on the right, highlighting low-confidence values for quick 1-tap correction.",
          id: "Untuk menjaga kepercayaan pembukuan 100%, AIFA menyediakan tampilan review interaktif. Pengguna melihat foto struk asli di sebelah kiri dengan bounding box dan formulir hasil ekstraksi di sebelah kanan, menandai nilai yang meragukan untuk konfirmasi cepat.",
        },
        tags: ["BUILT", "Human-in-the-Loop", "UX Design", "Interactive Verification"],
        colSpan: 6,
        highlights: [
          {
            en: "Side-by-side viewport eliminates context switching between paper and screen",
            id: "Tampilan berdampingan menghilangkan kebutuhan bolak-balik melihat kertas dan layar",
          },
          {
            en: "1-tap field correction before final commit to accounting ledgers",
            id: "Koreksi 1-ketuk sebelum data difinalisasi ke jurnal pembukuan",
          },
        ],
      },
      {
        title: {
          en: "Live Cash Flow & Real-Time Expense Analytics Dashboard",
          id: "Dashboard Analitik Arus Kas & Pengeluaran Realtime",
        },
        description: {
          en: "Eliminates month-end report panic by continuously compiling verified receipts into category distribution charts, supplier price trend tracking, and export-ready monthly financial summaries tailored for SME owners.",
          id: "Menghilangkan kepanikan tutup buku bulanan dengan merekapitulasi struk yang telah diverifikasi ke dalam grafik sebaran pos belanja, tren harga supplier, dan ringkasan keuangan bulanan siap ekspor.",
        },
        tags: ["BUILT", "Data Visualization", "SME Dashboard", "Reporting"],
        colSpan: 6,
        highlights: [
          {
            en: "At-a-glance visualization of primary cost drivers across inventory and operations",
            id: "Visualisasi instan sumber pengeluaran terbesar antara stok dan operasional",
          },
          {
            en: "Export-ready summaries suitable for bank financing and KUR loan applications",
            id: "Ringkasan data siap ekspor yang rapi untuk kebutuhan pengajuan permodalan dan KUR",
          },
        ],
      },
    ],
  },

  evidence: {
    title: {
      en: "Product Proof & System Interface Artefacts.",
      id: "Bukti Produk & Artefak Antarmuka Sistem.",
    },
    description: {
      en: "Visual proof of the AIFA receipt ingestion flow, interactive verification workspace, and real-time SME financial analytics dashboard.",
      id: "Bukti visual alur pemindaian struk AIFA, ruang kerja verifikasi interaktif, dan dashboard analitik keuangan UMKM realtime.",
    },
    image: "/images/AIFA.svg",
    caption: {
      en: "Figure 1.0: AIFA end-to-end interface — document scan ingestion, side-by-side extraction verification, and real-time expense breakdown dashboard.",
      id: "Gambar 1.0: Antarmuka terpadu AIFA — pemindaian dokumen, verifikasi ekstraksi side-by-side, dan dashboard rincian pengeluaran realtime.",
    },
    assetNote: {
      en: "Asset Note: Hackathon presentation pitch deck, live demonstration video, and Arkavidia ITB national finalist certificate are archived in the engineering project repository.",
      id: "Catatan Aset: Slide presentasi pitch deck, video demonstrasi sistem, dan sertifikat finalis nasional Arkavidia ITB diarsipkan dalam repositori proyek.",
    },
    insights: [
      {
        title: { en: "Field Discovery", id: "Observasi Lapangan" },
        value: "3 F&B Cafés",
        description: {
          en: "Identified nightly closing double-entry bottleneck in Semarang.",
          id: "Menemukan bottleneck input ganda saat tutup toko di Semarang.",
        },
      },
      {
        title: { en: "Core Pipeline", id: "Pipeline Utama" },
        value: "OCR + Gemini",
        description: {
          en: "Transforms unstructured photos into clean structured ledgers.",
          id: "Mengubah foto tidak terstruktur menjadi jurnal pembukuan rapi.",
        },
      },
      {
        title: { en: "Hackathon ITB", id: "Hackathon ITB" },
        value: "National Finalist",
        description: {
          en: "Recognized nationally for practical SME Applied AI innovation.",
          id: "Diakui secara nasional atas inovasi terapan Applied AI untuk UMKM.",
        },
      },
    ],
  },

  outcomes: {
    title: {
      en: "Verified Outcomes & Competition Accolades.",
      id: "Hasil Terverifikasi & Pencapaian Kompetisi.",
    },
    description: {
      en: "Measurable validation, product rigor, and competition accolades achieved through disciplined problem-solving and user-centric engineering.",
      id: "Validasi terukur, ketajaman produk, dan pencapaian kompetisi yang diraih melalui pemecahan masalah yang disiplin dan rekayasa berpusat pada pengguna.",
    },
    items: [
      {
        title: {
          en: "Arkavidia ITB National Finalist Recognition",
          id: "Pencapaian Finalis Nasional Arkavidia ITB",
        },
        description: {
          en: "Selected as National Finalist at Institut Teknologi Bandung out of competitive submissions across Indonesia for our disciplined SME financial intelligence architecture.",
          id: "Terpilih sebagai Finalis Nasional di Institut Teknologi Bandung dari berbagai tim di Indonesia atas arsitektur asisten keuangan UMKM yang terarah dan solid.",
        },
        metricHighlight: "ITB National Finalist",
      },
      {
        title: {
          en: "Direct F&B Purchasing Workflow Validation",
          id: "Validasi Alur Kerja Purchasing Café F&B",
        },
        description: {
          en: "Tested interactive side-by-side scanning UI with local café purchasing staff in Semarang, validating that receipt processing was intuitive for non-technical users.",
          id: "Menguji antarmuka pemindaian side-by-side bersama staf purchasing café lokal di Semarang, memvalidasi bahwa sistem sangat intuitif bagi pengguna non-teknis.",
        },
        metricHighlight: "3 Café Validations",
      },
      {
        title: {
          en: "Zero Unnecessary Dependency Bloat",
          id: "Eliminasi Fitur Over-Scoped & Bloatware",
        },
        description: {
          en: "Successfully eliminated 3 unneeded speculative features (auto-proposals, complex ERP scheduling) to focus 100% of engineering effort on bulletproof receipt extraction.",
          id: "Berhasil memangkas 3 fitur spekulatif yang belum dibutuhkan untuk memfokuskan 100% daya rekayasa pada keandalan ekstraksi struk dokumen.",
        },
        metricHighlight: "Disciplined Scope",
      },
      {
        title: {
          en: "Applied AI Multi-Agent Architecture",
          id: "Arsitektur Multi-Agent Applied AI Terpadu",
        },
        description: {
          en: "Engineered a seamless bridge connecting Google Vision computer vision with LangChain and Gemini LLM semantic reasoning under clean TypeScript contracts.",
          id: "Merancang integrasi mulus antara computer vision Google Vision dengan penalaran semantik LangChain dan Gemini LLM di bawah kontrak TypeScript yang bersih.",
        },
        metricHighlight: "Vision + LLM Integration",
      },
    ],
    testimonial: {
      quote: {
        en: "AIFA stood out because it didn't try to build AI for AI's sake. Starting from the unglamorous, everyday reality of SME receipt clutter and building an intuitive, disciplined document intelligence workflow demonstrated true product maturity.",
        id: "AIFA tampil menonjol karena tidak membangun AI hanya demi tren semata. Berangkat dari realitas nyata kekacauan struk UMKM sehari-hari dan merancang alur pemahaman dokumen yang intuitif menunjukkan kedewasaan produk yang luar biasa.",
      },
      author: "Arkavidia ITB Hackathon Review Panel",
      role: {
        en: "Institut Teknologi Bandung Judging Jury",
        id: "Dewan Juri Institut Teknologi Bandung",
      },
    },
  },

  reflection: {
    quote: {
      en: "Great products aren't conceived in brainstorm rooms. They are discovered by watching real people struggle with mundane tasks when they think no one is looking.",
      id: "Produk hebat tidak lahir dari ruang rapat teoretis. Melainkan ditemukan dari mengamati orang-orang nyata berjuang menyelesaikan tugas harian yang melelahkan.",
    },
    description: {
      en: "AIFA reinforced my core belief in observational product discovery. The most painful bottlenecks in small business operations rarely look like glamorous high-tech problems—they look like crumpled thermal receipts in a plastic bag at 11 PM. Product leadership is about recognizing these unglamorous friction points and applying advanced technology (OCR + LLMs) in the simplest, most invisible way possible.",
      id: "AIFA memperkuat keyakinan saya tentang pentingnya product discovery berbasis observasi. Titik friksi paling menyakitkan dalam operasional usaha kecil jarang berupa masalah teknologi mewah—melainkan tumpukan struk termal kusut di dalam kantong kresek pada jam 11 malam. Kepemimpinan produk adalah mengenali friksi tersebut dan menerapkan teknologi canggih (OCR + LLM) dengan cara yang paling sederhana dan mudah digunakan.",
    },
    takeaways: [
      {
        en: "Observe before you architect: The most valuable product insights come from watching daily end-of-day operational friction in the field.",
        id: "Observasi sebelum merancang arsitektur: Wawasan produk paling berharga lahir dari melihat langsung friksi operasional harian di lapangan.",
      },
      {
        en: "Prune scope ruthlessly: A sharp product that solves one painful workflow 10x better always wins over a bloated 'all-in-one' platform.",
        id: "Pangkas scope tanpa ragu: Produk fokus yang menyelesaikan satu masalah 10x lebih baik selalu menang dibanding platform 'serba ada' yang setengah matang.",
      },
      {
        en: "Keep the AI invisible: Non-technical users don't care about prompts or model weights—they care about accurate numbers and saved time.",
        id: "Buat AI bekerja di balik layar: Pengguna non-teknis tidak peduli tentang prompt atau parameter model—mereka peduli pada akurasi data dan waktu yang dihemat.",
      },
    ],
  },
};