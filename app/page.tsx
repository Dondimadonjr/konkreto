import CatalogoProductos from "@/components/home/CatalogoProductos";
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

// Nota: estas imágenes existen en /public/image/ con estos nombres exactos
const productosLista = [
  {
    id: "macetero-01",
    slug: "macetero-01",
    titulo: "Macetero de cemento",
    descripcion:
      "Macetero de diseño contemporáneo para jardín, terraza y exteriores con acabado texturizado.",
    precio: "$80.000",
    categoria: "Maceteros",
    sku: "MK-001",
    stock: 12,
    material: "Cemento",
    dimensiones: "30 × 30 × 30 cm",
    imagen_principal: "/image/Macetero.jpg",
    galeria: ["/image/Macetero.jpg"],
    destacada: true,
    disponible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "jardinera-02",
    slug: "jardinera-02",
    titulo: "Jardinera modular de cemento",
    descripcion:
      "Jardinera para exteriores con líneas limpias y resistencia a la intemperie.",
    precio: "$80.000",
    categoria: "Jardineras",
    sku: "JDN-002",
    stock: 8,
    material: "Cemento",
    dimensiones: "120 × 30 × 40 cm",
    imagen_principal: "/image/Jardinera.jpg",
    galeria: ["/image/Jardinera.jpg"],
    destacada: true,
    disponible: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "plato-03",
    slug: "plato-03",
    titulo: "Plato de cemento",
    descripcion:
      "Plato funcional y estético para jardines y terrazas.",
    precio: "$60.000",
    categoria: "Accesorios",
    sku: "PLT-003",
    stock: 20,
    material: "Cemento",
    dimensiones: "25 × 25 × 5 cm",
    imagen_principal: "/image/Plato.png",
    galeria: ["/image/Plato.png"],
    destacada: false,
    disponible: true,
    created_at: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#f5f1eb]">
      <Header />
      <Hero />
      <ScrollReveal>
        <CatalogoProductos productos={productosLista} />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <Categorias />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <Personalizados />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <Proceso />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <Galeria />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <Contacto />
      </ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
