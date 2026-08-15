import Image from "next/image";

const piezas = [
  {
    title: "Macetero de cemento",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Jardinera premium",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Banca exterior",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Detalle de diseño",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:py-24"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
            Galería
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Piezas de cemento con presencia, textura y carácter.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#d7d0c8] sm:text-base">
          Cada producto se fabrica para integrar diseño, funcionalidad y resistencia en espacios exteriores.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {piezas.map((pieza, index) => (
          <div
            key={pieza.title}
            className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 shadow-[0_16px_46px_rgba(0,0,0,0.16)] ${index === 0 || index === 3 ? "md:translate-y-6" : ""}`}
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={pieza.image}
                alt={pieza.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{pieza.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#d7d0c8]">
                Diseño contemporáneo para jardines, patios y proyectos exclusivos.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
