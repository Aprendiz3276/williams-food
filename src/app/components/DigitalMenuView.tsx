import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PageItem {
  id: number;
  image: string;
  title: string;
}

interface DigitalMenuViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalMenuView({ isOpen, onClose }: DigitalMenuViewProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages: PageItem[] = [
    {
      id: 1,
      image: '/menu-1.png',
      title: 'Salchipapas para 2 Personas'
    },
    {
      id: 2,
      image: '/menu-2.png',
      title: 'Salchipapas para 3 ó 4 Personas'
    },
    {
      id: 3,
      image: '/menu-3.png',
      title: 'Súper William\'s'
    },
    {
      id: 4,
      image: '/menu-4.png',
      title: 'Adicionales & Bebidas'
    }
  ];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevPage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage]);

  const goToNextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev + 1) % pages.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goToPrevPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goToPage = (index: number) => {
    if (isTransitioning || index === currentPage) return;
    setIsTransitioning(true);
    setCurrentPage(index);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FF3C00] hover:bg-[#FF5C2A] flex items-center justify-center transition-all shadow-lg z-60 hover:scale-110 active:scale-95"
        aria-label="Cerrar menú"
      >
        <X className="w-7 h-7 text-white" />
      </button>

      {/* Menu Container */}
      <div className="w-full h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 relative">
        {/* Menu Image - Full Page */}
        <div
          className={`w-full max-w-4xl h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center relative overflow-hidden rounded-2xl shadow-2xl transition-opacity duration-400 bg-white/5 border border-white/10 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={currentPage}
            src={pages[currentPage].image}
            alt={pages[currentPage].title}
            className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-400"
            onError={(e) => {
              // Fallback a SVG si PNG no carga
              (e.target as HTMLImageElement).src = pages[currentPage].image.replace('.png', '.svg');
            }}
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 mb-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevPage}
            disabled={isTransitioning}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF3C00] hover:bg-[#FF5C2A] disabled:opacity-50 flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            disabled={isTransitioning}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF3C00] hover:bg-[#FF5C2A] disabled:opacity-50 flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
            aria-label="Página siguiente"
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex items-center gap-3 mt-6">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              disabled={isTransitioning}
              className={`transition-all duration-300 disabled:opacity-70 ${
                idx === currentPage
                  ? 'h-3 w-10 md:w-12 bg-[#FFD700] rounded-full'
                  : 'h-3 w-3 bg-white/40 hover:bg-white/60 rounded-full'
              }`}
              aria-label={`Ir a página ${idx + 1}`}
            />
          ))}
        </div>

        {/* Page Counter */}
        <div className="absolute bottom-6 left-8 md:left-12 text-white/70 text-lg font-semibold">
          <span className="text-[#FFD700]">{currentPage + 1}</span>
          <span> / {pages.length}</span>
        </div>

        {/* Keyboard Hint */}
        <div className="absolute bottom-6 right-8 md:right-12 text-white/50 text-sm hidden md:block">
          <p>⬅️ Anterior | Siguiente ➡️ | ESC Cerrar</p>
        </div>
      </div>
    </div>
  );
}
