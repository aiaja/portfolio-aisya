import { Translatable } from "@/types";

export type GalleryDeviceType = "desktop" | "mobile";
export type GalleryMediaType = "image" | "video";

export interface GalleryItem {
  id: string;
  projectSlug: string;
  projectName: string;
  device: GalleryDeviceType;
  media: GalleryMediaType;
  src: string;
  poster?: string;
  alt: Translatable;
  colors?: [string, string];
}

export interface GalleryHeader {
  titleRegular: Translatable;
  titleAccent: Translatable;
}

export const galleryHeader: GalleryHeader = {
  titleRegular: {
    id: "Karya",
    en: "More"
  },
  titleAccent: {
    id: "Lainnya.",
    en: "Work."
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "fik-apps-01",
    projectSlug: "fik-apps",
    projectName: "FIK Apps",
    device: "desktop",
    media: "image",
    src: "/images/FIK APPS.svg",
    alt: {
      id: "FIK Apps — Tampilan dashboard admin fakultas",
      en: "FIK Apps — Faculty administration dashboard view"
    },
    colors: ["#eae7e2", "#DCC4D8"]
  },
  {
    id: "fik-apps-02",
    projectSlug: "fik-apps",
    projectName: "FIK Apps",
    device: "mobile",
    media: "video",
    src: "",
    poster: "/images/FIK APPS.svg",
    alt: {
      id: "FIK Apps — Tampilan portal mahasiswa mobile",
      en: "FIK Apps — Student mobile portal view"
    },
    colors: ["#1E2A4A", "#C9A6C4"]
  },
  {
    id: "fleet-mgmt-01",
    projectSlug: "fleet-management",
    projectName: "Fleet Mgmt",
    device: "desktop",
    media: "video",
    src: "",
    poster: "/images/FLEET MANAGEMENT SYSTEM.svg",
    alt: {
      id: "Fleet Management — Dashboard telematika IoT & rute",
      en: "Fleet Management — IoT telematics & routing dashboard"
    },
    colors: ["#eae7e2", "#2e72ef"]
  },
  {
    id: "pilmo-01",
    projectSlug: "pilmo",
    projectName: "PILMO",
    device: "mobile",
    media: "image",
    src: "/images/PILMO.svg",
    alt: {
      id: "PILMO — Aplikasi pelacak kepatuhan obat & pendukung pasien",
      en: "PILMO — Medication adherence & patient support mobile app"
    },
    colors: ["#f4efe9", "#5CD68A"]
  },
  {
    id: "aifa-01",
    projectSlug: "aifa",
    projectName: "AIFA",
    device: "desktop",
    media: "image",
    src: "/images/AIFA.svg",
    alt: {
      id: "AIFA — Asisten keuangan AI rekonsiliasi faktur",
      en: "AIFA — AI financial assistant invoice reconciliation dashboard"
    },
    colors: ["#eae7e2", "#F0446E"]
  },
  {
    id: "onecall-01",
    projectSlug: "onecall",
    projectName: "OneCall",
    device: "mobile",
    media: "image",
    src: "/images/ONECALL.svg",
    alt: {
      id: "OneCall — Aplikasi respon darurat cepat & fallback SMS",
      en: "OneCall — Quick emergency response & SMS fallback app"
    },
    colors: ["#1a1917", "#F0446E"]
  },
  {
    id: "poliklinik-01",
    projectSlug: "poliklinik",
    projectName: "Poliklinik",
    device: "desktop",
    media: "image",
    src: "/images/POLIKLINIK.svg",
    alt: {
      id: "Poliklinik — Portal rekam medis & administrasi pasien",
      en: "Poliklinik — Medical records & patient administration portal"
    },
    colors: ["#eae7e2", "#D4A937"]
  },
  {
    id: "fleet-mgmt-02",
    projectSlug: "fleet-management",
    projectName: "Fleet Mgmt",
    device: "mobile",
    media: "image",
    src: "/images/FLEET MANAGEMENT SYSTEM.svg",
    alt: {
      id: "Fleet Management — Aplikasi mobile pengemudi & inspeksi armada",
      en: "Fleet Management — Driver & fleet inspection mobile app"
    },
    colors: ["#1E2A4A", "#61c454"]
  },
  {
    id: "dinacom-01",
    projectSlug: "dinacom-2025",
    projectName: "DINACOM",
    device: "desktop",
    media: "image",
    src: "/images/DINACOM.svg",
    alt: {
      id: "DINACOM 2025 — Portal pendaftaran & manajemen kompetisi nasional",
      en: "DINACOM 2025 — National competition registration portal"
    },
    colors: ["#eae7e2", "#764ABC"]
  },
  {
    id: "pilmo-02",
    projectSlug: "pilmo",
    projectName: "PILMO",
    device: "desktop",
    media: "video",
    src: "",
    poster: "/images/PILMO.svg",
    alt: {
      id: "PILMO — Dashboard monitoring tenaga kesehatan",
      en: "PILMO — Healthcare provider monitoring web dashboard"
    },
    colors: ["#eae7e2", "#5CD68A"]
  },
  {
    id: "aifa-02",
    projectSlug: "aifa",
    projectName: "AIFA",
    device: "mobile",
    media: "image",
    src: "/images/AIFA.svg",
    alt: {
      id: "AIFA — Mobile scanner faktur & analitik UMKM",
      en: "AIFA — Mobile invoice scanner & SME analytics"
    },
    colors: ["#111111", "#F0446E"]
  },
  {
    id: "onecall-02",
    projectSlug: "onecall",
    projectName: "OneCall",
    device: "desktop",
    media: "image",
    src: "/images/ONECALL.svg",
    alt: {
      id: "OneCall — Dispatcher monitoring & pusat komando",
      en: "OneCall — Dispatcher monitoring & emergency command center"
    },
    colors: ["#eae7e2", "#F0446E"]
  }
];
