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
  categoria: string;
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
  precio: string;
};

const DEFAULT_VISIBLE = 6;

const DEFAULT_IMAGE = "/image/BG_concreto2.jpg";

function normalizarTexto(value: string | null | undefined) {
  return value?.toLowerCase().trim() ?? "";
}

function esEnStock(stock: number | null | undefined) {
  return (stock ?? 0) > 0;
}

function obtenerImagen(producto: Producto) {
  return (
    producto.imagen_principal ||
    producto.galeria?.[0] ||
    DEFAULT_IMAGE
  );
}

function obtenerIdProducto(producto: Producto) {
  return producto.slug || producto.id;
}

function FiltroActivo({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-lg border border-[#8f9b7c]/30 bg-[#8f9b7c]/10 px-2.5 py-1.5 text-xs font-medium capitalize text-[#dfe8d1] transition hover:border-[#8f9b7c]/60 hover:bg-[#8f9b7c]/20"
      aria-label={`Quitar filtro ${label}`}
    >
      {label}
      <span aria-hidden="true" className="text-sm leading-none text-[#aeb99b]">×</span>
    </button>
  );
}

export default function ProductosFiltro({ propiedades }: Props) {
  const [filtro, setFiltro] = useState<Filtro>({
    categoria: "",
    material: "",
    precio: "",
  });

  const [orden, setOrden] = useState("recomendadas");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [cantidadVisible, setCantidadVisible] = useState(DEFAULT_VISIBLE);

  const productosDisponibles = useMemo(
    () => propiedades.filter((p) => p.disponible !== false),
    [propiedades]
  );

  const productosFiltrados = useMemo(() => {
    

    const resultado = productosDisponibles.filter((producto) => {
      const categoria = normalizarTexto(producto.categoria);
      const material = normalizarTexto(producto.material);

      if (filtro.categoria && categoria !== normalizarTexto(filtro.categoria)) {
        return false;
      }

      if (filtro.material && !material.includes(normalizarTexto(filtro.material))) {
        return false;
      }

      const precio = obtenerNumeroPrecio(producto.precio);
      if (filtro.precio === "hasta-60000" && (precio === null || precio > 60000)) {
        return false;
      }

      if (
        filtro.precio === "60000-100000" &&
        (precio === null || precio < 60000 || precio > 100000)
      ) {
        return false;
      }

      if (filtro.precio === "desde-100000" && (precio === null || precio < 100000)) {
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

        case "precio-menor":
          return (obtenerNumeroPrecio(a.precio) ?? Infinity) -
            (obtenerNumeroPrecio(b.precio) ?? Infinity);

        case "precio-mayor":
          return (obtenerNumeroPrecio(b.precio) ?? -Infinity) -
            (obtenerNumeroPrecio(a.precio) ?? -Infinity);

        case "recomendadas":
        default:
          if (a.destacada !== b.destacada) return a.destacada ? -1 : 1;
          return 0;
      }
    });
  }, [productosDisponibles, filtro, orden]);

  const productosVisibles = productosFiltrados.slice(0, cantidadVisible);

  const cantidadFiltrosActivos = Object.values(filtro).filter(Boolean).length;

  function obtenerFecha(producto: Producto) {
    return producto.created_at
      ? new Date(producto.created_at).getTime()
      : 0;
  }

  function actualizarFiltro<K extends keyof Filtro>(key: K, value: Filtro[K]) {
    setFiltro((prev) => ({ ...prev, [key]: value }));
    setCantidadVisible(DEFAULT_VISIBLE);
  }

  function limpiarFiltros() {
    setFiltro({ categoria: "", material: "", precio: "" });
    setOrden("recomendadas");
    setCantidadVisible(DEFAULT_VISIBLE);
  }

  return (
    <section className="relative">
      {/* Barra de herramientas */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-[#171715] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-4">
        <div className="flex flex-wrap items-center gap-3">
        {/* Toggle filtros */}
        <button
          type="button"
          aria-expanded={mostrarFiltros}
          onClick={() => setMostrarFiltros((prev) => !prev)}
          className={`flex h-11 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition ${
            mostrarFiltros || cantidadFiltrosActivos > 0
              ? "border-[#8f9b7c]/60 bg-[#8f9b7c]/15 text-[#dfe8d1]"
              : "border-white/12 bg-white/5 text-[#d7d0c8] hover:border-white/22 hover:bg-white/10"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Filtrar</span>
          {cantidadFiltrosActivos > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#8f9b7c] px-1 text-[10px] font-bold text-white">
              {cantidadFiltrosActivos}
            </span>
          )}
        </button>

        {/* Ordenar — siempre visible */}
        <div className="w-full sm:w-52">
          <SelectPro
            label="Ordenar"
            value={orden}
            onChange={(value) => {
              setOrden(value);
              setCantidadVisible(DEFAULT_VISIBLE);
            }}
            options={[
              { label: "Recomendados", value: "recomendadas" },
              { label: "Más recientes", value: "recientes" },
              { label: "Destacados", value: "destacadas" },
              { label: "Precio: menor a mayor", value: "precio-menor" },
              { label: "Precio: mayor a menor", value: "precio-mayor" },
              { label: "Mayor disponibilidad", value: "stock" },
            ]}
          />
        </div>

        {/* Resultado y limpiar */}
        <div className="ml-auto flex items-center gap-3 px-1 text-sm text-white/45">
          <span>
            <span className="font-semibold text-white/80">
              {productosFiltrados.length}
            </span>{" "}
            {productosFiltrados.length === 1 ? "pieza" : "piezas"}
          </span>
          {cantidadFiltrosActivos > 0 && (
            <button
              type="button"
              onClick={limpiarFiltros}
              className="text-xs font-medium text-[#8f9b7c] underline-offset-4 transition hover:text-white hover:underline"
            >
              Limpiar
            </button>
          )}
        </div>
        </div>

        {cantidadFiltrosActivos > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/8 px-1 pt-3">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              Filtros activos
            </span>
            {filtro.categoria && <FiltroActivo label={filtro.categoria} onRemove={() => actualizarFiltro("categoria", "")} />}
            {filtro.material && <FiltroActivo label={filtro.material} onRemove={() => actualizarFiltro("material", "")} />}
            {filtro.precio && (
              <FiltroActivo
                label={filtro.precio === "hasta-60000" ? "Hasta $60.000" : filtro.precio === "60000-100000" ? "$60.000 - $100.000" : "Desde $100.000"}
                onRemove={() => actualizarFiltro("precio", "")}
              />
            )}
          </div>
        )}
      </div>

      {/* Panel filtros colapsable */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          mostrarFiltros ? "mb-6 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-[#191916] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f9b7c]">Personaliza tu búsqueda</p>
              <p className="mt-1 text-sm text-white/45">Combina los criterios para encontrar la pieza ideal.</p>
            </div>
            {cantidadFiltrosActivos > 0 && (
              <button type="button" onClick={limpiarFiltros} className="shrink-0 text-xs font-semibold text-white/50 underline-offset-4 hover:text-white hover:underline">
                Restablecer
              </button>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SelectPro
              label="Categoría"
              value={filtro.categoria}
              onChange={(value) => actualizarFiltro("categoria", value)}
              options={[
                { label: "Maceteros", value: "maceteros" },
                { label: "Jardineras", value: "jardineras" },
                { label: "Accesorios", value: "accesorios" },
              ]}
            />

            <SelectPro
              label="Material"
              value={filtro.material}
              onChange={(value) => actualizarFiltro("material", value)}
              options={[
                { label: "Cemento", value: "cemento" },
                { label: "Hormigón", value: "hormigón" },
              ]}
            />

            <SelectPro
              label="Precio"
              value={filtro.precio}
              onChange={(value) => actualizarFiltro("precio", value)}
              options={[
                { label: "Todos los precios", value: "" },
                { label: "Hasta $60.000", value: "hasta-60000" },
                { label: "$60.000 - $100.000", value: "60000-100000" },
                { label: "Desde $100.000", value: "desde-100000" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Sin resultados */}
      {productosFiltrados.length === 0 ? (
        <div className="rounded-4xl border border-white/10 bg-white/4 px-6 py-16 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f9b7c]">
            Sin resultados
          </p>
          <h3 className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            No encontramos productos con esos filtros
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/50">
            Prueba ampliando la búsqueda o eliminando alguno de los filtros aplicados.
          </p>
          <button
            type="button"
            onClick={limpiarFiltros}
            className="mt-7 rounded-full bg-[#f5f1eb] px-7 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-white"
          >
            Ver todos los productos
          </button>
        </div>
      ) : (
        <>
          {/* Grid de productos */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productosVisibles.map((producto, index) => {
              const enStock = esEnStock(producto.stock);
              const precioNumero = obtenerNumeroPrecio(producto.precio);

              return (
                <ScrollReveal
                  key={producto.id}
                  className="h-full"
                  delayMs={(index % 6) * 60}
                >
                  <Link
                    href={`/productos/${obtenerIdProducto(producto)}`}
                    aria-label={`Ver ${producto.titulo}`}
                    className="group block h-full outline-none"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-[#8f9b7c]/20 transition duration-400 group-hover:-translate-y-1 group-hover:border-white/22 group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#8f9b7c]">
                      {/* Imagen */}
                      <div className="relative aspect-4/3 shrink-0 overflow-hidden bg-black/20">
                        <Image
                          src={obtenerImagen(producto)}
                          alt={producto.titulo}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition duration-600 group-hover:scale-[1.05]"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#141414]/60 via-transparent to-transparent" />

                        {/* Categoría */}
                        <div className="absolute bottom-3 left-3">
                          <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                            {producto.categoria || "Producto"}
                          </span>
                        </div>

                        {/* Estado stock — sutil */}
                        {!enStock && (
                          <div className="absolute right-3 top-3">
                            <span className="rounded-full bg-black/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm">
                              Agotado
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Contenido */}
                      <div className="flex flex-1 flex-col p-5">
                        {/* Nombre */}
                        <h3 className="text-lg font-semibold leading-tight text-white transition group-hover:text-[#f5f1eb] sm:text-xl">
                          {producto.titulo}
                        </h3>

                        {/* Material y dimensiones */}
                        <p className="mt-2 text-sm text-white/45">
                          {[producto.material, producto.dimensiones]
                            .filter(Boolean)
                            .join(" · ") || "Consultar detalles"}
                        </p>

                        {/* Precio */}
                        <div className="mt-5 flex-1">
                          {precioNumero !== null ? (
                            <p className="text-2xl font-semibold tracking-tight text-white">
                              {formatearCLP(precioNumero)}
                            </p>
                          ) : (
                            <p className="text-sm text-white/45">
                              Precio a consultar
                            </p>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                          <span className="text-sm font-medium text-[#8f9b7c] transition duration-200 group-hover:text-[#aeb99b]">
                            Ver producto
                          </span>
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm text-white/70 transition duration-300 group-hover:border-[#8f9b7c]/60 group-hover:bg-[#8f9b7c]/20 group-hover:text-[#aeb99b]"
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
          {cantidadVisible < productosFiltrados.length && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setCantidadVisible((prev) => prev + DEFAULT_VISIBLE)
                }
                className="rounded-full border border-white/12 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/10"
              >
                Ver más productos
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}