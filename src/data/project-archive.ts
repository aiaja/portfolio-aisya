import { Translatable } from "@/types";

export interface ArchiveItem {
  name: string;
  desc: Translatable;
}

export const archiveItems: ArchiveItem[] = [
  {
    name: "AIFA",
    desc: {
      id: "Asisten keuangan bertenaga AI untuk rekonsiliasi faktur UMKM. Top 10, Hackvidia 2025.",
      en: "AI-powered finance assistant for SME invoice reconciliation. Top 10, Hackvidia 2025."
    }
  },
  {
    name: "OneCall",
    desc: {
      id: "Respon darurat melalui pemicu tombol daya & fallback SMS. Juara 3, 2 kompetisi nasional.",
      en: "Emergency response via power-button trigger & SMS fallback. 3rd place, 2 national competitions."
    }
  },
  {
    name: "Poliklinik",
    desc: {
      id: "Sistem manajemen klinik dengan auth, admin pasien, dan pengujian otomatis. Laravel fullstack.",
      en: "Clinic management system with auth, patient admin, and automated testing. Laravel fullstack."
    }
  }
];
