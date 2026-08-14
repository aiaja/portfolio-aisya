import { ProjectDetailV2 } from "../project-details";

export const fikAppsData: ProjectDetailV2 = {
  slug: "fik-apps",

  hero: {
    title: {
      line1: "Scaling an Academic Legacy System",
      line2: "with Zero Downtime.",
    },
    tagline: {
      en: "How we transformed fragmented, independently built departmental apps into a unified, scalable faculty platform serving 6,000+ active students.",
      id: "Bagaimana kami mentransformasi aplikasi departemen yang terfragmentasi menjadi platform fakultas terpadu dan skalabel untuk 6.000+ mahasiswa aktif.",
    },
    category: {
      en: "Academic SaaS & Architecture",
      id: "SaaS Akademik & Arsitektur",
    },
    role: {
      en: "Lead Frontend Engineer (Personal Contribution: UI Architecture, RBAC, Data Table Primitive, TypeScript Contracts)",
      id: "Lead Frontend Engineer (Kontribusi Personal: Arsitektur UI, RBAC, Primitif Data Table, Kontrak TypeScript)",
    },
    timeline: {
      en: "6 Months (Migration & Scale)",
      id: "6 Bulan (Migrasi & Skala)",
    },
    team: {
      en: "4 Frontend Engineers, 2 Backend Engineers",
      id: "4 Frontend Engineer, 2 Backend Engineer",
    },
    organization: {
      en: "Faculty of Computer Science, UDINUS",
      id: "Fakultas Ilmu Komputer, UDINUS",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "PostgreSQL"],
    image: "/images/FIK APPS.svg",
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
  },

  context: {
    title: {
      en: "A Mission-Critical System That Grew Without Central Standards.",
      id: "Sistem Kritis yang Bertumbuh Tanpa Standar Terpusat.",
    },
    description: {
      en: "Each academic department had developed its web tools in silos within the same repository. Over time, folder structures diverged, UI patterns duplicated wildly, and conflicting state lifecycles made faculty-wide feature rollouts high-risk and slow.",
      id: "Setiap program studi mengembangkan perkakas web secara terpisah di repository yang sama. Seiring berjalannya waktu, struktur folder terpecah, pola UI berduplikasi tak terkontrol, dan siklus state yang saling bertabrakan membuat peluncuran fitur baru sangat berisiko dan lambat.",
    },
    problemStatement: {
      en: "190+ fragmented components and un-typed API calls caused critical regressions during exam enrollment periods, with no unified design system or role hierarchy across 6 study programs.",
      id: "Lebih dari 190 komponen terfragmentasi dan pemanggilan API tanpa type safety menyebabkan regresi kritis saat periode registrasi ujian, tanpa adanya sistem desain terpadu maupun hierarki peran di 6 program studi.",
    },
    challenges: [
      {
        en: "190+ duplicated components across 6 departmental folders",
        id: "190+ komponen duplikat di 6 folder program studi",
      },
      {
        en: "Zero shared design token standard or atomic primitives",
        id: "Tidak ada standar token desain atau primitif atomik",
      },
      {
        en: "Conflicting role permissions between faculty executives and coordinators",
        id: "Tumpang tindih izin akses antara dekanat dan koordinator prodi",
      },
      {
        en: "Strict zero-downtime requirement during active semester operations",
        id: "Persyaratan ketat zero-downtime selama operasional semester aktif",
      },
    ],
    objectives: [
      {
        en: "Consolidate 190+ components down to ~25 atomic primitives",
        id: "Mengkonsolidasikan 190+ komponen menjadi ~25 primitif atomik",
      },
      {
        en: "Establish strict TypeScript API contracts across all data layers",
        id: "Menerapkan kontrak API TypeScript ketat di seluruh data layer",
      },
      {
        en: "Redesign Role-Based Access Control (RBAC) into 4 distinct workflows",
        id: "Merancang ulang RBAC menjadi 4 alur kerja peran yang terisolasi",
      },
      {
        en: "Deploy incremental changes without disrupting active student services",
        id: "Meluncurkan perubahan bertahap tanpa mengganggu layanan mahasiswa aktif",
      },
    ],
  },

  metrics: [
    {
      value: "6,000+",
      label: { en: "Active Students", id: "Mahasiswa Aktif" },
      description: {
        en: "Supported across undergraduate and graduate programs during peak enrollment periods.",
        id: "Didukung di seluruh program sarjana dan pascasarjana saat periode registrasi puncak.",
      },
      badge: { en: "Scale", id: "Skala" },
    },
    {
      value: "178",
      label: { en: "Faculty Lecturers", id: "Dosen Fakultas" },
      description: {
        en: "Conducting academic validation, thesis defense scheduling, and grading.",
        id: "Melakukan validasi akademik, penjadwalan sidang, dan penilaian.",
      },
    },
    {
      value: "190 → 25",
      label: { en: "Component Consolidation", id: "Konsolidasi Komponen" },
      description: {
        en: "86.8% reduction in component footprint via shared design token architecture.",
        id: "Reduksi 86.8% footprint komponen melalui arsitektur design token bersama.",
      },
      badge: { en: "-86.8%", id: "-86.8%" },
    },
    {
      value: "0",
      label: { en: "Production Downtime", id: "Downtime Produksi" },
      description: {
        en: "Zero operational interruptions achieved across the entire 6-month migration pipeline.",
        id: "Nol gangguan operasional sepanjang pipeline migrasi 6 bulan.",
      },
      badge: { en: "100% Uptime", id: "100% Uptime" },
    },
  ],

  comparisons: [
    {
      feature: { en: "Design & UI Architecture", id: "Arsitektur Desain & UI" },
      before: {
        en: "190+ bespoke buttons, cards, and modal components scattered across 6 department directories.",
        id: "190+ tombol, kartu, dan modal kustom yang tersebar tidak teratur di 6 direktori departemen.",
      },
      after: {
        en: "25 atomic design primitives in a central @/components/ui library with strict token styling.",
        id: "25 primitif desain atomik di pustaka terpusat @/components/ui dengan token styling ketat.",
      },
    },
    {
      feature: { en: "Type Safety & Contracts", id: "Type Safety & Kontrak API" },
      before: {
        en: "Implicit `any` types and inconsistent JSON payload parsing causing silent runtime errors.",
        id: "Penggunaan tipe implisit `any` dan parsing payload JSON tidak seragam yang memicu runtime error.",
      },
      after: {
        en: "Strict TypeScript interfaces and schema validators for all academic API endpoints.",
        id: "Interface TypeScript ketat dan validator skema untuk seluruh endpoint API akademik.",
      },
    },
    {
      feature: { en: "Access Control (RBAC)", id: "Kontrol Akses (RBAC)" },
      before: {
        en: "Overlapping permission logic where department admins could accidentally modify global configs.",
        id: "Logika izin tumpang tindih di mana admin prodi dapat secara tak sengaja mengubah konfigurasi global.",
      },
      after: {
        en: "4 isolated, role-gated permission levels (Dean, Web Admin, Dept Admin, Coordinator).",
        id: "4 tingkat izin terisolasi (Dekanat, Web Admin, Admin Prodi, Koordinator).",
      },
    },
  ],

  decision: {
    title: {
      en: "Scalability and Production Safety over Idealistic Perfection.",
      id: "Skalabilitas dan Keamanan Produksi di atas Kesempurnaan.",
    },
    description: {
      en: "The initial engineering instinct was a scorched-earth total rewrite. However, rigorous staging tests revealed cascading breaking changes that risked university operations. We chose an incremental micro-migration path instead.",
      id: "Insting rekayasa awal adalah menulis ulang sistem secara total. Namun pengujian staging membuktikan adanya risiko breaking changes yang mengancam operasional universitas. Kami memutuskan memilih jalur migrasi bertahap yang terukur.",
    },
    options: [
      {
        label: "Option A",
        name: "Full Ground-Up Rewrite",
        description: {
          en: "Tear down the legacy codebase and rebuild everything from scratch on a new stack.",
          id: "Menghapus seluruh codebase lama dan membangun ulang semuanya dari awal.",
        },
        status: {
          en: "High Production Risk",
          id: "Risiko Tinggi",
        },
        tradeoffs: [
          { en: "Requires freezing feature updates for 4+ months", id: "Membutuhkan pembekuan rilis fitur selama 4+ bulan" },
          { en: "Massive risk of regressions in active enrollment workflows", id: "Risiko regresi masif pada alur registrasi aktif" },
        ],
        selected: false,
      },
      {
        label: "Option B",
        name: "Strangler Fig Incremental Migration",
        description: {
          en: "Refactor core UI primitives and extract APIs incrementally while keeping live routes online.",
          id: "Merefaktor komponen inti dan mengekstrak API secara bertahap dengan route live tetap online.",
        },
        status: {
          en: "Safe & Continuous",
          id: "Aman & Berkelanjutan",
        },
        tradeoffs: [
          { en: "Requires maintaining dual compatibility layers temporarily", id: "Perlu mengelola layer kompatibilitas ganda sementara waktu" },
          { en: "Zero downtime and immediate value delivery per release", id: "Nol downtime dan nilai manfaat langsung terasa di setiap rilis" },
        ],
        selected: true,
      },
    ],
    rationale: {
      en: "Option B allowed us to deliver component consolidation and RBAC isolation in two-week sprint cycles without ever taking student registration offline.",
      id: "Opsi B memungkinkan kami merilis konsolidasi komponen dan isolasi RBAC dalam siklus sprint 2 minggu tanpa sekalipun mematikan layanan registrasi mahasiswa.",
    },
  },

  architecture: {
    title: {
      en: "Four-Tier Monorepo Architecture.",
      id: "Arsitektur Empat Lapisan Monorepo.",
    },
    description: {
      en: "Organized the frontend into clearly decoupled concerns: presentation primitives, role-aware business logic, typed API clients, and cached query states.",
      id: "Mengorganisasi frontend ke dalam lapisan terpisah: primitif presentasi, logika bisnis berbasis peran, client API bertipe, dan manajemen query ter-cache.",
    },
    layers: [
      {
        name: "Layer 1: Design System Primitives (@/components/ui)",
        role: { en: "Presentational Tokens & Atoms", id: "Token Presentasi & Atom" },
        technologies: ["Tailwind CSS", "Framer Motion", "Lucide React"],
        description: {
          en: "Stateless, fully accessible UI controls adhering to unified color, spacing, and radius tokens.",
          id: "Kontrol UI stateless dan aksesibel yang mematuhi token warna, spacing, dan radius bento seragam.",
        },
        keyContracts: ["ButtonProps", "CardProps", "BadgeProps", "ModalProps"],
      },
      {
        name: "Layer 2: Role-Gated Feature Modules (@/components/features)",
        role: { en: "Domain Logic & RBAC Enforcement", id: "Logika Domain & Penegakan RBAC" },
        technologies: ["React 19", "RBAC Guard", "Zod"],
        description: {
          en: "Encapsulates workflow logic for Dean approvals, thesis defense scheduling, and syllabus publishing.",
          id: "Mengenkapsulasi logika workflow untuk persetujuan dekanat, penjadwalan sidang, dan kurikulum prodi.",
        },
        keyContracts: ["UseRolePermission()", "AcademicSessionGuard"],
      },
      {
        name: "Layer 3: Typed API Client & State Layer (@/services)",
        role: { en: "Data Fetching & Schema Validation", id: "Pengambilan Data & Validasi Skema" },
        technologies: ["TypeScript 5", "Fetch API", "SWR"],
        description: {
          en: "Provides strictly typed API contracts with optimistic UI updates and structured error boundaries.",
          id: "Menyediakan kontrak API bertipe ketat dengan optimistic UI update dan error boundary terstruktur.",
        },
        keyContracts: ["ApiResponse<T>", "StudentEnrollmentSchema", "LecturerSchedule"],
      },
      {
        name: "Layer 4: Backend Microservices & Database",
        role: { en: "Core Data & Authentication", id: "Data Inti & Autentikasi" },
        technologies: ["Laravel 11", "PostgreSQL", "JWT"],
        description: {
          en: "High-throughput relational data storage and centralized faculty authentication services.",
          id: "Penyimpanan data relasional berkinerja tinggi dan layanan autentikasi terpusat fakultas.",
        },
        keyContracts: ["Bearer Auth", "Postgres Migration Schema"],
      },
    ],
  },

  solutions: {
    title: {
      en: "Key Engineering Solutions Implemented.",
      id: "Solusi Rekayasa Utama yang Diterapkan.",
    },
    items: [
      {
        title: {
          en: "Four-Role RBAC Workflow Architecture",
          id: "Arsitektur Workflow RBAC 4-Peran",
        },
        description: {
          en: "Designed and implemented strict role isolation separating Dean/Faculty Executives, Web Administrators, Department Heads, and Student Coordinators to eliminate privilege escalation and cross-department data collisions.",
          id: "Merancang dan menerapkan isolasi peran ketat yang memisahkan Dekanat, Web Administrator, Ketua Program Studi, dan Koordinator Mahasiswa guna mencegah eskalasi hak akses dan konflik data antar program studi.",
        },
        tags: ["RBAC", "Access Control", "Security", "Zod"],
        colSpan: 7,
        highlights: [
          { en: "Role-specific dashboard views and permission guard matrix", id: "Tampilan dashboard spesifik peran dan matriks permission guard" },
          { en: "Eliminated unauthorized cross-department configuration edits", id: "Menghilangkan risiko salah edit konfigurasi antar program studi" },
        ],
      },
      {
        title: {
          en: "Atomic Design System & Component Consolidation",
          id: "Design System Atomik & Konsolidasi Komponen",
        },
        description: {
          en: "Consolidated 190+ disparate departmental components into 25 reusable atomic primitives in @/components/ui, reducing code duplication by 86.8% and cutting client bundle footprint.",
          id: "Mengkonsolidasikan 190+ komponen departemen yang terfragmentasi menjadi 25 primitif atomik di @/components/ui, mereduksi duplikasi kode sebesar 86.8% dan memangkas ukuran bundle client.",
        },
        tags: ["Atomic Design", "Tailwind CSS", "Reusability"],
        colSpan: 5,
        highlights: [
          { en: "Standardized design tokens, bento radii, and typography scales", id: "Standarisasi design tokens, radius bento, dan skala tipografi" },
          { en: "Shared across all 6 study program sub-modules", id: "Digunakan bersama di seluruh 6 sub-modul program studi" },
        ],
      },
      {
        title: {
          en: "High-Throughput Academic Data Table Primitive",
          id: "Primitif Data Table Akademik Berkinerja Tinggi",
        },
        description: {
          en: "Engineered a reusable, paginated Data Table primitive with server-side query syncing, debounced multi-field filtering, column visibility toggling, and optimistic batch approval actions for faculty lecturers.",
          id: "Mengembangkan komponen Data Table terstandar dengan sinkronisasi query server-side, debounced multi-field filtering, visibilitas kolom dinamis, dan aksi persetujuan massal optimistik untuk dosen fakultas.",
        },
        tags: ["Data Table", "Virtualization", "SWR", "Optimistic UI"],
        colSpan: 5,
        highlights: [
          { en: "Smooth rendering for 500+ student thesis records per view", id: "Performa render mulus untuk 500+ data pendaftaran sidang per view" },
          { en: "Zero layout shift during live query filtering", id: "Nol layout shift saat live query filtering" },
        ],
      },
      {
        title: {
          en: "Standardized Frontend Engineering & CI/CD Discipline",
          id: "Standarisasi Rekayasa Frontend & Disiplin CI/CD",
        },
        description: {
          en: "Established branch protection policies, mandatory PR code review checklists, automated TypeScript/ESLint CI verification, and consistent atomic component naming across the 4-engineer frontend team.",
          id: "Menerapkan aturan branch protection, checklist code review PR wajib, verifikasi CI otomatis TypeScript/ESLint, dan konvensi penamaan komponen atomik pada tim 4 frontend engineer.",
        },
        tags: ["CI/CD", "Code Quality", "Branch Protection", "TypeScript 5"],
        colSpan: 7,
        highlights: [
          { en: "Zero broken production builds across all 6 months of migration", id: "Nol broken build produksi sepanjang 6 bulan migrasi" },
          { en: "Consistent developer velocity and maintainable codebase", id: "Kecepatan rilis tim konsisten dan codebase mudah dipelihara" },
        ],
      },
    ],
  },

  evidence: {
    title: {
      en: "System Proof & Architecture Artefacts.",
      id: "Bukti Sistem & Artefak Arsitektur.",
    },
    description: {
      en: "Live interface previews and verified component reductions demonstrating the clean faculty-wide experience.",
      id: "Preview antarmuka sistem aktif dan bukti reduksi komponen yang memperlihatkan pengalaman pengguna fakultas yang terpadu.",
    },
    image: "/images/FIK APPS.svg",
    caption: {
      en: "Figure 1.0: Primary unified interface view — consolidating study program management, academic stats, and approval queues into one portal.",
      id: "Gambar 1.0: Tampilan portal utama terpadu — mengkonsolidasikan manajemen program studi, statistik akademik, dan antrean persetujuan dalam satu sistem.",
    },
    assetNote: {
      en: "Asset Note: Candidate can attach secondary in-depth production screenshots (e.g. RBAC permission matrix view, component design token spec) when additional visual captures are available.",
      id: "Catatan Aset: Kandidat dapat menyematkan tangkapan layar produksi sekunder (misal: tampilan matriks izin RBAC, spesifikasi token desain komponen) saat tangkapan visual tambahan telah tersedia.",
    },
    insights: [
      {
        title: { en: "Architecture", id: "Arsitektur" },
        value: "Unified Monorepo",
        description: {
          en: "Single source of truth for 6 academic study programs.",
          id: "Single source of truth untuk 6 program studi.",
        },
      },
      {
        title: { en: "Code Footprint", id: "Code Footprint" },
        value: "-86.8% Duplication",
        description: {
          en: "Massive maintenance overhead reduction across UI layers.",
          id: "Reduksi masif beban pemeliharaan pada layer UI.",
        },
      },
      {
        title: { en: "Performance", id: "Performa" },
        value: "Zero Regressions",
        description: {
          en: "Seamless student registration during semester peaks.",
          id: "Registrasi mahasiswa mulus saat puncak semester.",
        },
      },
    ],
  },

  outcomes: {
    title: {
      en: "Verified Outcomes & Technical Impact.",
      id: "Hasil Terverifikasi & Dampak Rekayasa.",
    },
    description: {
      en: "Measurable improvements achieved across faculty operations, developer velocity, and system resilience.",
      id: "Peningkatan terukur yang dicapai pada operasional fakultas, kecepatan developer, dan keandalan sistem.",
    },
    items: [
      {
        title: { en: "Unified Platform for 6,000+ Students", id: "Platform Terpadu untuk 6.000+ Mahasiswa" },
        description: {
          en: "Students across 6 departments access enrollment, academic records, and thesis defense submissions through a single standardized UI.",
          id: "Mahasiswa di 6 program studi mengakses pendaftaran, riwayat akademik, dan pendaftaran sidang melalui satu antarmuka terstandar.",
        },
        metricHighlight: "6,000+ Active Users",
      },
      {
        title: { en: "Accelerated Velocity for 4 Frontend Devs", id: "Akselerasi Kecepatan untuk 4 Frontend Dev" },
        description: {
          en: "With shared atomic design primitives and typed API contracts, new departmental features ship in days instead of weeks.",
          id: "Dengan primitif desain atomik bersama dan kontrak API bertipe, fitur prodi baru selesai dalam hitungan hari, bukan minggu.",
        },
        metricHighlight: "3x Faster Velocity",
      },
      {
        title: { en: "Zero Broken Builds & Production Safety", id: "Nol Broken Build & Keamanan Produksi" },
        description: {
          en: "Automated lint/typecheck pipelines and branch protection rules eliminated deployment regressions completely.",
          id: "Pipeline otomatis lint/typecheck dan aturan branch protection menghilangkan regresi deployment sepenuhnya.",
        },
        metricHighlight: "100% Build Pass Rate",
      },
      {
        title: { en: "Strict Four-Role Executive Governance", id: "Tata Kelola Eksekutif 4-Peran yang Ketat" },
        description: {
          en: "Deans, Department Heads, and Coordinators have isolated, audited operational views without data permission overlaps.",
          id: "Dekanat, Ketua Program Studi, dan Koordinator memiliki tampilan operasional terisolasi tanpa tumpang tindih izin data.",
        },
        metricHighlight: "4 Role Separation",
      },
    ],
    testimonial: {
      quote: {
        en: "The unified architecture turned a chaotic web of separate departmental tools into a modern, reliable platform our faculty can count on during every semester peak.",
        id: "Arsitektur terpadu ini mengubah sistem perkakas prodi yang terpisah menjadi platform modern dan andal yang dapat diandalkan fakultas di setiap puncak semester.",
      },
      author: "Faculty Engineering Review",
      role: { en: "UDINUS Computer Science", id: "Fasilkom UDINUS" },
    },
  },

  reflection: {
    quote: {
      en: "Great engineering isn't about building the perfect theoretical architecture. It's about making pragmatic decisions that protect active users and scale under real-world constraints.",
      id: "Engineering yang baik bukan tentang membangun arsitektur teoretis yang sempurna, melainkan mengambil keputusan pragmatis yang melindungi pengguna aktif dan dapat diskalakan di bawah batasan dunia nyata.",
    },
    description: {
      en: "Leading the frontend for FIK Apps taught me how to balance architectural purity with production realities. Knowing when to refactor, when to preserve legacy compatibility, and how to rally a team around shared standards is what transforms good code into lasting value.",
      id: "Memimpin frontend untuk FIK Apps mengajarkan saya bagaimana menyeimbangkan kemurnian arsitektur dengan realitas produksi. Mengetahui kapan harus merefaktor, kapan harus mempertahankan kompatibilitas legacy, dan bagaimana menyatukan tim seputar standar bersama adalah hal yang mengubah kode yang baik menjadi dampak yang langgeng.",
    },
    takeaways: [
      {
        en: "Pragmatism beats perfection: An incremental strangler migration delivers immediate value with zero downtime.",
        id: "Pragmatisme mengalahkan kesempurnaan: Migrasi bertahap memberikan nilai instan dengan nol downtime.",
      },
      {
        en: "Component discipline compounds: 25 well-crafted atomic primitives eliminate hundreds of lines of technical debt.",
        id: "Disiplin komponen menghasilkan efisiensi berlipat: 25 primitif atomik yang solid mengeliminasi ratusan baris technical debt.",
      },
      {
        en: "Role design is system design: Clean RBAC boundaries prevent user error and protect data governance.",
        id: "Desain peran adalah desain sistem: Batasan RBAC yang bersih mencegah kesalahan pengguna dan melindungi tata kelola data.",
      },
    ],
  },
};