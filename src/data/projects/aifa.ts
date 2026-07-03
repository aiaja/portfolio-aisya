import { ProjectDetailV2 } from "../project-details";

export const aifaData: ProjectDetailV2 = {
  slug: "aifa",

  hero: {
    title: {
      line1: "AIFA:",
      line2: "Automation Starts with Observation.",
    },

    tagline: {
      en: "Born from observing café operations, AIFA reduces repetitive financial work by transforming paper receipts into structured expense records through AI-powered document understanding.",
      id: "Berawal dari observasi operasional café, AIFA mengurangi pekerjaan finansial yang repetitif dengan mengubah struk fisik menjadi data pengeluaran terstruktur menggunakan AI.",
    },

    stats: [
      {
        label: {
          en: "Field Observations",
          id: "Observasi Lapangan",
        },
        value: "3",
      },
      {
        label: {
          en: "Business Validation",
          id: "Validasi Bisnis",
        },
        value: "4",
      },
    ],

    role: {
      en: "Product Strategist",
      id: "Product Strategist",
    },

    team: {
      en: "5 Members",
      id: "5 Anggota",
    },

    image: "/images/AIFA.svg",
  },

  context: {
    title: {
      en: "The Invisible Workflow.",
      id: "Pekerjaan yang Tidak Terlihat.",
    },

    description: {
      en: "While frequently working from cafés, I noticed something customers never see. After closing time, staff manually gathered paper receipts, compared them against POS transactions and cash records, then retyped everything into spreadsheets. The process was repetitive, error-prone, and consumed valuable business time every single day.",
      id: "Saat sering bekerja dari café, saya melihat sesuatu yang tidak pernah disadari pelanggan. Setelah jam operasional berakhir, staf mengumpulkan struk fisik, mencocokkannya dengan transaksi POS dan uang kas, lalu menulis ulang semuanya ke spreadsheet. Proses ini repetitif, rawan kesalahan, dan menghabiskan waktu setiap hari.",
    },

    points: [
      {
        en: "Daily Manual Reconciliation",
        id: "Rekonsiliasi Harian Manual",
      },
      {
        en: "Repeated Financial Data Entry",
        id: "Input Data Keuangan Berulang",
      },
    ],
  },

  decision: {
    title: {
      en: "Reduce Friction, Not Replace People.",
      id: "Mengurangi Friksi, Bukan Menggantikan Manusia.",
    },

    description: {
      en: "Instead of building another generic AI assistant, we focused on the single most repetitive activity: transferring invoice data into financial records. We deliberately removed ambitious features like automatic business proposal generation and concentrated on solving one operational bottleneck exceptionally well.",
      id: "Alih-alih membuat AI assistant generik, kami memilih fokus pada aktivitas paling repetitif: memindahkan data invoice ke pencatatan keuangan. Kami sengaja menghapus fitur-fitur ambisius seperti pembuatan proposal otomatis agar dapat menyelesaikan satu bottleneck operasional dengan lebih baik.",
    },

    options: [
      {
        label: "Option A",
        name: "Full Business Assistant",
        status: {
          en: "⚠ Too Broad for MVP",
          id: "⚠ Terlalu Luas untuk MVP",
        },
        selected: false,
      },
      {
        label: "Option B",
        name: "Receipt Intelligence",
        status: {
          en: "✓ Solved Real Workflow",
          id: "✓ Menyelesaikan Workflow Nyata",
        },
        selected: true,
      },
    ],
  },

  solutions: {
    title: {
      en: "Designing Around Existing Workflows.",
      id: "Merancang Berdasarkan Workflow Nyata.",
    },

    items: [
      {
        title: {
          en: "Observe Before Building",
          id: "Observasi Sebelum Membangun",
        },

        description: {
          en: "Validated operational workflows across multiple cafés before defining the product, ensuring the solution addressed an actual business bottleneck instead of assumptions.",
          id: "Memvalidasi workflow operasional di beberapa café sebelum menentukan solusi sehingga produk dibangun berdasarkan masalah nyata, bukan asumsi.",
        },

        colSpan: 7,
      },

      {
        title: {
          en: "AI-Powered Receipt Extraction",
          id: "Ekstraksi Struk Berbasis AI",
        },

        description: {
          en: "Leveraged OCR and document understanding to automatically extract vendors, dates, totals, and transaction details from paper receipts.",
          id: "Memanfaatkan OCR dan document understanding untuk mengekstrak vendor, tanggal, nominal, dan detail transaksi secara otomatis dari struk fisik.",
        },

        colSpan: 5,
      },

      {
        title: {
          en: "Structured Financial Records",
          id: "Data Keuangan Terstruktur",
        },

        description: {
          en: "Converted unstructured receipt images into categorized expense records, eliminating repetitive manual bookkeeping.",
          id: "Mengubah gambar struk yang tidak terstruktur menjadi pencatatan pengeluaran yang terorganisir sehingga menghilangkan proses pencatatan manual berulang.",
        },

        colSpan: 5,
      },

      {
        title: {
          en: "Focused MVP",
          id: "MVP yang Terfokus",
        },

        description: {
          en: "Removed proposal generation and other secondary ideas to deliver the highest-value workflow automation within limited hackathon time.",
          id: "Menghapus fitur pembuatan proposal dan ide tambahan lainnya agar tim dapat fokus menyelesaikan otomatisasi workflow dengan dampak terbesar dalam waktu hackathon yang terbatas.",
        },

        colSpan: 7,
      },
    ],
  },

  reflection: {
    quote: {
      en: "Automation should eliminate repetitive work, not create unnecessary complexity.",
      id: "Otomatisasi seharusnya menghilangkan pekerjaan yang repetitif, bukan menambah kompleksitas baru.",
    },

    description: {
      en: "AIFA changed the way I think about AI products. Instead of starting with technology, I learned to begin by observing how people actually work. The best opportunities for automation are often hidden inside small, repetitive routines that everyone has simply accepted as normal.",
      id: "AIFA mengubah cara saya memandang produk berbasis AI. Saya belajar bahwa teknologi seharusnya tidak menjadi titik awal. Sebaliknya, proses observasi terhadap cara orang bekerja justru membuka peluang otomasi terbesar, terutama pada aktivitas kecil yang berulang dan selama ini dianggap normal.",
    },
  },
};