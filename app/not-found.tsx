import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 text-white"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 90% 0%, rgba(37,99,235,0.38) 0%, transparent 70%), linear-gradient(180deg, #0a1628 0%, #091525 55%, #060e1a 100%)",
      }}
    >
      <section className="mx-auto max-w-xl rounded-[28px] border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B25E]">
          Error 404
        </p>

        <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
          Página no encontrada
        </h1>

        <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
          La propiedad o página que buscas no está disponible, fue retirada o la
          dirección no es correcta.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#D6B25E] px-6 py-3 text-sm font-bold text-black transition hover:bg-white"
          >
            Volver al inicio
          </Link>

          <Link
            href="/#propiedades"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D6B25E] hover:text-[#D6B25E]"
          >
            Ver propiedades
          </Link>
        </div>
      </section>
    </main>
  );
}