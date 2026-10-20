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

const SITE_URL = "https://trans-stroy-spb.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Транс Строй СПб — строительство и перевозки негабаритных грузов",
    template: "%s | Транс Строй СПб",
  },
  description:
    "ООО «Транс Строй СПб» — два направления: благоустройство территорий, инженерные сети, земляные работы (СПб и ЛО) и перевозки негабаритных грузов по всей России. Работаем с 2009 года.",
  keywords: [
    "благоустройство территорий",
    "инженерные сети",
    "ГНБ",
    "горизонтальное направленное бурение",
    "земляные работы",
    "перевозка негабаритных грузов",
    "тралы",
    "спецтехника перевозка",
    "Транс Строй СПб",
    "строительная компания Санкт-Петербург",
    "благоустройство СПб",
    "негабаритные перевозки Россия",
  ],
  openGraph: {
    title: "Транс Строй СПб — строительство и перевозки негабаритных грузов",
    description:
      "Благоустройство, инженерные сети, земляные работы · Перевозки негабарита по РФ · С 2009 года",
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Транс Строй СПб",
  },
  twitter: {
    card: "summary_large_image",
    title: "Транс Строй СПб — строительство и перевозки",
    description:
      "Благоустройство, инженерные сети, земляные работы · Перевозки негабарита по РФ",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ООО «Транс Строй СПб»",
              alternateName: "Транс Строй СПб",
              url: SITE_URL,
              foundingDate: "2009",
              description:
                "Строительная компания: благоустройство территорий, инженерные сети, земляные работы, перевозки негабаритных грузов",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Липовский проезд, д. 11, кв. 59",
                addressLocality: "Сосновый Бор",
                addressRegion: "Ленинградская область",
                postalCode: "188541",
                addressCountry: "RU",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Санкт-Петербург",
                },
                {
                  "@type": "State",
                  name: "Ленинградская область",
                },
                {
                  "@type": "Country",
                  name: "Россия",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Услуги",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Строительство",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Благоустройство территорий",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Наружные инженерные сети",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Земляные работы",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Перевозки",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Перевозка негабаритных грузов",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-concrete-50 text-concrete-950">
        {children}
      </body>
    </html>
  );
}
