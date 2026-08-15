"use client";

import { useState } from "react";

const faqs: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: "¿Realizan productos personalizados?",
    respuesta:
      "Sí. Es una de nuestras principales capacidades. Diseñamos y fabricamos piezas a medida según las necesidades de cada proyecto: maceteros, jardineras, bancas y elementos decorativos en dimensiones especiales.",
  },
  {
    pregunta: "¿Puedo solicitar una medida especial?",
    respuesta:
      "Sí. Si la medida que necesitas no corresponde a ninguno de los productos del catálogo, podemos fabricarla a pedido. Compártenos las medidas o referencias y te orientamos.",
  },
  {
    pregunta: "¿Qué productos fabrican?",
    respuesta:
      "Fabricamos maceteros de cemento, jardineras, bancas, platos, bases y piezas decorativas. También desarrollamos productos personalizados para proyectos de arquitectura, paisajismo e interiorismo.",
  },
  {
    pregunta: "¿Los productos sirven para exterior?",
    respuesta:
      "Sí. Las piezas están fabricadas con cemento pensado para resistir las condiciones del exterior. Son adecuadas para terrazas, jardines y espacios al aire libre.",
  },
  {
    pregunta: "¿Cuánto demora la fabricación?",
    respuesta:
      "El tiempo varía según el tipo de pieza y la cantidad solicitada. Para productos del catálogo los plazos son más cortos; para piezas personalizadas depende del proyecto. Consúltanos directamente para darte un tiempo específico.",
  },
  {
    pregunta: "¿Realizan envíos?",
    respuesta:
      "Coordinamos la entrega según la ubicación y el tipo de pedido. Escríbenos para informarte sobre la disponibilidad de despacho para tu zona.",
  },
  {
    pregunta: "¿Cómo se realiza el pago?",
    respuesta:
      "Los métodos de pago disponibles se coordinan directamente al momento de la cotización. Escríbenos por WhatsApp y te informamos según tu pedido.",
  },
  {
    pregunta: "¿Cuánto cuesta un producto personalizado?",
    respuesta:
      "El precio depende de las dimensiones, el diseño y la cantidad. No tenemos un precio fijo para personalizados. Cuéntanos tu proyecto y te enviamos una cotización.",
  },
  {
    pregunta: "¿Pueden ayudarme a definir las medidas?",
    respuesta:
      "Sí. Podemos orientarte según el espacio disponible, el tipo de planta o el uso que le darás a la pieza. Escríbenos con fotos o referencias y trabajamos contigo.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 text-[#8f9b7c] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);

  function toggle(index: number) {
    setAbierto((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-[#8f9b7c]">
          Preguntas frecuentes
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
          Resolvemos tus dudas
        </h2>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-white/8">
        {faqs.map((item, index) => {
          const estaAbierto = abierto === index;
          return (
            <div key={item.pregunta}>
              <button
                type="button"
                aria-expanded={estaAbierto}
                aria-controls={`faq-respuesta-${index}`}
                id={`faq-pregunta-${index}`}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-white"
              >
                <span className="text-base font-medium text-[#f5f1eb] sm:text-lg">
                  {item.pregunta}
                </span>
                <ChevronIcon open={estaAbierto} />
              </button>

              <div
                id={`faq-respuesta-${index}`}
                role="region"
                aria-labelledby={`faq-pregunta-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  estaAbierto ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-5 text-sm leading-7 text-[#d7d0c8] sm:text-base">
                  {item.respuesta}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA inferior */}
      <div className="mt-10 rounded-2xl border border-white/8 bg-white/3 p-6 text-center">
        <p className="text-sm text-[#d7d0c8]">
          ¿Tienes una pregunta que no está aquí?{" "}
          <a
            href="https://wa.me/56972086522?text=Hola,%20tengo%20una%20consulta%20sobre%20productos%20Konkreto."
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#8f9b7c] underline-offset-4 transition hover:text-[#aeb99b] hover:underline"
          >
            Escríbenos por WhatsApp.
          </a>
        </p>
      </div>
    </section>
  );
}
