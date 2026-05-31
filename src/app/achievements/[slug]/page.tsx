import { achievements } from "@/data/achievements";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import AchievementDetailContent from "@/components/achievement/AchievementDetailContent";

interface AchievementPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AchievementPageProps): Promise<Metadata> {
  const { slug } = await params;
  const achievement = achievements.find((a) => a.slug === slug);

  if (!achievement) return { title: "Achievement Not Found" };

  return {
    title: `${achievement.event} — Aisya Nur Syakbani`,
    description: typeof achievement.content.insight.summary === "string" 
      ? achievement.content.insight.summary 
      : achievement.content.insight.summary.en,
  };
}

export default async function AchievementPage({ params }: AchievementPageProps) {
  const { slug } = await params;
  const achievement = achievements.find((a) => a.slug === slug);

  if (!achievement) notFound();

  return (
    <main className="min-h-screen bg-[#FCFBF4] text-charcoal pb-24">
      <AchievementDetailContent achievement={achievement} />
    </main>
  );
}

export async function generateStaticParams() {
  return achievements.map((a) => ({
    slug: a.slug,
  }));
}
