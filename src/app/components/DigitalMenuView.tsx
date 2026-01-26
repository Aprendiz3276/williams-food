import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

interface MenuItem {
  src: string;
  title: string;
  description: string;
  subtitle?: string;
}

interface DigitalMenuViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalMenuView({ isOpen, onClose }: DigitalMenuViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const menuItems: MenuItem[] = [
    {
      src: '/menu-1.svg',
      title: 'Salchipapas para 2',
      subtitle: 'PARA 2 PERSONAS',
      description: 'Deliciosas combinaciones de salchipapas para compartir'
    },
    {
      src: '/menu-2.svg',
      title: 'Salchipapas para 3 ó 4',
      subtitle: 'PARA 3 Ó 4 PERSONAS',
      description: 'Nuestras especialidades de la casa'
    },
    {
      src: '/menu-3.svg',
      title: 'Súper William\'s y Tostadas',
      subtitle: 'PLATOS PRINCIPALES',
      description: 'Nuestros platos más populares'
    },
    {
      src: '/menu-4.svg',
      title: 'Adicionales & Bebidas',
      subtitle: 'COMPLEMENTOS',
      description: 'Personaliza tu pedido con nuestros complementos'
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % menuItems.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-black shadow-2xl shadow-[#FF3C00]/50 animate-in scale-in-95 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FF3C00] to-[#FFD700] px-6 md:px-8 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Menú Digital
            </h2>
            <p className="text-white/90 text-sm mt-1">Williams Food - Disfruta nuestras especialidades</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden grid md:grid-cols-3 gap-0">
          {/* Main image viewer */}
          <div className="md:col-span-2 flex flex-col items-center justify-center bg-black/50 p-6 md:p-10">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
              {/* Image with fade transition */}
              <img
                src={menuItems[activeIndex].src}
                alt={menuItems[activeIndex].title}
                className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-300 ${
                  isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}
              />

              {/* Navigation buttons - Desktop */}
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-colors border border-white/20"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-colors border border-white/20"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Info box */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {menuItems[activeIndex].title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{menuItems[activeIndex].description}</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs bg-[#FF3C00] text-white px-3 py-1 rounded-full font-semibold">
                    {activeIndex + 1} / {menuItems.length}
                  </span>
                  <span className="text-xs bg-[#FFD700]/20 text-[#FFD700] px-3 py-1 rounded-full font-semibold">
                    {menuItems[activeIndex].subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with thumbnails */}
          <div className="md:col-span-1 bg-gradient-to-b from-[#1a1a1a] to-black border-l border-white/10 flex flex-col">
            {/* Thumbnails */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-lg overflow-hidden transition-all duration-300 border ${
                    activeIndex === index
                      ? 'border-[#FFD700] shadow-lg shadow-[#FFD700]/30 ring-2 ring-[#FF3C00]/50'
                      : 'border-white/10 hover:border-white/20'
                  } flex flex-col bg-white/5 hover:bg-white/10`}
                >
                  <div className="relative h-20 overflow-hidden bg-black/50">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {activeIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3C00]/20 to-[#FFD700]/20" />
                    )}
                  </div>
                  <div className="p-2 text-left">
                    <div className="text-xs font-bold text-white leading-tight line-clamp-2">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-white/60 mt-1">{item.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="p-4 space-y-2 border-t border-white/10">
              <a
                href="https://wa.me/573167226947"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#FF3C00] to-[#FFD700] text-white font-bold shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <ShoppingCart className="w-4 h-4" />
                Hacer pedido
              </a>
              <button
                onClick={onClose}
                className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 font-semibold transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden flex items-center justify-between gap-3 bg-black/50 p-4 border-t border-white/10">
          <button
            onClick={prevSlide}
            className="flex-1 py-3 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-white/70 text-sm font-semibold">
              {activeIndex + 1} / {menuItems.length}
            </span>
          </div>
          <button
            onClick={nextSlide}
            className="flex-1 py-3 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
