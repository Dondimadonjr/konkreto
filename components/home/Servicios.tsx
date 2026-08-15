import Image from "next/image";

const servicios = [
  {
    titulo: "Maceteros",
    texto: "Piezas hechas para jardines, patios y espacios exteriores con diseño contemporáneo.",
    imagen: "",
  },
  {
    titulo: "Jardineras",
    texto: "Modelos funcionales y decorativos para aportar presencia y equilibrio visual.",
    imagen: "",
  },
  {
    titulo: "Productos a medida",
    texto: "Trabajos personalizados para proyectos especiales, empresas y ambientes únicos.",
    imagen: "",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative mx-auto scroll-mt-15 px-6 py-12 sm:max-w-7xl sm:scroll-mt-15 sm:py-15"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto mb-10 max-w-sm sm:mx-0 sm:mb-12 sm:max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#8f9b7c] sm:text-sm">Productos</p>
        <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl md:text-5xl">
          Soluciones de cemento para exteriores y jardines.
        </h2>
      </div>

      <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none md:grid-cols-3">
        {servicios.map((servicio) => (
          <article
            key={servicio.titulo}
            className="flex min-h-70 flex-col items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/6 p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:border-[#8f9b7c]/35 sm:min-h-0 sm:items-start sm:justify-start sm:text-left"
          >
            <Image src={servicio.imagen} alt={servicio.titulo} width={104} height={104} className="mb-7 h-24 w-24 object-contain sm:mb-6 sm:h-20 sm:w-20" />
            <h3 className="max-w-56 text-2xl font-semibold leading-tight text-white sm:max-w-60 sm:text-2xl">{servicio.titulo}</h3>
            <p className="mt-4 hidden leading-7 text-[#d7d0c8] sm:block">{servicio.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
