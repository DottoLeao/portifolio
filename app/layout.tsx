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
  title: "The Data-Driven Architect | Full Stack Developer & Data Scientist",
  description:
    "Construindo aplicações onde o design encontra a inteligência de dados. Transformando fluxos complexos em interfaces intuitivas.",
  keywords: [
    "Full Stack Developer",
    "Data Scientist",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Node.js",
    "SQL",
  ],
  authors: [{ name: "Data-Driven Architect" }],
  openGraph: {
    type: "website",
    title: "The Data-Driven Architect | Full Stack Developer & Data Scientist",
    description:
      "Construindo aplicações onde o design encontra a inteligência de dados.",
    siteName: "The Data-Driven Architect",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Data-Driven Architect",
    description:
      "Construindo aplicações onde o design encontra a inteligência de dados.",
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
