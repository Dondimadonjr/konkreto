"use client";

import { useMemo, useState } from "react";

type Categoria = "Personalización" | "Productos" | "Compra y despacho";

type FaqItem = {
  pregunta: string;
  respuesta: string;
  categoria: Categoria;
};

const faqs: FaqItem[] = [
  {
    pregunta: "¿Realizan productos personalizados?",
    respuesta:
      "Sí. Es una de nuestras principales capacidades. Diseñamos y fabricamos piezas a medida según las necesidades de cada proyecto: maceteros, jardineras, bancas y elementos decorativos en dimensiones especiales.",
    categoria: "Personalización",
  },
  {
    pregunta: "¿Puedo solicitar una medida especial?",
    respuesta:
      "Sí. Si la medida que necesitas no corresponde a ninguno de los productos del catálogo, podemos fabricarla a pedido. Compártenos las medidas o referencias y te orientamos.",
    categoria: "Personalización",
  },
  {
    pregunta: "¿Qué productos fabrican?",
    respuesta:
      "Fabricamos maceteros de cemento, jardineras, bancas, platos, bases y piezas decorativas. También desarrollamos productos personalizados para proyectos de arquitectura, paisajismo e interiorismo.",
    categoria: "Productos",
  },
  {
    pregunta: "¿Los productos sirven para exterior?",
    respuesta:
      "Sí. Las piezas están fabricadas con cemento pensado para resistir las condiciones del exterior. Son adecuadas para terrazas, jardines y espacios al aire libre.",
    categoria: "Productos",
  },
  {
    pregunta: "¿Cuánto demora la fabricación?",
    respuesta:
      "El tiempo varía según el tipo de pieza y la cantidad solicitada. Para productos del catálogo los plazos son más cortos; para piezas personalizadas depende del proyecto. Consúltanos directamente para darte un tiempo específico.",
    categoria: "Compra y despacho",
  },
  {
    pregunta: "¿Realizan envíos?",
    respuesta:
      "Coordinamos la entrega según la ubicación y el tipo de pedido. Escríbenos para informarte sobre la disponibilidad de despacho para tu zona.",
    categoria: "Compra y despacho",
  },
  {
    pregunta: "¿Cómo se realiza el pago?",
    respuesta:
      "Los métodos de pago disponibles se coordinan directamente al momento de la cotización. Escríbenos por WhatsApp y te informamos según tu pedido.",
    categoria: "Compra y despacho",
  },
  {
    pregunta: "¿Cuánto cuesta un producto personalizado?",
    respuesta:
      "El precio depende de las dimensiones, el diseño y la cantidad. No tenemos un precio fijo para personalizados. Cuéntanos tu proyecto y te enviamos una cotización.",
    categoria: "Personalización",
  },
  {
    pregunta: "¿Pueden ayudarme a definir las medidas?",
    respuesta:
      "Sí. Podemos orientarte según el espacio disponible, el tipo de planta o el uso que le darás a la pieza. Escríbenos con fotos o referencias y trabajamos contigo.",
    categoria: "Personalización",
  },
];

