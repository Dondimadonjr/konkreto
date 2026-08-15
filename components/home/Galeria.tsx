import Image from "next/image";

// Galería con imágenes reales del proyecto + Unsplash para las que no existen
// Las imágenes propias del proyecto se priorizan
const piezas = [
  {
    titulo: "Macetero de cemento",
    imagen: "/image/Macetero.jpg",
    proporcion: "aspect-[4/3]",
  },
  {
    titulo: "Jardinera modular",
    imagen: "/image/Jardinera.jpg",
    proporcion: "aspect-[4/3]",
  },
  {
    titulo: "Plato de cemento",
    imagen: "/image/Plato.png",
    proporcion: "aspect-[4/3]",
  },
  {
    titulo: "Detalle de terminación",
    imagen: "/image/imagen_plato.jpg",
    proporcion: "aspect-[4/3]",
  },
  {
    titulo: "Textura y materialidad",
    imagen:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=900&q=80",
    proporcion: "aspect-[4/3]",
  },
  {
    titulo: "Proyecto personalizado",
    imagen:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    proporcion: "aspect-[4/3]",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
            Galería
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Piezas Konkreto
          </h2>
        </div>
        <a
          href="#contacto"
          className="w-fit text-sm font-medium text-[#8f9b7c] underline-offset-4 transition hover:text-[#aeb99b] hover:underline"
        >
          Consultar sobre una pieza →
        </a>
      </div>

      {/* Grid masonry-like */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {piezas.map((pieza, index) => (
          <div
            key={pieza.titulo}
            className={`group overflow-hidden rounded-2xl border border-white/8 bg-white/4 shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition duration-400 hover:border-white/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)] ${
              index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className={`relative ${pieza.proporcion} overflow-hidden`}>
              <Image
                src={pieza.imagen}
                alt={pieza.titulo}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            {/* Título minimalista */}
            <div className="px-5 py-4">
              <p className="text-sm font-medium text-[#d7d0c8]">
                {pieza.titulo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
