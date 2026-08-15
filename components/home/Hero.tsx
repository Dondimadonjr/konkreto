"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden text-[#f5f1eb]">
      {/* Imagen de fondo */}
      <Image
        src="/image/imagen_plato.jpg"
        alt="Piezas de cemento Konkreto — maceteros y jardineras de diseño"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Oscurecimiento general */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Degradado para proteger el texto */}
      <div className="absolute inset-0 bg-linear-to-r from-black/88 via-black/60 to-black/10" />

      {/* Degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/55 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 py-28 sm:px-6 lg:px-8">
        <div className="w-full max-w-170">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.38em] text-[#aeb99b]">
            Konkreto · Fabricación artesanal
          </p>

          {/* Título */}
          <h1 className="text-[2.4rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Piezas de cemento diseñadas para transformar tus espacios.
          </h1>

          {/* Descripción */}
          <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#e4ded6]/80 md:text-lg">
            Maceteros, jardineras y piezas personalizadas fabricadas con diseño contemporáneo, materiales resistentes y terminaciones pensadas para durar.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#productos"
              className="rounded-full bg-[#f5f1eb] px-6 py-3.5 text-sm font-semibold text-[#111111] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Ver productos
            </a>

            <a
              href="https://wa.me/56972086522?text=Hola,%20quiero%20cotizar%20un%20proyecto%20con%20Konkreto."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#8f9b7c]/60 bg-[#8f9b7c]/25 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#8f9b7c]/90 hover:bg-[#8f9b7c]/40"
            >
              Cotizar proyecto →
            </a>
          </div>

          {/* Categorías informativas */}
          <div className="mt-12 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              { titulo: "Maceteros", subtitulo: "Diseños para interior y exterior" },
              { titulo: "Jardineras", subtitulo: "Medidas estándar y especiales" },
              { titulo: "Personalizados", subtitulo: "Fabricación según tu proyecto" },
            ].map(({ titulo, subtitulo }) => (
              <div
                key={titulo}
                className="rounded-2xl border border-white/12 bg-black/22 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-black/30"
              >
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {titulo}
                </h3>
                <p className="mt-1 text-xs leading-snug text-[#d7d0c8]/70 sm:text-sm">
                  {subtitulo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
