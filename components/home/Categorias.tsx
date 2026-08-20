"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Sprout,
  Trees,
  Armchair,
  CircleDot,
  Layers,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Categoria = {
  numero: string;
  titulo: string;
  texto: string;
  href: string;
  imagen: string;
  icono: LucideIcon;
};

const categorias: Categoria[] = [
  {
    numero: "01",
    titulo: "Maceteros",
    texto: "Piezas que convierten una planta en protagonista.",
    href: "#contacto",
    imagen: "/Image/macetero.jpg",
    icono: Sprout,
  },
  {
    numero: "02",
    titulo: "Jardineras",
    texto: "Soluciones de gran formato para terrazas y jardines.",
    href: "#contacto",
    imagen: "/Image/jardinera.jpg",
    icono: Trees,
  },
  {
    numero: "03",
    titulo: "Bancas",
    texto: "Diseño y resistencia para espacios exteriores.",
    href: "#contacto",
    imagen: "/Image/banca.png",
    icono: Armchair,
  },
  {
    numero: "04",
    titulo: "Platos",
    texto: "Detalles funcionales que completan cada pieza.",
    href: "#contacto",
    imagen: "/Image/plato.png",
    icono: CircleDot,
  },
  {
    numero: "05",
    titulo: "Esferas y bases",
    texto: "Volumen, proporción y presencia para tus espacios.",
    href: "#contacto",
    imagen: "/Image/esfera.png",
    icono: Layers,
  },
  {
    numero: "06",
    titulo: "cilindros",
    texto: "Piezas que aportan carácter y textura al entorno.",
    href: "#contacto",
    imagen: "/Image/cilindro.png",
    icono: Sparkles,
  },
  {
    numero: "07",
    titulo: "Personalizados",
    texto: "Creamos piezas según las necesidades de tu proyecto.",
    href: "#personalizados",
    imagen: "/Image/personalizados.jpg",
    icono: Wrench,
  },
];

const DOT_COUNT = 4;

export default function Categorias() {
  const [activo, setActivo] = useState(0);
  const [dotActivo, setDotActivo] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const categoria = categorias[activo];
  const Icono = categoria.icono;

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const ratio = el.scrollLeft / maxScroll;
    const index = Math.min(
      DOT_COUNT - 1,
      Math.round(ratio * (DOT_COUNT - 1))
    );
    setDotActivo(index);
  }

  return (
    <section
      id="categorias"
      className="relative mx-auto max-w-7xl scroll-mt-0.5 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
            Categorías
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Lo que fabricamos
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#d7d0c8] sm:text-base">
          Cada línea está pensada para un uso específico. Si no encuentras lo
          que buscas, lo fabricamos a medida.
        </p>
      </div>

      {/* Tabs horizontales */}
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="scrollbar-none -mx-5 mb-3 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
        style={{ scrollSnapType: "x proximity" }}
      >
        {categorias.map((cat, index) => {
          const CatIcono = cat.icono;
          const isActive = index === activo;
          return (
            <button
              key={cat.titulo}
              onClick={() => setActivo(index)}
              style={{ scrollSnapAlign: "start" }}
              className={[
                "flex w-[92px] shrink-0 flex-col items-center gap-2.5 rounded-2xl border px-3 py-4 text-center transition duration-300",
                isActive
                  ? "border-[#8f9b7c]/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(143,155,124,0.35),0_0_24px_rgba(143,155,124,0.25)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
              ].join(" ")}
            >
              <CatIcono
                className={[
                  "h-6 w-6 transition-colors duration-300",
                  isActive ? "text-[#f5f1eb]" : "text-[#d7d0c8]/70",
                ].join(" ")}
                strokeWidth={1.5}
              />
              <span
                className={[
                  "text-xs font-medium leading-tight transition-colors duration-300",
                  isActive ? "text-[#f5f1eb]" : "text-[#d7d0c8]/80",
                ].join(" ")}
              >
                {cat.titulo}
              </span>
            </button>
          );
        })}
      </div>

      {/* Indicador de puntos */}
      <div className="mb-8 flex items-center gap-1.5">
        {Array.from({ length: DOT_COUNT }).map((_, index) => (
          <span
            key={index}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              index === dotActivo
                ? "w-6 bg-[#d7d0c8]"
                : "w-1.5 bg-[#d7d0c8]/30",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Card destacada de la categoría activa */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="relative aspect-[4/5] w-full max-w-[280px] shrink-0 overflow-hidden rounded-3xl shadow-[0_0_0_1px_rgba(143,155,124,0.25),0_0_40px_rgba(143,155,124,0.18)] sm:w-2/5">
          <Image
            src={categoria.imagen}
            alt={categoria.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </div>

        <h3 className="text-3xl font-semibold text-[#f5f1eb] sm:text-5xl">
          {categoria.titulo}
        </h3>
      </div>

      <div className="mt-6 max-w-xl">
        <p className="text-base leading-7 text-[#d7d0c8] sm:text-lg">
          {categoria.texto}
        </p>

        <a
          href={categoria.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#8f9b7c] transition duration-200 hover:gap-2.5 hover:text-[#aeb99b]"
        >
          Consultar
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}