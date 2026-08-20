const pasos = [
  {
    numero: "01",
    titulo: "Cuéntanos tu proyecto",
    texto: "Medidas, referencias, fotografías o ideas. Cualquier punto de partida es válido.",
  },
  {
    numero: "02",
    titulo: "Definimos la propuesta",
    texto: "Trabajamos contigo para definir forma, dimensiones y terminaciones.",
  },
  {
    numero: "03",
    titulo: "Fabricamos",
    texto: "Creamos la pieza con cemento y materiales pensados para durar.",
  },
  {
    numero: "04",
    titulo: "Entregamos",
    texto: "Coordinamos la entrega de tu pieza terminada.",
  },
];

export default function Personalizados() {
  return (
    <section
      id="personalizados"
      className="relative mx-auto max-w-7xl scroll-mt-5 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="overflow-hidden rounded-4xl border border-[#8f9b7c]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
        {/* Header */}
        <div className="border-b border-white/8 p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
              Productos personalizados
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
              ¿Tienes una idea?
              <br />
              <span className="text-[#8f9b7c]">La hacemos realidad.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#d7d0c8] sm:text-lg sm:leading-8">
              Cuéntanos qué necesitas, comparte tus medidas, referencias o fotografías y trabajaremos contigo para desarrollar una pieza pensada para tu espacio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/56972086522?text=Hola,%20quiero%20cotizar%20un%20producto%20personalizado%20con%20Mortarium."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#f5f1eb] px-6 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Cotizar proyecto personalizado
              </a>
              <a
                href="#categorias"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                Ver categorías
              </a>
            </div>
          </div>
        </div>

        {/* Pasos */}
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, index) => (
            <div
              key={paso.numero}
              className={`p-7 md:p-8 ${
                index < pasos.length - 1
                  ? "border-b border-white/8 sm:border-b-0 sm:border-r lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 1 || index === 3
                  ? "sm:border-b sm:border-r-0 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-[#8f9b7c]/70">
                {paso.numero}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#d7d0c8]">
                {paso.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
