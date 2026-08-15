const faqs = [
  {
    pregunta: "¿Realizan trabajos personalizados?",
    respuesta: "Sí. Diseñamos piezas a medida según medidas, estilo y necesidad del proyecto.",
  },
  {
    pregunta: "¿Trabajan con entrega en toda la región?",
    respuesta: "Atendemos según alcance del proyecto y logística disponible para cada pedido.",
  },
  {
    pregunta: "¿Qué tipo de productos fabrican?",
    respuesta: "Maceteros de cemento, jardineras, bancas, platos, bases y elementos decorativos.",
  },
  {
    pregunta: "¿Pueden asesorar en diseño?",
    respuesta: "Sí. Podemos orientar el concepto y los detalles para que el producto encaje con el espacio.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:py-24"
      style={{ zIndex: 1 }}
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f9b7c]">
          Preguntas frecuentes
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-[#f5f1eb] sm:text-4xl">
          Resolvemos dudas sobre diseño, fabricación y personalización.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <div
            key={item.pregunta}
            className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_14px_38px_rgba(0,0,0,0.14)]"
          >
            <h3 className="text-lg font-semibold text-white">{item.pregunta}</h3>
            <p className="mt-3 text-sm leading-7 text-[#d7d0c8]">{item.respuesta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
