"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import ScrollReveal from "@/components/animations/ScrollReveal";
import SelectPro from "@/components/SelectPro";

function obtenerNumeroPrecio(precio: string | null) {
  if (!precio) return null;

  const limpio = precio
    .toString()
    .replace(/\$/g, "")
    .replace(/\./g, "")
    .replace(/,/g, ".")
    .replace(/[^\d.]/g, "")
    .trim();

  if (!limpio) return null;

  return Number(limpio);
}

function formatearCLP(numero: number) {
  return `$ ${new Intl.NumberFormat("es-CL", {
    maximumFractionDigits: 0,
  }).format(numero)}`;
}

type Producto = {
  id: string;
  titulo: string;
  descripcion: string | null;
  categoria: string; // antes 'tipo'
  sku: string | null;
  precio: string | null;
  stock: number | null;
  material: string | null;
  dimensiones: string | null;
  slug: string | null;
  imagen_principal: string | null;
  galeria: string[] | null;
  destacada: boolean;
  disponible: boolean;
  created_at?: string;
};

type Props = {
  propiedades: Producto[];
};

type Filtro = {
  categoria: string;
  material: string;
  precioMaximo: string;
  stockMinimo: string;
};

const DEFAULT_VISIBLE = 6;

const DEFAULT_IMAGE =
  "/image/placeholder-propiedad.jpg";

function normalizarTexto(value: string | null | undefined) {
  return value?.toLowerCase().trim() ?? "";
}

function esEnStock(stock: number | null | undefined) {
  return (stock ?? 0) > 0;
}

function obtenerImagen(propiedad: Producto) {
  return (
    propiedad.imagen_principal ||
    propiedad.galeria?.[0] ||
    DEFAULT_IMAGE
  );
}

function obtenerIdPropiedad(propiedad: Producto) {
  return propiedad.slug || propiedad.id;
}

