import Image from "next/image";

const valores = [
  {
    numero: "01",
    titulo: "Diseño",
    texto: "Proporciones, formas y detalles pensados para que cada pieza tenga presencia sin perder funcionalidad.",
    imagen: "/Iconos/icono.png",
  },
  {
    numero: "02",
    titulo: "Materia",
    texto: "Trabajamos el cemento como un material noble, buscando resistencia, textura y carácter en cada pieza.",
    imagen: "/Iconos/iconoMN.png",
  },
  {
    numero: "03",
    titulo: "Oficio",
    texto: "Cada pieza pasa por un proceso de fabricación cuidadoso donde las pequeñas diferencias forman parte de su identidad.",
    imagen: "/Iconos/iconoMV.png",
  },
];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative scroll-mt-0.5 overflow-hidden px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"

      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8f9b7c] sm:text-xs">
              Nosotros
            </p>

            <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-[#f5f1eb] sm:text-5xl lg:text-6xl">
              El cemento también
              <br className="hidden sm:block" />
              puede sentirse <span className="text-[#8f9b7c]">sofisticado.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45 sm:text-base sm:leading-7 lg:pb-1">
            Diseñamos y fabricamos piezas que encuentran el equilibrio entre
            materia, arquitectura y naturaleza.
          </p>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid overflow-hidden rounded-4xl border border-white/10 bg-[#171715] lg:grid-cols-[1.05fr_0.95fr]">

          {/* IMAGEN */}
          <div className="relative min-h-105 overflow-hidden sm:min-h-130 lg:min-h-155">
            <Image
              src="/image/Macetero.jpg"
              alt="Macetero de cemento Mortarium"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition duration-1000 ease-out hover:scale-[1.025]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

            {/* Etiqueta */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md">
                <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/80">
                  Fabricación artesanal
                </span>
              </div>
            </div>

            {/* Texto imagen */}
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#aeb99b]">
                Mortarium
              </p>

              <p className="mt-2 max-w-sm text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                Piezas hechas para quedarse.
              </p>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">

            <div>
              <p className="max-w-xl text-lg leading-8 text-[#d7d0c8] sm:text-xl sm:leading-9">
                En Mortarium creemos que un objeto cotidiano puede transformar
                la manera en que se siente un espacio.
              </p>

              <div className="mt-6 space-y-4 text-sm leading-7 text-white/45 sm:text-base">
                <p>
                  Creamos maceteros, jardineras y piezas de cemento donde el
                  material deja de ser solo estructura y se convierte en parte
                  del diseño.
                </p>

                <p>
                  Trabajamos cada pieza de manera artesanal, cuidando sus
                  proporciones, textura y terminaciones para que pueda convivir
                  con jardines, terrazas e interiores durante años.
                </p>
              </div>
            </div>

            {/* MÉTRICAS */}
            <div className="mt-10 grid grid-cols-3 border-t border-white/10 pt-7 sm:mt-14 sm:pt-8">
              <div>
                <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  100%
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">
                  Artesanal
                </p>
              </div>

              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  +5
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">
                  Años creando
                </p>
              </div>

              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  ∞
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">
                  Posibilidades
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VALORES */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-7 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:text-xs">
              Lo que nos define
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {valores.map(({ numero, titulo, texto, imagen }) => (
              <article
                key={numero}
                className="group relative bg-[#11110f] p-6 transition-colors duration-300 hover:bg-[#191917] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={imagen}
                    alt=""
                    aria-hidden="true"
                    width={52}
                    height={52}
                    className="h-11 w-11 object-contain opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100 sm:h-12 sm:w-12"
                  />

                  <span className="text-[10px] tracking-[0.2em] text-white/20">
                    {numero}
                  </span>
                </div>

                <div className="mt-10 sm:mt-14">
                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {titulo}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    {texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}