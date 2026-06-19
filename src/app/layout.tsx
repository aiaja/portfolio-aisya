import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import PageTransition from "@/components/v3/ui/PageTransition";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 display: "swap",
});

export const metadata: Metadata = {
 metadataBase: new URL("https://portfolio-aisya.vercel.app"),
 title: {
  default: "Aisya Nur Syakbani — Frontend Engineer & Product Strategist",
  template: "%s | Aisya Nur Syakbani",
 },
 description:
  "Bridging human empathy with strict engineering standards. Portfolio of Aisya Nur Syakbani, Lead Frontend Engineer & Product Strategist.",
 keywords: [
  "Frontend Engineer",
  "Product Strategist",
  "Next.js",
  "React",
  "Portfolio",
  "Aisya Nur Syakbani",
 ],
 authors: [{ name: "Aisya Nur Syakbani" }],
 openGraph: {
  title: "Aisya Nur Syakbani — Frontend Engineer & Product Strategist",
  description: "Engineering Solutions for Real-World Impact.",
  url: "https://portfolio-aisya.vercel.app",
  siteName: "Aisya Nur Syakbani Portfolio",
  images: [
   {
    url: "/images/profile.png",
    width: 1200,
    height: 630,
    alt: "Aisya Nur Syakbani",
   },
  ],
  locale: "en_US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "Aisya Nur Syakbani — Frontend Engineer",
  description: "Engineering Solutions for Real-World Impact.",
  images: ["/images/profile.png"],
 },
 robots: {
  index: true,
  follow: true,
 },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
 return (
  <html lang="en" className={inter.variable}>
   <body className="antialiased theme-v2 overflow-x-hidden">
    <LanguageProvider>
     <PageTransition>
      {children}
     </PageTransition>
    </LanguageProvider>
   </body>
  </html>
 );
};

export default RootLayout;

