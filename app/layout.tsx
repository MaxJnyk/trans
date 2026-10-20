import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Inter({
  variable: "--font-archivo",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Транс Строй СПб — благоустройство, инженерные сети, земляные работы",
  description:
    "Строительная компания «Транс Строй СПб». Благоустройство территорий, прокладка наружных инженерных сетей методом ГНБ, земляные работы. Работаем в Санкт-Петербурге и Ленинградской области.",
  keywords: [
    "благоустройство",
    "инженерные сети",
    "ГНБ",
    "земляные работы",
    "Транс Строй СПб",
    "Санкт-Петербург",
  ],
  openGraph: {
    title: "Транс Строй СПб",
    description:
      "Благоустройство · Инженерные сети · Земляные работы. Санкт-Петербург и ЛО.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${archivo.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-concrete-50 text-concrete-950">
        {children}
      </body>
    </html>
  );
}
