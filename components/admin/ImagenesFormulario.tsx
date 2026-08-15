import React from "react";

type Props = {
  previews: string[];
  imagenesFormulario: string[];
  imagenPrincipalFormulario: string | null;
  onMarcarImagenPrincipal: (url: string) => void;
  onQuitarImagenActual: (url: string) => void;
};

export default function ImagenesFormulario({
  previews,
  imagenesFormulario,
  imagenPrincipalFormulario,
  onMarcarImagenPrincipal,
  onQuitarImagenActual,
}: Props) {
  return (
    <div className="lg:col-span-2">
      <p className="mb-2 text-sm text-white/40">Previews</p>
      <div className="mb-4 flex gap-3">
        {previews.map((url) => (
          <div key={url} className="relative w-24 rounded-md overflow-hidden">
            <img src={url} alt="preview" className="h-24 w-24 object-cover" />
          </div>
        ))}
      </div>

      <p className="mb-2 text-sm text-white/40">Imágenes actuales</p>
      <div className="flex flex-wrap gap-3">
        {imagenesFormulario.map((url) => (
          <div key={url} className="rounded-md border border-white/10 p-2">
            <img src={url} alt="img" className="h-24 w-24 object-cover" />
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => onMarcarImagenPrincipal(url)}
                className="rounded bg-white/6 px-2 py-1 text-xs"
              >
                Marcar principal
              </button>
              <button
                type="button"
                onClick={() => onQuitarImagenActual(url)}
                className="rounded bg-red-600/40 px-2 py-1 text-xs"
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>

      {imagenPrincipalFormulario && (
        <p className="mt-3 text-sm text-white/40">Imagen principal: {imagenPrincipalFormulario}</p>
      )}
    </div>
  );
}
