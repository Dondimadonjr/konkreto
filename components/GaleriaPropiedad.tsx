"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  imagenes: string[];
  titulo: string;
};

type Direccion = "next" | "prev";

export default function GaleriaPropiedad({ imagenes, titulo }: Props) {
  const [actual, setActual] = useState(0);
  const [previo, setPrevio] = useState<number | null>(null);
  const [direccion, setDireccion] = useState<Direccion>("next");
  const [animar, setAnimar] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!imagenes || imagenes.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-[#D6B25E]/20 bg-[#081321]/80 p-6 text-white/60 shadow-2xl shadow-black/30 md:rounded-4xl md:p-8">
        Esta propiedad no tiene imágenes disponibles.
      </div>
    );
  }

  const cambiarImagen = (index: number, dir: Direccion = "next") => {
    if (index === actual) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setPrevio(actual);
    setActual(index);
    setDireccion(dir);
    setAnimar(false);

    rafRef.current = requestAnimationFrame(() => {
      setAnimar(true);
    });

    timeoutRef.current = setTimeout(() => {
      setPrevio(null);
      timeoutRef.current = null;
    }, 550);
  };

  const siguiente = () => {
    cambiarImagen(actual === imagenes.length - 1 ? 0 : actual + 1, "next");
  };

  const anterior = () => {
    cambiarImagen(actual === 0 ? imagenes.length - 1 : actual - 1, "prev");
  };

  const irAThumbnail = (index: number) => {
    cambiarImagen(index, index > actual ? "next" : "prev");
  };

  // La imagen saliente se va hacia el lado opuesto de donde viene la entrante
  const saleHacia = direccion === "next" ? "-translate-x-8" : "translate-x-8";
  const entraDesde = direccion === "next" ? "translate-x-8" : "-translate-x-8";

  return (
    <div className="min-w-0 space-y-4">
      <div
        className="relative overflow-hidden rounded-[1.75rem] border-2 border-[#D6B25E] bg-[#081321] shadow-[0_28px_90px_rgba(0,0,0,0.42),0_0_38px_rgba(214,178,94,0.08)] ring-1 ring-white/3 md:rounded-4xl lg:border-3"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;

          const diff = touchStartX.current - e.changedTouches[0].clientX;

          if (diff > 50) siguiente();
          else if (diff < -50) anterior();

          touchStartX.current = null;
        }}
      >
        <div className="relative aspect-16/11 w-full overflow-hidden sm:aspect-16/10 lg:aspect-video">
          {/* Imagen saliente: se desvanece y se desliza levemente hacia el lado opuesto, con leve zoom-out */}
          {previo !== null && (
            <div
              className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                animar ? `opacity-0 scale-95 ${saleHacia}` : "opacity-100 scale-100 translate-x-0"
              }`}
            >
              <Image
                key={imagenes[previo]}
                src={imagenes[previo]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          )}

          {/* Imagen entrante: llega desde el lado correspondiente con fade-in y leve zoom-in */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              previo !== null
                ? animar
                  ? "opacity-100 scale-100 translate-x-0"
                  : `opacity-0 scale-105 ${entraDesde}`
                : "opacity-100 scale-100 translate-x-0"
            }`}
          >
            <Image
              key={imagenes[actual]}
              src={imagenes[actual]}
              alt={`${titulo} - imagen ${actual + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#081321]/45 via-transparent to-black/10" />
        </div>

        {imagenes.length > 1 && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/65 px-4 py-1 text-xs font-semibold text-white backdrop-blur">
            {actual + 1} / {imagenes.length}
          </span>
        )}

        {imagenes.length > 1 && (
          <>
            <button
              type="button"
              onClick={anterior}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6B25E]/20 bg-black/55 text-white shadow-lg shadow-black/2 kdrop-blur transition hover:border-[#D6B25E]/60 hover:bg-[#D6B25E] hover:text-[#07101D] sm:left-4 sm:h-12 sm:w-12"
              aria-label="Imagen anterior"
            >
              {"<"}
            </button>

            <button
              type="button"
              onClick={siguiente}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6B25E]/20 bg-black/55 text-white shadow-lg shadow-black/2 kdrop-blur transition hover:border-[#D6B25E]/60 hover:bg-[#D6B25E] hover:text-[#07101D] sm:right-4 sm:h-12 sm:w-12"
              aria-label="Imagen siguiente"
            >
              {">"}
            </button>
          </>
        )}
      </div>

      {imagenes.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {imagenes.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => irAThumbnail(index)}
              className={`overflow-hidden rounded-2xl border transition ${
                actual === index
                  ? "border-[#D6B25E] opacity-100 shadow-[0_0_22px_rgba(214,178,94,0.16)]"
                  : "border-[#D6B25E]/10 opacity-65 hover:border-[#D6B25E]/40 hover:opacity-100"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <div className="relative aspect-4/3 w-full bg-black/30">
                <Image
                  src={img}
                  alt={`${titulo} ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}