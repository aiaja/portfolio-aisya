import { ProjectDetailV2 } from "../project-details";

export const oneCallData: ProjectDetailV2 = {
  slug: "onecall",

  hero: {
    title: {
      line1: "Designing for Critical Moments.",
      line2: "The OneCall Emergency Ecosystem.",
    },
    tagline: {
      en: "Born from a street crime tragedy in Semarang, OneCall reimagines rapid emergency reporting through screen-less hardware triggers, SMS fallbacks, and a volunteer first-responder network.",
      id: "Terinspirasi dari tragedi kejahatan jalanan di Semarang, OneCall merancang ulang pelaporan darurat cepat melalui pemicu hardware tanpa layar, fallback SMS, dan jaringan relawan first responder.",
    },
    category: {
      en: "Emergency Response & CivicTech",
      id: "Sistem Tanggap Darurat & CivicTech",
    },
    role: {
      en: "Product Strategist & Frontend Lead",
      id: "Product Strategist & Frontend Lead",
    },
    timeline: {
      en: "Discovery, Prototyping & National Competitions",
      id: "Riset Lapangan, Prototipe & Kompetisi Nasional",
    },
    team: {
      en: "4 Cross-Functional Members (Product, Mobile Dev, Backend/IoT, UI/UX Designer)",
      id: "4 Anggota Tim Lintas Disiplin (Product, Mobile Dev, Backend/IoT, UI/UX Designer)",
    },
    organization: {
      en: "OneCall (National Award Winner — FOSTIFEST & INVOFEST)",
      id: "OneCall (Juara Nasional — FOSTIFEST & INVOFEST)",
    },
    technologies: [
      "Product Strategy",
      "Android Accessibility Service",
      "React Native",
      "Node.js",
      "Leaflet / OpenStreetMap",
      "SMS Gateway Fallback",
      "WebSockets",
      "PostgreSQL",
    ],
    image: "/images/ONECALL.svg",
    stats: [
      {
        label: { en: "National Awards", id: "Penghargaan Nasional" },
        value: "2× 3rd Place",
      },
      {
        label: { en: "User & Nakes Validations", id: "Validasi Pengguna & Nakes" },
        value: "13+ Interviews",
      },
      {
        label: { en: "Distress Trigger", id: "Pemicu Darurat" },
        value: "Screen-less",
      },
      {
        label: { en: "Dispatch Routing", id: "Perutean Bantuan" },
        value: "Volunteer-First",
      },
    ],
  },

  context: {
    title: {
      en: "When Panic Strikes, Traditional Apps Become Useless.",
      id: "Saat Kepanikan Melanda, Aplikasi Konvensional Menjadi Tak Berguna.",
    },
    description: {
      en: "The project was sparked by a heartbreaking tragedy in Semarang: a university peer lost his life in a violent late-night street gang assault ('kreak'). In a sudden physical attack or medical collapse, victims experience acute cognitive overload and extreme motor impairment. Expecting a victim to unlock a smartphone, search through an app drawer, choose between 5 different emergency numbers, and type an address is a dangerous design flaw.\n\nFurthermore, Indonesia's emergency response is plagued by fragmented agency numbers: Police (110), Ambulance (118/119), Fire (113), and SAR (115). Victims rarely know which to call under stress, and cellular data frequently drops in alleyways. The core realization: in an emergency, the best UI is no UI, and the fastest help comes from nearby community first-responders rather than bureaucratic call centers.",
      id: "Proyek ini lahir dari tragedi memilukan di Semarang: seorang rekan mahasiswa kehilangan nyawanya akibat serangan kekerasan geng jalanan ('kreak') di malam hari. Dalam situasi serangan fisik atau kondisi kritis mendadak, korban mengalami kepanikan luar biasa dan penurunan motorik motorik halus. Mengharapkan korban membuka kunci layar, mencari aplikasi, memilih dari 5 nomor darurat berbeda, lalu mengetik alamat adalah kesalahan desain yang fatal.\n\nSelain itu, sistem darurat di Indonesia terfragmentasi ke berbagai nomor terpisah: Polisi (110), Ambulans (118/119), Pemadam (113), dan SAR (115). Korban jarang tahu nomor mana yang harus dihubungi saat panik, dan koneksi internet seringkali terputus di area terpencil. Kesimpulan mendasar kami: dalam keadaan darurat, UI terbaik adalah tanpa UI (*screen-less*), dan pertolongan tercepat datang dari relawan terdekat.",
    },
    challenges: [
      {
        en: "Extreme Cognitive & Motor Overload: Victims under physical threat cannot perform multi-step smartphone UI interactions.",
        id: "Beban Kognitif & Penurunan Motorik Akut: Korban di bawah ancaman fisik tidak sanggup menjalankan interaksi layar ponsel bertahap.",
      },
      {
        en: "Fragmented Emergency Infrastructure: Multiple disconnected hotlines create confusion and critical dispatch delays.",
        id: "Infrastruktur Darurat yang Terfragmentasi: Banyaknya nomor darurat terpisah membingungkan masyarakat dan memperlambat koordinasi.",
      },
      {
        en: "Cellular Connectivity Blank Spots: Packet internet often drops in dark alleys, failing cloud-only panic buttons.",
        id: "Area Blank Spot Sinyal Internet: Koneksi data sering terputus di gang sempit, menggagalkan tombol panik berbasis cloud murni.",
      },
      {
        en: "Bureaucratic Integration Bottleneck: Integrating directly with all municipal government agencies requires years of red tape.",
        id: "Hambatan Birokrasi Instansi: Menyatukan seluruh instansi pemerintah kota dalam satu sistem terpusat membutuhkan birokrasi bertahun-tahun.",
      },
    ],
    objectives: [
      {
        en: "Engineer a screen-less hardware trigger (5× power button clicks) that broadcasts distress without waking the phone screen.",
        id: "Merancang pemicu hardware tanpa layar (5× klik tombol power) yang menyiarkan sinyal bahaya tanpa menyalakan layar ponsel.",
      },
      {
        en: "Establish an automated SMS fallback protocol that transmits GPS telemetry even when cellular packet data is offline.",
        id: "Membangun protokol fallback SMS otomatis yang mengirimkan telemetri GPS saat koneksi paket data internet terputus.",
      },
      {
        en: "Bypass government call-center bureaucracy by routing live beacons to nearby verified community volunteer first responders.",
        id: "Mengatasi birokrasi call center pemerintah dengan merutekan sinyal darurat ke komunitas relawan terdekat yang terverifikasi.",
      },
      {
        en: "Validate response-time feasibility with community volunteers, ambulance crews, and university students.",
        id: "Memvalidasi kelayakan waktu tanggap bersama relawan kemanusiaan, kru ambulans, dan mahasiswa di lapangan.",
      },
    ],
  },

  metrics: [
    {
      value: "2×",
      label: { en: "National Competition Awards", id: "Juara Kompetisi Nasional" },
      description: {
        en: "Won 3rd Place Nationally at FOSTIFEST 2024 and 3rd Place Nationally at INVOFEST 2024 for pragmatic civic-tech innovation.",
        id: "Meraih Juara 3 Nasional di FOSTIFEST 2024 dan Juara 3 Nasional di INVOFEST 2024 atas inovasi civic-tech yang pragmatis.",
      },
      badge: { en: "National Podium", id: "Podium Nasional" },
    },
    {
      value: "13+",
      label: { en: "Multi-Stakeholder Validations", id: "Validasi Lintas Stakeholder" },
      description: {
        en: "Conducted interviews and user testing with community emergency volunteers, healthcare workers, and student commuters.",
        id: "Wawancara dan pengujian pengguna bersama relawan SAR/PMI, tenaga kesehatan, dan mahasiswa pengguna jalan malam.",
      },
      badge: { en: "Field Discovery", id: "Riset Lapangan" },
    },
    {
      value: "5× Click",
      label: { en: "Screen-less Hardware Trigger", id: "Pemicu Hardware Tanpa Layar" },
      description: {
        en: "Android Accessibility hardware key hook enables silent, blind distress activation directly from pockets.",
        id: "Hook tombol hardware via Android Accessibility memungkinkan aktivasi darurat senyap langsung dari dalam saku.",
      },
      badge: { en: "Hardware Hook", id: "Hook Hardware" },
    },
    {
      value: "Dual-Path",
      label: { en: "WebSockets + SMS Fallback", id: "WebSockets + Fallback SMS" },
      description: {
        en: "Primary high-speed WebSocket telemetry with automatic cellular SMS payload dispatch for zero signal dropouts.",
        id: "Telemetri utama via WebSocket berkecepatan tinggi dengan fallback otomatis SMS saat internet mati.",
      },
      badge: { en: "Resilient Comms", id: "Komunikasi Andal" },
    },
  ],

  comparisons: [
    {
      feature: { en: "Panic Activation Flow", id: "Alur Aktivasi Darurat" },
      before: {
        en: "Victim must unlock phone, find and open a panic app, choose emergency category, and press a large on-screen button.",
        id: "Korban harus membuka kunci layar, mencari dan membuka aplikasi darurat, memilih kategori, lalu menekan tombol di layar.",
      },
      after: {
        en: "Victim clicks the physical power button 5 times inside their pocket; distress signal fires silently without lighting the display.",
        id: "Korban menekan tombol power fisik 5 kali dari dalam saku; sinyal darurat terkirim senyap tanpa menyalakan layar ponsel.",
      },
      impact: {
        en: "Zero-Look Blind Activation",
        id: "Aktivasi Senyap Tanpa Perlu Melihat Layar",
      },
    },
    {
      feature: { en: "Dispatch Architecture", id: "Arsitektur Perutean Bantuan" },
      before: {
        en: "Centralized municipal call centers that require long multi-agency routing and identity verification queues.",
        id: "Call center pemerintah terpusat yang membutuhkan verifikasi instansi berbelit dan antrean telepon panjang.",
      },
      after: {
        en: "Crowdsourced volunteer network alerts verified community responders within 1–2 km radius for instant on-scene assistance.",
        id: "Jaringan relawan berbasis komunitas memberi sinyal ke responder terdekat dalam radius 1–2 km untuk pertolongan instan.",
      },
      impact: {
        en: "Bypasses Bureaucratic Delays",
        id: "Memotong Hambatan Birokrasi",
      },
    },
    {
      feature: { en: "Offline & Blank Spot Handling", id: "Ketahanan Area Blank Spot" },
      before: {
        en: "Cloud-only emergency apps fail silently when cellular 4G/5G internet drops in dark alleys or rural roads.",
        id: "Aplikasi darurat berbasis cloud gagal terkirim saat koneksi internet 4G/5G terputus di area gang atau jalan sepi.",
      },
      after: {
        en: "Dual-layer fallback: if WebSocket connection fails, coordinates are automatically packed into an encrypted SMS packet.",
        id: "Fallback dua lapis: jika koneksi WebSocket gagal, koordinat GPS otomatis dikemas dan dikirimkan via SMS terenkripsi.",
      },
      impact: {
        en: "100% Transmission Reliability",
        id: "Keandalan Pengiriman 100%",
      },
    },
    {
      feature: { en: "Emergency Coordination", id: "Koordinasi Antar Instansi" },
      before: {
        en: "Family contacts, police, and clinics notified through disconnected phone calls with no shared live telemetry.",
        id: "Keluarga, polisi, dan ambulans dihubungi lewat telepon terpisah tanpa data lokasi dan telemetri langsung.",
      },
      after: {
        en: "Single shared dispatch dashboard showing real-time GPS coordinates, victim battery level, and responder ETA.",
        id: "Dashboard terpadu yang menampilkan posisi GPS langsung korban, status baterai, dan estimasi waktu tiba relawan.",
      },
      impact: {
        en: "Synchronized Situational Awareness",
        id: "Visibilitas Situasi Terpadu",
      },
    },
  ],

  decision: {
    title: {
      en: "Strategic Pivot: Bypassing Bureaucracy Through Volunteer Crowdsourcing.",
      id: "Pivot Strategis: Menembus Hambatan Birokrasi Lewat Jaringan Relawan.",
    },
    description: {
      en: "Inspired by emergency response dramas, our original ambition was to build a single master government call center connecting police, firefighters, and hospitals into one API. However, after validating with municipal stakeholders and health workers, we realized inter-agency bureaucracy would take years to approve. As Product Strategist, I led the strategic pivot to crowdsourced community first-responders.",
      id: "Terinspirasi dari alur penanganan darurat, ambisi awal kami adalah membangun satu master call center pemerintah yang menghubungkan polisi, pemadam, dan rumah sakit dalam satu API. Namun setelah validasi bersama pihak terkait, birokrasi lintas instansi terbukti butuh waktu bertahun-tahun. Sebagai Product Strategist, saya memimpin pivot strategis menuju jaringan relawan komunitas tanggap darurat.",
    },
    options: [
      {
        label: "Option A",
        name: "Centralized Government Multi-Agency Integration",
        description: {
          en: "Waiting for municipal permits and attempting to force police, fire, and hospitals into a single centralized digital gateway.",
          id: "Menunggu izin birokrasi pemerintah kota dan memaksakan integrasi polisi, pemadam, dan RS ke satu gateway digital terpusat.",
        },
        status: {
          en: "Multi-Year Bureaucratic Stall",
          id: "Stagnasi Birokrasi Bertahun-tahun",
        },
        tradeoffs: [
          {
            en: "Requires formal cross-ministry legal MoUs that impossible to secure during an agile student capstone",
            id: "Membutuhkan MoU legalitas lintas kementerian yang mustahil diselesaikan dalam waktu cepat",
          },
          {
            en: "Leaves vulnerable citizens without a working emergency solution in the immediate term",
            id: "Membiarkan masyarakat tetap rentan tanpa solusi darurat yang siap pakai dalam waktu dekat",
          },
        ],
        selected: false,
      },
      {
        label: "Option B",
        name: "Community Volunteer First-Responder Model + SMS Fallback",
        description: {
          en: "Empower verified citizen volunteer groups (SAR, PMI, local safety patrols) as immediate first responders while broadcasting automated SMS fallbacks.",
          id: "Memberdayakan komunitas relawan terverifikasi (SAR, PMI, tim kamtibmas) sebagai responder pertama dengan cadangan SMS darurat.",
        },
        status: {
          en: "Rapid Deployment & Immediate Human Assistance",
          id: "Implementasi Cepat & Bantuan Manusia Instan",
        },
        tradeoffs: [
          {
            en: "Requires strict volunteer identity verification and community trust guardrails",
            id: "Membutuhkan verifikasi identitas relawan yang ketat dan sistem penjaga integritas",
          },
          {
            en: "Deploys immediately, bypasses municipal gatekeepers, and achieves 3–5 min local physical response times",
            id: "Dapat langsung diterapkan, bebas birokrasi instansi, dan mencapai respon fisik lokal 3–5 menit",
          },
        ],
        selected: true,
      },
    ],
    rationale: {
      en: "Option B was the most pragmatic, human-centered decision. By pairing a screen-less 5× power button hardware trigger with nearby volunteer dispatch, we created a functioning emergency lifeline that won 3rd Place Nationally at both FOSTIFEST and INVOFEST 2024.",
      id: "Opsi B adalah keputusan paling pragmatis dan berpusat pada manusia. Dengan memadukan pemicu hardware 5× tombol power tanpa layar bersama jaringan relawan terdekat, kami menciptakan sistem darurat yang terbukti meraih Juara 3 Nasional di FOSTIFEST dan INVOFEST 2024.",
    },
  },

  architecture: {
    title: {
      en: "Four-Tier Resilient Emergency Telemetry Architecture.",
      id: "Arsitektur Empat Lapisan Telemetri Tanggap Darurat.",
    },
    description: {
      en: "How OneCall bridges silent mobile OS hardware triggers, dual-channel socket/SMS transmission, real-time spatial volunteer dispatching, and secure incident audit logs.",
      id: "Bagaimana OneCall menghubungkan pemicu hardware senyap OS mobile, transmisi dua jalur socket/SMS, pemetaan spasial relawan, dan pencatatan audit insiden yang aman.",
    },
    layers: [
      {
        name: "Layer 1: Screen-less Trigger Client (@/apps/emergency-mobile)",
        role: { en: "Hardware Key Interceptor & Background GPS Acquisition", id: "Pencegat Tombol Hardware & Pengambilan GPS Latar Belakang" },
        technologies: ["Android Accessibility Service", "React Native", "FusedLocationProvider", "Encrypted Storage"],
        description: {
          en: "Intercepts rapid physical power button presses in the background, captures precision GPS coordinates, and fires silent distress beacons without waking the display.",
          id: "Mendeteksi ketukan cepat tombol power fisik di latar belakang, mengambil koordinat GPS akurat, dan mengirimkan sinyal darurat tanpa menyalakan layar.",
        },
        keyContracts: ["HardwarePanicEvent", "PrecisionLocationPayload", "DeviceTelemetryPacket"],
      },
      {
        name: "Layer 2: Dual-Channel Telemetry & SMS Fallback Gateway",
        role: { en: "WebSocket Broadcast & GSM SMS Cellular Routing", id: "Siaran WebSocket & Perutean Seluler SMS Cadangan" },
        technologies: ["Node.js", "WebSockets / Socket.io", "Twilio / GSM SMS Gateway", "Queue Worker"],
        description: {
          en: "Streams sub-second live location packets to active volunteer dispatchers. If WebSocket handshake drops, automatically transmits encrypted NMEA SMS packets.",
          id: "Menyiarkan pembaruan lokasi langsung sub-detik ke dispatcher relawan. Jika koneksi data terputus, sistem otomatis mengirimkan SMS NMEA terenkripsi.",
        },
        keyContracts: ["EmergencyBroadcastEvent", "SMSPayloadSchema", "ConnectionHeartbeat"],
      },
      {
        name: "Layer 3: Volunteer Spatial Dispatch Portal (@/apps/dispatcher-web)",
        role: { en: "Geofenced Proximity Alerts & Turn-by-Turn Routing", id: "Peringatan Radius Spasial & Rute Petunjuk Arah" },
        technologies: ["Next.js", "Tailwind CSS", "Leaflet / OSRM", "Real-Time Audio Alerts"],
        description: {
          en: "Interactive web dashboard for verified volunteer command centers, sorting active incidents by proximity and providing turn-by-turn routing to the victim.",
          id: "Dashboard web interaktif untuk posko relawan terverifikasi, mengurutkan insiden berdasarkan jarak terdekat dan menyediakan navigasi rute ke lokasi korban.",
        },
        keyContracts: ["VolunteerIncidentQueue", "RoutingDirectionPacket", "IncidentStatusDelta"],
      },
      {
        name: "Layer 4: Incident Ledger & Public Safety Audit Store (PostgreSQL)",
        role: { en: "Encrypted Evidence Vault & Spatial Incident Histories", id: "Penyimpanan Bukti Terenkripsi & Riwayat Spasial Insiden" },
        technologies: ["PostgreSQL", "PostGIS", "Prisma ORM", "AES-256 Field Encryption"],
        description: {
          en: "Persists incident timestamps, responder telemetry, audio snippets, and verified resolution logs with strict data retention and privacy policies.",
          id: "Menyimpan data waktu insiden, telemetri relawan, rekaman audio, dan log penyelesaian dengan enkripsi ketat untuk kebutuhan kepolisian.",
        },
        keyContracts: ["IncidentAuditEntity", "ResponderTelemetryRecord", "SpatialCrimeCluster"],
      },
    ],
  },

  solutions: {
    title: {
      en: "Core Modules & Technical Implementations.",
      id: "Modul Inti & Implementasi Rekayasa.",
    },
    description: {
      en: "Technical breakdown of the hardware, network, and human systems engineered to minimize time-to-assistance during critical emergencies.",
      id: "Rincian teknis dari sistem hardware, jaringan, dan relawan yang dirancang untuk meminimalkan jeda waktu bantuan saat kondisi kritis.",
    },
    items: [
      {
        title: {
          en: "Screen-less 5× Hardware Key Panic Trigger",
          id: "Pemicu Panik Hardware 5× Klik Tanpa Layar",
        },
        description: {
          en: "Using an Android Accessibility Service background hook, OneCall listens for 5 consecutive power button presses within 3 seconds. The trigger executes silently without activating the screen, vibration motor, or speaker, allowing victims to request help secretly during physical assaults.",
          id: "Memanfaatkan background hook Android Accessibility Service, OneCall mendeteksi 5 ketukan tombol power berturut-turut dalam 3 detik. Pemicu berjalan senyap tanpa menyalakan layar, getaran, atau suara, memungkinkan korban meminta bantuan diam-diam dari saku saat terjadi kekerasan.",
        },
        tags: ["BUILT", "Android Accessibility", "Hardware Trigger", "Screen-less UX"],
        colSpan: 7,
        highlights: [
          {
            en: "100% blind pocket activation without unlocking smartphone screen",
            id: "Aktivasi 100% tanpa melihat layar langsung dari dalam saku celana",
          },
          {
            en: "Zero sound or screen flare prevents escalating danger during physical attacks",
            id: "Tanpa suara atau kilatan layar untuk mencegah eskalasi bahaya dari pelaku",
          },
        ],
      },
      {
        title: {
          en: "Dual-Path Resilient SMS Fallback Gateway",
          id: "Gateway Cadangan SMS Dua Jalur yang Andal",
        },
        description: {
          en: "Recognizing that attackers often drag victims into cellular internet blank spots (alleys, underpasses), OneCall implements a dual-path engine. If packet internet (WebSocket) fails within 5 seconds, the mobile client compresses coordinates into a structured SMS and broadcasts to designated emergency gateways.",
          id: "Menyadari bahwa tindak kejahatan sering terjadi di area blank spot internet (gang gelap, bawah jembatan), OneCall menerapkan mesin dua jalur. Jika koneksi data (WebSocket) gagal dalam 5 detik, klien mobile mengompres koordinat GPS ke dalam SMS terstruktur ke nomor gateway darurat.",
        },
        tags: ["BUILT", "SMS Fallback", "Blank Spot Resilience", "Dual-Channel"],
        colSpan: 5,
        highlights: [
          {
            en: "Automatic failover to cellular SMS when 4G/5G data connection is severed",
            id: "Beralih otomatis ke SMS seluler saat koneksi internet 4G/5G terputus",
          },
          {
            en: "Encrypted payload contains latitude, longitude, timestamp, and battery percentage",
            id: "Payload terenkripsi memuat koordinat presisi, waktu, dan sisa daya baterai",
          },
        ],
      },
      {
        title: {
          en: "Volunteer First-Responder Proximity Dispatch Portal",
          id: "Portal Dispatch Spasial Relawan First-Responder",
        },
        description: {
          en: "An interactive Next.js command dashboard for verified community emergency teams (SAR, PMI, university security). Incoming alerts are rendered on a live Leaflet map with distance sorting, instant acoustic sirens, and one-click turn-by-turn navigation to the victim's live coordinates.",
          id: "Dashboard komando interaktif Next.js untuk tim relawan terverifikasi (SAR, PMI, satpam kampus). Panggilan darurat masuk dipetakan pada peta Leaflet realtime dengan pengurutan jarak terdekat, sirine akustik, dan navigasi rute 1-klik menuju posisi korban.",
        },
        tags: ["BUILT", "Spatial Dispatch", "Leaflet GIS", "Real-Time Portal"],
        colSpan: 6,
        highlights: [
          {
            en: "Instant spatial routing connects victims to help within a 1–2 km radius",
            id: "Perutean spasial instan menghubungkan korban dengan bantuan dalam radius 1–2 km",
          },
          {
            en: "Verified volunteer badges prevent vigilantism and protect victim safety",
            id: "Verifikasi badge relawan mencegah salah sasaran dan menjaga keamanan korban",
          },
        ],
      },
      {
        title: {
          en: "AI Voice Keyword & Geofenced High-Risk Safe Walk Mode",
          id: "Mode Pendampingan Aman & Deteksi Suara Darurat Berbasis AI",
        },
        description: {
          en: "[PROPOSED / CONCEPT] Future expansion adding edge on-device keyword recognition (e.g. scream detection, custom panic phrases) and an active 'Safe Walk' mode that automatically alerts nearby volunteers if a user's late-night transit deviates from historical safe corridors.",
          id: "[DIUSULKAN / KONSEP] Rencana ekspansi masa depan dengan deteksi kata kunci lokal (jeritan, frasa panik) dan mode 'Safe Walk' aktif yang otomatis memberi peringatan ke relawan jika rute perjalanan malam pengguna menyimpang dari koridor aman.",
        },
        tags: ["PROPOSED / CONCEPT", "Edge ML Audio", "Safe Walk", "Geofencing"],
        colSpan: 6,
        highlights: [
          {
            en: "Hands-free voice detection for scenarios where physical power button cannot be reached",
            id: "Deteksi suara hands-free saat korban tidak sempat menjangkau tombol fisik ponsel",
          },
          {
            en: "Proactive geofencing alerts for unlit alleyways and documented high-crime clusters",
            id: "Peringatan geofencing proaktif untuk area jalan gelap dan titik rawan kejahatan",
          },
        ],
      },
    ],
  },

  evidence: {
    title: {
      en: "System Proof & National Competition Artefacts.",
      id: "Bukti Sistem & Artefak Kompetisi Nasional.",
    },
    description: {
      en: "Visual proof of the OneCall emergency mobile application, volunteer proximity dispatch dashboard, and hardware trigger testing workflows.",
      id: "Bukti visual aplikasi mobile darurat OneCall, dashboard dispatch spasial relawan, dan alur pengujian pemicu hardware.",
    },
    image: "/images/ONECALL.svg",
    caption: {
      en: "Figure 1.0: OneCall ecosystem — screen-less panic trigger sequence, SMS fallback routing, volunteer proximity radar, and turn-by-turn rescue navigation.",
      id: "Gambar 1.0: Ekosistem OneCall — urutan pemicu panik tanpa layar, perutean fallback SMS, radar jarak relawan, dan navigasi pertolongan.",
    },
    assetNote: {
      en: "Asset Note: FOSTIFEST and INVOFEST 2024 national 3rd-place trophies, jury evaluation scorecards, and live Android Accessibility prototype demo video are archived in the engineering repository.",
      id: "Catatan Aset: Trofi Juara 3 Nasional FOSTIFEST & INVOFEST 2024, lembar penilaian dewan juri, dan video demonstrasi prototipe Android Accessibility diarsipkan dalam repositori rekayasa.",
    },
    insights: [
      {
        title: { en: "Hardware Trigger", id: "Pemicu Hardware" },
        value: "5× Clicks",
        description: {
          en: "Silent pocket activation designed for physical panic moments.",
          id: "Aktivasi saku senyap untuk situasi panik serangan fisik.",
        },
      },
      {
        title: { en: "Network Resilience", id: "Ketahanan Jaringan" },
        value: "WebSockets + SMS",
        description: {
          en: "Guaranteed transmission even in cellular internet blank spots.",
          id: "Jaminan pengiriman sinyal meski di area blank spot internet.",
        },
      },
      {
        title: { en: "National Recognition", id: "Pengakuan Nasional" },
        value: "2× 3rd Place",
        description: {
          en: "Awarded at FOSTIFEST 2024 and INVOFEST 2024 civic-tech finals.",
          id: "Meraih juara di final kompetisi FOSTIFEST & INVOFEST 2024.",
        },
      },
    ],
  },

  outcomes: {
    title: {
      en: "Verified Outcomes & Competition Accolades.",
      id: "Hasil Terverifikasi & Penghargaan Kompetisi.",
    },
    description: {
      en: "Measurable accomplishments, podium finishes in national tech competitions, and human-centered design breakthroughs.",
      id: "Pencapaian terukur, podium kompetisi teknologi nasional, dan terobosan desain berorientasi kemanusiaan.",
    },
    items: [
      {
        title: {
          en: "Dual 3rd Place National Podiums (FOSTIFEST & INVOFEST 2024)",
          id: "Dua Podium Juara 3 Nasional (FOSTIFEST & INVOFEST 2024)",
        },
        description: {
          en: "Awarded 3rd Place Nationally across two major Indonesian software competitions for our pragmatic, screen-less emergency architecture and volunteer crowdsourcing model.",
          id: "Meraih Juara 3 Nasional di dua kompetisi software bergengsi di Indonesia atas arsitektur darurat tanpa layar yang pragmatis dan model relawan komunitas.",
        },
        metricHighlight: "2× National 3rd Place",
      },
      {
        title: {
          en: "13+ Stakeholder & First-Responder Field Interviews",
          id: "13+ Wawancara Lapangan Bersama Relawan & Korban",
        },
        description: {
          en: "Conducted qualitative interviews with community emergency volunteers (PMI/SAR), ambulance drivers, and university students to validate emergency activation workflows.",
          id: "Melakukan wawancara kualitatif dengan relawan SAR/PMI, sopir ambulans, dan mahasiswa untuk memvalidasi alur aktivasi dan kepanikan nyata.",
        },
        metricHighlight: "13+ Field Validations",
      },
      {
        title: {
          en: "Verified Screen-less Activation & Zero-Light Secrecy",
          id: "Verifikasi Aktivasi Senyap Tanpa Menyalakan Layar",
        },
        description: {
          en: "Successfully implemented Android hardware key interception that captures GPS and dispatches distress packets while leaving the smartphone screen completely dark.",
          id: "Berhasil mengimplementasikan hook tombol fisik Android yang mengambil data GPS dan mengirim sinyal bahaya dengan layar ponsel tetap gelap.",
        },
        metricHighlight: "Silent Hardware Hook",
      },
      {
        title: {
          en: "Dual-Path Telemetry with Zero Signal Dropouts",
          id: "Telemetri Dua Jalur Tanpa Kehilangan Sinyal",
        },
        description: {
          en: "Bench-tested seamless failover from WebSocket internet data to cellular SMS gateways, ensuring emergency coordinates reach dispatchers even in zero-data alleys.",
          id: "Menguji transmisi failover mulus dari data internet WebSocket ke SMS seluler, memastikan koordinat darurat tetap sampai ke posko meski di gang tanpa sinyal 4G.",
        },
        metricHighlight: "Dual-Path Reliability",
      },
    ],
    testimonial: {
      quote: {
        en: "OneCall proved that the best design is often the most invisible one. Bypassing bloated UI screens in favor of an instinctive 5-click physical trigger and routing directly to community volunteers addresses the real-world reality of street emergencies.",
        id: "OneCall membuktikan bahwa desain terbaik adalah desain yang paling tidak terlihat. Menghilangkan kerumitan antarmuka layar demi pemicu fisik 5-ketuk yang instingtif dan menghubungkannya ke relawan terdekat menjawab realitas nyata bahaya di jalanan.",
      },
      author: "National CivicTech Competition Jury",
      role: {
        en: "FOSTIFEST & INVOFEST Review Panel",
        id: "Dewan Juri FOSTIFEST & INVOFEST",
      },
    },
  },

  reflection: {
    quote: {
      en: "In an emergency, the best UI is no UI, and the best system is the most pragmatic one.",
      id: "Dalam keadaan darurat, UI terbaik adalah tanpa UI, dan sistem terbaik adalah sistem yang paling pragmatis.",
    },
    description: {
      en: "OneCall taught me that extreme constraints produce the purest product design. When building for life-or-death situations, you cannot rely on user attention, smooth animations, or reliable 5G connections. True product strategy means eliminating every unnecessary pixel and bureaucratic dependency until only the fastest, most reliable path to human assistance remains.",
      id: "OneCall mengajarkan saya bahwa batasan paling ekstrem menghasilkan desain produk yang paling murni. Saat merancang untuk situasi hidup dan mati, kita tidak bisa mengandalkan perhatian pengguna, animasi mewah, atau sinyal 5G yang stabil. Strategi produk sejati adalah memangkas setiap piksel yang tidak perlu dan menghilangkan ketergantungan birokrasi hingga hanya tersisa jalur tercepat dan paling andal menuju bantuan manusia nyata.",
    },
    takeaways: [
      {
        en: "Design for panic, not ideal scenarios: High-stress users suffer severe motor and cognitive degradation; UI must require zero visual attention.",
        id: "Rancang untuk kondisi panik, bukan skenario ideal: Pengguna dalam tekanan ekstrem mengalami penurunan kognitif; sistem harus bekerja tanpa perlu dilihat.",
      },
      {
        en: "Pragmatism over perfection: Partnering with agile community volunteers delivered immediate rescue speed that bureaucratic government systems couldn't match.",
        id: "Pragmatisme di atas kesempurnaan: Berkolaborasi dengan relawan komunitas menghadirkan kecepatan pertolongan nyata yang sulit dicapai birokrasi kaku.",
      },
      {
        en: "Always build resilient offline fallbacks: Life-critical applications must never depend exclusively on single points of failure like cellular packet internet.",
        id: "Selalu sediakan cadangan offline yang andal: Aplikasi darurat tidak boleh bergantung hanya pada satu titik gagal seperti koneksi paket data.",
      },
    ],
  },
};