"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden text-[#f5f1eb]">
      {/* Imagen de fondo */}
      <Image
        src="/image/imagen_plato.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Oscurecimiento general */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Degradado para proteger el texto */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/10" />

      {/* Degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/45 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-24 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#aeb99b] sm:text-sm">
            Konkreto · diseño y resistencia
          </p>

          {/* Título */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Maceteros y productos de cemento con diseño y calidad.
          </h1>

          {/* Descripción */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#e4ded6]/85 md:text-lg md:leading-8">
            Fabricamos maceteros, jardineras y productos de cemento
            pensados para durar, con diseños modernos y trabajos
            personalizados según tus necesidades.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#propiedades"
              className="rounded-full bg-[#f5f1eb] px-6 py-3 text-sm font-semibold text-[#111111] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Ver catálogo
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-white/25 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              Solicitar cotización
            </a>
          </div>

          {/* Categorías */}
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["Maceteros", "Diseños premium"],
              ["Jardineras", "Acabados limpios"],
              ["Personalizados", "A medida"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-[1.2rem] border border-white/15 bg-black/25 p-4 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-black/35"
              >
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-[#d7d0c8]/75">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
