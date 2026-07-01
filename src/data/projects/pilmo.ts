import { ProjectDetailV2 } from "../project-details";

export const pilmoData: ProjectDetailV2 = {
  slug: "pilmo",

  hero: {
    title: {
      line1: "When Research",
      line2: "Proved Me Wrong.",
    },

    tagline: {
      en: "What started as a medication reminder for my grandmother became a complete support ecosystem after field research revealed I was solving the wrong problem.",
      id: "Berawal dari pengingat obat untuk nenek saya, lalu berkembang menjadi ekosistem pendukung pengobatan setelah riset lapangan membuktikan bahwa saya sedang menyelesaikan masalah yang salah.",
    },

    stats: [
      {
        label: {
          en: "Interviews",
          id: "Wawancara",
        },
        value: "19+",
      },
      {
        label: {
          en: "National Finalist",
          id: "Finalis Nasional",
        },
        value: "Top 8",
      },
    ],

    role: {
      en: "Product Lead",
      id: "Product Lead",
    },

    team: {
      en: "Research & Product Strategy",
      id: "Riset & Strategi Produk",
    },

    image: "/images/PILMO.svg",
  },

  context: {
    title: {
      en: "A Good Idea That Failed.",
      id: "Ide Bagus yang Ternyata Gagal.",
    },

    description: {
      en: "The idea came from my grandmother, who often forgot to take her hypertension medication. I believed a reminder app would solve the problem. But after visiting a local elderly clinic, I discovered something unexpected: most elderly patients didn't even own smartphones. My solution failed before it could begin.",
      id: "Ide ini berawal dari nenek saya yang sering lupa minum obat hipertensi. Saya mengira aplikasi pengingat akan menyelesaikan masalah tersebut. Namun setelah mengunjungi Posyandu Lansia, saya menemukan fakta yang tidak saya duga: sebagian besar lansia bahkan tidak memiliki smartphone. Solusi saya gagal bahkan sebelum digunakan.",
    },

    points: [
      {
        en: "Field Research Changed Everything",
        id: "Riset Lapangan Mengubah Segalanya",
      },
      {
        en: "The Original Assumption Was Wrong",
        id: "Asumsi Awal Ternyata Salah",
      },
    ],
  },

  decision: {
    title: {
      en: "Validate the Problem, Not the Idea.",
      id: "Validasi Masalah, Bukan Ide.",
    },

    description: {
      en: "Rather than forcing my original concept, I researched long-term medication adherence and discovered Indonesia's tuberculosis treatment challenge. Interviews with patients and healthcare workers revealed that forgetting medication was only a symptom. Isolation, treatment fatigue, stigma, and administrative burden were the real problems.",
      id: "Daripada memaksakan ide awal, saya meneliti kepatuhan pengobatan jangka panjang dan menemukan tantangan pengobatan TBC di Indonesia. Wawancara dengan pasien dan tenaga kesehatan menunjukkan bahwa lupa minum obat hanyalah gejala. Isolasi sosial, kelelahan menjalani terapi, stigma, dan beban administrasi adalah masalah yang sebenarnya.",
    },

    options: [
      {
        label: "Assumption",
        name: "Reminder Application",
        status: {
          en: "⚠ Solved One Symptom",
          id: "⚠ Hanya Menyelesaikan Gejala",
        },
        selected: false,
      },
      {
        label: "Validation",
        name: "Treatment Support Ecosystem",
        status: {
          en: "✓ Addressed Root Problems",
          id: "✓ Menjawab Akar Permasalahan",
        },
        selected: true,
      },
    ],
  },

  solutions: {
    title: {
      en: "Designed Around Human Behavior.",
      id: "Dirancang Berdasarkan Perilaku Manusia.",
    },

    items: [
      {
        title: {
          en: "Family as Motivation",
          id: "Keluarga Sebagai Motivasi",
        },

        description: {
          en: "Designed a three-level medication reminder using trusted family voices, recognizing that emotional encouragement matters more than notifications alone.",
          id: "Merancang pengingat obat tiga tingkat menggunakan suara anggota keluarga karena dukungan emosional terbukti lebih berarti dibanding sekadar notifikasi.",
        },

        colSpan: 6,
      },

      {
        title: {
          en: "Evidence over Assumptions",
          id: "Data di Atas Asumsi",
        },

        description: {
          en: "Removed medication scanning and real-time location tracking after interviews showed they added complexity without solving patients' real challenges.",
          id: "Menghapus fitur pemindaian obat dan pelacakan lokasi setelah hasil wawancara menunjukkan fitur tersebut tidak menyelesaikan tantangan utama pasien.",
        },

        colSpan: 6,
      },

      {
        title: {
          en: "Reducing Healthcare Burden",
          id: "Mengurangi Beban Tenaga Kesehatan",
        },

        description: {
          en: "Designed dashboards that fit existing workflows, reducing duplicate manual reporting while providing treatment monitoring and regional disease visibility.",
          id: "Merancang dashboard yang mengikuti alur kerja tenaga kesehatan sehingga mengurangi pencatatan ganda sekaligus menyediakan monitoring pengobatan dan persebaran kasus.",
        },

        colSpan: 7,
      },

      {
        title: {
          en: "Anonymous Support Community",
          id: "Komunitas Dukungan Anonim",
        },

        description: {
          en: "Created a safe community where patients could support each other anonymously, addressing social stigma and emotional isolation during long-term treatment.",
          id: "Membangun komunitas anonim agar pasien dapat saling mendukung tanpa takut stigma sosial selama menjalani pengobatan jangka panjang.",
        },

        colSpan: 5,
      },
    ],
  },

  reflection: {
    quote: {
      en: "I thought I was validating a solution. I learned I first had to validate the problem.",
      id: "Saya pikir sedang memvalidasi solusi. Ternyata saya harus memvalidasi masalahnya terlebih dahulu.",
    },

    description: {
      en: "PILMO completely changed how I approach product development. I learned that great products rarely come from defending initial ideas. They come from listening carefully, questioning assumptions, and allowing research to reshape the direction—even when it means abandoning features you've already designed.",
      id: "PILMO mengubah cara saya membangun produk. Saya belajar bahwa produk yang baik bukan lahir dari mempertahankan ide awal, tetapi dari mendengarkan pengguna, mempertanyakan asumsi sendiri, dan membiarkan hasil riset mengubah arah produk, meskipun itu berarti membuang fitur yang sudah dirancang.",
    },
  },
};