const CATEGORIAS: Array<Categoria | "Todas"> = [
  "Todas",
  "Personalización",
  "Productos",
  "Compra y despacho",
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
        open
          ? "border-[#8f9b7c] bg-[#8f9b7c]"
          : "border-white/15 bg-white/5 group-hover:border-[#8f9b7c]/50 group-hover:bg-[#8f9b7c]/10"
      }`}
    >
      <span
        className={`absolute h-[1.5px] w-3.5 rounded-full transition-colors duration-300 ${
          open ? "bg-[#0b0b0b]" : "bg-[#f5f1eb]"
        }`}
      />
      <span
        className={`absolute h-3.5 w-[1.5px] rounded-full transition-all duration-300 ${
          open ? "rotate-90 bg-[#0b0b0b] opacity-0" : "bg-[#f5f1eb] opacity-100"
        }`}
      />
    </span>
  );
}

export default function FAQ() {
  const [categoria, setCategoria] = useState<(typeof CATEGORIAS)[number]>("Todas");
  const [abierta, setAbierta] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");

  const faqsFiltradas = useMemo(() => {
    const texto = busqueda.toLowerCase().trim();

    return faqs.filter((item) => {
      const coincideCategoria = categoria === "Todas" || item.categoria === categoria;
      const coincideBusqueda =
        !texto || `${item.pregunta} ${item.respuesta}`.toLowerCase().includes(texto);

      return coincideCategoria && coincideBusqueda;
    });
  }, [busqueda, categoria]);

  function toggle(pregunta: string) {
    setAbierta((prev) => (prev === pregunta ? null : pregunta));
  }

  function cambiarCategoria(nueva: (typeof CATEGORIAS)[number]) {
    setCategoria(nueva);
    setAbierta(null);
  }

  function limpiarBusqueda() {
    setBusqueda("");
    setAbierta(null);
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl scroll-mt-0.5 overflow-hidden px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Glow decorativo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-105 w-105 rounded-full bg-[#8f9b7c]/10 blur-[120px]"
      />

      <div className="relative mb-10 grid gap-8 sm:mb-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-semibold leading-[1.08] text-[#f5f1eb] sm:text-4xl lg:text-5xl">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#a09890] sm:text-base">
            Todo lo que necesitas saber antes de cotizar tu próximo macetero,
            jardinera o pieza personalizada.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <label className="relative block">
            <span className="sr-only">Buscar en preguntas frecuentes</span>
            <span aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8f9b7c]">⌕</span>
            <input
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              placeholder="Buscar una pregunta..."
              className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-10 text-sm text-[#f5f1eb] placeholder:text-white/35 transition focus:border-[#8f9b7c]/60 focus:bg-white/7 focus:outline-none"
            />
            {busqueda && (
              <button
                type="button"
                onClick={limpiarBusqueda}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-white/45 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            )}
          </label>

          <div className="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filtrar preguntas por categoría">
            <div className="flex min-w-max gap-2">
              {CATEGORIAS.map((cat) => {
                const activa = categoria === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => cambiarCategoria(cat)}
                    aria-pressed={activa}
                    className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                      activa
                        ? "border-[#8f9b7c]/60 bg-[#8f9b7c]/15 text-[#dfe8d1]"
                        : "border-white/10 bg-white/3 text-white/50 hover:border-white/20 hover:text-white/85"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
          {faqsFiltradas.length} {faqsFiltradas.length === 1 ? "pregunta" : "preguntas"}
        </p>
        {(busqueda || categoria !== "Todas") && (
          <button type="button" onClick={() => { setCategoria("Todas"); limpiarBusqueda(); }} className="text-xs font-semibold text-[#aeb99b] underline-offset-4 hover:text-white hover:underline">
            Ver todas
          </button>
        )}
      </div>

      {/* Grid de preguntas en cards */}
      <div className="relative grid gap-3 sm:gap-4 lg:grid-cols-2">
        {faqsFiltradas.map((item, index) => {
          const estaAbierto = abierta === item.pregunta;
          const id = `faq-${categoria}-${index}`;

          return (
            <div
              key={item.pregunta}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                estaAbierto
                  ? "border-[#8f9b7c]/40 bg-[#8f9b7c]/[0.07]"
                  : "border-white/8 bg-white/2 hover:border-white/15 hover:bg-white/4"
              }`}
            >
              <button
                type="button"
                aria-expanded={estaAbierto}
                aria-controls={`${id}-respuesta`}
                id={`${id}-pregunta`}
                onClick={() => toggle(item.pregunta)}
                className="flex w-full items-start gap-3 p-4 text-left sm:gap-4 sm:p-6"
              >
                <span className="mt-1 font-mono text-xs text-[#8f9b7c]/70 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] font-medium leading-snug text-[#f5f1eb] sm:text-lg">
                  {item.pregunta}
                </span>
                <ToggleIcon open={estaAbierto} />
              </button>

              <div
                id={`${id}-respuesta`}
                role="region"
                aria-labelledby={`${id}-pregunta`}
                className={`grid transition-all duration-300 ease-out ${
                  estaAbierto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="px-4 pb-5 pl-11 text-sm leading-7 text-[#d7d0c8] sm:px-6 sm:pb-6 sm:pl-14">
                    {item.respuesta}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {faqsFiltradas.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-[#a09890]">
            No hay preguntas en esta categoría todavía.
          </p>
        )}
      </div>

      {/* CTA inferior */}
    <div className="relative mt-8 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-white/8 bg-linear-to-br from-[#8f9b7c]/10 to-transparent px-5 py-5 sm:mt-10 sm:flex-row sm:items-center sm:px-6 sm:text-left">
      <p className="max-w-xl text-sm leading-6 text-[#d7d0c8]">
        ¿Tienes una pregunta que no está aquí? Escríbenos y te respondemos directamente.
      </p>
        <a
          href="https://wa.me/56972086522?text=Hola,%20tengo%20una%20consulta%20sobre%20productos%20Mortarium."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f1eb] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-white"
        >
            Escríbenos por WhatsApp
      </a>
    </div>
    </section>
  );
}