import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

  // Use public SVG placeholders
  const images = [
    '/menu-1.svg',
    '/menu-2.svg',
    '/menu-3.svg',
    '/menu-4.svg',
  ];

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, images.length]);

  useEffect(() => {
    const imgNode = imageRefs.current[index];
    if (imgNode) imgNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [index]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Menú Digital - pantalla completa"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-40">
          <div className="text-white/90 font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Menú Digital
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIndex((i) => Math.min(i + 1, images.length - 1))}
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* Main images - full height */}
          <div className="flex-1 h-full overflow-hidden flex items-center justify-center">
            <div
              ref={containerRef}
              className="w-full h-full flex items-center justify-center overflow-x-auto scroll-smooth snap-x snap-mandatory"
            >
              {images.map((src, i) => (
                <div
                  key={src}
                  id={`menu-img-${i}`}
                  className={`flex-shrink-0 snap-center w-full h-full flex items-center justify-center p-6 md:p-10 transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-30'}`}
                >
                  <img
                    ref={(el) => (imageRefs.current[i] = el)}
                    src={src}
                    alt={`Menú página ${i + 1}`}
                    className="max-w-full max-h-[92vh] object-contain rounded-lg shadow-2xl bg-black/60"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnails / sidebar - visible on md+ */}
          <aside className="hidden md:flex md:flex-col md:w-80 lg:w-96 bg-gradient-to-t from-black/30 to-transparent p-4 gap-4 overflow-y-auto">
            <div className="text-white/90 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Galería
            </div>

            <div className="flex-1 space-y-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  className={`w-full rounded-lg overflow-hidden border ${i === index ? 'border-[#FFD700] shadow-lg' : 'border-white/10'} bg-white/5 flex items-center gap-3 p-2 transition`}
                >
                  <img
                    src={src}
                    alt={`mini ${i + 1}`}
                    className="w-20 h-16 object-cover rounded-md"
                  />
                  <div className="text-left">
                    <div className="text-sm text-white font-semibold">Página {i + 1}</div>
                    <div className="text-xs text-white/60">Toca para ver</div>
                  </div>
                </button>
              ))}
            </div>

            <div>
              <a
                href="https://wa.me/573167226947"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#FF3C00] to-[#FFD700] text-white font-semibold shadow-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Hacer pedido por WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}