"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  options: Option[];
  onChange: (value: string) => void;
  value: string;
};

export default function SelectPro({ label, options, onChange, value }: Props) {
  const [open, setOpen] = useState(false);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const selectRef = useRef<HTMLDivElement | null>(null);

  const selected = options.find((option) => option.value === value);
  const textoSeleccionado = selected?.label || value;
  const texto = open ? textoBusqueda : textoSeleccionado;

  const opcionesFiltradas = useMemo(() => {
    const busqueda = texto.trim().toLowerCase();

    if (!busqueda) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(busqueda)
    );
  }, [texto, options]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`relative w-full ${open ? "z-99999" : "z-10"}`}
    >
      <div
        className={`flex h-12 w-full items-center rounded-xl border border-white/10 bg-transparent px-4 transition ${
          open ? "border-white/25" : "hover:bg-white/5"
        }`}
      >
        <input
          type="text"
          value={texto}
          placeholder={label}
          onFocus={() => {
            setTextoBusqueda("");
            setOpen(true);
          }}
          onChange={(e) => {
            const nuevoTexto = e.target.value;
            setTextoBusqueda(nuevoTexto);
            setOpen(true);
          }}
          className="h-full min-w-0 flex-1 bg-transparent text-sm font-normal text-white outline-none placeholder:text-white/45"
        />

        <button
          type="button"
          onClick={() => {
            setTextoBusqueda("");
            setOpen((prev) => !prev);
          }}
          className="ml-2 text-xs text-white/45 transition"
          aria-label={`Abrir opciones de ${label}`}
        >
          ▼
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-99999 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0D1828]/95 p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.70)] backdrop-blur-xl">
          {opcionesFiltradas.length > 0 ? (
            opcionesFiltradas.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTextoBusqueda(option.label);
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex h-11 w-full items-center rounded-xl px-4 text-left text-sm font-normal transition ${
                  option.value === value
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-white/45">
              Sin resultados
            </div>
          )}
        </div>
      )}
    </div>
  );
}
