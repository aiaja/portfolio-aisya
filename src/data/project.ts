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
    slug: "onecall",
    title: "OneCall App",
    description: {
      id: "Aplikasi respons darurat yang mem-bypass hambatan UI/UX tradisional melalui trigger perangkat keras dan perintah suara untuk situasi kritis.",
      en: "An emergency response application that bypasses traditional UI/UX barriers via hardware triggers and voice commands for critical situations.",
    },
    image: "/images/meetozy.png",
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
    image: "/images/ecopos.png",
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
];
