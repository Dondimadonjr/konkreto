const pasos = [
  {
    numero: "01",
    titulo: "Concepto",
    texto: "A partir de tus medidas, espacio y referencias diseñamos cada pieza con intención.",
  },
  {
    numero: "02",
    titulo: "Fabricación",
    texto: "Trabajamos con cemento y moldes para lograr resistencia y precisión en cada forma.",
  },
  {
    numero: "03",
    titulo: "Acabado",
    texto: "Lijado, curado y terminaciones para que cada pieza salga limpia, uniforme y lista.",
  },
  {
    numero: "04",
    titulo: "Entrega",
    texto: "La pieza terminada, lista para instalarse en jardines, terrazas o proyectos especiales.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
            Proceso de fabricación
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Cada pieza se hace con detalle, desde el molde hasta la entrega.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#d7d0c8] sm:text-base">
          Fabricación artesanal de cemento, con control en cada etapa del proceso.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pasos.map((paso, index) => (
          <article
            key={paso.titulo}
            className="group relative rounded-2xl border border-white/10 bg-white/4 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#8f9b7c]/30 hover:bg-white/[0.07]"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-[#8f9b7c]/70">
              {paso.numero}
            </span>
            {/* Línea decorativa */}
            {index < pasos.length - 1 && (
              <span
                className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-white/10 lg:block"
                aria-hidden="true"
              />
            )}
            <h3 className="mt-3 text-lg font-semibold text-white">
              {paso.titulo}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#d7d0c8]">
              {paso.texto}
            </p>
          </article>
        ))}
      </div>

      {/* Nota de confianza */}
      <div className="mt-8 rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
        <p className="text-sm leading-7 text-[#d7d0c8]">
          <span className="font-semibold text-[#f5f1eb]">Fabricación local. </span>
          Cada pieza se trabaja individualmente. El tiempo de fabricación varía según el proyecto —{" "}
          <a
            href="https://wa.me/56972086522?text=Hola,%20quiero%20saber%20tiempos%20de%20fabricaci%C3%B3n%20Konkreto."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8f9b7c] underline underline-offset-4 transition hover:text-[#aeb99b]"
          >
            consúltanos para tu proyecto específico.
          </a>
        </p>
      </div>
    </section>
  );
}
