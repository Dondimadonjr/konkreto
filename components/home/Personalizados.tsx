export default function Personalizados() {
  return (
    <section
      id="personalizados"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:py-24"
      style={{ zIndex: 1 }}
    >
      <div className="overflow-hidden rounded-[2.2rem] border border-[#8f9b7c]/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
              Productos personalizados
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
              También fabricamos piezas a medida para proyectos únicos.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d7d0c8]">
              Diseñamos maceteros de cemento, jardineras, mobiliario exterior y elementos decorativos según medidas especiales, estilos concretos y necesidades de cada cliente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-[#f5f1eb] px-6 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5"
              >
                Solicitar cotización
              </a>
              <a
                href="#categorias"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver categorías
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Medidas especiales",
              "Diseños personalizados",
              "Proyectos para empresas",
              "Decoración de jardines",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-[#111111]/80 p-5 text-sm leading-7 text-[#d7d0c8]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
