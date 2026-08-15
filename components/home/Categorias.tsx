const categorias = [
  {
    numero: "01",
    titulo: "Maceteros",
    texto: "Piezas que convierten una planta en protagonista.",
    href: "#contacto",
  },
  {
    numero: "02",
    titulo: "Jardineras",
    texto: "Soluciones de gran formato para terrazas y jardines.",
    href: "#contacto",
  },
  {
    numero: "03",
    titulo: "Bancas",
    texto: "Diseño y resistencia para espacios exteriores.",
    href: "#contacto",
  },
  {
    numero: "04",
    titulo: "Platos",
    texto: "Detalles funcionales que completan cada pieza.",
    href: "#contacto",
  },
  {
    numero: "05",
    titulo: "Bases",
    texto: "Volumen, proporción y presencia para tus espacios.",
    href: "#contacto",
  },
  {
    numero: "06",
    titulo: "Decoración",
    texto: "Piezas que aportan carácter y textura al entorno.",
    href: "#contacto",
  },
  {
    numero: "07",
    titulo: "Personalizados",
    texto: "Creamos piezas según las necesidades de tu proyecto.",
    href: "#personalizados",
  },
];

export default function Categorias() {
  return (
    <section
      id="categorias"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
            Categorías
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Lo que fabricamos
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#d7d0c8] sm:text-base">
          Cada línea está pensada para un uso específico. Si no encuentras lo que buscas, lo fabricamos a medida.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categorias.map((categoria) => (
          <article
            key={categoria.titulo}
            className="group relative rounded-2xl border border-white/10 bg-white/4 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#8f9b7c]/30 hover:bg-white/[0.07]"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-[#8f9b7c]/70">
              {categoria.numero}
            </span>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {categoria.titulo}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#d7d0c8]">
              {categoria.texto}
            </p>

            <a
              href={categoria.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#8f9b7c] transition duration-200 group-hover:gap-2.5 group-hover:text-[#aeb99b]"
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
