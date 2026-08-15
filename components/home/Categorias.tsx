const categorias = [
  {
    titulo: "Maceteros",
    texto: "Diseños limpios y resistentes para terrazas, patios y jardines.",
    href: "#contacto",
  },
  {
    titulo: "Jardineras",
    texto: "Piezas de cemento con presencia y equilibrio visual.",
    href: "#contacto",
  },
  {
    titulo: "Bancas",
    texto: "Mobiliario exterior que combina confort y durabilidad.",
    href: "#contacto",
  },
  {
    titulo: "Platos",
    texto: "Soluciones funcionales para espacios exteriores.",
    href: "#contacto",
  },
  {
    titulo: "Bases",
    texto: "Elementos estructurales y decorativos para proyectos diversos.",
    href: "#contacto",
  },
  {
    titulo: "Decoración",
    texto: "Piezas únicas para darle carácter a cada entorno.",
    href: "#contacto",
  },
  {
    titulo: "Personalizados",
    texto: "Trabajos a medida para proyectos especiales y necesidades concretas.",
    href: "#contacto",
  },
];

export default function Categorias() {
  return (
    <section
      id="categorias"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:py-24"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
            Categorías
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Productos de cemento pensados para jardines, exteriores y proyectos premium.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#d7d0c8] sm:text-base">
          Desde maceteros decorativos hasta piezas funcionales, cada línea está diseñada para aportar textura y elegancia.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categorias.map((categoria) => (
          <article
            key={categoria.titulo}
            className="group rounded-[1.75rem] border border-white/10 bg-white/6 p-7 shadow-[0_16px_46px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#8f9b7c]/35 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">{categoria.titulo}</h3>
              <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#8f9b7c]">
                Konkreto
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#d7d0c8]">{categoria.texto}</p>
            <a
              href={categoria.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f5f1eb] transition group-hover:gap-3"
            >
              Consultar
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
