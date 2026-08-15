const pasos = [
  {
    titulo: "Concepto",
    texto: "Diseñamos cada pieza a partir de tus ideas, medidas y el espacio donde se instalará.",
  },
  {
    titulo: "Fabricación",
    texto: "Trabajamos con cemento y acabados pensados para lograr resistencia y una estética refinada.",
  },
  {
    titulo: "Acabado",
    texto: "Definimos texturas, proporciones y detalles para que cada producto se vea limpio y duradero.",
  },
  {
    titulo: "Entrega",
    texto: "Entregamos piezas listas para integrar en jardines, terrazas, patios y proyectos especiales.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:py-24"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
          Proceso de fabricación
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
          Cada pieza se desarrolla con detalle, textura y propósito.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-4xl border border-white/10 bg-[#f5f1eb]/8 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur">
          <p className="text-lg leading-8 text-[#d7d0c8]">
            Creamos productos de cemento para exteriores que combinan funcionalidad, resistencia y un lenguaje visual contemporáneo.
          </p>
          <div className="mt-8 rounded-3xl border border-[#8f9b7c]/30 bg-[#111111]/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8f9b7c]">
              Enfoque
            </p>
            <p className="mt-3 text-xl font-medium text-white">
              Materiales pensados para durar, acabados limpios y diseños que potencian el espacio.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pasos.map((paso, index) => (
            <article
              key={paso.titulo}
              className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:border-[#8f9b7c]/35"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f9b7c]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{paso.titulo}</h3>
              <p className="mt-3 text-sm leading-7 text-[#d7d0c8]">{paso.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
