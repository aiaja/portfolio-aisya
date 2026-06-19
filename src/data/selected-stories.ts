import { Translatable } from "@/types";

export interface Metric {
  value: string;
  label: Translatable;
}

export interface Story {
  tag: Translatable;
  title: string;
  subtitle: Translatable;
  metrics: Metric[];
  slug: string;
}

export const selectedStories: Story[] = [
  {
    tag: { id: "SaaS Akademik · Lead Frontend Engineer", en: "Academic SaaS · Lead Frontend Engineer" },
    title: "FIK Apps",
    subtitle: { id: "Menskalakan Platform Akademik Tingkat Fakultas tanpa Merusak apa yang Sudah Bekerja", en: "Scaling a faculty-wide platform without breaking what already worked." },
    metrics: [
      { value: "6,000+", label: { id: "Mahasiswa", en: "Students" } },
      { value: "178", label: { id: "Dosen", en: "Lecturers" } },
      { value: "190→25", label: { id: "Komponen", en: "Components" } },
      { value: "2→4", label: { id: "Peran RBAC", en: "RBAC Roles" } }
    ],
    slug: "fik-apps"
  },
  {
    tag: { id: "Kesehatan Publik · Product Manager", en: "Public Health · Product Manager" },
    title: "PILMO",
    subtitle: { id: "Dari Aplikasi Pengingat Menjadi Sistem Pendukung", en: "From Reminder App to Support System" },
    metrics: [
      { value: "18", label: { id: "Wawancara", en: "Interviews" } },
      { value: "3", label: { id: "Grup Pengguna", en: "User Groups" } },
      { value: "1", label: { id: "Pivot Tervalidasi", en: "Validated Pivot" } },
      { value: "Top 8", label: "HOLOGY 8.0" }
    ],
    slug: "pilmo"
  },
  {
    tag: { id: "SaaS Logistik · Product Manager & Frontend", en: "Logistics SaaS · Product Manager & Frontend" },
    title: "Fleet Management System",
    subtitle: { id: "Memimpin Melalui Ketidakpastian Produk", en: "Leading Through Product Uncertainty" },
    metrics: [
      { value: "7", label: { id: "Anggota Tim", en: "Team Members" } },
      { value: "Mining → Logistics", label: "Pivot" },
      { value: "IoT", label: "Integration" },
      { value: "OCR", label: "Audit Trail" }
    ],
    slug: "fleet-management"
  }
];
