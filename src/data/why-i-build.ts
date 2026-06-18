import { Translatable } from "@/types";

export interface WhyIBuildStory {
  tag: Translatable;
  title: string;
  problem: Translatable;
  quote: Translatable;
}

export const whyIBuildStories: WhyIBuildStory[] = [
  {
    tag: { id: "Kesehatan", en: "Health" },
    title: "PILMO",
    problem: {
      id: "Seorang nenek terus lupa meminum obat TBC-nya. Bukan karena kecerobohan — tetapi karena sistem pemantauan menyerahkan semua beban kepadanya sendirian.",
      en: "A grandma kept forgetting her TB medication. Not from carelessness — but because the monitoring system put all the burden on her alone."
    },
    quote: {
      id: "Kami tidak butuh aplikasi pengingat. Kami butuh sistem pendukung.",
      en: "We didn't need a reminder app. We needed a support system."
    }
  },
  {
    tag: { id: "Keselamatan", en: "Safety" },
    title: "OneCall",
    problem: {
      id: "Seorang relawan kehilangan temannya karena tindak kriminal karena tidak ada orang terdekat yang bisa dihubungi tepat waktu. Respon darurat butuh pemicu yang lebih cerdas dan cepat.",
      en: "A volunteer lost a friend to crime because no one nearby could be reached in time. Emergency response needed a smarter, faster trigger."
    },
    quote: {
      id: "UI terbaik adalah tanpa UI — ketika detik sangat berharga, setiap ketukan layar terasa sangat mahal.",
      en: "The best UI is no UI — when seconds count, every tap costs too much."
    }
  },
  {
    tag: { id: "Infrastruktur", en: "Infrastructure" },
    title: "FIK Apps",
    problem: {
      id: "Sistem akademik warisan yang dibangun untuk satu jurusan kini menjalankan fakultas lengkap dengan 6.000 mahasiswa. Sistem itu tumbang di bawah beban tersebut.",
      en: "A legacy academic system built for one department was now running a full faculty of 6,000 students. It was buckling under the weight."
    },
    quote: {
      id: "Skalabilitas bukan tentang menambah fitur. Ini tentang menghapus apa yang rusak.",
      en: "Scaling isn't about adding features. It's about removing what breaks."
    }
  }
];
