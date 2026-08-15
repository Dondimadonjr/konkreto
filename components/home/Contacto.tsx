export default function Contacto() {
  return (
    <section id="contacto" className="relative mx-auto scroll-mt-20 max-w-7xl px-6 py-24" style={{ zIndex: 1 }}>
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">Contacto</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Cotiza tu macetero, jardinera o producto de cemento a medida.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7d0c8]">
              Escríbenos y comparte tus ideas. Te respondemos con propuestas pensadas para diseño, calidad y durabilidad.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="https://wa.me/56972086522?text=Hola,%20quiero%20cotizar%20un%20producto%20Konkreto." target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f5f1eb] px-7 py-4 text-center font-semibold text-[#111111] transition hover:-translate-y-0.5">
                Escribir por WhatsApp
              </a>
              <a href="mailto:konkreto@ejemplo.com?subject=Solicitud de cotización Konkreto" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5">
                Enviar correo
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-[#111111]/70 p-8 md:p-12 lg:border-l lg:border-t-0">
            <h3 className="text-2xl font-semibold text-white">Atención Konkreto</h3>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#8f9b7c]">Productos</p>
                <p className="mt-2 text-[#d7d0c8]">Maceteros, jardineras, bancas, platos, bases y decoración.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#8f9b7c]">Personalización</p>
                <p className="mt-2 text-[#d7d0c8]">Diseños a medida para jardines, terrazas y proyectos especiales.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#8f9b7c]">Respuesta rápida</p>
                <p className="mt-2 text-[#d7d0c8]">Coordina tu cotización por WhatsApp o correo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
