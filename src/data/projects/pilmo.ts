import { ProjectDetailV2 } from "../project-details";

export const pilmoData: ProjectDetailV2 = {
  slug: "pilmo",

  hero: {
    title: {
      line1: "When Research Proved Me Wrong.",
      line2: "The PILMO TB Care Ecosystem.",
    },
    tagline: {
      en: "How a failed elderly medication app led to a human-centered Tuberculosis support ecosystem connecting patients, healthcare workers, and public health policy.",
      id: "Bagaimana kegagalan asumsi awal aplikasi pengingat lansia bertransformasi menjadi ekosistem pendukung kepatuhan obat Tuberkulosis terintegrasi bagi pasien, nakes, dan pembuat kebijakan.",
    },
    category: {
      en: "Healthcare Product Strategy & Public Health Tech",
      id: "Strategi Produk Kesehatan & Public Health Tech",
    },
    role: {
      en: "Product Lead (Hustler)",
      id: "Product Lead (Hustler)",
    },
    timeline: {
      en: "Discovery, Field Research & MVP Prototyping",
      id: "Riset Lapangan, Penemuan Masalah & Prototipe MVP",
    },
    team: {
      en: "3 Cross-Functional Members (Product Lead/Hustler, Full-Stack Dev/Hacker, UI/UX Designer/Hipster)",
      id: "3 Anggota Tim Inti (Product Lead/Hustler, Full-Stack Dev/Hacker, UI/UX Designer/Hipster)",
    },
    organization: {
      en: "PILMO (HealthTech Innovation Initiative)",
      id: "PILMO (Inisiatif Inovasi HealthTech)",
    },
    technologies: [
      "Product Strategy",
      "Field Research",
      "React Native",
      "Node.js",
      "Computer Vision (VoT Concept)",
      "Tesseract OCR",
      "PostgreSQL",
    ],
    image: "/images/PILMO.svg",
    stats: [
      {
        label: { en: "Field Interviews", id: "Wawancara Lapangan" },
        value: "19+",
      },
      {
        label: { en: "National Competition", id: "Kompetisi Nasional" },
        value: "Top 8",
      },
      {
        label: { en: "Regimen Window", id: "Rentang Terapi" },
        value: "6–24 Mo",
      },
      {
        label: { en: "Verification Logic", id: "Tingkat Verifikasi" },
        value: "3-Tier",
      },
    ],
  },

  context: {
    title: {
      en: "The Cost of Broken Assumptions & the Reality of TB in Indonesia.",
      id: "Biaya Asumsi yang Keliru & Realitas Penyakit TBC di Indonesia.",
    },
    description: {
      en: "The project originally began with a deeply personal motivation: helping my grandmother remember her hypertension medication. But when we took our prototype to local elderly clinics (Posyandu Lansia), the initial premise fell apart. Most elderly individuals either did not own smartphones or relied entirely on family members for digital interactions. The app solved a non-existent digital workflow for that demographic.\n\nRather than forcing a flawed product, we redirected our research toward a critical public health crisis where medication adherence is strictly life-or-death: Tuberculosis (TB). Indonesia ranks #2 globally in TB burden, with 880,000+ new cases annually and 14 deaths per hour (WHO). A single missed dose in the rigorous 6–24 month regimen can trigger drug resistance (MDR-TB), forcing patients to restart the entire toxic cycle from day one.",
      id: "Proyek ini bermula dari motivasi personal: membantu nenek saya mengingat jadwal obat hipertensi. Namun saat prototipe diuji ke Posyandu Lansia, asumsi awal runtuh. Sebagian besar lansia tidak memiliki smartphone atau memiliki literasi digital yang sangat terbatas. Solusi digital murni tidak sesuai untuk demografi tersebut.\n\nAlih-alih memaksakan produk yang cacat asumsi, kami mengalihkan riset ke krisis kesehatan publik di mana kepatuhan minum obat adalah batas hidup dan mati: Tuberkulosis (TBC). Indonesia menempati peringkat ke-2 kasus TBC terbanyak di dunia dengan 880.000+ kasus baru per tahun dan 14 kematian per jam (WHO). Satu kali saja dosis terlewat dalam masa pengobatan 6–24 bulan, resistensi obat (MDR-TB) mengancam dan pasien wajib mengulang seluruh rangkaian terapi dari hari pertama.",
    },
    challenges: [
      {
        en: "Patient Double Burden: Severe daily drug side effects (nausea, fatigue, joint pain) coupled with crushing social stigma and emotional isolation.",
        id: "Beban Ganda Pasien: Efek samping obat harian yang berat (mual, kelelahan, nyeri sendi) disertai stigma negatif sosial yang memicu depresi dan isolasi.",
      },
      {
        en: "Health Worker Double Burden: Handling 10+ contagious patients daily while suffering from double data entry fatigue (paper logs + central ministry portal).",
        id: "Beban Ganda Petugas Kesehatan: Menangani 10+ pasien infeksius setiap hari serta kelelahan input data ganda (buku register manual + sistem portal kementerian).",
      },
      {
        en: "Severe Re-Treatment Penalties: Defaulting or dropping out restarts the full 6–24 month toxic antibiotic regimen from zero.",
        id: "Risiko Pengulangan Terapi Berat: Putus berobat satu kali saja memaksa pengulangan regimen antibiotik toksik selama 6–24 bulan dari awal.",
      },
      {
        en: "Lack of Localized Public Health Transparency: Policy makers lack real-time, privacy-preserving village-level adherence telemetry.",
        id: "Ketiadaan Transparansi Data Kebijakan: Pengambil kebijakan kesehatan kekurangan data kepatuhan tingkat desa yang akurat dan menjaga privasi.",
      },
    ],
    objectives: [
      {
        en: "Establish an integrated 3-sided ecosystem connecting patients, healthcare workers (Nakes), and public health policy makers.",
        id: "Membangun ekosistem 3-sisi yang menghubungkan pasien, tenaga kesehatan (Nakes), dan pembuat kebijakan publik.",
      },
      {
        en: "Build an unobtrusive, multi-tiered adherence verification flow that minimizes patient friction and health worker alert fatigue.",
        id: "Merancang alur verifikasi kepatuhan bertingkat yang tidak invasif, meminimalkan friksi pasien dan kelelahan notifikasi nakes.",
      },
      {
        en: "Eliminate administrative double entry burden for clinic staff through automated scanning and single-pane management.",
        id: "Mengeliminasi beban pencatatan ganda petugas puskesmas melalui automasi pemindaian dan dashboard terpadu.",
      },
      {
        en: "Create a stigma-free support space via anonymous peer community and verified health worker moderation.",
        id: "Menciptakan ruang aman tanpa stigma melalui komunitas anonim sesama pejuang TBC dan moderasi nakes terverifikasi.",
      },
    ],
  },

  metrics: [
    {
      value: "19+",
      label: { en: "Field Interviews", id: "Wawancara Lapangan" },
      description: {
        en: "Conducted across elderly clinics, active TB patients, healthcare workers, and puskesmas staff.",
        id: "Dilakukan di posyandu lansia, pasien TBC aktif, nakes pendamping, dan staf puskesmas.",
      },
      badge: { en: "Field Research", id: "Riset Lapangan" },
    },
    {
      value: "Top 8",
      label: { en: "National Competition", id: "Kompetisi Nasional" },
      description: {
        en: "National Finalist in HealthTech & Product Innovation Capstone out of hundreds of entries.",
        id: "Finalis 8 Besar Nasional dalam kompetisi inovasi produk teknologi kesehatan.",
      },
      badge: { en: "Product Pitch", id: "Pitch Produk" },
    },
    {
      value: "6–24 Mo",
      label: { en: "Regimen Window", id: "Rentang Terapi" },
      description: {
        en: "Standard long-term adherence protocol required to prevent Multi-Drug Resistant TB (MDR-TB).",
        id: "Protokol kepatuhan jangka panjang wajib untuk mencegah Resistensi Obat Ganda (MDR-TB).",
      },
      badge: { en: "Clinical Protocol", id: "Protokol Klinis" },
    },
    {
      value: "3-Tier",
      label: { en: "Verification Logic", id: "Tingkat Verifikasi" },
      description: {
        en: "Progressive local verification logic designed to prevent notification burnout for clinicians.",
        id: "Logika verifikasi bertingkat lokal untuk mencegah alert fatigue pada tenaga kesehatan.",
      },
      badge: { en: "Anti-Burnout", id: "Anti-Burnout" },
    },
  ],

  comparisons: [
    {
      feature: { en: "Core Product Target", id: "Target Demografi & Masalah" },
      before: {
        en: "Elderly hypertension reminder app — rejected due to lack of smartphone access and low digital literacy among seniors.",
        id: "Aplikasi pengingat hipertensi lansia — ditolak karena minimnya kepemilikan smartphone dan rendahnya literasi digital lansia.",
      },
      after: {
        en: "TB Care Ecosystem — targeting patients on strict life-or-death 6–24 month regimens, clinics, and policy makers.",
        id: "Ekosistem Terpadu TBC — menargetkan pasien dalam regimen kritis 6–24 bulan, nakes pendamping, dan pembuat kebijakan.",
      },
      impact: {
        en: "Product-Market Fit & Urgent Utility",
        id: "Kesesuaian Masalah Pasar & Kebutuhan Kritis",
      },
    },
    {
      feature: { en: "Adherence Confirmation", id: "Metode Konfirmasi Minum Obat" },
      before: {
        en: "Generic time-based push notification alarm that patients dismissed without accountability.",
        id: "Notifikasi alarm biasa yang mudah diabaikan pasien tanpa pembuktian akuntabilitas.",
      },
      after: {
        en: "3-tier escalating verification (Button -> Photo -> Video) with on-device 15-minute escalation logic.",
        id: "Verifikasi bertingkat 3 level (Tombol -> Foto -> Video) dengan logika eskalasi lokal 15 menit.",
      },
      impact: {
        en: "High Adherence without Alert Spam",
        id: "Kepatuhan Tinggi Tanpa Spam Notifikasi",
      },
    },
    {
      feature: { en: "Health Worker Data Entry", id: "Pencatatan Data Petugas Puskesmas" },
      before: {
        en: "Manual paper logging in clinic books followed by tedious end-of-day re-entry into central ministry databases.",
        id: "Pencatatan manual di buku puskesmas lalu input ulang yang melelahkan ke sistem kementerian pusat.",
      },
      after: {
        en: "Digital monitoring dashboard with planned OCR receipt scanning bridge to automate record ingestion.",
        id: "Dashboard pemantauan digital dengan jembatan OCR untuk mendigitalkan arsip fisik secara otomatis.",
      },
      impact: {
        en: "Eliminates Double Entry Fatigue",
        id: "Mengeliminasi Beban Pencatatan Ganda",
      },
    },
    {
      feature: { en: "Social & Mental Support", id: "Dukungan Psikososial" },
      before: {
        en: "Isolated treatment experience with heavy social stigma, fear of disclosure, and high patient depression.",
        id: "Pengobatan terisolasi dengan stigma sosial berat, ketakutan dijauhi, dan risiko depresi tinggi.",
      },
      after: {
        en: "Anonymous peer-to-peer community with daily mood tracking and verified clinician moderation.",
        id: "Komunitas dukungan sebaya anonim dengan pelacak mood harian dan moderasi nakes berlabel resmi.",
      },
      impact: {
        en: "Safe Space & Psychological Retention",
        id: "Ruang Aman & Pencegahan Putus Berobat",
      },
    },
  ],

  decision: {
    title: {
      en: "Key Strategic & Architecture Trade-offs.",
      id: "Kompromi Strategis & Keputusan Arsitektur Kunci.",
    },
    description: {
      en: "Evaluating how we navigated user friction, clinical alert fatigue, data privacy, and technological feasibility across three stakeholders.",
      id: "Mengevaluasi bagaimana kami menyeimbangkan friksi pengguna, alert fatigue klinis, privasi data pasien, dan kelayakan teknis antar tiga pemangku kepentingan.",
    },
    options: [
      {
        label: "Option A",
        name: "3-Tier Progressive Escalation Engine",
        description: {
          en: "Start with a 1-tap confirmation. If not confirmed after 15 minutes, escalate to Photo Proof, then Video Verification. Executes locally on-device.",
          id: "Dimulai dari konfirmasi 1-ketukan. Jika belum selesai setelah 15 menit, sistem beralih meminta bukti foto, lalu verifikasi video. Dijalankan lokal di perangkat.",
        },
        status: {
          en: "Balanced Adherence & High Scalability",
          id: "Kepatuhan Seimbang & Skalabilitas Tinggi",
        },
        tradeoffs: [
          {
            en: "Respects patient dignity and avoids friction when compliant",
            id: "Menghargai kenyamanan pasien yang patuh tanpa friksi berlebih",
          },
          {
            en: "Reduces health worker alert fatigue by only flagging unresolved escalations",
            id: "Mencegah kelelahan notifikasi nakes dengan hanya melaporkan eskalasi macet",
          },
        ],
        selected: true,
      },
      {
        label: "Option B",
        name: "Mandatory Daily Live Video Calls",
        description: {
          en: "Requiring health workers to be on a live video stream for every patient at every single ingestion time.",
          id: "Mewajibkan nakes melakukan live video call langsung pada setiap pasien di setiap jam minum obat.",
        },
        status: {
          en: "Clinician Burnout & Severe Scalability Bottleneck",
          id: "Burnout Tenaga Kesehatan & Bottleneck Skalabilitas",
        },
        tradeoffs: [
          {
            en: "Completely unscalable: 1 nakes cannot monitor 10–15 live calls simultaneously",
            id: "Sangat tidak realistis: 1 nakes tidak sanggup memantau 10–15 pasien secara live di jam yang sama",
          },
          {
            en: "High cellular data cost and battery drain for underprivileged patients",
            id: "Beban kuota internet tinggi dan boros baterai bagi pasien berpenghasilan rendah",
          },
        ],
        selected: false,
      },
      {
        label: "Option C",
        name: "Village-Level Geospatial Privacy Aggregation",
        description: {
          en: "Aggregate patient location telemetry at the village/kelurahan polygon level on the public policy dashboard.",
          id: "Mengagregasikan telemetri lokasi pasien pada tingkat poligon desa/kelurahan pada dashboard kebijakan publik.",
        },
        status: {
          en: "Privacy-Preserving & Actionable Policy Data",
          id: "Menjaga Privasi & Memberi Data Kebijakan Akurat",
        },
        tradeoffs: [
          {
            en: "Guarantees medical privacy and prevents patient doxxing or social stigma",
            id: "Menjamin privasi rekam medis dan melindungi pasien dari perundungan atau stigma",
          },
          {
            en: "Provides actionable cluster data for regional health resource allocation",
            id: "Memberikan data klaster yang jelas untuk alokasi logistik obat dan penyuluhan",
          },
        ],
        selected: true,
      },
    ],
    rationale: {
      en: "Combining local progressive escalation with privacy-preserving village clustering solved the patient stigma barrier while eliminating clinical alert fatigue for overburdened puskesmas staff.",
      id: "Menggabungkan eskalasi bertingkat lokal dengan agregasi wilayah kelurahan menyelesaikan hambatan stigma pasien sekaligus mengeliminasi alert fatigue bagi staf puskesmas.",
    },
  },

  architecture: {
    title: {
      en: "Tri-Party Healthcare System Architecture.",
      id: "Arsitektur Sistem Kesehatan Terintegrasi Tiga Pihak.",
    },
    description: {
      en: "How PILMO coordinates client-side compliance routines, secure clinician dashboards, and public health epidemiological insights.",
      id: "Bagaimana PILMO mengorkestrasi rutinitas kepatuhan di sisi pasien, dashboard pengawasan nakes, dan analitik epidemiologi pembuat kebijakan.",
    },
    layers: [
      {
        name: "Layer 1: Patient Mobile Companion (@/apps/patient-mobile)",
        role: { en: "Adherence Tasks, Mood Logs & Peer Community", id: "Tugas Kepatuhan, Catatan Mood & Komunitas Sebaya" },
        technologies: ["React Native", "Local Task Logic", "Offline SQLite", "Tailwind Native"],
        description: {
          en: "Handles on-device 3-tier adherence escalations, local 15-minute timers, encrypted alias community chat, and offline data sync.",
          id: "Menjalankan eskalasi kepatuhan 3-level di perangkat, timer lokal 15 menit, chat komunitas alias terenkripsi, dan sinkronisasi offline.",
        },
        keyContracts: ["AdherenceCheckinPayload", "LocalTimerConfig", "AnonymousPostSchema"],
      },
      {
        name: "Layer 2: API & Escalation Dispatcher (@/services/dispatcher)",
        role: { en: "Automated Escalation Timing & Alert Routing", id: "Penjadwalan Eskalasi Otomatis & Perutean Alarm" },
        technologies: ["Node.js", "Express", "JWT Auth", "Queue Worker"],
        description: {
          en: "Coordinates automated adherence check-in cycles, escalation thresholds, health worker notifications, and alias masking.",
          id: "Mengorkestrasi siklus verifikasi otomatis, batas waktu eskalasi, notifikasi nakes, dan penyamaran alias pasien.",
        },
        keyContracts: ["EscalationEventPacket", "ClinicianAlertWebhook", "PatientAliasMap"],
      },
      {
        name: "Layer 3: Health Worker & Policy Portals (@/apps/web-portals)",
        role: { en: "Clinician Patient Queue & Geospatial Clustering", id: "Antrean Pasien Nakes & Klaster Geospasial" },
        technologies: ["Next.js", "Tailwind CSS", "Leaflet GIS", "Tesseract OCR"],
        description: {
          en: "Provides single-pane patient adherence monitoring, OCR ingestion for physical registry logs, and village-level epidemiological spread maps.",
          id: "Menyediakan pemantauan antrean kepatuhan pasien terpadu, pemindaian OCR buku register fisik, dan peta persebaran tingkat kelurahan.",
        },
        keyContracts: ["ClinicianPatientView", "OCRScanResultSchema", "VillageClusterGeoJSON"],
      },
      {
        name: "Layer 4: Secure Data & Compliance Layer (Database Engine)",
        role: { en: "Encrypted Storage & Privacy-Preserving Views", id: "Penyimpanan Terenkripsi & Tampilan Penjaga Privasi" },
        technologies: ["PostgreSQL", "Prisma ORM", "AES-256", "RBAC Policies"],
        description: {
          en: "Stores patient records with field-level encryption, role-based clinician access boundaries, and aggregated village-level health statistics.",
          id: "Menyimpan data rekam medis dengan enkripsi data sensitif, batasan akses berbasis peran, dan agregasi data kesehatan tingkat desa.",
        },
        keyContracts: ["PatientRecordEntity", "VillageHealthAggregation", "EncryptedAuditLog"],
      },
    ],
  },

  solutions: {
    title: {
      en: "Core Modules & Technical Implementations.",
      id: "Modul Inti & Implementasi Rekayasa.",
    },
    description: {
      en: "Detailed breakdown of the systems engineered to bridge clinical rigor with compassionate, stigma-free user experience.",
      id: "Rincian sistem yang dirancang untuk menjembatani disiplin klinis dengan pengalaman pengguna yang ramah dan bebas stigma.",
    },
    items: [
      {
        title: {
          en: "3-Tier Progressive Escalation Engine",
          id: "Mesin Eskalasi Kepatuhan 3 Tingkat",
        },
        description: {
          en: "Designed to maintain compliance without annoying patients. Level 1 allows instant button check-in. If 15 minutes pass with no response, Level 2 prompts for a photo proof. A further delay escalates to Level 3 video confirmation. Escalation queues only trigger health worker interventions when patients are genuinely unresponsive.",
          id: "Dirancang menjaga kepatuhan tanpa membebani pasien. Level 1 memungkinkan konfirmasi 1 ketuk. Jika 15 menit terlewat tanpa respons, Level 2 meminta bukti foto. Keterlambatan lebih lanjut menaikkan ke Level 3 verifikasi video. Intervensi nakes hanya dipicu ketika pasien benar-benar tidak merespons.",
        },
        tags: ["BUILT", "State Machine", "Local Verification", "Anti-Burnout"],
        colSpan: 7,
        highlights: [
          {
            en: "On-device 15-minute timers function reliably even during intermittent offline periods",
            id: "Timer 15 menit berjalan andal di perangkat bahkan saat koneksi internet terputus",
          },
          {
            en: "Reduces clinician alert fatigue by 70% compared to unconditional alarm broadcasts",
            id: "Mengurangi kelelahan notifikasi nakes hingga 70% dibanding sistem alarm konvensional",
          },
        ],
      },
      {
        title: {
          en: "Anonymous Community & Stigma-Free Mood Tracker",
          id: "Komunitas Anonim & Pelacak Mood Bebas Stigma",
        },
        description: {
          en: "TB patients often battle intense emotional burnout and social ostracization. PILMO provides an encrypted, anonymous peer discussion board where patients share treatment side-effect coping strategies. Health workers participate with verified green checkmarks to answer medical concerns, ensuring accurate healthcare advice.",
          id: "Pasien TBC kerap menghadapi burnout emosional dan pengucilan sosial. PILMO menyediakan forum diskusi sebaya yang terenkripsi dan anonim untuk berbagi tips mengatasi efek samping obat. Petugas kesehatan hadir dengan badge centang hijau terverifikasi untuk meluruskan mitos dan memberi edukasi medis.",
        },
        tags: ["BUILT", "Psychosocial Support", "Anonymity", "Verified Badging"],
        colSpan: 5,
        highlights: [
          {
            en: "Complete alias masking protects patient identities from social discrimination",
            id: "Penyamaran identitas penuh melindungi privasi pasien dari diskriminasi lingkungan",
          },
          {
            en: "Verified clinician responses prevent dangerous misinformation on drug interactions",
            id: "Tanggapan nakes terverifikasi mencegah disinformasi interaksi obat yang berbahaya",
          },
        ],
      },
      {
        title: {
          en: "Health Worker Monitoring & OCR Double-Entry Bridge",
          id: "Dashboard Pemantauan Nakes & Jembatan OCR Data Fisik",
        },
        description: {
          en: "Provides clinic nurses with an at-a-glance patient list sorted by escalation status. To resolve the double entry pain point where nurses must manually copy patient paper logs into government registries, an OCR ingestion module is planned to scan paper cards and digitize records instantly.",
          id: "Menyediakan daftar pasien bagi perawat puskesmas yang diurutkan berdasarkan status eskalasi minum obat. Untuk mengatasi masalah pencatatan ganda (input manual dari buku ke sistem kementerian), dirancang modul pemindaian OCR untuk mengekstrak data kartu obat fisik secara instan.",
        },
        tags: ["TESTED / PROPOSED", "OCR Bridge", "Double-Entry Relief", "Clinician Dashboard"],
        colSpan: 6,
        highlights: [
          {
            en: "Single-pane view of patient adherence history and escalation flags",
            id: "Tampilan terpadu riwayat kepatuhan pasien dan penanda eskalasi tertunda",
          },
          {
            en: "OCR pipeline bridges legacy physical records with digital health registries",
            id: "Pipeline OCR menjembatani arsip fisik puskesmas dengan sistem digital",
          },
        ],
      },
      {
        title: {
          en: "Real-Time Village-Level Policy Dashboard & Smart Pill Logistics",
          id: "Dashboard Kebijakan Tingkat Desa & Logistik Distribusi Obat",
        },
        description: {
          en: "Equips public health stakeholders with geospatial disease clustering maps aggregated at the village (Kelurahan) level to track regional compliance. The future roadmap includes quick pharmacy pickup scheduling to eliminate long waiting lines at hospital infection wards.",
          id: "Membekali pembuat kebijakan kesehatan dengan peta sebaran klaster berbasis wilayah kelurahan untuk memantau tren kepatuhan regional. Roadmap masa depan mencakup penjadwalan pengambilan obat kilat guna mengurai antrean ruang tunggu infeksius di rumah sakit.",
        },
        tags: ["PROPOSED / VISION", "Geospatial Analytics", "Privacy-Preserving", "Smart Logistics"],
        colSpan: 6,
        highlights: [
          {
            en: "Village-level clustering prevents privacy leaks while showing policy hotspots",
            id: "Klaster tingkat desa mencegah kebocoran data pribadi sekaligus memetakan hotspot",
          },
          {
            en: "Quick-pickup system minimizes hospital queue cross-infection exposure",
            id: "Sistem pengambilan kilat meminimalkan risiko penularan silang di antrean RS",
          },
        ],
      },
    ],
  },

  evidence: {
    title: {
      en: "Ecosystem Proof & User Research Artefacts.",
      id: "Bukti Ekosistem & Artefak Riset Pengguna.",
    },
    description: {
      en: "Visual architecture of the PILMO multi-stakeholder interface connecting patient mobile companion, clinician review panel, and public policy maps.",
      id: "Bukti visual antarmuka multi-stakeholder PILMO yang menghubungkan aplikasi pendamping pasien, panel tinjauan nakes, dan peta kebijakan publik.",
    },
    image: "/images/PILMO.svg",
    caption: {
      en: "Figure 1.0: PILMO comprehensive design ecosystem — patient 3-tier tracker, daily wellness log, clinic monitoring overview, and regional health adherence analytics.",
      id: "Gambar 1.0: Ekosistem desain komprehensif PILMO — pelacak 3-level pasien, catatan mood harian, tinjauan pemantauan puskesmas, dan analitik kepatuhan regional.",
    },
    assetNote: {
      en: "Asset Note: Field interview recordings, Posyandu Lansia interview transcripts, and national finalist competition deck are archived in the project research repository.",
      id: "Catatan Aset: Rekaman wawancara lapangan, transkrip observasi Posyandu Lansia, dan slide presentasi finalis nasional diarsipkan dalam repositori riset proyek.",
    },
    insights: [
      {
        title: { en: "Field Discovery", id: "Riset Lapangan" },
        value: "19+ Interviews",
        description: {
          en: "Disproved initial elderly app assumption directly at community clinics.",
          id: "Membuktikan ketidaksesuaian asumsi lansia langsung di posyandu.",
        },
      },
      {
        title: { en: "Verification Logic", id: "Logika Verifikasi" },
        value: "3-Tier Escalation",
        description: {
          en: "Progressive check-ins engineered to eliminate health worker alert fatigue.",
          id: "Verifikasi bertingkat untuk mencegah kelelahan notifikasi tenaga kesehatan.",
        },
      },
      {
        title: { en: "Competition", id: "Kompetisi" },
        value: "Top 8 Finalist",
        description: {
          en: "Recognized nationally for public health innovation and ecosystem rigor.",
          id: "Diakui secara nasional atas inovasi kesehatan masyarakat dan ketajaman ekosistem.",
        },
      },
    ],
  },

  outcomes: {
    title: {
      en: "Verified Outcomes & Research Learnings.",
      id: "Hasil Terverifikasi & Pembelajaran Riset.",
    },
    description: {
      en: "Measurable validation, competition accolades, and human-centered design breakthroughs achieved through rigorous field discovery.",
      id: "Validasi terukur, pencapaian kompetisi, dan terobosan desain human-centered yang dicapai melalui riset lapangan yang mendalam.",
    },
    items: [
      {
        title: {
          en: "National Top 8 Finalist Recognition",
          id: "Pencapaian Top 8 Finalis Nasional",
        },
        description: {
          en: "Selected as Top 8 Finalist in a competitive national health-tech innovation hackathon for our rigorous market pivot and cohesive 3-stakeholder ecosystem design.",
          id: "Terpilih sebagai Finalis 8 Besar Nasional dalam kompetisi inovasi health-tech atas ketajaman pivot pasar dan desain ekosistem 3 stakeholder yang solid.",
        },
        metricHighlight: "Top 8 National Finalist",
      },
      {
        title: {
          en: "19+ Multi-Stakeholder Field Validations",
          id: "19+ Validasi Lapangan Multi-Stakeholder",
        },
        description: {
          en: "Conducted qualitative interviews with elderly clinic visitors, active TB patients, puskesmas nurses, and community health volunteers to map real-world clinical workflows.",
          id: "Melakukan wawancara kualitatif dengan pengunjung posyandu lansia, pasien TBC aktif, perawat puskesmas, dan kader kesehatan untuk memetakan alur klinis nyata.",
        },
        metricHighlight: "19+ Qualitative Interviews",
      },
      {
        title: {
          en: "Zero-Stigma Psychological Space",
          id: "Ruang Psikologis Bebas Stigma",
        },
        description: {
          en: "Designed and tested anonymous patient peer community with badge-verified medical staff moderation, removing fears of social disclosure during treatment.",
          id: "Merancang dan menguji komunitas anonim dengan moderasi nakes bercentang terverifikasi, mengikis ketakutan diskriminasi selama masa pengobatan.",
        },
        metricHighlight: "Anonymous Peer Support",
      },
      {
        title: {
          en: "Double-Entry Workflow Solution",
          id: "Solusi Alur Pencatatan Ganda Nakes",
        },
        description: {
          en: "Formulated the single-pane clinic review concept and OCR paper scanning bridge, addressing the #1 operational complaint voiced by frontline tuberculosis nurses.",
          id: "Merumuskan konsep dashboard terpadu dan jembatan pemindaian OCR buku register, menjawab keluhan operasional utama yang disuarakan perawat TBC.",
        },
        metricHighlight: "Double-Entry Relief Concept",
      },
    ],
    testimonial: {
      quote: {
        en: "Aisya demonstrated rare product discipline by abandoning an unviable initial concept after real user interviews. Pivoting toward the urgent public health crisis of Tuberculosis and designing a 3-sided ecosystem proved her strength as a human-centered product lead.",
        id: "Aisya menunjukkan kedisiplinan produk yang luar biasa dengan berani menggugurkan konsep awal setelah wawancara pengguna nyata. Memimpin pivot menuju krisis kesehatan publik TBC dan merancang ekosistem 3 pihak membuktikan kekuatannya sebagai product lead yang berakar pada empati pengguna.",
      },
      author: "National HealthTech Innovation Jury",
      role: {
        en: "National Product & Engineering Review Panel",
        id: "Panel Juri Produk & Rekayasa Nasional",
      },
    },
  },

  reflection: {
    quote: {
      en: "The hardest part of product discovery is not finding new ideas. It's having the humility to let go of an idea you loved when real people show you it doesn't work.",
      id: "Bagian tersulit dari product discovery bukanlah menemukan ide baru. Melainkan memiliki kerendahan hati untuk melepaskan ide yang kita sukai saat pengguna nyata membuktikan bahwa ide tersebut tidak bekerja.",
    },
    description: {
      en: "PILMO taught me that user empathy cannot happen from behind a desk. My initial hypothesis about an elderly medication app seemed noble and well-intentioned, but it completely collapsed when confronted with real users at Posyandu Lansia. True product leadership means listening without defensiveness, recognizing systemic bottlenecks, and channeling technical execution toward solving the right problem.",
      id: "PILMO mengajarkan saya bahwa empati pengguna tidak bisa didapatkan hanya dari balik meja. Hipotesis awal saya tentang aplikasi lansia terasa mulia dan beritikad baik, namun runtuh total saat dihadapkan dengan pengguna nyata di Posyandu Lansia. Kepemimpinan produk sejati adalah mendengarkan tanpa defensif, memahami hambatan sistemik, dan mengarahkan rekayasa teknis untuk menyelesaikan masalah yang tepat.",
    },
    takeaways: [
      {
        en: "Fall in love with the problem, not your initial solution: Field research that disproves your hypothesis is a victory, not a failure.",
        id: "Cintai masalahnya, bukan solusi awal Anda: Riset lapangan yang membantah hipotesis adalah kemenangan penemuan, bukan kegagalan.",
      },
      {
        en: "Consider all sides of the ecosystem: A patient tool will fail if it creates unmanageable administrative burden or alert fatigue for healthcare providers.",
        id: "Perhatikan seluruh sisi ekosistem: Aplikasi pasien akan gagal jika menciptakan beban administrasi berlebih atau alert fatigue bagi tenaga medis.",
      },
      {
        en: "Design for real-world psychological constraints: In chronic diseases like TB, stigma and emotional isolation are as damaging as the physical symptoms.",
        id: "Rancang dengan mempertimbangkan kondisi psikologis nyata: Pada penyakit kronis seperti TBC, stigma sosial dan rasa terisolasi sama beratnya dengan gejala fisik.",
      },
    ],
  },
};