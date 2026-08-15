import Image from "next/image";

const valores = [
  { titulo: "Diseño pensado", imagen: "/Iconos/iconAC.png" },
  { titulo: "Material resistente", imagen: "/Iconos/iconGP.png" },
  { titulo: "Acabado premium", imagen: "/Iconos/iconPP.png" },
];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative mx-auto scroll-mt-5 max-w-7xl px-6 py-24 sm:py-28"
      style={{ zIndex: 1 }}
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">Konkreto</p>
          <h2 className="text-4xl font-semibold leading-tight text-[#f5f1eb] md:text-5xl">
            Productos de cemento con presencia, textura y valor duradero.
          </h2>
        </div>

        <div className="rounded-4xl border border-white/10 bg-white/6 p-6 shadow-[0_16px_46px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-8">
          <p className="text-lg leading-8 text-[#d7d0c8]">
            En <span className="font-semibold tracking-[0.08em] text-[#f5f1eb]">Konkreto</span> trabajamos con cemento y diseño para crear piezas funcionales y decorativas que aportan carácter a jardines, terrazas y proyectos exteriores.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#d7d0c8]">
            Combinamos fabricación artesanal, resistencia y un lenguaje visual contemporáneo para que cada pieza se vea elegante y perdure en el tiempo.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {valores.map(({ titulo, imagen }) => (
              <div
                key={titulo}
                className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 text-center shadow-[0_14px_34px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8f9b7c]/35"
              >
                <div className="mb-5 flex items-center justify-center">
                  <Image
                    src={imagen}
                    alt={titulo}
                    width={170}
                    height={110}
                    className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mx-auto max-w-44 text-lg font-semibold leading-tight text-white">{titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
