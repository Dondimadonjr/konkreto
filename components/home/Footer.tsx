import Image from "next/image";

export default function Footer() {
  const whatsappUrl = "https://wa.me/56972086522";

  return (
    <footer
      className="relative border-t border-white/8 bg-[#0b0b0b] px-5 py-12 sm:px-6 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Marca */}
          <div>
            <Image
              src="/logos/favicon.png"
              alt="Konkreto"
              width={140}
              height={70}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#a09890]">
              Diseñamos y fabricamos piezas de cemento que transforman espacios. Maceteros, jardineras, bancas y productos personalizados.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5f1eb]">
              Navegación
            </h3>
            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Pie de página"
            >
              {[
                ["Productos", "#productos"],
                ["Categorías", "#categorias"],
                ["Personalizados", "#personalizados"],
                ["Proceso", "#proceso"],
                ["FAQ", "#faq"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-[#a09890] transition hover:text-[#8f9b7c]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5f1eb]">
              Contacto
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-[#a09890] transition hover:text-[#8f9b7c]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-[#8f9b7c]/30 group-hover:bg-[#8f9b7c]/15">
                  <Image
                    src="/Iconos/W-icons.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </span>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Redes sociales si existen en el futuro */}
            <div className="mt-8">
              <p className="text-xs text-[#6e6860]">
                Síguenos en redes sociales
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram de Konkreto (próximamente)"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#6e6860] transition hover:border-white/20 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-[#6e6860] sm:flex-row">
          <p>© {new Date().getFullYear()} Konkreto. Todos los derechos reservados.</p>
          <p>Maceteros · Jardineras · Bancas · Productos personalizados</p>
        </div>
      </div>
    </footer>
  );
}
