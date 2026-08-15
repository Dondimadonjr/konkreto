import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://konkreto-five.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Konkreto | Maceteros y jardineras de cemento con diseño",
    template: "%s | Konkreto",
  },
  description:
    "Diseñamos y fabricamos maceteros de cemento, jardineras, bancas y piezas personalizadas. Piezas de cemento para transformar tus espacios con diseño contemporáneo y fabricación artesanal.",
  keywords: [
    "maceteros de cemento",
    "jardineras de cemento",
    "maceteros grandes cemento",
    "maceteros para exterior",
    "maceteros personalizados",
    "jardineras a medida",
    "productos de cemento",
    "piezas de cemento",
    "maceteros decorativos",
    "fabricación de maceteros",
    "productos personalizados de cemento",
    "Konkreto",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Konkreto | Maceteros y jardineras de cemento con diseño",
    description:
      "Piezas de cemento diseñadas para transformar espacios. Maceteros, jardineras y fabricación personalizada con diseño contemporáneo.",
    url: siteUrl,
    siteName: "Konkreto",
    images: [
      {
        url: "/logos/favicon.png",
        width: 1200,
        height: 630,
        alt: "Konkreto — Piezas de cemento diseñadas",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konkreto | Maceteros y jardineras de cemento con diseño",
    description:
      "Piezas de cemento diseñadas para transformar espacios. Maceteros, jardineras y fabricación personalizada.",
    images: ["/logos/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Konkreto",
      url: siteUrl,
      description:
        "Diseñamos y fabricamos maceteros de cemento, jardineras, bancas, platos, bases y productos personalizados.",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      knowsAbout: [
        "maceteros de cemento",
        "jardineras de cemento",
        "piezas de cemento",
        "fabricación artesanal de cemento",
        "maceteros decorativos",
        "productos personalizados de cemento",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Konkreto",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "es-CL",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Konkreto",
      url: siteUrl,
      description:
        "Fabricación de maceteros de cemento, jardineras, bancas y productos personalizados en Chile.",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.className} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen bg-[#111111] text-[#f5f1eb]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <div className="fixed inset-0 -z-40 bg-[#111111]" />
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_80%_50%_at_80%_-10%,rgba(143,155,124,0.10),transparent_60%)]" />
        {children}
      </body>
    </html>
  );
}
