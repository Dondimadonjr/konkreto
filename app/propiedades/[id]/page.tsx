import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Producto = {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  precio: string;
  operacion: string;
  tipo: string;
  region: string;
  comuna: string;
  sector?: string;
  imagen_principal: string;
  galeria: string[];
};

const productos: Producto[] = [
  {
    id: "macetero-01",
    slug: "macetero-01",
    titulo: "Macetero de cemento cuadrado",
    descripcion:
      "Macetero de diseño moderno elaborado en cemento, ideal para jardines, terrazas y espacios exteriores. Su acabado texturizado aporta carácter y una estética contemporánea.",
    precio: "$60.000",
    operacion: "Venta",
    tipo: "Macetero",
    region: "Metropolitana",
    comuna: "Santiago",
    sector: "Providencia",
    imagen_principal: "/image/Macetero.jpg",
    galeria: ["/image/Macetero.jpg"],
  },
  {
    id: "jardinera-02",
    slug: "jardinera-02",
    titulo: "Jardinera modular de cemento",
    descripcion:
      "Jardinera de cemento con líneas limpias y diseño contemporáneo, pensada para exteriores y espacios que buscan una solución resistente y de gran presencia.",
    precio: "$80.000",
    operacion: "Venta",
    tipo: "Jardinera",
    region: "Metropolitana",
    comuna: "Santiago",
    sector: "Las Condes",
    imagen_principal: "/image/Jardinera.jpg",
    galeria: ["/image/Jardinera.jpg"],
  },
  {
    id: "plato-03",
    slug: "plato-03",
    titulo: "Plato de cemento para exterior",
    descripcion:"Plato funcional y estético para jardines, patios y espacios públicos modernos.",
    precio: "$60.000",
    operacion: "Venta",
    tipo: "Plato",
    region: "Valparaíso",
    comuna: "Viña del Mar",
    sector: "Reñaca",
    imagen_principal: "/image/plato.png",
    galeria: ["/image/plato.png"],
  },
];

const WHATSAPP_NUMBER = "56972086522";

function getProducto(id: string) {
  return productos.find(
    (producto) => producto.slug === id || producto.id === id
  );
}

function createWhatsAppUrl(producto: Producto) {
  const message = `Hola, quiero consultar por el ${producto.titulo} de Konkreto.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export async function generateStaticParams() {
  return productos.map((producto) => ({
    id: producto.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const producto = getProducto(id);

  if (!producto) {
    return {
      title: "Producto no encontrado | Konkreto",
    };
  }

  return {
    title: `${producto.titulo} | Konkreto`,
    description: producto.descripcion,
    alternates: {
      canonical: `/productos/${producto.slug}`,
    },
    openGraph: {
      title: `${producto.titulo} | Konkreto`,
      description: producto.descripcion,
      type: "website",
      images: [
        {
          url: producto.imagen_principal,
          width: 1200,
          height: 800,
          alt: producto.titulo,
        },
      ],
    },
  };
}

export default async function DetalleProducto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = getProducto(id);

  if (!producto) {
    notFound();
  }

  const imagenes =
    producto.galeria.length > 0
      ? producto.galeria
      : [producto.imagen_principal];

  const whatsappUrl = createWhatsAppUrl(producto);

  return (
    <main className="min-h-screen bg-[#8f9b7c] text-[#f5f1eb]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-white/50"
        >
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Inicio
          </Link>

          <span aria-hidden="true">/</span>

          <span className="text-white/75">{producto.titulo}</span>
        </nav>
      </div>

      {/* Producto */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          {/* Galería */}
          <div className="min-w-0">
            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-[#171717]">
              <Image
                src={imagenes[0]}
                alt={producto.titulo}
                width={1400}
                height={1000}
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Miniaturas */}
            {imagenes.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {imagenes.map((imagen, index) => (
                  <div
                    key={`${imagen}-${index}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#171717]"
                  >
                    <Image
                      src={imagen}
                      alt={`${producto.titulo} - imagen ${index + 1}`}
                      width={500}
                      height={400}
                      sizes="(max-width: 640px) 30vw, 160px"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Información */}
          <div className="lg:sticky lg:top-24">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#8f9b7c]/30 bg-[#8f9b7c]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#aeb99b]">
                {producto.tipo}
              </span>

              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {producto.operacion}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {producto.titulo}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#d7d0c8]/75 sm:text-lg">
              {producto.descripcion}
            </p>

            {/* Precio */}
            <div className="mt-8 border-y border-white/10 py-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8f9b7c]">
                Precio
              </p>

              <div className="mt-2 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {producto.precio}
                </span>

                <span className="text-sm text-white/40">
                  IVA incluido
                </span>
              </div>
            </div>

            {/* Ubicación */}
            <div className="mt-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8f9b7c]">
                Ubicación
              </p>

              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm text-white/65">
                <span>{producto.comuna}</span>

                {producto.sector && (
                  <>
                    <span className="text-white/25">·</span>
                    <span>{producto.sector}</span>
                  </>
                )}

                <span className="text-white/25">·</span>

                <span>{producto.region}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por ${producto.titulo} vía WhatsApp`}
                className="flex w-full items-center justify-center rounded-full bg-[#f5f1eb] px-6 py-4 text-sm font-semibold text-[#111] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                Consultar por WhatsApp
              </a>

              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-medium text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                Volver al catálogo
              </Link>
            </div>

            {/* Información adicional */}
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <div className="bg-[#151515] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Tipo
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {producto.tipo}
                </p>
              </div>

              <div className="bg-[#151515] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Operación
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {producto.operacion}
                </p>
              </div>

              <div className="bg-[#151515] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Comuna
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {producto.comuna}
                </p>
              </div>

              <div className="bg-[#151515] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Región
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {producto.region}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datos estructurados para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: producto.titulo,
            description: producto.descripcion,
            image: imagenes,
            brand: {
              "@type": "Brand",
              name: "Konkreto",
            },
            offers: {
              "@type": "Offer",
              price: producto.precio
                .replace("$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim(),
              priceCurrency: "CLP",
              availability: "https://schema.org/InStock",
              url: `/productos/${producto.slug}`,
            },
          }),
        }}
      />
    </main>
  );
}
