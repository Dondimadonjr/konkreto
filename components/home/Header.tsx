"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [compacto, setCompacto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: [string, string][] = [
    ["Productos", "#productos"],
    ["Categorías", "#categorias"],
    ["Personalizados", "#personalizados"],
    ["Proceso", "#proceso"],
    ["FAQ", "#faq"],
  ];

  useEffect(() => {
    function handleScroll() {
      const debeCompactar = window.scrollY > 24;
      setCompacto((actual) =>
        actual === debeCompactar ? actual : debeCompactar
      );
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAbierto(false);
      }
    }

    if (menuAbierto) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuAbierto]);

  // Cerrar menú y navegar al enlace
  function handleNavClick() {
    setMenuAbierto(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full overflow-visible border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        compacto ? "shadow-[0_12px_40px_rgba(0,0,0,0.35)]" : ""
      }`}
      ref={menuRef}
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/image/BG_concreto1.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />

      {/* Capa oscura */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          compacto ? "bg-[#111]/78" : "bg-[#111]/62"
        }`}
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
              compacto ? "h-11" : "h-12 md:h-14"
            }`}
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[0.95rem] font-semibold tracking-[0.26em] text-[#f5f1eb]">
              KONKRETO
            </span>
            <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#8f9b7c]">
              Diseño en cemento
            </span>
          </span>
        </a>

        {/* Navegación desktop */}
        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/8 bg-black/22 px-1.5 py-1 text-sm text-[#a8b49b] backdrop-blur-md md:flex"
          aria-label="Navegación principal"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 transition duration-200 hover:bg-[#8f9b7c]/80 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/56972086522?text=Hola,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20Konkreto."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#f5f1eb] px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white md:inline-flex"
          >
            Cotizar
          </a>

          {/* Botón hamburguesa mobile */}
          <button
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-full border border-white/15 bg-black/25 backdrop-blur-sm transition hover:bg-black/40 md:hidden"
          >
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuAbierto ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuAbierto ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuAbierto ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`overflow-hidden border-t border-white/8 bg-[#0e0e0e]/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          menuAbierto ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuAbierto}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Menú móvil"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-[#d7d0c8] transition hover:bg-white/6 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/56972086522?text=Hola,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20Konkreto."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-3 rounded-xl bg-[#f5f1eb] px-4 py-3.5 text-center text-base font-semibold text-[#111111] transition hover:bg-white"
          >
            Cotizar →
          </a>
        </nav>
      </div>
    </header>
  );
}