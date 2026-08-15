import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-5 text-[#f5f1eb]"
      style={{
        background:
          "linear-gradient(180deg, #111111 0%, #0e0e0e 100%)",
      }}
    >
      <section className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/4  p-8 text-center backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8f9b7c]">
          Error 404
        </p>

        <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
          Página no encontrada
        </h1>

        <p className="mt-4 text-sm leading-6 text-[#d7d0c8] sm:text-base">
          El producto o página que buscas no está disponible o la dirección no es correcta.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#f5f1eb] px-6 py-3 text-sm font-semibold text-[#111111] transition hover:bg-white"
          >
            Volver al inicio
          </Link>

          <Link
            href="/#productos"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Ver productos
          </Link>
        </div>
      </section>
    </main>
  );
}