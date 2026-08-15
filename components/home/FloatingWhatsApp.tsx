import Image from "next/image";
import facebook from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/56972086522"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#f5f1eb] shadow-[0_14px_40px_rgba(0,0,0,0.24)] transition hover:scale-105"
    >
      <Image
        src="/Iconos/W-icons.png"
        alt=""
        aria-hidden="true"
        width={30}
        height={30}
        className="h-7 w-7 object-contain"
      />
    </a>
  );
}
