import CatalogoPropiedades from "@/components/home/CatalogoPropiedades";
import Categorias from "@/components/home/Categorias";
import Contacto from "@/components/home/Contacto";
import FAQ from "@/components/home/FAQ";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";
import Footer from "@/components/home/Footer";
import Galeria from "@/components/home/Galeria";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Personalizados from "@/components/home/Personalizados";
import Proceso from "@/components/home/Proceso";
import ScrollReveal from "@/components/animations/ScrollReveal";

const productosLista = [
  {
    id: "macetero-01",
    slug: "macetero-01",
    titulo: "Macetero de cemento premium",
    descripcion: "Macetero de diseño moderno para jardín, terraza y exteriores con acabado texturizado.",
    precio: "$80.000",
    categoria: "Maceteros",
    sku: "MK-001",
    stock: 12,
    material: "Cemento",
    dimensiones: "30x30x30 cm",
    imagen_principal: "/image/macetero.jpg",
    galeria: [
      "/image/macetero.jpg",
    ],
    destacada: true,
    disponible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "jardinera-02",
    slug: "jardinera-02",
    titulo: "Jardinera modular de cemento",
    descripcion: "Jardinera para exteriores con líneas limpias y gran resistencia a la intemperie.",
    precio: "$80.000",
    categoria: "Jardineras",
    sku: "JDN-002",
    stock: 8,
    material: "Cemento",
    dimensiones: "120x30x40 cm",
    imagen_principal: "/image/jardinera.jpg",
     galeria: [
      "/image/jardinera.jpg",
    ],
    destacada: true,
    disponible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "plato-03",
    slug: "plato-03",
    titulo: "Plato de cemento para exterior",
    descripcion: "Plato funcional y estético para jardines, patios y espacios públicos modernos.",
    precio: "$60.000",
    categoria: "Accesorios",
    sku: "PLT-003",
    stock: 20,
    material: "Cemento",
    dimensiones: "25x25x5 cm",
    imagen_principal: "/image/plato.png",
    galeria: [
      "/image/plato.png",
    ],
    destacada: false,
    disponible: true,
    created_at: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#f5f1eb]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(143,155,124,0.18) 0%, transparent 60%), linear-gradient(180deg, #333537 0%, #151515 30%, #111111 100%)",
          zIndex: 0,
        }}
      />

      <Header />
      <Hero />
      <ScrollReveal>
        <CatalogoPropiedades propiedades={productosLista} />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <Categorias />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <Personalizados />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <Proceso />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <Galeria />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <Contacto />
      </ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
