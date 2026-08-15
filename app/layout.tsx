import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://konkreto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Konkreto | Maceteros y productos de cemento con diseño",
    template: "%s | Konkreto",
  },
  description:
    "Konkreto fabrica maceteros de cemento, jardineras, bancas, platos, bases y productos personalizados con diseño, calidad y resistencia.",
  keywords: [
    "Konkreto",
    "maceteros de cemento",
    "jardineras de cemento",
    "productos de cemento",
    "maceteros decorativos",
    "fabricación de maceteros",
    "productos personalizados de cemento",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Konkreto | Maceteros y productos de cemento con diseño",
    description:
      "Fabricación artesanal de maceteros de cemento, jardineras y productos personalizados para exteriores y jardines.",
    url: siteUrl,
    siteName: "Konkreto",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Konkreto",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konkreto | Maceteros y productos de cemento con diseño",
    description:
      "Productos de cemento premium con diseño moderno para jardines, patios y espacios exteriores.",
    images: ["favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        "Fabricación de maceteros de cemento, jardineras, bancas, platos, bases y productos personalizados.",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      knowsAbout: [
        "maceteros de cemento",
        "jardineras de cemento",
        "productos de cemento",
        "maceteros decorativos",
        "fabricación de maceteros",
        "productos personalizados de cemento",
      ],
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
      <body className="relative min-h-screen bg-[#8C8C88] text-[#f5f1eb]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <div className="fixed inset-0 -z-40 bg-[#8C8C88]" />
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top_right,rgba(143,155,124,0.16),transparent_45%)]" />
        {children}
      </body>
    </html>
  );
}
