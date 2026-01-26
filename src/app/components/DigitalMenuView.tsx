import { useState } from 'react';
import { X } from 'lucide-react';

interface MenuSection {
  id: number;
  image: string;
  title: string;
}

interface DigitalMenuViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalMenuView({ isOpen, onClose }: DigitalMenuViewProps) {
  const sections: MenuSection[] = [
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex flex-col overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="sticky top-6 right-6 w-12 h-12 rounded-full bg-[#FF3C00] hover:bg-[#FF5C2A] flex items-center justify-center transition-all shadow-lg z-60 hover:scale-110 active:scale-95 ml-auto mr-6"
        aria-label="Cerrar menú"
      >
        <X className="w-7 h-7 text-white" />
      </button>

      {/* Menu Container */}
      <div
        className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-8 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            MENÚ DIGITAL
          </h1>
          <p className="text-[#FFD700] text-lg md:text-xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Williams Food - Disfruta nuestras especialidades
          </p>
        </div>

        {/* Menu Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFD700]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF3C00]/50"
            >
              {/* Image */}
              <div className="w-full aspect-square relative overflow-hidden bg-black/50">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <div className="w-full p-4 md:p-6 text-center border-t border-white/10">
                <h2
                  className="text-xl md:text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {section.title}
                </h2>
                <div className="flex gap-2 justify-center">
                  <span className="text-xs bg-[#FF3C00]/80 text-white px-3 py-1 rounded-full font-semibold">
                    Sección {section.id} / {sections.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/10 mt-8">
          <p className="text-white/70 text-sm md:text-base mb-4">
            Para hacer tu pedido, contacta con nosotros
          </p>
          <a
            href="https://wa.me/573167226947"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#FF3C00] to-[#FFD700] text-white font-bold shadow-lg hover:shadow-xl transition-shadow hover:scale-105 active:scale-95"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            📱 Hacer Pedido por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
