import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neelkanth Mehta | Quantitative Researcher & Algorithmic Trader",
  description: "Portfolio of Neelkanth Mehta. Quantitatively trained market professional and WorldQuant MScFE graduate specializing in systematic strategy development, Python, machine learning, and multi-agent AI.",
  keywords: [
    "Neelkanth Mehta",
    "Quantitative Researcher",
    "Algorithmic Trader",
    "WorldQuant",
    "MScFE",
    "Machine Learning",
    "Multi-Agent AI",
    "Alpha Generation",
    "Amherst",
    "Barclays",
    "JP Morgan",
    "Financial Markets"
  ],
  authors: [{ name: "Neelkanth Mehta" }],
  openGraph: {
    title: "Neelkanth Mehta | Quantitative Researcher & Algorithmic Trader",
    description: "Systematic strategy development, Python, machine learning, and multi-agent AI.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