function ChipDato({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[#D6B25E]/20 bg-white/4 px-3 py-1.5 text-[11px] font-semibold text-white/80 shadow-inner shadow-white/5 sm:text-xs">
      <span className="text-[#D6B25E]/80">{label}</span>
      <span>{value}</span>
    </span>
  );
}

function FiltrosActivos({
  filtro,
  onRemove,
  onClear,
}: {
  filtro: Filtro;
  onRemove: (key: keyof Filtro) => void;
  onClear: () => void;
}) {
  const filtros = [
    { key: "categoria" as const, label: filtro.categoria },
    { key: "material" as const, label: filtro.material },
    {
      key: "stockMinimo" as const,
      label: filtro.stockMinimo ? `Stock ≥ ${filtro.stockMinimo}` : "",
    },
    {
      key: "precioMaximo" as const,
      label: filtro.precioMaximo ? `Hasta $${filtro.precioMaximo}` : "",
    },
  ].filter((item) => item.label);

  if (filtros.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-medium uppercase tracking-[0.16em] text-white/35">
        Filtros:
      </span>

      {filtros.map((filtroActivo) => (
        <button
          key={filtroActivo.key}
          type="button"
          onClick={() => onRemove(filtroActivo.key)}
          className="group inline-flex items-center gap-2 rounded-full border border-[#D6B25E]/25 bg-[#D6B25E]/10 px-3 py-1.5 text-xs font-medium text-[#F6D98B] transition hover:border-[#D6B25E]/50 hover:bg-[#8f9b7c]/20"
        >
          {filtroActivo.label}
          <span className="text-white/40 transition group-hover:text-white">
            ×
          </span>
        </button>
      ))}

      <button
        type="button"
        onClick={onClear}
        className="ml-1 text-xs font-semibold text-white/45 underline-offset-4 transition hover:text-white hover:underline"
      >
        Limpiar
      </button>
    </div>
  );
}

export default function PropiedadesFiltro({
  propiedades,
}: Props) {
  const [filtro, setFiltro] = useState<Filtro>({
    categoria: "",
    material: "",
    precioMaximo: "",
    stockMinimo: "",
  });

  const [orden, setOrden] = useState("recomendadas");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [cantidadVisible, setCantidadVisible] =
    useState(DEFAULT_VISIBLE);

  const propiedadesDisponibles = useMemo(
    () => propiedades.filter((propiedad) => propiedad.disponible !== false),
    [propiedades]
  );

  const propiedadesFiltradas = useMemo(() => {
    const stockMinimo = Number(filtro.stockMinimo || 0);

    const resultado = propiedadesDisponibles.filter((producto) => {
      const categoria = normalizarTexto(producto.categoria);
      const material = normalizarTexto(producto.material);

      if (filtro.categoria && categoria !== normalizarTexto(filtro.categoria)) {
        return false;
      }

      if (filtro.material && !material.includes(normalizarTexto(filtro.material))) {
        return false;
      }

      if (stockMinimo > 0 && (producto.stock ?? 0) < stockMinimo) {
        return false;
      }


      return true;
    });

    return [...resultado].sort((a, b) => {
      switch (orden) {
        case "destacadas":
          if (a.destacada !== b.destacada) return a.destacada ? -1 : 1;
          return obtenerFecha(b) - obtenerFecha(a);

        case "stock":
          return (b.stock ?? 0) - (a.stock ?? 0);

        case "recientes":
          return obtenerFecha(b) - obtenerFecha(a);

        case "mayor-superficie":
          // Not applicable for products; keep original order
          return 0;

        case "recomendadas":
        default:
          if (a.destacada !== b.destacada) return a.destacada ? -1 : 1;
          return 0;
      }
    });
  }, [propiedadesDisponibles, filtro, orden]);

  const propiedadesVisibles =
    propiedadesFiltradas.slice(0, cantidadVisible);

  const cantidadFiltrosActivos = Object.values(filtro).filter(
    Boolean
  ).length;

  function obtenerFecha(propiedad: Producto) {
    return propiedad.created_at
      ? new Date(propiedad.created_at).getTime()
      : 0;
  }

  function actualizarFiltro<K extends keyof Filtro>(
    key: K,
    value: Filtro[K]
  ) {
    setFiltro((prev) => ({
      ...prev,
      [key]: value,
    }));

    setCantidadVisible(DEFAULT_VISIBLE);
  }

  function eliminarFiltro(key: keyof Filtro) {
    actualizarFiltro(key, "");
  }

  function limpiarFiltros() {
    setFiltro({
      categoria: "",
      material: "",
      precioMaximo: "",
      stockMinimo: "",
    });

    setOrden("recomendadas");
    setCantidadVisible(DEFAULT_VISIBLE);
  }

  const campoFiltro =
    "h-12 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm font-normal text-white outline-none placeholder:text-white/35 transition focus:border-[#D6B25E]/45 focus:bg-white/[0.04]";

  return (
    <section className="relative">
      {/* Botón móvil */}
      <div className="mb-4 md:hidden">
        <button
          type="button"
          aria-expanded={mostrarFiltros}
          onClick={() => setMostrarFiltros((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-2xl border border-[#D6B25E]/25 bg-[#0C1727]/90 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D6B25E]/10 text-[#D6B25E]">
              ☰
            </span>

            <span>Filtrar productos</span>

            {cantidadFiltrosActivos > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#D6B25E] px-1.5 text-[10px] font-black text-[#07101D]">
                {cantidadFiltrosActivos}
              </span>
            )}
          </span>

            <span className="text-xl text-[#D6B25E]">
            {mostrarFiltros ? "−" : "+"}
          </span>
        </button>
      </div>

      {/* Panel filtros */}
      <div
        className={[
          "rounded-3xl border border-[#D6B25E]/25 bg-[#0C1727]/90 p-4 shadow-2xl shadow-black/20 backdrop-blur-md transition-all duration-300 md:block md:p-6",
          mostrarFiltros
            ? "block opacity-100"
            : "hidden md:block",
        ].join(" ")}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <SelectPro
            label="Categoría"
            value={filtro.categoria}
            onChange={(value) => actualizarFiltro("categoria", value)}
            options={[
              { label: "Maceteros", value: "maceteros" },
              { label: "Jardineras", value: "jardinera" },
              { label: "Accesorios", value: "accesorios" },
            ]}
          />

          <SelectPro
            label="Material"
            value={filtro.material}
            onChange={(value) => actualizarFiltro("material", value)}
            options={[
              { label: "Cemento", value: "cemento" },
              { label: "Hormigón", value: "hormigon" },
              { label: "Cerámica", value: "ceramica" },
            ]}
          />

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Stock mínimo
            </label>

            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="0"
              value={filtro.stockMinimo}
              onChange={(event) =>
                actualizarFiltro("stockMinimo", event.target.value)
              }
              className={campoFiltro}
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Precio máximo
            </label>

            <input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="Hasta $"
              value={filtro.precioMaximo}
              onChange={(event) =>
                actualizarFiltro("precioMaximo", event.target.value)
              }
              className={campoFiltro}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            {cantidadFiltrosActivos === 0
              ? "Puedes combinar varios filtros para encontrar una propiedad."
              : `${cantidadFiltrosActivos} filtro${
                  cantidadFiltrosActivos > 1 ? "s" : ""
                } aplicado${
                  cantidadFiltrosActivos > 1 ? "s" : ""
                }`}
          </p>

          <button
            type="button"
            onClick={limpiarFiltros}
            className="h-11 rounded-xl border border-[#D6B25E]/20 bg-white px-6 text-sm font-semibold text-[#07101D] transition hover:bg-[#8f9b7c] hover:text-white"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* Filtros activos */}
      <div className="mt-5">
        <FiltrosActivos
          filtro={filtro}
          onRemove={eliminarFiltro}
          onClear={limpiarFiltros}
        />
      </div>

      {/* Barra de resultados */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-white/45">
            <span className="font-semibold text-white">
              {propiedadesFiltradas.length}
            </span>{" "}
            {propiedadesFiltradas.length === 1
              ? "producto encontrado"
              : "productos encontrados"}
          </p>
        </div>

        <div className="w-full sm:w-52">
          <SelectPro
            label="Ordenar por"
            value={orden}
            onChange={(value) => {
              setOrden(value);
              setCantidadVisible(DEFAULT_VISIBLE);
            }}
            options={[
              {
                label: "Recomendadas",
                value: "recomendadas",
              },
              {
                label: "Más recientes",
                value: "recientes",
              },
              {
                label: "Destacadas",
                value: "destacadas",
              },
              {
                label: "Mayor superficie",
                value: "mayor-superficie",
              },
            ]}
          />
        </div>
      </div>

      {/* Sin resultados */}
      {propiedadesFiltradas.length === 0 ? (
        <div className="rounded-4xl border border-white/10 bg-white/3 px-6 py-16 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B25E]/20 bg-[#D6B25E]/10 text-2xl text-[#D6B25E]">
            ⌕
          </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B25E]">
            Sin resultados
          </p>

          <h3 className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            No encontramos productos con esos filtros
          </h3>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/50">
            Prueba ampliando la búsqueda o eliminando alguno
            de los filtros aplicados.
          </p>

          <button
            type="button"
            onClick={limpiarFiltros}
            className="mt-7 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#07101D] transition hover:bg-[#D6B25E]"
          >
            Ver todos los productos
          </button>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {propiedadesVisibles.map((propiedad, index) => {
              const enStock = esEnStock(propiedad.stock);

              return (
                <ScrollReveal
                  key={propiedad.id}
                  className="h-full"
                  delayMs={(index % 6) * 55}
                >
                  <Link
                    href={`/propiedades/${obtenerIdPropiedad(
                      propiedad
                    )}`}
                    aria-label={`Ver ${propiedad.titulo}`}
                    className="group block h-full outline-none"
                  >
                    <article className="flex h-full min-h-130 flex-col overflow-hidden rounded-[1.75rem] border border-[#D6B25E]/15 bg-[#081321]/95 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-500 group-hover:-translate-y-1.5 group-hover:border-[#D6B25E]/55 group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.42)] group-focus-visible:ring-2 group-focus-visible:ring-[#D6B25E]">
                      {/* Imagen */}
                      <div className="relative aspect-4/3 shrink-0 overflow-hidden bg-black/30">
                        <Image
                          src={obtenerImagen(propiedad)}
                          alt={propiedad.titulo}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#081321] via-transparent to-white/10" />

                        {/* Stock */}
                        <div className="absolute left-4 top-4">
                          <span className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] sm:text-xs ${enStock ? 'bg-green-400 text-[#07101D]' : 'bg-gray-600 text-white/90'}`}>
                            {enStock ? 'En stock' : 'Agotado'}
                          </span>
                        </div>

                        {/* Destacada */}
                        {propiedad.destacada && (
                          <div className="absolute right-10.5 top-6 w-40 rotate-45 bg-linear-to-r from-[#B98A2C] via-[#F3D37C] to-[#C99A3D] py-1.5 text-center text-[9px] font-black uppercase tracking-[0.18em] text-[#07101D] shadow-lg shadow-black/30 sm:right-11.25 sm:w-44 sm:text-[10px]">
                            Destacada
                          </div>
                        )}

                        {/* Categoría */}
                        <div className="absolute bottom-4 left-4">
                          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-md">
                            {propiedad.categoria || "Producto"}
                          </span>
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex-1">
                          <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-white sm:text-[1.4rem]">
                            {propiedad.titulo}
                          </h3>

                          <p className="mt-2 line-clamp-1 text-sm text-white/45">
                            {[
                              propiedad.material,
                              propiedad.dimensiones,
                            ]
                              .filter(Boolean)
                              .join(" · ") ||
                              "Detalles a confirmar"}
                          </p>

                          {/* Precio */}
                          <div className="mt-5">
                            <>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B25E]/75">
                                Precio
                              </p>

                              <p className="mt-1 text-3xl font-black tracking-tight text-white">
                                {formatearCLP(
                                  obtenerNumeroPrecio(
                                    propiedad.precio
                                  ) ?? 0
                                )}
                              </p>
                            </>
                          </div>
                        </div>

                        {/* Datos */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          <ChipDato label="SKU" value={propiedad.sku || "—"} />
                          <ChipDato label="Stock" value={propiedad.stock ?? "—"} />
                          <ChipDato label="Material" value={propiedad.material || "—"} />
                          <ChipDato label="Dimensiones" value={propiedad.dimensiones || "—"} />
                        </div>

                        {/* Footer */}
                        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-sm font-semibold text-white/80 transition group-hover:text-white">
                            Ver producto
                          </span>

                          <span
                            aria-hidden="true"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D6B25E]/25 bg-[#D6B25E]/10 text-sm text-[#F6D98B] transition duration-300 group-hover:border-[#D6B25E] group-hover:bg-[#D6B25E] group-hover:text-[#07101D]"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Cargar más */}
          {cantidadVisible <
            propiedadesFiltradas.length && (
            <div className="mt-10 flex justify-center">
                <button
                type="button"
                onClick={() =>
                  setCantidadVisible(
                    (prev) => prev + DEFAULT_VISIBLE
                  )
                }
                className="rounded-full border border-[#D6B25E]/25 bg-white/4 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#D6B25E]/50 hover:bg-[#D6B25E] hover:text-[#07101D]"
              >
                Cargar más productos
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}