import { ProjectSnapshot } from "@/types";

export const projectSnapshots: Record<string, ProjectSnapshot> = {
  "pos-website": {
    slug: "pos-website",
    hero: {
      title: "POS Website",
      tagline: {
        id: "Sistem Point of Sales (POS) berbasis web yang tangguh untuk mengotomatiskan manajemen inventaris dan pelaporan transaksi.",
        en: "A robust web-based Point of Sales (POS) system to automate inventory management and transaction reporting."
      },
      role: { id: "Fullstack Developer", en: "Fullstack Developer" },
      duration: { id: "2025", en: "2025" },
      image: "/images/ecopos.png"
    },
    overview: {
      id: "POS Website adalah aplikasi Point of Sales berbasis web yang dirancang untuk memfasilitasi bisnis retail dalam mencatat transaksi harian, mengelola stok inventaris, serta menghasilkan laporan penjualan bulanan. Dengan otomatisasi ini, risiko selisih stok dan kesalahan pencatatan manual dapat sangat diminimalisir.",
      en: "POS Website is a web-based Point of Sales application designed to facilitate retail businesses in recording daily transactions, managing stock inventory, and generating monthly sales reports. With this automation, the risk of stock discrepancies and manual recording errors can be greatly minimized."
    },
    contributions: [
      {
        id: "Mengembangkan modul CRUD untuk manajemen produk, kategori, dan stok secara real-time.",
        en: "Developed CRUD modules for real-time product, category, and stock management."
      },
      {
        id: "Mengintegrasikan sistem DomPDF untuk ekspor laporan penjualan bulanan otomatis guna audit internal.",
        en: "Integrated DomPDF system for automatic monthly sales report export for internal audit."
      },
      {
        id: "Mengimplementasikan keamanan autentikasi pengguna dan hak akses terperinci untuk level admin dan kasir.",
        en: "Implemented user authentication security and granular access rights for admin and cashier levels."
      }
    ],
    tech: ["CodeIgniter 4", "MySQL", "Bootstrap", "PHPUnit"],
    reflection: {
      id: "Proyek ini memperdalam pemahaman saya tentang arsitektur MVC di CodeIgniter dan pentingnya normalisasi database untuk menjaga integritas data transaksi tingkat tinggi.",
      en: "This project deepened my understanding of MVC architecture in CodeIgniter and the importance of database normalization to maintain high-level transaction data integrity."
    }
  },
  "summarease-desktop": {
    slug: "summarease-desktop",
    hero: {
      title: "SummarEase Desktop",
      tagline: {
        id: "Aplikasi desktop yang menyederhanakan konsumsi informasi melalui ringkasan teks otomatis berbasis AI.",
        en: "A desktop application that simplifies information consumption through AI-driven automatic text summarization."
      },
      role: { id: "Java Developer", en: "Java Developer" },
      duration: { id: "2025", en: "2025" },
      image: undefined
    },
    overview: {
      id: "SummarEase Desktop adalah aplikasi desktop berbasis JavaFX yang mempermudah ekstraksi informasi penting dari dokumen teks panjang. Menggunakan algoritma pemrosesan bahasa alami (NLP), aplikasi ini mampu menghasilkan ringkasan yang akurat dan padat secara lokal.",
      en: "SummarEase Desktop is a JavaFX-based desktop application that simplifies the extraction of critical information from long text documents. Utilizing natural language processing (NLP) algorithms, the application generates accurate and concise summaries locally."
    },
    contributions: [
      {
        id: "Membangun antarmuka desktop yang interaktif dan modern menggunakan JavaFX dan kustomisasi CSS.",
        en: "Built an interactive and modern desktop interface using JavaFX and custom CSS styling."
      },
      {
        id: "Mengintegrasikan Apache PDFBox untuk memproses ekstraksi teks secara efisien dari berbagai format file PDF.",
        en: "Integrated Apache PDFBox to efficiently process text extraction from various PDF file formats."
      },
      {
        id: "Menerapkan arsitektur Maven untuk manajemen dependensi pihak ketiga dan standarisasi build lifecycle.",
        en: "Implemented Maven architecture for third-party dependency management and standardization of the build lifecycle."
      }
    ],
    tech: ["JavaFX", "Java 21", "Apache PDFBox", "Maven"],
    reflection: {
      id: "Proyek ini memberikan pelajaran berharga dalam mengoptimalkan performa I/O file dan manajemen memori di Java saat memproses dokumen teks berukuran besar.",
      en: "This project provided valuable lessons in optimizing file I/O performance and memory management in Java when processing large text documents."
    }
  },
  "dinacom-2025": {
    slug: "dinacom-2025",
    hero: {
      title: "DINACOM 2025",
      tagline: {
        id: "Platform pendaftaran kompetisi nasional terintegrasi dengan sistem manajemen peserta yang masif.",
        en: "National competition registration platform integrated with a massive participant management system."
      },
      role: { id: "Project Manager & Frontend", en: "Project Manager & Frontend" },
      duration: { id: "2024", en: "2024" },
      image: "/images/DINACOM.svg"
    },
    overview: {
      id: "DINACOM 2025 adalah platform web untuk pendaftaran kompetisi IT nasional tingkat mahasiswa. Platform ini memfasilitasi verifikasi peserta, unggah berkas kompetisi, dan manajemen alur kerja juri secara terpusat untuk ratusan pendaftar dari berbagai universitas.",
      en: "DINACOM 2025 is a web platform for national student-level IT competition registration. The platform facilitates participant verification, competition file uploads, and centralized judge workflow management for hundreds of registrants from various universities."
    },
    contributions: [
      {
        id: "Memimpin tim pengembang sebagai Project Manager, mengoordinasikan pembagian tugas harian dan timeline sprint.",
        en: "Led the developer team as Project Manager, coordinating daily task allocation and sprint timelines."
      },
      {
        id: "Membangun antarmuka frontend yang responsif dan berkinerja tinggi menggunakan ReactJS dan Tailwind CSS.",
        en: "Built a responsive and high-performance frontend interface using ReactJS and Tailwind CSS."
      },
      {
        id: "Mengembangkan validasi formulir sisi klien yang ketat untuk mencegah kesalahan entri data dan duplikasi berkas pendaftaran.",
        en: "Developed strict client-side form validation to prevent data entry errors and registration file duplication."
      }
    ],
    tech: ["ReactJS", "Tailwind CSS", "Product Management"],
    reflection: {
      id: "Mengelola ekspektasi pemangku kepentingan dan menyelaraskan komunikasi antara tim teknis dan non-teknis adalah kunci sukses peluncuran platform ini tepat waktu.",
      en: "Managing stakeholder expectations and aligning communication between technical and non-technical teams was key to the successful on-time launch of this platform."
    }
  }
};
