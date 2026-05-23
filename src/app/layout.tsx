import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aisya Nur Syakbani — Frontend Developer",
  description:
    "Portfolio of Aisya Nur Syakbani, a Frontend Developer & Tech Leader based in Semarang, Indonesia.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Aisya Nur Syakbani",
  ],
  authors: [{ name: "Aisya Nur Syakbani" }],
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
