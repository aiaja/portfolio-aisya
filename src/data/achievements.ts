import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    slug: "arkavidia-9-itb",
    title: { id: "Finalis Nasional", en: "National Finalist" },
    event: "Hackvidia 2025 — Arkavidia 9.0",
    organizer: "HMIF ITB",
    year: "2025",
    award: { id: "Top 10 Finalis", en: "Top 10 Finalist" },
    content: {
      insight: {
        summary: {
          id: "UMKM tidak butuh lebih banyak aplikasi; mereka butuh aplikasi yang saling bicara. Fragmentasi alat digital justru menciptakan beban kognitif baru.",
          en: "SMEs don't need more apps; they need apps that talk to each other. Digital tool fragmentation creates a new cognitive burden.",
        },
        details: [
          { id: "SME Finance Officer sering kewalahan melakukan 'Double Entry' data di berbagai platform.", en: "SME Finance Officers are often overwhelmed by 'Double Entry' data tasks across multiple platforms." },
          { id: "Fragmentasi alat digital (Excel, Word, Kalender) menghambat visibilitas keuangan real-time.", en: "Fragmentation of digital tools (Excel, Word, Calendars) hinders real-time financial visibility." },
          { id: "30% dari 64 juta UMKM di Indonesia siap membayar untuk solusi digital terintegrasi.", en: "30% of 64 million SMEs in Indonesia are ready to pay for integrated digital solutions." },
        ],
      },
      validation: [
        {
          title: { id: "Riset Pasar Strategis", en: "Market Research Strategy" },
          description: {
            id: "Menganalisis Laporan Digitalisasi Mikro & UMKM BRI untuk memvalidasi TAM/SAM/SOM dan kesiapan pasar terhadap asisten AI.",
            en: "Analyzed the BRI Micro & SME Digitalization Report to validate TAM/SAM/SOM and market readiness for AI assistants.",
          },
        },
        {
          title: { id: "Validasi Alur Kerja Terpadu", en: "Integrated Workflow Validation" },
          description: {
            id: "Menguji integrasi alur kerja dari pemindaian struk hingga pembuatan proposal otomatis untuk membuktikan efisiensi operasional.",
            en: "Tested the integration of workflows from receipt scanning to automated proposal generation to prove operational efficiency.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Mempresentasikan AIFA sebagai 'Operational Intelligence Platform' yang tumbuh bersama bisnis melalui model modular yang adaptif.",
          en: "Presented AIFA as an 'Operational Intelligence Platform' that grows with the business through an adaptive modular model.",
        },
        metrics: [
          { label: { id: "Peringkat", en: "Rank" }, value: "Top 10" },
          { label: { id: "Potensi Pasar", en: "SOM" }, value: "$14.5K" },
        ],
      },
    },
  },
  {
    slug: "hology-8-ub",
    title: { id: "Finalis Top 8", en: "Top 8 Finalist" },
    event: "HOLOGY 8.0 Software Development",
    organizer: "Universitas Brawijaya",
    year: "2025",
    award: { id: "Finalis Nasional", en: "National Finalist" },
    content: {
      insight: {
        summary: {
          id: "Ketidakpatuhan minum obat pada pasien TBC bukan karena kelalaian, melainkan 'Cognitive Overload' dan isolasi sosial akibat stigma.",
          en: "Non-adherence in TB patients is not negligence, but 'Cognitive Overload' and social isolation caused by disease stigma.",
        },
        details: [
          { id: "Pasien TBC harus mengonsumsi 4-6 pil setiap hari selama 6-9 bulan tanpa putus.", en: "TB patients must consume 4-6 pills daily for 6-9 months without interruption." },
          { id: "Efek samping obat yang berat sering memicu keputusasaan di bulan ke-2 pengobatan.", en: "Severe medication side effects often trigger despair by the 2nd month of treatment." },
          { id: "Pengawas Menelan Obat (PMO) dari keluarga sering mengalami 'caregiver burnout'.", en: "Family Medication Supervisors (PMO) often experience severe caregiver burnout." },
        ],
      },
      validation: [
        {
          title: { id: "Studi Etnografi Pasien", en: "Patient Ethnography Study" },
          description: {
            id: "Wawancara mendalam dengan pasien TBC dan dokter spesialis paru untuk memetakan titik kritis keputusasaan dalam siklus pengobatan.",
            en: "In-depth interviews with TB patients and pulmonologists to map critical despair points in the treatment cycle.",
          },
        },
        {
          title: { id: "Validasi Fitur AI Pendukung", en: "Supportive AI Validation" },
          description: {
            id: "Merancang chatbot pendamping yang memberikan empati kognitif dan pelacakan efek samping harian secara non-intrusif.",
            en: "Designed a companion chatbot providing cognitive empathy and non-intrusive daily side-effect tracking.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Menampilkan PILMO sebagai ekosistem pendukung kepatuhan berobat yang menghubungkan pasien, PMO, dan faskes secara harmonis.",
          en: "Showcased PILMO as a medication adherence support ecosystem harmoniously connecting patients, supervisors, and clinics.",
        },
        metrics: [
          { label: { id: "Peringkat", en: "Rank" }, value: "Top 8" },
          { label: { id: "Tingkat Retensi", en: "Retention" }, value: "85%" },
        ],
      },
    },
  },
  {
    slug: "fostifest-2024",
    title: { id: "Juara 3", en: "3rd Place Winner" },
    event: "FOSTIFEST 2024 UI/UX Competition",
    organizer: "Universitas Muhammadiyah Surakarta",
    year: "2024",
    award: { id: "Juara 3 Nasional", en: "3rd National Winner" },
    content: {
      insight: {
        summary: {
          id: "Dalam situasi darurat, setiap detik berharga. Antarmuka sentuh tradisional gagal ketika pengguna berada dalam kondisi panik ekstrem.",
          en: "In emergency situations, every second counts. Traditional touch interfaces fail when users are in extreme panic states.",
        },
        details: [
          { id: "Membuka kunci HP dan mencari aplikasi darurat membutuhkan waktu rata-rata 12-25 detik.", en: "Unlocking phones and locating emergency apps takes an average of 12-25 seconds." },
          { id: "Korban kejahatan atau kecelakaan sering tidak dapat melihat layar ponsel saat membutuhkan bantuan.", en: "Victims of crime or accidents often cannot look at phone screens when in need of help." },
          { id: "Jaringan internet sering tidak stabil di lokasi bencana atau kecelakaan.", en: "Mobile internet is frequently unstable at accident or disaster locations." },
        ],
      },
      validation: [
        {
          title: { id: "Desain Interaksi Hardware Pemicu", en: "Hardware Trigger Interaction Design" },
          description: {
            id: "Menerapkan pemicu tombol daya 5x untuk aktivasi darurat tanpa membuka layar, mengirimkan koordinat GPS instan.",
            en: "Implemented 5x power button hardware trigger for emergency activation without unlocking screen, sending instant GPS coordinates.",
          },
        },
        {
          title: { id: "Arsitektur Fallback Offline (SMS)", en: "Offline SMS Fallback Architecture" },
          description: {
            id: "Merancang protokol darurat yang beralih otomatis ke SMS gateway terenkripsi ketika koneksi data internet terputus.",
            en: "Designed emergency protocol automatically switching to encrypted SMS gateway when data connection drops.",
          },
        },
      ],
      pitch: {
        summary: {
          id: "Mendemonstrasikan OneCall sebagai solusi keselamatan personal tanpa hambatan yang bekerja dalam kondisi terburuk.",
          en: "Demonstrated OneCall as a frictionless personal safety solution engineered to perform under worst-case scenarios.",
        },
        metrics: [
          { label: { id: "Juara", en: "Award" }, value: "Juara 3" },
          { label: { id: "Waktu Respon", en: "Response Time" }, value: "<3 Detik" },
        ],
      },
    },
  },
];
