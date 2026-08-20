export default function Contacto() {
  const whatsappUrl =
    "https://wa.me/56972086522?text=Hola,%20quiero%20cotizar%20un%20producto%20Mortarium.";

  return (
    <section
      id="contacto"
      className="relative mx-auto max-w-7xl scroll-mt-0.5 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Izquierda — copy */}
          <div className="p-8 md:p-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
              Contacto
            </p>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#d7d0c8] sm:text-lg sm:leading-8">
              Cuéntanos qué necesitas y te ayudamos a definir medidas, diseño y terminaciones.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {/* CTA principal — WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f1eb] px-7 py-4 font-semibold text-[#111111] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </div>

          {/* Derecha — atributos */}
          <div className="border-t border-white/8 bg-[#111111]/50 p-8 lg:border-l lg:border-t-0 md:p-10">
            <h3 className="text-lg font-semibold text-white">
              ¿Por qué elegirnos?
            </h3>
            <div className="mt-7 space-y-6">
              {[
                {
                  titulo: "Atención personalizada",
                  descripcion:
                    "Cada cotización es tratada de forma individual. Te respondemos con propuestas reales.",
                },
                {
                  titulo: "Fabricación a medida",
                  descripcion:
                    "Si no está en el catálogo, lo fabricamos. Desarrollamos piezas según tu proyecto.",
                },
                {
                  titulo: "Asesoría para tu espacio",
                  descripcion:
                    "Podemos orientarte en medidas, proporciones y terminaciones para que la pieza encaje.",
                },
              ].map((item) => (
                <div key={item.titulo}>
                  <p className="text-sm font-semibold text-[#f5f1eb]">
                    {item.titulo}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-[#d7d0c8]">
                    {item.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
