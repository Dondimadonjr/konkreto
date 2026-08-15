export type PropiedadAdmin = {
  id: string;
  titulo: string;
  slug?: string;
  descripcion?: string;
  precio?: string;
  categoria?: string;
  sku?: string;
  stock?: number;
  material?: string;
  dimensiones?: string;
  imagen_principal?: string;
  galeria?: string[];
  destacada?: boolean;
  disponible?: boolean;
  created_at?: string;
};
