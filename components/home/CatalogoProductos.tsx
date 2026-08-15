import ProductosFiltro from "@/components/home/ProductosFiltro";

type ProductoCatalogo = {
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
  productos: ProductoCatalogo[];
};

export default function CatalogoProductos({ productos }: Props) {
  return (
    <section
      id="productos"
      className="relative z-20 mx-auto max-w-7xl scroll-mt-16 overflow-visible px-5 pb-4 pt-16 sm:px-6 sm:pt-20 lg:px-8"
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
          Colección
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
          Colección Konkreto
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#d7d0c8] sm:text-base">
          Una selección de piezas diseñadas para aportar presencia, textura y carácter a tus espacios.
        </p>
      </div>

      <div className="relative z-50 overflow-visible">
        {productos.length > 0 ? (
          <ProductosFiltro propiedades={productos} />
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
