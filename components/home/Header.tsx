"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [compacto, setCompacto] = useState(false);

  const navItems = [
    ["Productos", "#propiedades"],
    ["Categorías", "#categorias"],
    ["Personalizados", "#personalizados"],
    ["Contacto", "#contacto"],
  ];

  useEffect(() => {
    function handleScroll() {
      const debeCompactar = window.scrollY > 24;

      setCompacto((actual) =>
        actual === debeCompactar ? actual : debeCompactar
      );
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full overflow-hidden border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        compacto
          ? "shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          : ""
      }`}
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/image/BG_concreto1.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />

      {/* Capa oscura para mejorar legibilidad */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          compacto
            ? "bg-[#111]/75"
            : "bg-[#111]/60"
        }`}
        aria-hidden="true"
      />

      {/* Capa de degradado */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/20 via-transparent to-black/30"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-6">
        {/* Logo */}
        <a
          href="#"
          aria-label="Ir al inicio de Konkreto"
          className="flex items-center gap-3 transition hover:opacity-85"
        >
          <Image
            src="/logos/favicon.png"
            alt="Konkreto"
            width={160}
            height={80}
            className={`w-auto object-contain transition-all duration-300 ${
              compacto
                ? "h-12"
                : "h-14 md:h-16"
            }`}
            priority
          />

          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[0.95rem] font-semibold tracking-[0.26em] text-[#f5f1eb]">
              KONKRETO
            </span>

            <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#8f9b7c]">
              Cemento diseño
            </span>
          </span>
        </a>

        {/* Navegación */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/5 bg-black/20 px-1.5 py-1 text-sm text-[#8f9b7c] backdrop-blur-md md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 transition hover:bg-[#8f9b7c] hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/56972086522?text=Hola,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20Konkreto."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#8f9b7c]/35 bg-[#f5f1eb] px-4 py-2 text-sm font-semibold text-[#111111] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#8f9b7c] hover:text-white"
        >
          Cotizar
        </a>
      </div>
    </header>
  );
}