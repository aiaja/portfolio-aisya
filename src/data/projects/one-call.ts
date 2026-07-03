import { ProjectDetailV2 } from "../project-details";

export const oneCallData: ProjectDetailV2 = {
  slug: "onecall",

  hero: {
    title: {
      line1: "OneCall:",
      line2: "Designing for Critical Moments.",
    },

    tagline: {
      en: "Inspired by a tragic incident, OneCall reimagines emergency response by minimizing the time between asking for help and receiving it.",
      id: "Terinspirasi dari sebuah tragedi, OneCall merancang ulang alur pelaporan darurat dengan meminimalkan waktu antara meminta bantuan dan bantuan datang.",
    },

    stats: [
      {
        label: {
          en: "User Validation",
          id: "Validasi Pengguna",
        },
        value: "13+",
      },
      {
        label: {
          en: "Awards",
          id: "Penghargaan",
        },
        value: "2× 3rd",
      },
    ],

    role: {
      en: "Product Strategist & Frontend",
      id: "Product Strategist & Frontend",
    },

    team: {
      en: "Emergency Response Team",
      id: "Tim Pengembang",
    },

    image: "/images/ONECALL.svg",
  },

  context: {
    title: {
      en: "When Every Second Matters.",
      id: "Ketika Setiap Detik Sangat Berharga.",
    },

    description: {
      en: "After a university student lost his life in a violent assault, I began questioning why emergency help often arrives too late. In critical situations, victims rarely have time to unlock their phones, search for contacts, or decide which emergency service to call.",
      id: "Setelah seorang mahasiswa kehilangan nyawanya akibat tindak kriminal, saya mulai mempertanyakan mengapa bantuan darurat sering datang terlambat. Dalam situasi kritis, korban sering kali tidak memiliki waktu untuk membuka ponsel, mencari kontak, atau memutuskan harus menghubungi layanan darurat yang mana.",
    },

    points: [
      {
        en: "Emergency Contacts Were Fragmented",
        id: "Kontak Darurat Terfragmentasi",
      },
      {
        en: "Response Time Was the Real Problem",
        id: "Waktu Respons Menjadi Masalah Utama",
      },
    ],
  },

  decision: {
    title: {
      en: "Accessibility Over Features.",
      id: "Aksesibilitas di Atas Banyak Fitur.",
    },

    description: {
      en: "Inspired by the Korean drama 'The First Responders', my initial vision was a unified emergency call center. After validating with healthcare workers and community volunteers, I realized integrating government agencies would require lengthy bureaucracy. Instead, I redesigned the workflow around nearby volunteers who could respond immediately while coordinating with the appropriate emergency services.",
      id: "Terinspirasi dari drama Korea 'The First Responders', awalnya saya ingin menyatukan seluruh layanan darurat dalam satu call center. Setelah berdiskusi dengan tenaga kesehatan dan relawan, saya menyadari integrasi antarinstansi membutuhkan birokrasi yang panjang. Saya kemudian mengubah pendekatan dengan menjadikan relawan terdekat sebagai first responder yang dapat bergerak cepat sambil menghubungi pihak terkait.",
    },

    options: [
      {
        label: "Option A",
        name: "Unified Government Call Center",
        status: {
          en: "⚠ High Bureaucracy",
          id: "⚠ Birokrasi Tinggi",
        },
        selected: false,
      },
      {
        label: "Option B",
        name: "Volunteer-First Response",
        status: {
          en: "✓ Faster Response",
          id: "✓ Respons Lebih Cepat",
        },
        selected: true,
      },
    ],
  },

  solutions: {
    title: {
      en: "Designing for Panic Situations.",
      id: "Merancang untuk Situasi Panik.",
    },

    items: [
      {
        title: {
          en: "One-Tap Emergency Access",
          id: "Akses Darurat Sekali Tekan",
        },

        description: {
          en: "Users can trigger emergency mode by pressing the power button five times or using voice commands, eliminating the need to unlock the phone or open an app.",
          id: "Pengguna dapat mengaktifkan mode darurat dengan menekan tombol power lima kali atau menggunakan perintah suara tanpa perlu membuka aplikasi ataupun membuka kunci ponsel.",
        },

        colSpan: 7,
      },

      {
        title: {
          en: "Nearest Volunteer Dispatch",
          id: "Relawan Terdekat",
        },

        description: {
          en: "Inspired by ride-hailing systems, emergencies are routed to the nearest available volunteer, who immediately receives the victim's location and can coordinate further assistance.",
          id: "Terinspirasi dari sistem ride-hailing, laporan darurat diteruskan ke relawan terdekat yang langsung menerima lokasi korban dan dapat mengoordinasikan bantuan lanjutan.",
        },

        colSpan: 5,
      },

      {
        title: {
          en: "Minimal Decision Interface",
          id: "Antarmuka Minim Keputusan",
        },

        description: {
          en: "The homepage intentionally exposes only essential actions. During emergencies, fewer choices reduce cognitive load and increase response speed.",
          id: "Homepage hanya menampilkan aksi yang benar-benar penting. Dalam kondisi darurat, semakin sedikit pilihan, semakin cepat pengguna dapat meminta pertolongan.",
        },

        colSpan: 5,
      },

      {
        title: {
          en: "Integrated Emergency Access",
          id: "Akses Layanan Darurat",
        },

        description: {
          en: "Besides volunteer assistance, users can instantly contact police, ambulance, firefighters, or other emergency services from a single interface.",
          id: "Selain bantuan relawan, pengguna juga dapat langsung menghubungi polisi, ambulans, pemadam kebakaran, maupun layanan darurat lainnya dari satu antarmuka.",
        },

        colSpan: 7,
      },
    ],
  },

  reflection: {
    quote: {
      en: "Emergency UX is not about engagement. It's about reducing time-to-help.",
      id: "Emergency UX bukan tentang engagement. Tetapi tentang mempercepat datangnya pertolongan.",
    },

    description: {
      en: "OneCall fundamentally changed how I think about product design. Beautiful interfaces mean little if users cannot act under pressure. In emergency situations, reducing cognitive load is more valuable than adding more features.",
      id: "OneCall mengubah cara saya memandang desain produk. Antarmuka yang indah tidak berarti jika pengguna tidak mampu menggunakannya saat berada di bawah tekanan. Dalam kondisi darurat, mengurangi beban berpikir jauh lebih penting daripada menambahkan lebih banyak fitur.",
    },
  },
};