import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "aifa",
    title: "AIFA",
    description: {
      id: "Asisten AI yang mengorkestrasi beberapa agent LLM untuk mengeliminasi hambatan administratif UMKM, menggantikan alat yang terfragmentasi dengan satu alur kerja otomatis.",
      en: "An interoperable AI assistant orchestrating multiple LLM agents to eliminate administrative bottlenecks for SMEs, replacing fragmented tools with a single automated workflow.",
    },
    image: "/images/AIFA.svg",
    tags: ["ReactJS", "LangChain", "Google Vision AI", "OR-Tools"],
    status: "done",
    role: {
      id: "Hustler & Product Strategist",
      en: "Hustler & Product Strategist",
    },
    timeline: "2025",
    content: {
      problem: {
        summary: {
          id: "65 juta UMKM di Indonesia menyumbang 61% PDB, namun mayoritas masih terjebak dalam pengelolaan operasional manual yang terfragmentasi.",
          en: "65 million SMEs in Indonesia contribute 61% of the GDP, yet the majority are still trapped in fragmented manual operational management.",
        },
        details: [
          {
            id: "Pemilik usaha harus berpindah-pindah antara Excel untuk pencatatan, Word untuk proposal, dan kalender manual untuk jadwal.",
            en: "Business owners have to switch between Excel for recording, Word for proposals, and manual calendars for scheduling.",
          },
          {
            id: "Inkonsistensi data antar sistem menyebabkan 'bottleneck' administratif yang menghambat skala bisnis.",
            en: "Data inconsistency across systems creates administrative bottlenecks that hinder business scaling.",
          },
          {
            id: "Input data manual menghabiskan 1-2 jam setiap hari, meningkatkan risiko human error.",
            en: "Manual data input takes 1-2 hours daily, increasing the risk of human error.",
          },
        ],
      },
      decision: [
        {
          title: { id: "Orkestrasi Multi-Agent", en: "Multi-Agent Orchestration" },
          description: {
            id: "Merancang arsitektur menggunakan LangChain untuk membuat AI yang 'interoperable' bagi user non-teknis, menghubungkan berbagai modul AI dalam satu alur kerja.",
            en: "Designed an architecture using LangChain to create an 'interoperable' AI for non-technical users, connecting various AI modules into a single workflow.",
          },
        },
        {
          title: { id: "Konektivitas Data Kontekstual", en: "Contextual Data Connectivity" },
          description: {
            id: "Mengintegrasikan data pengeluaran dari struk (OCR) secara otomatis ke generator proposal bisnis, sehingga laporan keuangan selalu sinkron tanpa input ganda.",
            en: "Automatically integrated expense data from receipts (OCR) into the business proposal generator, ensuring financial records are always synced without double entry.",
          },
        },
        {
          title: { id: "Penjadwalan Berbasis Kendala", en: "Constraint-Based Scheduling" },
          description: {
            id: "Menggunakan Google OR-Tools yang diperluas dengan Gemini API untuk menerjemahkan preferensi bahasa manusia menjadi kendala penjadwalan staf yang optimal.",
            en: "Utilized Google OR-Tools extended with Gemini API to translate human-readable preferences into optimal staff scheduling constraints.",
          },
        },
      ],
      impact: {
        id: "Memberdayakan pemilik UMKM untuk beralih dari manajemen 'pemadam kebakaran' ke operasional yang terencana, memberikan mereka ketenangan pikiran dan waktu lebih untuk pertumbuhan strategis.",
        en: "Empowering SME owners to move from 'firefighting' management to planned operations, giving them peace of mind and more time for strategic growth.",
      },
      result: {
        summary: {
          id: "Berhasil menjadi Finalis Nasional Arkavidia ITB dan membuktikan bahwa sistem asisten terpadu dapat meningkatkan efisiensi UMKM ke level perusahaan besar.",
          en: "Successfully became a National Finalist at Arkavidia ITB and proved that an integrated assistant system can boost SME efficiency to a corporate level.",
        },
        learnings: [
          {
            id: "Menjembatani limitasi AI (akurasi OCR) dengan desain produk yang pragmatis (Verified Extraction Flow).",
            en: "Bridging AI limitations (OCR accuracy) with pragmatic product design (Verified Extraction Flow).",
          },
          {
            id: "Desain untuk interoperabilitas lebih berharga bagi user daripada sekadar koleksi fitur AI yang terisolasi.",
            en: "Designing for interoperability is more valuable to users than just a collection of isolated AI features.",
          },
        ],
        metrics: [
          { label: { id: "Prestasi", en: "Achievement" }, value: "National Finalist" },
          { label: { id: "Efisiensi", en: "Efficiency" }, value: "Significant" },
        ],
      },
    },
  },
  {
    slug: "fik-apps",
    title: "FIK Apps",
    description: {
      id: "Memimpin migrasi arsitektur zero-downtime dari sistem fakultas lama, menetapkan kontrak TypeScript yang ketat dan sistem desain atomik untuk skalabilitas tingkat fakultas.",
      en: "Led the zero-downtime architecture migration of a legacy faculty system, establishing strict TypeScript contracts and an atomic design system for scalable, faculty-wide deployment.",
    },
    image: "/images/FIK APPS.svg",
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Atomic Design"],
    status: "ongoing",
    role: {
      id: "Lead Frontend Engineer",
      en: "Lead Frontend Engineer",
    },
    timeline: "2025 - 2026",
    content: {
      problem: {
        summary: {
          id: "Mewarisi STI Apps, sebuah alat manajemen departemen, dengan mandat untuk meningkatkannya menjadi FIK Apps untuk seluruh fakultas.",
          en: "Inherited STI Apps, a departmental management tool, with the mandate to scale it into FIK Apps for the entire faculty.",
        },
        details: [
          {
            id: "Sistem warisan menderita inkonsistensi UI yang parah karena dibangun oleh banyak tim terdahulu.",
            en: "Legacy system suffered from severe UI inconsistency as it was built by multiple past teams.",
          },
          {
            id: "Redundansi kode yang masif dan utang teknis yang menghambat penambahan fitur baru.",
            en: "Massive code redundancy and technical debt that hindered the addition of new features.",
          },
          {
            id: "Aplikasi sudah live dan berisiko tinggi; harus melakukan upgrade arsitektur tanpa downtime.",
            en: "The app was already live and high-stakes; had to lead an architecture upgrade with zero downtime.",
          },
        ],
      },
      decision: [
        {
          title: { id: "Refaktorisasi Folder Pragmatis", en: "Pragmatic Folder Refactoring" },
          description: {
            id: "Alih-alih menulis ulang dari nol, saya merombak struktur folder terlebih dahulu untuk mengakomodasi logika bisnis fakultas sambil mengisolasi modul warisan yang stabil.",
            en: "Instead of a risky rewrite from scratch, I refactored the folder structure first to accommodate faculty-wide business logic while isolating stable legacy modules.",
          },
        },
        {
          title: { id: "Penerapan Atomic Design", en: "Atomic Design Implementation" },
          description: {
            id: "Mengganti 'Budaya Copy-Paste' dengan sistem desain atomik (Shadcn/UI) dan kontrak TypeScript yang ketat untuk memastikan konsistensi di seluruh platform.",
            en: "Replaced 'Copy-Paste Culture' with an Atomic Design system (Shadcn/UI) and strict TypeScript contracts to ensure consistency across the platform.",
          },
        },
        {
          title: { id: "Pengembangan Terorkestrasi", en: "Orchestrated Development" },
          description: {
            id: "Membagi tim menjadi dua aliran khusus (Branding & Dashboard) dan memusatkan aliran Mock Data untuk mempercepat proses integrasi.",
            en: "Split the team into two specialized streams (Branding & Dashboard) and centralized Mock Data flows to accelerate the integration process.",
          },
        },
      ],
      impact: {
        id: "Menstabilkan ekosistem digital untuk ribuan mahasiswa dan staf, memastikan akses tanpa gangguan ke layanan akademik selama transisi organisasi yang kritis.",
        en: "Stabilizing the digital ecosystem for thousands of students and staff, ensuring uninterrupted access to academic services during critical organizational transitions.",
      },
      result: {
        summary: {
          id: "Berhasil mentransisikan infrastruktur untuk mendukung beberapa program studi tanpa satu pun kegagalan produksi.",
          en: "Successfully transitioned the infrastructure to support multiple study programs without a single production crash.",
        },
        learnings: [
          {
            id: "Manajemen utang teknis jauh lebih efektif melalui refaktorisasi bertahap daripada penulisan ulang total.",
            en: "Technical debt management is much more effective through incremental refactoring than a total rewrite.",
          },
          {
            id: "Kontrak TypeScript yang ketat adalah kunci saat mengelola tim dengan latar belakang skill yang beragam.",
            en: "Strict TypeScript contracts are key when managing a team with diverse skill backgrounds.",
          },
        ],
        metrics: [
          { label: { id: "Skalabilitas", en: "Scalability" }, value: "Faculty-wide" },
          { label: { id: "Stabilitas", en: "Uptime" }, value: "100%" },
        ],
      },
    },
  },
  {
    slug: "fleet-management-system",
    title: "Fleet Management System",
    description: {
      id: "MVP SaaS Logistik multi-tenant yang menampilkan workaround legal berbasis OCR dan integrasi IoT kustom, menunjukkan pivot arsitektur yang cepat.",
      en: "A multi-tenant Logistics SaaS MVP featuring an OCR-based legal workaround and custom IoT integration, demonstrating rapid architectural pivoting and real-world deployment readiness.",
    },
    image: "/images/FLEET MANAGEMENT SYSTEM.svg",
    tags: ["Next.js", "TypeScript", "Laravel", "IoT", "OCR"],
    status: "ongoing",
    role: { id: "Lead Frontend Developer", en: "Lead Frontend Developer" },
    timeline: "2024 - Present",
    content: {
      problem: {
        summary: {
          id: "Awalnya dirancang sebagai ekosistem tertutup untuk pertambangan, namun sektor tersebut terlalu terisolasi untuk validasi MVP yang cepat.",
          en: "Initially designed as a closed ecosystem for mining fleets, but the sector was too isolated for rapid MVP validation.",
        },
        details: [
          {
            id: "Kebutuhan untuk melakukan pivot produk menjadi platform SaaS Logistik yang lebih luas dan universal.",
            en: "The need to pivot the product into a broader and universal SaaS Logistics platform.",
          },
          {
            id: "Jangkauan internet yang tidak terduga di area blank spot yang menghambat pelacakan armada secara real-time.",
            en: "Unpredictable internet coverage in blank spot areas hindering real-time fleet tracking.",
          },
          {
            id: "Hambatan hukum dalam mengimplementasikan gateway pembayaran langsung untuk pengeluaran driver.",
            en: "Legal roadblocks in implementing a direct payment gateway for driver expenses.",
          },
        ],
      },
      decision: [
        {
          title: { id: "Perombakan Arsitektur SaaS", en: "SaaS Architecture Overhaul" },
          description: {
            id: "Memigrasikan backend ke Laravel untuk mempercepat time-to-market dan menerapkan library komponen TypeScript yang ketat untuk menstandarisasi UI setelah pivot.",
            en: "Migrated backend to Laravel to accelerate time-to-market and enforced a strict TypeScript component library to standardize the UI post-pivot.",
          },
        },
        {
          title: { id: "Solusi OCR Receipt Scanner", en: "OCR Receipt Scanner Solution" },
          description: {
            id: "Membangun pemindai struk berbasis OCR sebagai workaround legal; driver dapat memindai struk fisik dengan sistem fallback data yang dapat diedit secara manual.",
            en: "Built an OCR-based receipt scanner as a legal workaround; drivers can scan physical receipts with a manual-edit fallback system.",
          },
        },
        {
          title: { id: "Kolaborasi IoT Lintas Disiplin", en: "Cross-Disciplinary IoT Collaboration" },
          description: {
            id: "Menjembatani tim software dengan komunitas hardware lokal untuk membangun prototipe IoT dari nol, mengubah keterbatasan skill menjadi tantangan kolaboratif.",
            en: "Bridged the software team with a local hardware community to build an IoT prototype from scratch, turning skill gaps into a collaborative challenge.",
          },
        },
      ],
      impact: {
        id: "Menghilangkan hambatan administratif bagi pengemudi melalui pemindaian OCR, memungkinkan mereka fokus pada keselamatan jalan daripada beban dokumen fisik.",
        en: "Eliminating administrative friction for drivers through OCR scanning, allowing them to focus on road safety rather than physical paperwork burdens.",
      },
      result: {
        summary: {
          id: "Berhasil membangun MVP SaaS yang siap untuk penyebaran logistik dunia nyata pertama dengan integrasi IoT yang berfungsi penuh.",
          en: "Successfully built a SaaS MVP ready for its first real-world logistic deployment with a fully functional IoT integration.",
        },
        learnings: [
          {
            id: "Pivot produk membutuhkan fleksibilitas arsitektur kode dan standarisasi komponen yang sangat disiplin.",
            en: "Product pivoting requires code architecture flexibility and highly disciplined component standardization.",
          },
          {
            id: "Membangun solusi 'workaround' (seperti OCR) seringkali lebih efektif daripada memaksakan integrasi yang terhambat regulasi.",
            en: "Building 'workaround' solutions (like OCR) is often more effective than forcing integrations blocked by regulations.",
          },
        ],
        metrics: [
          { label: { id: "Efisiensi", en: "Efficiency" }, value: "40% Gain" },
          { label: { id: "Unit Aktif", en: "Active Units" }, value: "500+" },
        ],
      },
    },
  },
  {
  "slug": "poliklinik-management-system",
  "title": "Poliklinik Management System",
  "description": {
    "id": "Sistem manajemen poliklinik modern yang mendigitalisasi alur pendaftaran pasien dan operasional medis, menggabungkan arsitektur backend yang kokoh dengan antarmuka pengguna yang engaging.",
    "en": "A modern polyclinic management system digitizing patient registration and medical operations, combining robust backend architecture with an engaging user interface."
  },
  "image": "/images/POLIKLINIK.svg",
  "tags": ["Laravel 11", "TDD", "Alpine.js", "Tailwind CSS"],
  "status": "ongoing",
  "role": {
    "id": "Senior Laravel Developer & UI/UX Specialist",
    "en": "Senior Laravel Developer & UI/UX Specialist"
  },
  "timeline": "2026",
  "content": {
    "problem": {
      "summary": {
        "id": "Manajemen klinik tradisional sering menghadapi kendala antrean fisik yang panjang dan fragmentasi data antara dokter, perawat, dan administrasi.",
        "en": "Traditional clinic management often faces long physical queues and data fragmentation between doctors, nurses, and administration."
      },
      "details": [
        {
          "id": "Pasien harus mengantre lama secara fisik tanpa kepastian jadwal dokter yang real-time.",
          "en": "Patients have to wait in long physical queues without real-time certainty of doctor schedules."
        },
        {
          "id": "Logika bisnis yang bercampur di dalam controller menyebabkan 'technical debt' yang menyulitkan skalabilitas aplikasi.",
          "en": "Business logic mixed within controllers creates technical debt that hinders application scalability."
        },
        {
          "id": "Kurangnya transparansi data rekam medis yang dapat diakses secara mandiri oleh pasien.",
          "en": "Lack of transparency in medical record data that can be accessed independently by patients."
        }
      ]
    },
    "decision": [
      {
        "title": { "id": "Arsitektur Senior Laravel", "en": "Senior Laravel Architecture" },
        "description": {
          "id": "Mengimplementasikan Service Layer dan FormRequests untuk memisahkan logika bisnis dari HTTP coordinator, memastikan codebase tetap bersih dan mudah dipelihara.",
          "en": "Implemented Service Layer and FormRequests to decouple business logic from HTTP coordinators, ensuring a clean and maintainable codebase."
        }
      },
      {
        "title": { "id": "UI Grid Asimetris High-Variance", "en": "High-Variance Asymmetric Grid UI" },
        "description": {
          "id": "Merancang landing page dengan layout grid asimetris yang dinamis dan slider interaktif (Alpine.js) untuk meningkatkan engagement dan kepercayaan pasien.",
          "en": "Designed a landing page with a dynamic asymmetric grid layout and interactive sliders (Alpine.js) to enhance patient engagement and trust."
        }
      },
      {
        "title": { "id": "Test-Driven Development (TDD)", "en": "Test-Driven Development (TDD)" },
        "description": {
          "id": "Menjamin reliabilitas alur pendaftaran dan autentikasi melalui Feature Tests yang komprehensif, mencakup otomasi nomor rekam medis dan validasi data.",
          "en": "Ensuring reliability of registration and authentication flows through comprehensive Feature Tests, covering medical record number automation and data validation."
        }
      }
    ],
    "impact": {
      "id": "Menciptakan ekosistem digital yang efisien bagi pengelola klinik dan memberikan pengalaman 'Tanpa Antre' yang modern bagi pasien.",
      "en": "Creating an efficient digital ecosystem for clinic managers and providing a modern 'Queue-Free' experience for patients."
    },
    "result": {
      "summary": {
        "id": "Berhasil membangun fondasi aplikasi yang scalable dengan coverage testing yang kuat dan tampilan visual premium yang melampaui standar sistem manajemen klinik mainstream.",
        "en": "Successfully built a scalable application foundation with strong testing coverage and a premium visual look that exceeds mainstream clinic management system standards."
      },
      "learnings": [
        {
          "id": "Pemisahan tanggung jawab (Separation of Concerns) di Laravel sangat krusial untuk menjaga integritas sistem kesehatan yang kompleks.",
          "en": "Separation of Concerns in Laravel is crucial for maintaining the integrity of complex healthcare systems."
        },
        {
          "id": "Visual branding yang kuat (trust-first) secara signifikan meningkatkan persepsi kualitas layanan medis digital.",
          "en": "Strong visual branding (trust-first) significantly improves the perceived quality of digital medical services."
        }
      ],
      "metrics": [
        { "label": { "id": "Code Coverage", "en": "Code Coverage" }, "value": "High (Auth & Registration)" },
        { "label": { "id": "UI Design", "en": "UI Design" }, "value": "Anti-Mainstream Grid" }
      ]
    }
  }
},
  {
    slug: "onecall",
    title: "OneCall App",
    description: {
      id: "Aplikasi respons darurat yang mem-bypass hambatan UI/UX tradisional melalui trigger perangkat keras dan perintah suara untuk situasi kritis.",
      en: "An emergency response application that bypasses traditional UI/UX barriers via hardware triggers and voice commands for critical situations.",
    },
    image: "/images/ONECALL.svg",
    tags: ["React Native", "AI Voice Detection", "GPS Tracking"],
    status: "done",
    role: { id: "Product Strategist & Lead", en: "Product Strategist & Lead" },
    timeline: "2024",
    content: {
      problem: {
        summary: {
          id: "Dalam situasi darurat, UI aplikasi tradisional seringkali tidak relevan karena korban tidak memiliki waktu untuk membuka lock screen atau mencari aplikasi.",
          en: "In emergency situations, traditional app UIs are often irrelevant because victims don't have time to unlock their screens or search for an app.",
        },
        details: [
          {
            id: "Beban kognitif yang sangat tinggi bagi korban untuk memilih nomor darurat saat dalam ancaman fisik atau panik.",
            en: "Extremely high cognitive load for victims to choose an emergency number during physical threat or panic.",
          },
          {
            id: "Birokrasi integrasi nomor darurat pemerintah yang lambat menjadi bottleneck besar untuk pengembangan MVP terintegrasi.",
            en: "Slow government emergency number integration bureaucracy acting as a major bottleneck for an integrated MVP development.",
          },
          {
            id: "Konektivitas internet yang seringkali tidak stabil atau blank spot di area rawan kejahatan.",
            en: "Unstable internet connectivity or blank spots frequently found in high-crime areas.",
          },
        ],
      },
      decision: [
        {
          title: { id: "Arsitektur Interaksi Tanpa Layar", en: "Screen-less Interaction Architecture" },
          description: {
            id: "Memindahkan trigger darurat ke ranah perangkat keras (3x tombol power) dan perintah suara, sehingga korban dapat meminta bantuan tanpa menyentuh layar smartphone.",
            en: "Moved the emergency trigger to the hardware realm (3x power button) and voice commands, allowing victims to call for help without touching the smartphone screen.",
          },
        },
        {
          title: { id: "Verifikasi Berbasis Crowdsourcing", en: "Crowdsourced Verification System" },
          description: {
            id: "Mengarahkan panggilan darurat ke komunitas relawan terdekat sebagai verifikator pertama untuk mem-bypass hambatan birokrasi pemerintah.",
            en: "Routed emergency calls to the nearest volunteer communities as first verifiers to bypass government bureaucratic barriers.",
          },
        },
        {
          title: { id: "Sistem Fallback SMS & GPS", en: "SMS & GPS Fallback System" },
          description: {
            id: "Merancang sistem pelacakan GPS real-time dengan fallback otomatis ke SMS jika koneksi internet terputus, memastikan sinyal bantuan tetap terkirim.",
            en: "Designed a real-time GPS tracking system with an automatic fallback to SMS if the internet connection is lost, ensuring the help signal is delivered.",
          },
        },
      ],
      impact: {
        id: "Menyediakan jaring pengaman bagi individu dalam situasi kritis, di mana setiap detik berharga dan teknologi harus bekerja tanpa interaksi layar yang rumit.",
        en: "Providing a safety net for individuals in critical situations, where every second counts and technology must work without complex screen interactions.",
      },
      result: {
        summary: {
          id: "Berhasil menciptakan sistem darurat yang pragmatis, memenangkan Juara 3 Nasional di FOSTIFEST dan INVOFEST 2024.",
          en: "Successfully created a pragmatic emergency system, winning 3rd Place Nationally at FOSTIFEST and INVOFEST 2024.",
        },
        learnings: [
          {
            id: "Dalam situasi darurat, 'The best UI is no UI'. Kesederhanaan interaksi adalah prioritas mutlak di atas estetika visual.",
            en: "In an emergency, 'The best UI is no UI'. Interaction simplicity is an absolute priority over visual aesthetics.",
          },
          {
            id: "Pendekatan berbasis komunitas (volunteer) seringkali lebih cepat dalam memvalidasi solusi daripada menunggu integrasi birokrasi.",
            en: "Community-based approaches (volunteers) are often faster at validating solutions than waiting for bureaucratic integration.",
          },
        ],
        metrics: [
          { label: { id: "Prestasi", en: "National Award" }, value: "3rd Place" },
          { label: { id: "Aksesibilitas", en: "Accessibility" }, value: "Hands-free" },
        ],
      },
    },
  },
  {
    slug: "pilmo",
    title: "PILMO",
    description: {
      id: "Infrastruktur kesehatan publik untuk meningkatkan kepatuhan pengobatan pasien TBC melalui sistem pemantauan terintegrasi 3 entitas.",
      en: "Public health infrastructure to improve TB patient treatment adherence through an integrated 3-entity monitoring system.",
    },
    image: "/images/PILMO.svg",
    tags: ["ReactJS", "OCR Integration", "HealthTech"],
    status: "done",
    role: { id: "Hustler & Product Manager", en: "Hustler & Product Manager" },
    timeline: "2025",
    content: {
      problem: {
        summary: {
          id: "Indonesia menempati peringkat ke-2 kasus TBC tertinggi di dunia, di mana kegagalan pengobatan sering terjadi akibat stigma sosial dan beban administrasi.",
          en: "Indonesia ranks 2nd in the highest TB cases globally, where treatment failure often occurs due to social stigma and administrative burden.",
        },
        details: [
          {
            id: "Pasien TBC enggan berobat atau sering lupa meminum obat harian akibat efek samping dan kurangnya dukungan mental.",
            en: "TB patients are reluctant to seek treatment or often forget daily medication due to side effects and lack of mental support.",
          },
          {
            id: "Petugas kesehatan kewalahan memantau ratusan pasien secara manual dan harus melakukan 'Double Entry' data dari kertas ke sistem digital.",
            en: "Health workers are overwhelmed monitoring hundreds of patients manually and must perform 'Double Entry' of data from paper to digital systems.",
          },
          {
            id: "Kurangnya transparansi data real-time bagi pemangku kepentingan untuk menentukan kebijakan kesehatan yang berbasis heatmap.",
            en: "Lack of real-time data transparency for stakeholders to determine heatmap-based health policies.",
          },
        ],
      },
      decision: [
        {
          title: { id: "Sistem Verifikasi 3-Level", en: "3-Level Verification System" },
          description: {
            id: "Merancang mekanisme verifikasi progresif (Button -> Foto -> Video) menggunakan Local Task Logic untuk memastikan validitas konsumsi obat tanpa membebani pasien.",
            en: "Designed a progressive verification mechanism (Button -> Photo -> Video) using Local Task Logic to ensure medication validity without burdening the patient.",
          },
        },
        {
          title: { id: "Integrasi OCR Digitalisasi Form", en: "OCR Digitalization Integration" },
          description: {
            id: "Memproyeksikan integrasi OCR sebagai solusi jembatan untuk mendigitalisasi form kertas petugas secara otomatis, mengeliminasi inefisiensi pencatatan manual.",
            en: "Projected OCR integration as a bridge solution to automatically digitize health workers' paper forms, eliminating manual recording inefficiencies.",
          },
        },
        {
          title: { id: "Ekosistem Komunitas Anonim", en: "Anonymous Community Ecosystem" },
          description: {
            id: "Membangun fitur komunitas anonim untuk memberikan dukungan mental antar pasien, mengurangi stigma sosial yang menghambat proses penyembuhan.",
            en: "Built an anonymous community feature to provide peer mental support among patients, reducing the social stigma that hinders the healing process.",
          },
        },
      ],
      impact: {
        id: "Mengurangi beban psikologis dan operasional bagi pasien TBC dan tenaga medis, mengubah proses pengobatan yang menakutkan menjadi perjalanan yang didukung komunitas.",
        en: "Reducing the psychological and operational burden for TB patients and health workers, transforming a daunting treatment process into a community-supported journey.",
      },
      result: {
        summary: {
          id: "Menciptakan infrastruktur kesehatan yang menghubungkan pasien, petugas, dan stakeholder secara sistemik. Berhasil menembus Top 8 Finalist Nasional di Hology 8.0.",
          en: "Created a systemic health infrastructure connecting patients, workers, and stakeholders. Successfully reached Top 8 National Finalist at Hology 8.0.",
        },
        learnings: [
          {
            id: "Inovasi kesehatan harus fokus pada penurunan hambatan operasional (friction) bagi petugas di lapangan, bukan sekadar penambahan fitur bagi pasien.",
            en: "Health innovation must focus on reducing operational friction for field workers, not just adding features for patients.",
          },
          {
            id: "Digitalisasi form fisik menggunakan OCR adalah langkah krusial untuk adopsi teknologi di sektor yang masih sangat bergantung pada kertas.",
            en: "Digitalizing physical forms using OCR is a crucial step for tech adoption in sectors still heavily dependent on paper.",
          },
        ],
        metrics: [
          { label: { id: "Prestasi", en: "National Award" }, value: "Top 8 Finalist" },
          { label: { id: "Validasi", en: "Validation" }, value: "Market-Ready" },
        ],
      },
    },
  },
  {
    slug: "pos-website",
    title: "POS Website",
    description: {
      id: "Sistem Point of Sales (POS) berbasis web yang tangguh untuk mengotomatiskan manajemen inventaris dan pelaporan transaksi.",
      en: "A robust web-based Point of Sales (POS) system to automate inventory management and transaction reporting.",
    },
    image: "/images/ecopos.png",
    tags: ["CodeIgniter 4", "MySQL", "Bootstrap", "PHPUnit"],
    status: "done",
    role: { id: "Fullstack Developer", en: "Fullstack Developer" },
    timeline: "2025",
    content: {
      problem: {
        summary: {
          id: "Manajemen inventaris manual sering menyebabkan selisih stok dan inefisiensi pencatatan transaksi harian.",
          en: "Manual inventory management often leads to stock discrepancies and daily transaction recording inefficiencies.",
        },
        details: [
          { id: "Pencatatan stok masih menggunakan buku besar yang rentan rusak.", en: "Stock recording still uses physical ledgers prone to damage." },
          { id: "Kesulitan dalam menghasilkan laporan penjualan bulanan yang akurat secara cepat.", en: "Difficulty in generating accurate monthly sales reports quickly." },
        ],
      },
      decision: [
        {
          title: { id: "Arsitektur MVC CI4", en: "CI4 MVC Architecture" },
          description: { id: "Menerapkan pola MVC CodeIgniter 4 untuk memisahkan logika bisnis dengan presentasi agar aplikasi mudah dikembangkan.", en: "Applied CI4's MVC pattern to separate business logic from presentation for easy scalability." },
        },
        {
          title: { id: "Integrasi DomPDF", en: "DomPDF Integration" },
          description: { id: "Mengimplementasikan ekspor laporan otomatis ke format PDF untuk memudahkan audit internal.", en: "Implemented automatic report export to PDF format for easier internal auditing." },
        },
      ],
      impact: {
        id: "Mengotomatiskan alur kerja inventaris, memungkinkan pemilik bisnis fokus pada ekspansi daripada administrasi stok.",
        en: "Automating inventory workflows, allowing business owners to focus on expansion rather than stock administration.",
      },
      result: {
        summary: {
          id: "Berhasil dideploy dan digunakan untuk memproses ratusan transaksi per hari dengan akurasi stok 100%.",
          en: "Successfully deployed and used to process hundreds of transactions per day with 100% stock accuracy.",
        },
      },
    },
  },
  {
    slug: "summarease-desktop",
    title: "SummarEase Desktop",
    description: {
      id: "Aplikasi desktop yang menyederhanakan konsumsi informasi melalui ringkasan teks otomatis berbasis AI.",
      en: "A desktop application that simplifies information consumption through AI-driven automatic text summarization.",
    },
    tags: ["JavaFX", "Java 21", "Apache PDFBox", "Maven"],
    status: "done",
    role: { id: "Java Developer", en: "Java Developer" },
    timeline: "2025",
    content: {
      problem: {
        summary: {
          id: "Volume informasi yang masif membuat user sulit mengekstrak inti sari dari dokumen panjang dengan cepat.",
          en: "Massive information volume makes it hard for users to quickly extract the core essence of long documents.",
        },
        details: [
          { id: "User menghabiskan terlalu banyak waktu membaca detail yang kurang relevan.", en: "Users spend too much time reading less relevant details." },
        ],
      },
      decision: [
        {
          title: { id: "Hybrid Summarization", en: "Hybrid Summarization" },
          description: { id: "Menggabungkan pendekatan rule-based dan API-based untuk memberikan fleksibilitas kualitas ringkasan.", en: "Combined rule-based and API-based approaches to provide flexibility in summary quality." },
        },
      ],
      impact: {
        id: "Menyederhanakan cara user mengonsumsi literatur panjang, menghemat waktu riset hingga 50%.",
        en: "Simplifying the way users consume long literature, saving up to 50% of research time.",
      },
      result: {
        summary: {
          id: "Menghasilkan aplikasi desktop yang interaktif dengan fitur ekspor ringkasan ke PDF/TXT.",
          en: "Resulted in an interactive desktop app with features to export summaries to PDF/TXT.",
        },
      },
    },
  },
  {
    slug: "dinacom-2025",
    title: "DINACOM 2025",
    description: {
      id: "Platform pendaftaran kompetisi nasional terintegrasi dengan sistem manajemen peserta yang masif.",
      en: "National competition registration platform integrated with a massive participant management system.",
    },
    image: "/images/DINACOM.svg",
    tags: ["ReactJS", "Tailwind CSS", "Product Management"],
    status: "done",
    role: { id: "Project Manager & Frontend", en: "Project Manager & Frontend" },
    timeline: "2024",
    content: {
      problem: {
        summary: {
          id: "Proses pendaftaran manual kompetisi nasional sering menyebabkan duplikasi data dan keterlambatan verifikasi pembayaran.",
          en: "Manual registration processes for national competitions often cause data duplication and payment verification delays."
        },
        details: [
          { id: "Manajemen data peserta yang mencapai ratusan orang melalui spreadsheet manual sangat rentan error.", en: "Managing participant data for hundreds of people through manual spreadsheets is highly error-prone." },
        ],
      },
      decision: [
        {
          title: { id: "Validasi Real-time", en: "Real-time Validation" },
          description: { id: "Membangun sistem validasi input di sisi klien untuk memastikan data pendaftaran lengkap sebelum dikirim ke server.", en: "Built client-side input validation to ensure registration data is complete before server submission." },
        },
      ],
      impact: {
        id: "Meningkatkan efisiensi pendaftaran bagi ratusan peserta nasional, memastikan alur kerja panitia yang lebih teratur.",
        en: "Increasing registration efficiency for hundreds of national participants, ensuring a more organized committee workflow.",
      },
      result: {
        summary: {
          id: "Platform sukses menangani pendaftaran dari berbagai universitas di Indonesia tanpa kendala teknis berarti.",
          en: "The platform successfully handled registrations from various universities in Indonesia without significant technical issues.",
        },
      },
    },
  },
  {
    slug: "btng-2024",
    title: "BTNG 2024",
    image: "/images/BTNG.svg",
    description: {
      id: "Riset UI/UX dan desain portal pendaftaran orientasi mahasiswa baru untuk meningkatkan aksesibilitas.",
      en: "UI/UX Research and design for the freshman orientation registration portal to improve accessibility.",
    },
    tags: ["UI/UX Research", "Figma", "User Centered Design"],
    status: "done",
    role: { id: "UI/UX Researcher", en: "UI/UX Researcher" },
    timeline: "2024",
    content: {
      problem: {
        summary: {
          id: "Interface portal lama yang rumit membingungkan mahasiswa baru dan meningkatkan beban kerja admin helpdesk.",
          en: "Complicated old portal interfaces confused new students and increased the admin helpdesk workload."
        },
        details: [
          { id: "Alur pendaftaran yang tidak intuitif menyebabkan banyak data yang tidak valid.", en: "Unintuitive registration flows resulted in many invalid data entries." },
        ],
      },
      decision: [
        {
          title: { id: "Riset User-Centered", en: "User-Centered Research" },
          description: { id: "Melakukan interview dan pengujian usability untuk mengidentifikasi hambatan utama mahasiswa baru saat mendaftar.", en: "Conducted interviews and usability testing to identify primary barriers new students faced during registration." },
        },
      ],
      impact: {
        id: "Memastikan ribuan mahasiswa baru dapat mendaftar dengan mudah melalui desain yang adaptif dan inklusif.",
        en: "Ensuring thousands of new students can register easily through adaptive and inclusive design.",
      },
      result: {
        summary: {
          id: "Menghasilkan rekomendasi desain yang menurunkan tingkat kesalahan input data hingga 30%.",
          en: "Produced design recommendations that lowered data input error rates by 30%.",
        },
      },
    },
  },
  {
    slug: "ice-movie-app",
    title: "Ice Movie App",
        image: "/images/MOVIE.svg",
    description: {
      id: "Portal informasi film dinamis yang mengintegrasikan data dari TMDb API dengan antarmuka yang bersih dan responsif.",
      en: "A dynamic movie info portal integrating data from the TMDb API with a clean and responsive interface.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "TMDb API"],
    status: "done",
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    timeline: "2024",
    content: {
      problem: {
        summary: {
          id: "Kebutuhan akan platform info film yang ringan dan mudah diakses tanpa iklan yang mengganggu.",
          en: "Need for a lightweight and easy-to-access movie info platform without intrusive ads."
        },
      },
      decision: [
        {
          title: { id: "Integrasi API Global", en: "Global API Integration" },
          description: { id: "Menghubungkan aplikasi dengan database film global TMDb untuk data yang selalu terupdate secara real-time.", en: "Connected the app with TMDb's global movie database for real-time updated data." },
        },
      ],
      impact: {
        id: "Menyediakan akses informasi film yang cepat dan estetis bagi komunitas pencinta film.",
        en: "Providing fast and aesthetic movie information access for the movie-loving community.",
      },
      result: {
        summary: {
          id: "Berhasil membangun interface film yang user-friendly dengan performa loading yang optimal.",
          en: "Successfully built a user-friendly movie interface with optimal loading performance.",
        },
      },
    },
  },
  {
    slug: "ice-residence",
    title: "Ice Residence",
        image: "/images/RESIDENCE.svg",
    description: {
      id: "Landing page modern untuk penyedia layanan properti dengan fokus pada visual yang menawan dan performa tinggi.",
      en: "A modern landing page for a property service provider focusing on stunning visuals and high performance.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "AOS"],
    status: "done",
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    timeline: "2024",
    content: {
      problem: {
        summary: {
          id: "Platform properti tradisional seringkali terasa kaku dan tidak menarik secara visual, menurunkan minat calon pembeli.",
          en: "Traditional property platforms often feel rigid and visually unappealing, decreasing potential buyer interest."
        },
      },
      decision: [
        {
          title: { id: "Animasi AOS", en: "AOS Animations" },
          description: { id: "Menerapkan library Animate On Scroll (AOS) untuk memberikan kesan modern dan interaktif pada landing page.", en: "Applied Animate On Scroll (AOS) library to give a modern and interactive feel to the landing page." },
        },
      ],
      impact: {
        id: "Membangun kepercayaan brand properti melalui presentasi digital yang profesional dan elegan.",
        en: "Building property brand trust through a professional and elegant digital presentation.",
      },
      result: {
        summary: {
          id: "Menghasilkan landing page dengan skor SEO dan performa tinggi yang siap menarik trafik berkualitas.",
          en: "Resulted in a high-performance, SEO-friendly landing page ready to attract quality traffic.",
        },
      },
    },
  },
];
