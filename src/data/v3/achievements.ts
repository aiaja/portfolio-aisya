import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    slug: "arkavidia-9-itb",
    title: { id: "Finalis Nasional", en: "National Finalist" },
    event: "Hackvidia 2025 — Arkavidia 9.0",
    organizer: "HMIF ITB",
    year: "2025",
    award: { id: "Top 10 Finalis", en: "Top 10 Finalist" },
    content: {
      insight: {
        summary: {
          id: "UMKM tidak butuh lebih banyak aplikasi; mereka butuh aplikasi yang saling bicara. Fragmentasi alat digital justru menciptakan beban kognitif baru.",
          en: "SMEs don't need more apps; they need apps that talk to each other. Digital tool fragmentation creates a new cognitive burden.",
        },
        details: [
          { id: "SME Finance Officer sering kewalahan melakukan 'Double Entry' data di berbagai platform.", en: "SME Finance Officers are often overwhelmed by 'Double Entry' data tasks across multiple platforms." },
          { id: "Fragmentasi alat digital (Excel, Word, Kalender) menghambat visibilitas keuangan real-time.", en: "Fragmentation of digital tools (Excel, Word, Calendars) hinders real-time financial visibility." },
          { id: "30% dari 64 juta UMKM di Indonesia siap membayar untuk solusi digital terintegrasi.", en: "30% of 64 million SMEs in Indonesia are ready to pay for integrated digital solutions." },
        ],
      },
      validation: [
        {
          title: { id: "Riset Pasar Strategis", en: "Market Research Strategy" },
          description: {
            id: "Menganalisis Laporan Digitalisasi Mikro & UMKM BRI untuk memvalidasi TAM/SAM/SOM dan kesiapan pasar terhadap asisten AI.",
            en: "Analyzed the BRI Micro & SME Digitalization Report to validate TAM/SAM/SOM and market readiness for AI assistants.",
          },
        },
        {
          title: { id: "Validasi Alur Kerja Terpadu", en: "Integrated Workflow Validation" },
          description: {
            id: "Menguji integrasi alur kerja dari pemindaian struk hingga pembuatan proposal otomatis untuk membuktikan efisiensi operasional.",
            en: "Tested the integration of workflows from receipt scanning to automated proposal generation to prove operational efficiency.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Mempresentasikan AIFA sebagai 'Operational Intelligence Platform' yang tumbuh bersama bisnis melalui model modular yang adaptif.",
          en: "Presented AIFA as an 'Operational Intelligence Platform' that grows with the business through an adaptive modular model.",
        },
        metrics: [
          { label: { id: "Peringkat", en: "Rank" }, value: "Top 10" },
          { label: { id: "Potensi Pasar", en: "SOM" }, value: "$14.5K" },
        ],
      },
    },
  },
  {
    slug: "hology-8-ub",
    title: { id: "Finalis Top 8", en: "Top 8 Finalist" },
    event: "HOLOGY 8.0 Software Development",
    organizer: "Universitas Brawijaya",
    year: "2025",
    award: { id: "Finalis Nasional", en: "National Finalist" },
    content: {
      insight: {
        summary: {
          id: "Masalah personal memicu penemuan bahwa literasi smartphone pada lansia rendah, memicu pivot strategis ke pasien TBC yang butuh pengawasan ketat.",
          en: "A personal problem led to the discovery that smartphone literacy among the elderly is low, triggering a strategic pivot to TB patients who need close monitoring.",
        },
        details: [
          { id: "Indonesia menempati peringkat ke-2 kasus TBC tertinggi di dunia.", en: "Indonesia ranks 2nd in the highest TB cases globally." },
          { id: "Stigma sosial membuat pasien enggan berobat atau sering putus pengobatan tengah jalan.", en: "Social stigma makes patients reluctant to seek treatment or frequently drop out of treatment." },
          { id: "Beban administratif petugas kesehatan dalam pencatatan manual menghambat monitoring pasien.", en: "Administrative burden of manual recording for health workers hinders patient monitoring." },
        ],
      },
      validation: [
        {
          title: { id: "Observasi Lapangan Langsung", en: "Direct Field Observation" },
          description: {
            id: "Turun langsung ke fasilitas kesehatan untuk memvalidasi asumsi tentang kelelahan petugas akibat pencatatan ganda (Double Entry).",
            en: "Went directly to health facilities to validate assumptions regarding worker exhaustion due to double data entry.",
          },
        },
        {
          title: { id: "Pivot Strategis User", en: "Strategic User Pivot" },
          description: {
            id: "Melakukan pivot dari pengingat obat umum untuk lansia ke pasien TBC setelah menemukan hambatan literasi digital pada target awal.",
            en: "Pivoted from a general medication reminder for the elderly to TB patients after finding digital literacy barriers in the initial target.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Mempresentasikan PILMO sebagai infrastruktur kesehatan publik yang meringankan beban administratif petugas melalui digitalisasi OCR.",
          en: "Presented PILMO as a public health infrastructure that eases the administrative burden of workers through OCR digitalization.",
        },
        metrics: [
          { label: { id: "Finalis", en: "Finalist" }, value: "Top 8" },
          { label: { id: "Tingkat Akurasi", en: "OCR Accuracy" }, value: "90%" },
        ],
      },
    },
  },
  {
    slug: "fostifest-2024",
    title: { id: "Juara 3 Nasional", en: "3rd Place National" },
    event: "Software Development — FOSTIFEST 2024",
    organizer: "UMS",
    year: "2024",
    award: { id: "Juara 3", en: "3rd Place" },
    content: {
      insight: {
        summary: {
          id: "Tragedi kejahatan jalanan membuktikan bahwa UI aplikasi darurat tradisional tidak relevan saat korban sedang dalam ancaman fisik nyata.",
          en: "Street crime tragedies proved that traditional emergency app UIs are irrelevant when a victim is under real physical threat.",
        },
        details: [
          { id: "Korban tidak sempat membuka lock screen atau mencari ikon aplikasi saat panik.", en: "Victims don't have time to unlock their screens or find app icons during panic." },
          { id: "Birokrasi integrasi nomor darurat pemerintah yang lambat menjadi penghambat respon cepat.", en: "Slow government emergency number integration bureaucracy acts as a barrier to rapid response." },
          { id: "Kebutuhan akan verifikator awal sebelum sinyal darurat diteruskan ke pihak berwenang.", en: "Need for initial verifiers before emergency signals are forwarded to authorities." },
        ],
      },
      validation: [
        {
          title: { id: "Uji Interaksi Tanpa Layar", en: "Screen-less Interaction Testing" },
          description: {
            id: "Memvalidasi penggunaan trigger tombol power 3x dan perintah suara sebagai metode aktivasi bantuan yang paling cepat.",
            en: "Validated the use of 3x power button triggers and voice commands as the fastest methods for activating help." },
        },
        {
          title: { id: "Pemetaan Area Blank Spot", en: "Blank Spot Mapping" },
          description: {
            id: "Mendesain sistem fallback SMS untuk memastikan sinyal bantuan terkirim meskipun di area dengan koneksi internet buruk.",
            en: "Designed an SMS fallback system to ensure help signals are sent even in areas with poor internet connection.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Menekankan filosofi 'The best UI is no UI' untuk meyakinkan juri tentang efektivitas solusi dalam situasi kritis nyata.",
          en: "Emphasized the 'The best UI is no UI' philosophy to convince judges of the solution's effectiveness in real critical situations.",
        },
        metrics: [
          { label: { id: "Prestasi", en: "Award" }, value: "3rd Place" },
          { label: { id: "Respon", en: "Response" }, value: "Pragmatic" },
        ],
      },
    },
  },
  {
    slug: "find-it-2025",
    title: { id: "Finalis Top 10", en: "Top 10 Finalist" },
    event: "FIND IT! 2025 Hackathon",
    organizer: "DTETI UGM",
    year: "2025",
    award: { id: "Finalis", en: "Finalist" },
    content: {
      insight: {
        summary: {
          id: "Angka kegagalan pengobatan TBC di area urban sangat tinggi akibat tingginya mobilitas pasien dan kurangnya pengawasan harian.",
          en: "TB treatment failure rates in urban areas are very high due to high patient mobility and lack of daily supervision.",
        },
        details: [
          { id: "Pasien sering lupa meminum obat di sela kesibukan pekerjaan di kota besar.", en: "Patients often forget to take medication amidst the hustle and bustle of big city work." },
          { id: "Minimnya dukungan moral dari lingkungan kerja yang kompetitif.", en: "Lack of moral support from a competitive work environment." },
        ],
      },
      validation: [
        {
          title: { id: "Wawancara Eks-Pasien", en: "Former Patient Interviews" },
          description: {
            id: "Berdiskusi dengan penyintas TBC untuk memahami titik lelah psikologis selama 6 bulan masa pengobatan.",
            en: "Discussed with TB survivors to understand the psychological exhaustion points during the 6-month treatment period.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Menekankan pada sistem pemantauan asinkron yang tidak mengganggu produktivitas namun tetap menjamin kepatuhan obat.",
          en: "Emphasized an asynchronous monitoring system that doesn't disrupt productivity while ensuring medication adherence.",
        },
        metrics: [
          { label: { id: "Seleksi", en: "Selection" }, value: "Top 10" },
          { label: { id: "Validasi", en: "Validation" }, value: "User-Centric" },
        ],
      },
    },
  },
  {
    slug: "hitech-2025",
    title: { id: "Juara 3", en: "3rd Place" },
    event: "Software Development — HITECH 2025",
    organizer: "HMTI UDINUS",
    year: "2025",
    award: { id: "Juara 3", en: "3rd Place" },
    content: {
      insight: {
        summary: {
          id: "Kemudahan akses 'Buy Now Pay Later' memicu gaya hidup impulsif pada Gen Z meskipun memiliki literasi keuangan dasar.",
          en: "Ease of 'Buy Now Pay Later' access triggers impulsive lifestyles in Gen Z despite basic financial literacy.",
        },
        details: [
          { id: "Banyak Gen Z tidak menyadari akumulasi hutang kecil dari belanja impulsif.", en: "Many Gen Z are unaware of the accumulation of small debts from impulsive shopping." },
          { id: "Aplikasi pencatatan manual dianggap membosankan dan terlalu administratif.", en: "Manual recording apps are considered boring and too administrative." },
        ],
      },
      validation: [
        {
          title: { id: "Pengujian Gamifikasi", en: "Gamification Testing" },
          description: {
            id: "Membangun sistem feedback instan yang mengubah aktivitas penghematan menjadi sebuah permainan interaktif.",
            en: "Built an instant feedback system that transforms saving activities into an interactive game.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Fokus pada pengubahan perilaku (behavioral change) melalui desain yang fun dan kompetitif antar teman.",
          en: "Focused on behavioral change through fun and competitive designs among friends.",
        },
        metrics: [
          { label: { id: "Prestasi", en: "Award" }, value: "3rd Place" },
          { label: { id: "Fokus", en: "Focus" }, value: "Behavioral" },
        ],
      },
    },
  },
];
