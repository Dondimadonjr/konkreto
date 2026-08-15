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
  categoria: string;
  material: string;
  dimensiones: string;
  imagen_principal: string;
  galeria: string[];
};

const productos: Producto[] = [
  {
    id: "macetero-01",
    slug: "macetero-01",
    titulo: "Macetero de cemento",
    descripcion:
      "Macetero de diseño contemporáneo elaborado en cemento, ideal para jardines, terrazas y espacios exteriores. Su acabado texturizado aporta carácter y una estética sobria.",
    precio: "$80.000",
    categoria: "Maceteros",
    material: "Cemento",
    dimensiones: "30 × 30 × 30 cm",
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
    categoria: "Jardineras",
    material: "Cemento",
    dimensiones: "120 × 30 × 40 cm",
    imagen_principal: "/image/Jardinera.jpg",
    galeria: ["/image/Jardinera.jpg"],
  },
  {
    id: "plato-03",
    slug: "plato-03",
    titulo: "Plato de cemento",
    descripcion:
      "Plato funcional y estético para jardines y terrazas. Complementa maceteros y jardineras con una terminación limpia.",
    precio: "$60.000",
    categoria: "Accesorios",
    material: "Cemento",
    dimensiones: "25 × 25 × 5 cm",
    imagen_principal: "/image/Plato.png",
    galeria: ["/image/Plato.png"],
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
    description: `${producto.descripcion} — ${producto.material}, ${producto.dimensiones}.`,
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
    <main className="min-h-screen bg-[#111111] text-[#f5f1eb]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <nav
          aria-label="Ruta de navegación"
          className="flex items-center gap-2 text-sm text-white/45"
        >
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/#productos"
            className="transition hover:text-white"
          >
            Productos
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/75">{producto.titulo}</span>
        </nav>
      </div>

      {/* Detalle */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          {/* Imagen */}
          <div className="min-w-0">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">
              <Image
                src={imagenes[0]}
                alt={producto.titulo}
                width={1400}
                height={1050}
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Información */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block rounded-full border border-[#8f9b7c]/30 bg-[#8f9b7c]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#aeb99b]">
              {producto.categoria}
            </span>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {producto.titulo}
            </h1>

            <p className="mt-5 text-base leading-7 text-[#d7d0c8]/80 sm:text-lg">
              {producto.descripcion}
            </p>

            {/* Precio */}
            <div className="mt-7 border-t border-white/10 pt-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8f9b7c]">
                Precio
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {producto.precio}
              </p>
            </div>

            {/* Especificaciones */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Material
                </p>
                <p className="mt-1.5 text-sm font-medium text-white/80">
                  {producto.material}
                </p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Dimensiones
                </p>
                <p className="mt-1.5 text-sm font-medium text-white/80">
                  {producto.dimensiones}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por ${producto.titulo} vía WhatsApp`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f5f1eb] px-6 py-4 text-sm font-semibold text-[#111] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Consultar por WhatsApp
              </a>

              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-medium text-white/75 transition duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                ← Volver al catálogo
              </Link>
            </div>

            {/* Nota sobre personalización */}
            <p className="mt-6 text-xs leading-6 text-white/35">
              ¿Necesitas una medida diferente?{" "}
              <a
                href="https://wa.me/56972086522?text=Hola,%20quiero%20consultar%20por%20un%20producto%20personalizado%20Konkreto."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8f9b7c] underline-offset-4 transition hover:text-[#aeb99b] hover:underline"
              >
                Lo fabricamos a medida.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Datos estructurados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: producto.titulo,
            description: producto.descripcion,
            image: imagenes,
            material: producto.material,
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
