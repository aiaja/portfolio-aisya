import { ProjectDetailV2 } from "../project-details";

export const fikAppsData: ProjectDetailV2 = {
  slug: "fik-apps",

  hero: {
    title: {
      line1: "Scaling a Legacy System.",
      line2: "Without Breaking It.",
    },
    tagline: {
      en: "How we transformed multiple independent academic systems into a scalable faculty platform while keeping existing programs running.",
      id: "Bagaimana kami mentransformasi berbagai sistem akademik yang terpisah menjadi platform fakultas yang skalabel tanpa mengganggu program yang sudah berjalan.",
    },
    stats: [
      {
        label: { en: "Students", id: "Mahasiswa" },
        value: "6,000+",
      },
      {
        label: { en: "Components Reduced", id: "Komponen Direduksi" },
        value: "190+ → 25",
      },
    ],
    role: {
      en: "Frontend Lead",
      id: "Frontend Lead",
    },
    team: {
      en: "4 Frontend Engineers",
      id: "4 Frontend Engineer",
    },
    image: "/images/FIK APPS.svg",
  },

  context: {
    title: {
      en: "A System That Grew Without Standards.",
      id: "Sistem yang Bertumbuh Tanpa Standar.",
    },
    description: {
      en: "Each study program had been developed independently by different developers inside the same repository. Components, layouts, and folder structures evolved differently, making the platform difficult to maintain and nearly impossible to scale beyond individual departments.",
      id: "Setiap program studi dikembangkan secara terpisah oleh developer yang berbeda dalam satu repository yang sama. Komponen, layout, dan struktur folder berkembang dengan standar masing-masing sehingga sulit dipelihara dan hampir mustahil diskalakan ke tingkat fakultas.",
    },
    points: [
      {
        en: "190+ Duplicated Components",
        id: "190+ Komponen Duplikat",
      },
      {
        en: "No Shared Design Standards",
        id: "Tidak Ada Standar Bersama",
      },
    ],
  },

  decision: {
    title: {
      en: "Scalability over Perfection.",
      id: "Skalabilitas di atas Kesempurnaan.",
    },
    description: {
      en: "My first instinct was a complete refactor. After testing it locally, I realized the changes created a domino effect that risked breaking active production systems. Instead of pursuing the ideal architecture, I redesigned only the parts required for faculty-wide scalability.",
      id: "Insting pertama saya adalah melakukan refactor total. Namun setelah mencobanya di lingkungan lokal, saya menyadari perubahan tersebut menimbulkan domino effect yang berisiko merusak sistem produksi yang sudah berjalan. Saya akhirnya hanya merefactor bagian yang benar-benar dibutuhkan untuk skalabilitas tingkat fakultas.",
    },
    options: [
      {
        label: "Option A",
        name: "Full Rewrite",
        status: {
          en: "⚠ Production Risk",
          id: "⚠ Berisiko ke Produksi",
        },
        selected: false,
      },
      {
        label: "Option B",
        name: "Incremental Refactor",
        status: {
          en: "✓ Safe Migration",
          id: "✓ Migrasi Aman",
        },
        selected: true,
      },
    ],
  },

  solutions: {
    title: {
      en: "Designing for Faculty Scale.",
      id: "Merancang untuk Skala Fakultas.",
    },

    items: [
      {
        title: {
          en: "Role-Based Access Redesign",
          id: "Redesain Role-Based Access",
        },
        description: {
          en: "Separated overlapping responsibilities into four dedicated roles, allowing faculty executives, web administrators, departments, and coordinators to focus on their own workflows.",
          id: "Memisahkan tanggung jawab yang sebelumnya tumpang tindih menjadi empat role berbeda sehingga dekanat, web admin, admin program studi, dan koordinator memiliki workflow yang lebih jelas.",
        },
        tags: ["Super", "Web", "Program", "Coord"],
        colSpan: 7,
      },

      {
        title: {
          en: "Shared Component System",
          id: "Shared Component System",
        },
        description: {
          en: "Reduced more than 190 scattered UI components into a reusable shared system, creating a more consistent interface while simplifying long-term maintenance.",
          id: "Mereduksi lebih dari 190 komponen UI yang tersebar menjadi sistem komponen bersama sehingga antarmuka lebih konsisten dan proses maintenance jauh lebih sederhana.",
        },
        colSpan: 5,
      },

      {
        title: {
          en: "Controlled Flexibility",
          id: "Fleksibilitas yang Terkontrol",
        },
        description: {
          en: "Stakeholders requested a drag-and-drop website builder, but we chose template-based CMS instead to balance branding consistency with ease of use for non-technical staff.",
          id: "Stakeholder menginginkan website builder drag-and-drop, namun kami memilih CMS berbasis template agar branding tetap konsisten sekaligus mudah digunakan oleh staf non-teknis.",
        },
        colSpan: 5,
      },

      {
        title: {
          en: "Engineering Standards",
          id: "Standarisasi Engineering",
        },
        description: {
          en: "Established shared development practices including reusable components, pull requests, build verification, and branch conventions to reduce conflicts across the frontend team.",
          id: "Menerapkan standar pengembangan bersama seperti reusable component, pull request, build verification, serta konvensi branch untuk meminimalkan konflik antar developer frontend.",
        },
        colSpan: 7,
      },
    ],
  },

  reflection: {
    quote: {
      en: "Great engineering isn't about building the perfect architecture. It's about knowing which imperfections are worth keeping.",
      id: "Engineering yang baik bukan tentang membangun arsitektur yang sempurna, tetapi mengetahui kompromi mana yang layak dipertahankan.",
    },
    description: {
      en: "This project changed how I think about software engineering. I learned that scalability isn't achieved by rewriting everything—it comes from making careful decisions that respect existing users, business constraints, and the reality of legacy systems.",
      id: "Proyek ini mengubah cara saya memandang software engineering. Saya belajar bahwa skalabilitas bukan dicapai dengan menulis ulang semuanya, tetapi melalui keputusan-keputusan yang menghormati pengguna yang sudah ada, keterbatasan bisnis, dan realitas sistem legacy.",
    },
  },
};