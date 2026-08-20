import Image from "next/image";

const CONTACTO = {
  whatsapp: "https://wa.me/56972086522",
  telefono: "+56 9 7208 6522",
  telefonoHref: "tel:+56972086522",
  email: "contacto.mortarium@gmail.com",
};

const REDES = {
  facebook: "https://facebook.com/mortarium",
  instagram: "https://instagram.com/mortarium",
};

const NAV_LINKS: [string, string][] = [
  ["Productos", "#productos"],
  ["Categorías", "#categorias"],
  ["Personalizados", "#personalizados"],
  ["Proceso", "#proceso"],
  ["FAQ", "#faq"],
  ["Contacto", "#contacto"],
];

type IconLinkProps = {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
};

function IconLink({ href, icon, label, external = true }: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-[#8f9b7c]/30 hover:bg-[#8f9b7c]/15"
    >
      <Image
        src={icon}
        alt=""
        aria-hidden="true"
        width={25}
        height={25}
        className="object-contain opacity-90 transition group-hover:opacity-100"
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/8 bg-[url(/Image/BG_concreto5.jpg)] px-5 py-12 sm:px-6 lg:px-8"
      style={{ zIndex: 1 }}
    >
    <div className="absolute inset-0 bg-black/20" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Marca */}
          <div>
            <Image
              src="/Logos/logo_horizontal.png"
              alt="Mortarium"
              width={140}
              height={70}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-lg leading-7 text-black sm:max-w-md">
              Diseñamos y fabricamos piezas de cemento que transforman
              espacios. Maceteros, jardineras, bancas y productos
              personalizados.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-[0.28em] text-black">
              Navegación
            </h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Pie de página">
              {NAV_LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-black transition hover:text-[#8f9b7c]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-[0.28em] text-black">
              Contacto
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={CONTACTO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-2sm text-black transition hover:text-[#8f9b7c]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-[#8f9b7c]/30 group-hover:bg-[#8f9b7c]">
                  <Image
                    src="/Iconos/Whatsapp-icons.png"
                    alt=""
                    aria-hidden="true"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </span>
                WhatsApp
              </a>

              <a
                href={`mailto:${CONTACTO.email}`}
                className="group flex w-fit items-center gap-3 text-2sm text-black transition hover:text-[#8f9b7c]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-[#8f9b7c]/30 group-hover:bg-[#8f9b7c]">
                  <Image
                    src="/Iconos/Email-icons.png"
                    alt=""
                    aria-hidden="true"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </span>
                {CONTACTO.email}
              </a>

              <a
                href={CONTACTO.telefonoHref}
                className="group flex w-fit items-center gap-3 text-2sm text-black transition hover:text-[#8f9b7c]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-[#8f9b7c]/30 group-hover:bg-[#8f9b7c]">
                  <Image
                    src="/Iconos/Telefono-icons.png"
                    alt=""
                    aria-hidden="true"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </span>
                {CONTACTO.telefono}
              </a>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <p className="text-lg font-semibold text-black">Síguenos en redes sociales</p>
              <div className="mt-3 flex gap-3 group-hover:border-[#8f9b7c]/30 hover:bg-[#8f9b7c]">
                <IconLink
                  href={REDES.facebook}
                  icon="/Iconos/Facebook-icons.png"
                  label="Síguenos en Facebook"
                />
                <IconLink
                  href={REDES.instagram}
                  icon="/Iconos/Instagram-icons.png"
                  label="Síguenos en Instagram"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-black sm:flex-row">
          <p>© {new Date().getFullYear()} Mortarium. Todos los derechos reservados.</p>
          <p>Maceteros · Jardineras · Bancas · Productos personalizados</p>
        </div>
      </div>
      
    </footer>
  );
}