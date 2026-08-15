import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0b0b0b] px-6 py-12" style={{ zIndex: 1 }}>
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/logos/logoSimple.png"
            alt="Konkreto"
            width={220}
            height={120}
            className="h-16 w-auto object-contain md:h-20"
            priority
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-[#c7c0b7] sm:text-base">
            Fabricación de maceteros de cemento, jardineras, bancas, platos, bases y productos personalizados con diseño premium.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Navegación</h3>
          <div className="mt-5 flex flex-col gap-3 text-[#c7c0b7]">
            <a href="#propiedades" className="transition hover:text-[#8f9b7c]">Productos</a>
            <a href="#categorias" className="transition hover:text-[#8f9b7c]">Categorías</a>
            <a href="#personalizados" className="transition hover:text-[#8f9b7c]">Personalizados</a>
            <a href="#contacto" className="transition hover:text-[#8f9b7c]">Contacto</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contacto</h3>
          <div className="mt-5 flex flex-col gap-4">
            <a href="https://wa.me/56972086522" target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center gap-4 text-[#c7c0b7] transition hover:translate-x-1 hover:text-[#8f9b7c]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:bg-[#8f9b7c] group-hover:text-white">
                <Image src="/Iconos/W-icons.png" alt="WhatsApp" width={22} height={22} className="object-contain" />
              </span>
              <span className="font-medium leading-none">WhatsApp</span>
            </a>

            <a href="mailto:konkreto@ejemplo.com" className="group flex w-full max-w-full items-center gap-4 text-[#c7c0b7] transition hover:translate-x-1 hover:text-[#8f9b7c]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:bg-[#8f9b7c] group-hover:text-white">
                <Image src="/Iconos/E-icons.png" alt="Correo" width={22} height={22} className="object-contain" />
              </span>
              <span className="min-w-0 break-all font-medium leading-snug">konkreto@ejemplo.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#8f9b7c] md:flex-row">
        <p>© {new Date().getFullYear()} Konkreto. Todos los derechos reservados.</p>
        <p className="text-center md:text-right">Maceteros · Jardineras · Productos personalizados</p>
      </div>
    </footer>
  );
}
