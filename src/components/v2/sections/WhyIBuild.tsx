"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const stories = [
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

const WhyIBuild = () => {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-20 border-t border-border">
      <div className="mb-14">
        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Mengapa Saya Membangun", en: "Why I Build" })}
        </span>
        <h2 className="font-syne text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text mb-4">
          {t({ id: "Masalah berbeda.", en: "Different problems." })}<br />
          {t({ id: "Rasa ingin tahu yang sama.", en: "Same curiosity." })}
        </h2>
        <p className="text-muted text-lg italic">
          {t({ id: "Mengapa ini terjadi? Dan bagaimana teknologi bisa membantu?", en: "Why does this happen? And how can technology help?" })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-surface border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="inline-block text-[11px] font-medium tracking-[0.08em] uppercase text-primary bg-primary-10 px-2 py-0.5 rounded-full mb-4">
              {t(story.tag)}
            </span>
            
            <h3 className="font-syne text-lg font-bold text-text mb-3">
              {story.title}
            </h3>
            
            <p className="text-muted text-sm leading-relaxed mb-5">
              {t(story.problem)}
            </p>
            
            <blockquote className="text-text text-sm italic leading-relaxed pl-3 border-l-2 border-primary">
              "{t(story.quote)}"
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyIBuild;
