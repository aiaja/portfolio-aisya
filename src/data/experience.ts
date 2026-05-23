import { Experience } from "@/types";

export interface ExperienceWithPoints extends Experience {
  points?: string[];
}

export const experiences: ExperienceWithPoints[] = [
  {
    company: "Bengkel Koding",
    companyUrl: "https://bengkelkoding.dinus.ac.id/",
    role: "Frontend Developer",
    type: "Internship",
    period: "Aug 2024 - Present",
    points: [
      "Membangun antarmuka web yang modern dan responsif menggunakan stack Next.js dan TypeScript untuk proyek dunia nyata.",
      "Berkolaborasi dengan tim untuk mengimplementasikan desain UI/UX menjadi komponen kode yang fungsional dan performan."
    ]
  },
  {
    company: "Bengkel Koding",
    companyUrl: "https://bengkelkoding.dinus.ac.id/",
    role: "Teaching Assistant",
    type: "Internship",
    period: "Aug 2024 - Present",
    points: [
      "Membimbing mahasiswa dalam memahami konsep dasar hingga lanjutan pengembangan web frontend.",
      "Membantu dalam evaluasi tugas dan memberikan feedback teknis untuk meningkatkan kualitas kode mahasiswa."
    ]
  },
  {
    company: "Dian Nuswantoro Computer Club",
    companyUrl: "https://dncc.dinus.ac.id/",
    role: "Vice President",
    type: "Organization",
    period: "Aug 2025 - Present",
    points: [
      "Memimpin tim pengembang dan antusias teknologi yang beragam untuk mendorong budaya inovasi di dalam organisasi.",
      "Mengimbangkan strategi tingkat tinggi dengan eksekusi teknis langsung untuk pengembangan aset digital organisasi."
    ]
  },
  {
    company: "Dian Nuswantoro Computer Club",
    companyUrl: "https://dncc.dinus.ac.id/",
    role: "Website Division Coordinator",
    type: "Organization",
    period: "Aug 2024 - Aug 2025",
    points: [
      "Mengkoordinasikan pengembangan dan pemeliharaan website resmi organisasi serta platform internal lainnya.",
      "Bertanggung jawab atas manajemen tim pengembang web dan memastikan pengiriman fitur tepat waktu."
    ]
  },
];
