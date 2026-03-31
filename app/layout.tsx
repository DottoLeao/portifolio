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
  title: "Lorenzo Dotto | Desenvolvedor Full Stack & Data Scientist",
  description:
    "Transformo dados complexos em ferramentas simples que ajudam empresas a tomar decisões melhores e lucrar mais. Sistemas sob medida, interfaces intuitivas e inteligência de dados.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Data Scientist",
    "Sistemas sob medida",
    "Inteligência de dados",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Lorenzo Leão Dotto" }],
  openGraph: {
    type: "website",
    title: "Lorenzo Dotto | Desenvolvedor Full Stack & Data Scientist",
    description:
      "Transformo dados complexos em ferramentas simples que ajudam empresas a tomar decisões melhores e lucrar mais.",
    siteName: "Lorenzo Dotto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Dotto | Full Stack & Data Scientist",
    description:
      "Transformo dados complexos em ferramentas simples que ajudam empresas a tomar decisões melhores e lucrar mais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
