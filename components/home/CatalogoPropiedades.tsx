import PropiedadesFiltro from "@/components/home/PropiedadesFiltro";

type PropiedadCatalogo = {
  id: string;
  titulo: string;
  descripcion: string | null;
  categoria: string;
  sku: string | null;
  slug: string | null;
  precio: string | null;
  stock: number | null;
  material: string | null;
  dimensiones: string | null;
  imagen_principal: string | null;
  galeria: string[] | null;
  destacada: boolean;
  disponible: boolean;
  created_at?: string;
};

type Props = {
  propiedades: PropiedadCatalogo[];
};

export default function CatalogoPropiedades({ propiedades }: Props) {
  return (
    <section id="propiedades" className="relative z-20 mx-auto max-w-7xl overflow-visible px-6 pb-4 pt-10 scroll-mt-20 sm:pt-16">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
            Catálogo
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
            Productos destacados de la colección Konkreto.
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#d7d0c8] sm:text-base">
            Maceteros decorativos, jardineras de cemento, bancas y piezas funcionales con un enfoque premium.
          </p>
        </div>

        <a
          href="https://wa.me/56972086522?text=Hola,%20quiero%20consultar%20por%20productos%20Konkreto."
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full border border-white/15 bg-white/6 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Consultar catálogo
        </a>
      </div>

      <div className="relative z-50 overflow-visible">
        {propiedades.length > 0 ? (
          <PropiedadesFiltro propiedades={propiedades} />
        ) : (
          <div className="rounded-4xl border border-white/10 bg-white/6 p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
              Próximamente
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Nuestra colección se actualizará pronto.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#d7d0c8] sm:text-base">
              Mientras tanto, puedes escribirnos para solicitar maceteros de cemento, jardineras, bancas o productos personalizados.
            </p>
            <a
              href="https://wa.me/56972086522?text=Hola,%20quiero%20consultar%20por%20productos%20de%20cemento%20Konkreto."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#f5f1eb] px-7 py-4 font-semibold text-[#111111] transition hover:-translate-y-0.5"
            >
              Consultar disponibilidad
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
