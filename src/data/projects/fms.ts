import { ProjectDetailV2 } from "../project-details";

export const fmsData: ProjectDetailV2 = {
  slug: "fleet-management",

  hero: {
    title: {
      line1: "Leading Through Market Uncertainty.",
      line2: "The Nexa Fleet Evolution.",
    },
    tagline: {
      en: "How a rejected mining solution evolved into a commercial logistics fleet platform through market validation, custom IoT telemetry, and team leadership.",
      id: "Bagaimana solusi pertambangan yang ditolak berevolusi menjadi platform armada logistik komersial melalui validasi pasar, telemetri IoT kustom, dan kepemimpinan tim.",
    },
    category: {
      en: "Logistics SaaS & Telematics",
      id: "SaaS Logistik & Telematika",
    },
    role: {
      en: "Product Manager & Lead Frontend Engineer",
      id: "Product Manager & Lead Frontend Engineer",
    },
    timeline: {
      en: "8 Months (Discovery, Pivot & MVP)",
      id: "8 Bulan (Riset, Pivot & MVP)",
    },
    team: {
      en: "7 Multidisciplinary Members (Frontend, Backend, Hardware/IoT, QA, UX Designer)",
      id: "7 Anggota Multidisiplin (Frontend, Backend, Hardware/IoT, QA, UX Designer)",
    },
    organization: {
      en: "Nexa Fleet (Independent Venture / Capstone)",
      id: "Nexa Fleet (Venture Mandiri / Capstone)",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PostgreSQL",
      "IoT (ESP32 / GPS)",
      "Tesseract OCR",
      "MQTT / WebSockets",
    ],
    image: "/images/FLEET MANAGEMENT SYSTEM.svg",
    stats: [
      {
        label: { en: "Team Coordinated", id: "Anggota Tim" },
        value: "7 Members",
      },
      {
        label: { en: "Strategic Pivot", id: "Pivot Strategis" },
        value: "Mining → Logistics",
      },
      {
        label: { en: "Telemetry Prototype", id: "Prototipe Telemetri" },
        value: "ESP32 + GPS",
      },
      {
        label: { en: "Audit Workaround", id: "Audit Workaround" },
        value: "OCR Receipt Engine",
      },
    ],
  },

  context: {
    title: {
      en: "When the Initial Market Hypothesis Collapsed.",
      id: "Ketika Hipotesis Pasar Awal Runtuh.",
    },
    description: {
      en: "The project originated as an industrial fuel monitoring platform tailored exclusively for heavy mining operations to curb diesel theft. After building the initial web interface and submitting formal funding proposals, our pitch was rejected. Stakeholders became unresponsive, industrial hardware access was blocked, and the 7-person team faced complete stagnation.",
      id: "Proyek ini bermula sebagai platform monitoring bahan bakar industri untuk armada alat berat pertambangan guna mencegah pencurian solar. Setelah membangun antarmuka web awal dan mengajukan proposal pendanaan resmi, proposal kami ditolak. Stakeholder berhenti merespons, akses perangkat keras industri terputus, dan tim 7 orang menghadapi stagnasi total.",
    },
    problemStatement: {
      en: "A niche mining product with high procurement barriers and inaccessible proprietary hardware left the team with working web code but no viable market path, no hardware telemetry pipeline, and unfeasible banking API dependencies.",
      id: "Produk khusus pertambangan dengan hambatan pengadaan tinggi dan perangkat keras industri yang tidak dapat diakses menyisakan kode web yang berfungsi namun tanpa jalur pasar yang layak, tanpa pipeline telemetri hardware, dan ketergantungan API perbankan yang tidak realistis.",
    },
    challenges: [
      {
        en: "Rejected funding proposal and lost corporate mining stakeholder engagement",
        id: "Proposal pendanaan ditolak dan hilangnya keterlibatan stakeholder pertambangan",
      },
      {
        en: "Zero prior microcontroller or hardware IoT experience across the software-heavy team",
        id: "Nol pengalaman mikrokontroler atau IoT hardware pada tim yang berlatar belakang software",
      },
      {
        en: "Strict financial compliance and licensing hurdles preventing direct driver banking integration",
        id: "Hambatan perizinan dan kepatuhan finansial ketat yang menghalangi integrasi langsung API perbankan driver",
      },
      {
        en: "Cellular connectivity blank spots along transit corridors threatening realtime telemetry streaming",
        id: "Blank spot konektivitas seluler di jalur transit yang mengancam streaming telemetri realtime",
      },
    ],
    objectives: [
      {
        en: "Pivot the value proposition to commercial distribution & logistics fleets through active market validation",
        id: "Memutar proposisi nilai ke armada distribusi komersial & logistik melalui validasi pasar aktif",
      },
      {
        en: "Bridge the hardware skill gap by partnering with local robotics communities to build an ESP32 IoT prototype",
        id: "Mengatasi keterbatasan skill hardware dengan berkolaborasi bersama komunitas robotik membangun prototipe ESP32",
      },
      {
        en: "Engineer a pragmatic Tesseract OCR receipt scanning pipeline to bypass complex banking legalities",
        id: "Mengembangkan pipeline OCR pemindai struk berbasis Tesseract untuk mengatasi hambatan legal perbankan",
      },
      {
        en: "Build a resilient telemetry architecture featuring offline flash buffering for seamless tracking across blank spots",
        id: "Membangun arsitektur telemetri andal dengan offline flash buffering untuk pelacakan mulus di area blank spot",
      },
    ],
  },

  metrics: [
    {
      value: "7",
      label: { en: "Multidisciplinary Team", id: "Anggota Tim Multidisiplin" },
      description: {
        en: "Coordinated frontend, backend, IoT hardware, QA, and UX designer across an 8-month development cycle.",
        id: "Mengorkestrasi frontend, backend, IoT hardware, QA, dan UX designer sepanjang siklus 8 bulan.",
      },
      badge: { en: "Leadership", id: "Kepemimpinan" },
    },
    {
      value: "100%",
      label: { en: "Strategic Pivot Execution", id: "Eksekusi Pivot Strategis" },
      description: {
        en: "Successfully pivoted from a closed mining tool to an open, multi-tenant commercial logistics SaaS platform.",
        id: "Berhasil memutar arah dari produk pertambangan tertutup ke platform SaaS logistik komersial multi-tenant.",
      },
      badge: { en: "Mining → Logistics", id: "Mining → Logistik" },
    },
    {
      value: "15+",
      label: { en: "Commercial Fleet Interviews", id: "Wawancara Armada Komersial" },
      description: {
        en: "Conducted field validation with local logistics managers, dispatchers, and commercial truck drivers.",
        id: "Melakukan validasi lapangan dengan manajer logistik, dispatcher, dan pengemudi truk komersial.",
      },
      badge: { en: "Validation", id: "Validasi" },
    },
    {
      value: "ESP32",
      label: { en: "Hardware Bench Prototype", id: "Prototipe Bench Hardware" },
      description: {
        en: "Functional bench-tested vehicle telemetry unit streaming GPS coordinates and sensor data over MQTT.",
        id: "Unit telemetri kendaraan fungsional hasil bench test yang mengirimkan koordinat GPS dan sensor via MQTT.",
      },
      badge: { en: "Tested", id: "Teruji" },
    },
  ],

  comparisons: [
    {
      feature: { en: "Target Market & Architecture", id: "Pasar Sasaran & Arsitektur" },
      before: {
        en: "Single-tenant on-premise portal tailored exclusively to high-capital mining machinery with long sales cycles.",
        id: "Portal on-premise single-tenant yang dikhususkan untuk alat berat tambang dengan siklus penjualan sangat panjang.",
      },
      after: {
        en: "Multi-tenant commercial logistics SaaS platform serving distribution vans, freight trucks, and delivery fleets.",
        id: "Platform SaaS logistik multi-tenant yang melayani armada mobil boks, truk ekspedisi, dan armada distribusi.",
      },
    },
    {
      feature: { en: "Driver Expense & Fuel Auditing", id: "Audit Pengeluaran BBM Driver" },
      before: {
        en: "Theoretical corporate card banking API requiring multi-year financial licensing and prohibitive regulatory approval.",
        id: "Rencana API kartu korporat perbankan yang membutuhkan izin kepatuhan finansial multi-tahun dan biaya regulasi tinggi.",
      },
      after: {
        en: "Pragmatic mobile OCR receipt scanner extracting fuel liters, date, and costs with manual driver correction fallback.",
        id: "Pemindai struk OCR mobile yang mengekstrak liter BBM, tanggal, dan nominal dengan fallback koreksi manual.",
      },
    },
    {
      feature: { en: "Telemetry & Hardware Stack", id: "Stack Hardware & Telemetri" },
      before: {
        en: "Stalled reliance on expensive proprietary CAN-bus sensors without working hardware access or team expertise.",
        id: "Ketergantungan mandek pada sensor CAN-bus industri berbiaya tinggi tanpa akses fisik perangkat dan keahlian tim.",
      },
      after: {
        en: "Modular ESP32 microcontroller + NEO-6M GPS receiver bench prototype streaming over MQTT with offline SD buffering.",
        id: "Prototipe modular mikrokontroler ESP32 + GPS NEO-6M yang mengirim data via MQTT dengan buffer SD card offline.",
      },
    },
  ],

  decision: {
    title: {
      en: "Pivot Proactively Rather Than Waiting for a Closed Door.",
      id: "Pivot Proaktif daripada Menunggu Pintu yang Tertutup.",
    },
    description: {
      en: "Following the mining proposal rejection, we faced an existential crossroads: wait indefinitely for unresponsive mining sponsors, or salvage our working frontend foundations by pivoting to an accessible, high-volume market. I rallied the team around commercial logistics.",
      id: "Pasca penolakan proposal tambang, tim berada di persimpangan kritis: menunggu tanpa batas sponsor pertambangan yang tidak responsif, atau menyelamatkan fondasi frontend yang telah dibangun dengan pivot ke pasar komersial terbuka. Saya mengarahkan tim menuju sektor logistik.",
    },
    options: [
      {
        label: "Option A",
        name: "Wait for Mining Stakeholder Feedback",
        description: {
          en: "Freeze feature development and continue following up with mining executives while hoping for a reversal.",
          id: "Membekukan pengembangan fitur dan terus mengejar eksekutif tambang dengan harapan ada perubahan keputusan.",
        },
        status: {
          en: "Indefinite Stall & Team Demotivation",
          id: "Stagnasi & Demotivasi Tim",
        },
        tradeoffs: [
          { en: "Leaves the 7-person team idle without active learning or user feedback", id: "Membiarkan 7 anggota tim menganggur tanpa feedback pengguna aktif" },
          { en: "High risk of total project abandonment and wasted engineering effort", id: "Risiko tinggi proyek ditinggalkan total dan menyia-nyiakan upaya rekayasa" },
        ],
        selected: false,
      },
      {
        label: "Option B",
        name: "Pivot to Commercial Logistics SaaS & Prototyping",
        description: {
          en: "Repurpose the fleet dashboard for logistics, validate with SME freight operators, and build our own IoT hardware prototype.",
          id: "Mengadaptasi dashboard untuk armada logistik, memvalidasi dengan operator ekspedisi lokal, dan merakit prototipe IoT sendiri.",
        },
        status: {
          en: "Active Validation & High Velocity",
          id: "Validasi Aktif & Kecepatan Tinggi",
        },
        tradeoffs: [
          { en: "Requires learning microcontroller C++ programming and circuit design from scratch", id: "Mengharuskan tim mempelajari pemrograman C++ mikrokontroler dan sirkuit dari nol" },
          { en: "Unlocks immediate access to local fleet operators for rapid interview feedback", id: "Membuka akses langsung ke operator armada lokal untuk feedback cepat" },
        ],
        selected: true,
      },
    ],
    rationale: {
      en: "Option B preserved the team's momentum, repurposed 80%+ of our existing frontend codebase, and allowed us to test real hardware telemetry without enterprise gatekeepers.",
      id: "Opsi B menjaga momentum tim, memanfaatkan kembali 80%+ kode frontend yang telah ada, dan memungkinkan kami menguji telemetri hardware nyata tanpa hambatan birokrasi korporasi besar.",
    },
  },

  architecture: {
    title: {
      en: "Four-Tier Logistics Telematics Architecture.",
      id: "Arsitektur Empat Lapisan Telematika Logistik.",
    },
    description: {
      en: "Engineered an end-to-end telematics pipeline connecting on-vehicle sensor hardware, cellular/MQTT telemetry ingestion, OCR document processing, and live dispatcher web interfaces.",
      id: "Merancang pipeline telematika end-to-end yang menghubungkan hardware sensor kendaraan, ingest telemetri seluler/MQTT, pemrosesan dokumen OCR, dan antarmuka web dispatcher.",
    },
    layers: [
      {
        name: "Layer 1: Fleet Dispatch & Analytics Portal (@/components/portal)",
        role: { en: "Live Map, Route Replay & Fleet Analytics", id: "Peta Live, Riwayat Rute & Analitik Armada" },
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet/Mapbox"],
        description: {
          en: "Realtime interactive vehicle map, driver duty management, fuel expenditure logs, and anomaly alert notifications.",
          id: "Peta armada interaktif realtime, manajemen tugas driver, log pengeluaran BBM, dan notifikasi anomali rute.",
        },
        keyContracts: ["VehicleLocationPayload", "RouteHistoryRecord", "FleetFilterState"],
      },
      {
        name: "Layer 2: Auditing & OCR Verification Service (@/services/ocr)",
        role: { en: "Receipt Image Pre-Processing & Text Extraction", id: "Pre-processing Gambar Struk & Ekstraksi Teks" },
        technologies: ["Tesseract OCR", "Canvas API", "Zod"],
        description: {
          en: "Converts driver fuel receipt photos into structured expense records with image thresholding, regex parsing, and confidence scoring.",
          id: "Mengonversi foto struk BBM driver menjadi data terstruktur dengan image thresholding, parsing regex, dan confidence scoring.",
        },
        keyContracts: ["ReceiptScanResult", "ExpenseVerificationSchema", "ConfidenceScore"],
      },
      {
        name: "Layer 3: Telemetry Ingestion & WebSocket Gateway (@/services/telemetry)",
        role: { en: "MQTT Broker, Geofencing & Event Ingestion", id: "Broker MQTT, Geofencing & Ingest Event" },
        technologies: ["Laravel 11", "WebSockets", "PostgreSQL / PostGIS"],
        description: {
          en: "Ingests high-frequency GPS coordinate streams, evaluates geofence boundaries, and broadcasts live position deltas to connected dispatchers.",
          id: "Menerima stream koordinat GPS frekuensi tinggi, mengevaluasi geofence, dan menyiarkan pembaruan posisi ke dispatcher.",
        },
        keyContracts: ["TelemetryStreamPacket", "GeofenceTriggerEvent", "DeviceHeartbeat"],
      },
      {
        name: "Layer 4: Vehicle IoT Firmware & Sensor Unit (Hardware MCU)",
        role: { en: "GPS Acquisition & Offline Flash Buffering", id: "Akuisisi GPS & Buffering Flash Offline" },
        technologies: ["ESP32 Microcontroller", "NEO-6M GPS", "FreeRTOS", "C++"],
        description: {
          en: "Microcontroller bench prototype capturing GPS coordinates, speed, and fuel voltage, buffering telemetry locally when cellular signals drop.",
          id: "Prototipe mikrokontroler pengambil data GPS, kecepatan, dan voltase level BBM, dengan penyimpanan lokal saat sinyal seluler terputus.",
        },
        keyContracts: ["NMEA Sentence Parser", "MQTT Telemetry JSON", "EEPROM Ring Buffer"],
      },
    ],
  },

  solutions: {
    title: {
      en: "Engineering Solutions & Implementation Breakdown.",
      id: "Solusi Rekayasa & Rincian Implementasi.",
    },
    description: {
      en: "Transparent breakdown of what was physically built and tested, what was modeled as a future proposal, and what was intentionally decommissioned.",
      id: "Rincian transparan mengenai apa yang benar-benar dibangun dan diuji, apa yang dimodelkan sebagai proposal masa depan, dan apa yang diputuskan untuk dibatalkan.",
    },
    items: [
      {
        title: {
          en: "Multi-Tenant Dispatcher & Realtime Map Portal",
          id: "Portal Dispatcher Multi-Tenant & Peta Realtime",
        },
        description: {
          en: "[BUILT & TESTED] Developed a responsive Next.js dispatch dashboard featuring live vehicle coordinate rendering, status indicators (Active, Idle, Alert), route history playback, and fleet operational filtering.",
          id: "[BUILT & TESTED] Membangun dashboard dispatch Next.js responsif dengan pemetaan koordinat armada realtime, indikator status (Aktif, Idle, Waspada), pemutaran ulang riwayat rute, dan filter operasional armada.",
        },
        tags: ["BUILT", "TESTED", "Next.js", "TypeScript", "Leaflet"],
        colSpan: 7,
        highlights: [
          { en: "Status: FULLY BUILT & TESTED in staging environment", id: "Status: SEPENUHNYA DIBANGUN & DIUJI di environment staging" },
          { en: "Supports multi-vehicle coordinate streaming with smooth map interpolation", id: "Mendukung streaming koordinat multi-armada dengan interpolasi pergerakan halus" },
        ],
      },
      {
        title: {
          en: "Tesseract OCR Fuel Receipt Auditing Engine",
          id: "Mesin Audit Struk BBM Berbasis Tesseract OCR",
        },
        description: {
          en: "[BUILT & TESTED] Engineered a mobile-friendly fuel receipt scanner utilizing client-side grayscale thresholding and OCR regex parsing (liters, total IDR, date, station ID) with editable fallback inputs to bypass complex banking integrations.",
          id: "[BUILT & TESTED] Mengembangkan pemindai struk BBM mobile dengan grayscale thresholding dan regex OCR (liter, total Rupiah, tanggal, nomor SPBU) disertai input koreksi manual sebagai solusi legal tanpa integrasi perbankan rumit.",
        },
        tags: ["BUILT", "TESTED", "OCR", "Tesseract.js", "Expense Audit"],
        colSpan: 5,
        highlights: [
          { en: "Status: FULLY BUILT & TESTED with real thermal receipts", id: "Status: SEPENUHNYA DIBANGUN & DIUJI dengan struk termal nyata" },
          { en: "Eliminated financial compliance barriers for driver expense tracking", id: "Menghilangkan hambatan perizinan finansial untuk pencatatan biaya BBM" },
        ],
      },
      {
        title: {
          en: "ESP32 Microcontroller & GPS Telemetry Hardware",
          id: "Hardware Telemetri Mikrokontroler ESP32 & GPS",
        },
        description: {
          en: "[BUILT & TESTED (Bench Prototype)] Collaborated with robotics mentors to assemble and program an ESP32 MCU wired to a NEO-6M GPS receiver and analog fuel voltage sensor, streaming JSON telemetry over MQTT with offline SD flash caching.",
          id: "[BUILT & TESTED (Bench Prototype)] Berkolaborasi dengan mentor robotik merakit dan memprogram MCU ESP32 dengan modul GPS NEO-6M dan sensor voltase analog, mengirimkan telemetri JSON via MQTT dengan cache SD card saat offline.",
        },
        tags: ["BUILT", "TESTED", "ESP32", "C++", "MQTT", "Hardware"],
        colSpan: 5,
        highlights: [
          { en: "Status: HARDWARE BENCH PROTOTYPE BUILT & TESTED on test circuits", id: "Status: PROTOTIPE HARDWARE DIBANGUN & DIUJI pada sirkuit bench test" },
          { en: "Simulated offline telemetry sync recovery upon cellular reconnection", id: "Menyimulasikan sinkronisasi data tertunda saat koneksi seluler kembali pulih" },
        ],
      },
      {
        title: {
          en: "Cross-Disciplinary Team Orchestration & PRD Pivot",
          id: "Orkestrasi Tim Lintas Disiplin & Pivot PRD",
        },
        description: {
          en: "[BUILT & TESTED] Acted as Product Manager leading 7 members across software, hardware, and UX design. Redefined product requirements, established weekly sprint reviews, and facilitated knowledge transfer sessions between software devs and hardware makers.",
          id: "[BUILT & TESTED] Berperan sebagai Product Manager yang memimpin 7 anggota di bidang software, hardware, dan desain UX. Menyusun ulang PRD, memimpin sprint review mingguan, dan memfasilitasi transfer pengetahuan teknis hardware-software.",
        },
        tags: ["BUILT", "Product Leadership", "PRD", "Sprint Management"],
        colSpan: 7,
        highlights: [
          { en: "Status: EXECUTED across the full 8-month development cycle", id: "Status: DIJALANKAN sepanjang 8 bulan siklus pengembangan" },
          { en: "Transformed a demoralized team into a high-functioning multidisciplinary unit", id: "Mengubah tim yang sempat stagnan menjadi unit multidisiplin yang adaptif" },
        ],
      },
      {
        title: {
          en: "Predictive Fuel Siphoning Anomaly Detection Algorithm",
          id: "Algoritma Prediktif Deteksi Anomali Pencurian BBM",
        },
        description: {
          en: "[PROPOSED / MODELED] Mathematical model designed to cross-reference rapid fuel level drops against vehicle velocity, engine RPM, and GPS terrain slope to automatically flag siphoning incidents.",
          id: "[PROPOSED / MODELED] Model matematis yang dirancang untuk membandingkan penurunan drastis level BBM dengan kecepatan kendaraan, status mesin, dan kontur jalan guna memicu peringatan otomatis pencurian bahan bakar.",
        },
        tags: ["PROPOSED", "Algorithm Model", "Anomaly Detection", "Not in Production"],
        colSpan: 6,
        highlights: [
          { en: "Status: PROPOSED & MATHEMATICALLY MODELED (requires fleet pilot telemetry to train)", id: "Status: DIMODELKAN SECARA MATEMATIS (membutuhkan telemetri uji coba armada untuk kalibrasi)" },
        ],
      },
      {
        title: {
          en: "Direct Corporate Card Banking API Gateway",
          id: "Integrasi Direct Corporate Card API Perbankan",
        },
        description: {
          en: "[NOT IMPLEMENTED / SCRAPPED] Original concept of issuing virtual debit cards for drivers directly within the app was formally scrapped due to bank compliance hurdles, KYC costs, and legal entity requirements.",
          id: "[NOT IMPLEMENTED / DIBATALKAN] Konsep awal penerbitan kartu debit virtual untuk driver di dalam aplikasi secara resmi dibatalkan karena hambatan regulasi perbankan, biaya KYC, dan persyaratan badan hukum.",
        },
        tags: ["NOT IMPLEMENTED", "Scrapped Concept", "Compliance Hurdle"],
        colSpan: 6,
        highlights: [
          { en: "Status: INTENTIONALLY DECOMMISSIONED & replaced with pragmatic OCR engine", id: "Status: DIBATALKAN SECARA INTENSIONAL & digantikan dengan solusi OCR pragmatis" },
        ],
      },
    ],
  },

  evidence: {
    title: {
      en: "Interface Proof & Engineering Artefacts.",
      id: "Bukti Antarmuka & Artefak Rekayasa.",
    },
    description: {
      en: "Visual proof of the multi-tenant Nexa Fleet dashboard interface and operational tracking workflows.",
      id: "Bukti visual antarmuka dashboard Nexa Fleet multi-tenant dan alur kerja pemantauan operasional.",
    },
    image: "/images/FLEET MANAGEMENT SYSTEM.svg",
    caption: {
      en: "Figure 1.0: Nexa Fleet operational dashboard displaying active vehicle telemetry, fuel consumption trends, route adherence, and dispatch controls.",
      id: "Gambar 1.0: Dashboard operasional Nexa Fleet menampilkan telemetri armada aktif, tren konsumsi BBM, kepatuhan rute, dan kontrol dispatch.",
    },
    assetNote: {
      en: "Asset Note: Hardware bench schematics, ESP32 wiring diagrams, and test circuit captures can be viewed in the engineering project repository.",
      id: "Catatan Aset: Skematik sirkuit hardware, diagram pengkabelan ESP32, dan dokumentasi bench test dapat ditinjau pada repositori rekayasa proyek.",
    },
    insights: [
      {
        title: { en: "Product Strategy", id: "Strategi Produk" },
        value: "Commercial Pivot",
        description: {
          en: "Shifted target market to accessible commercial logistics fleets.",
          id: "Mengalihkan target pasar ke armada logistik komersial terbuka.",
        },
      },
      {
        title: { en: "Expense Auditing", id: "Audit Pengeluaran" },
        value: "Tesseract OCR",
        description: {
          en: "Bypassed banking API blocks with automatic receipt extraction.",
          id: "Mengatasi hambatan API perbankan dengan ekstraksi struk otomatis.",
        },
      },
      {
        title: { en: "Hardware Integration", id: "Integrasi Hardware" },
        value: "ESP32 + GPS",
        description: {
          en: "Bench-tested telemetry prototype built with local mentors.",
          id: "Prototipe telemetri hasil bench test bersama mentor lokal.",
        },
      },
    ],
  },

  outcomes: {
    title: {
      en: "Verified Outcomes & Leadership Learnings.",
      id: "Hasil Terverifikasi & Pembelajaran Kepemimpinan.",
    },
    description: {
      en: "Measurable accomplishments achieved through decisive product leadership, engineering adaptability, and cross-disciplinary collaboration.",
      id: "Pencapaian terukur yang dihasilkan melalui kepemimpinan produk yang tegas, adaptabilitas rekayasa, dan kolaborasi lintas disiplin.",
    },
    items: [
      {
        title: { en: "Preserved 100% of Core Engineering Momentum", id: "Menjaga 100% Momentum Rekayasa Tim" },
        description: {
          en: "Transformed an existential project rejection into a viable multi-tenant logistics product, retaining all 7 team members through completion.",
          id: "Mengubah penolakan proyek menjadi produk logistik multi-tenant yang berdaya guna, mempertahankan seluruh 7 anggota tim hingga tuntas.",
        },
        metricHighlight: "7/7 Members Retained",
      },
      {
        title: { en: "Eliminated Multi-Month Financial Legal Roadblocks", id: "Mengeliminasi Hambatan Regulasi Finansial Multi-Bulan" },
        description: {
          en: "Replacing banking card issuance with OCR fuel receipt processing enabled immediate end-to-end expense auditing without regulatory delays.",
          id: "Mengganti penerbitan kartu bank dengan pemrosesan struk OCR memungkinkan audit pengeluaran berjalan instan tanpa kendala birokrasi.",
        },
        metricHighlight: "Instant Audit Workflow",
      },
      {
        title: { en: "Hardware-to-Software Bridge Established", id: "Jembatan Kolaborasi Hardware-Software Terbentuk" },
        description: {
          en: "Bridged pure software engineers with hardware makers to successfully assemble, program, and bench-test functional ESP32 IoT telemetry units.",
          id: "Menghubungkan software engineer dengan perakit hardware untuk sukses memprogram dan menguji prototipe telemetri IoT ESP32.",
        },
        metricHighlight: "Working IoT Prototype",
      },
      {
        title: { en: "Market-Validated SaaS Foundation", id: "Fondasi SaaS Tervalidasi Pasar" },
        description: {
          en: "Completed 15+ interviews with distribution fleet managers, validating critical operational needs around route replay and fuel accountability.",
          id: "Menuntaskan 15+ wawancara dengan manajer armada distribusi, memvalidasi kebutuhan penting terkait riwayat rute dan akuntabilitas BBM.",
        },
        metricHighlight: "15+ Industry Interviews",
      },
    ],
    testimonial: {
      quote: {
        en: "When the initial proposal was rejected, Aisya didn't let the team collapse. She refocused our technical strengths, found mentors to help us learn IoT, and drove the pivot toward logistics with clarity and determination.",
        id: "Ketika proposal awal ditolak, Aisya tidak membiarkan tim putus asa. Ia memfokuskan kembali keunggulan teknis kami, mencari mentor untuk membantu kami belajar IoT, dan memimpin pivot ke arah logistik dengan visi yang jelas dan terarah.",
      },
      author: "Multidisciplinary Engineering Peer Review",
      role: { en: "Nexa Fleet Team", id: "Tim Nexa Fleet" },
    },
  },

  reflection: {
    quote: {
      en: "Leadership isn't about having all the answers. It's about giving people a reason to keep moving when the roadmap disappears.",
      id: "Kepemimpinan bukan tentang memiliki semua jawaban. Tetapi tentang memberi alasan kepada tim untuk tetap melangkah ketika roadmap menghilang.",
    },
    description: {
      en: "Before this project, I believed that executing a pre-defined PRD was the main duty of engineering. Experiencing a total market rejection taught me that products evolve through ambiguity. The most valuable contribution of a technical leader is often helping the team adapt, acquire new skills across disciplines, and pivot toward real value.",
      id: "Sebelum proyek ini, saya meyakini bahwa mengeksekusi PRD adalah tugas utama rekayasa. Menghadapi penolakan pasar mengajarkan saya bahwa produk berkembang di tengah ketidakpastian. Kontribusi paling berharga seorang technical leader adalah membantu tim beradaptasi, menguasai skill lintas disiplin, dan berani berbelok menuju nilai nyata.",
    },
    takeaways: [
      {
        en: "Kill unviable assumptions early: Pivoting away from an unresponsive niche is a sign of product discipline, not failure.",
        id: "Gugurkan asumsi yang tidak layak sedini mungkin: Pivot dari pasar yang tidak responsif adalah tanda kedewasaan produk, bukan kegagalan.",
      },
      {
        en: "Pragmatic engineering beats blocked ideals: OCR receipt scanning delivered immediate audit value without waiting months for banking approvals.",
        id: "Rekayasa pragmatis mengalahkan idealisme yang terhambat: OCR struk memberikan nilai audit instan tanpa menunggu berbulan-bulan izin perbankan.",
      },
      {
        en: "Embrace cross-disciplinary growth: Partnering with hardware communities turned a major team skill gap into our strongest learning milestone.",
        id: "Rangkul pembelajaran lintas disiplin: Berkolaborasi dengan komunitas hardware mengubah keterbatasan skill menjadi pencapaian pembelajaran terbesar tim.",
      },
    ],
  },
};