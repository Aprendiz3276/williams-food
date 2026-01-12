import { X } from 'lucide-react';
import menuImage1 from 'figma:asset/4faac757aef4d11eb3228f2f3aa02c591ccca4a5.png';
import menuImage2 from 'figma:asset/ed410f4b4c9ec130de59faebe84246d0dd3ac657.png';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D0D0D] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#FFD700]/30 shadow-2xl shadow-[#FF3C00]/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#FF3C00] to-[#FFD700] p-3 sm:p-4 flex items-center justify-between">
          <h2 
            className="text-white text-lg sm:text-xl md:text-2xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Menú Digital
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        {/* Contenido del modal con scroll */}
        <div className="overflow-y-auto max-h-[calc(90vh-60px)] sm:max-h-[calc(90vh-80px)] p-3 sm:p-4 space-y-3 sm:space-y-4">
          {/* Primera imagen del menú */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-[#FFD700]/20 border border-[#FFD700]/20">
            <img 
              src={menuImage1} 
              alt="Menú Williams Food - Salchipapas"
              className="w-full h-auto"
            />
          </div>

          {/* Segunda imagen del menú */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-[#FFD700]/20 border border-[#FFD700]/20">
            <img 
              src={menuImage2} 
              alt="Menú Williams Food - Super William's"
              className="w-full h-auto"
            />
          </div>

          {/* Botón de WhatsApp al final */}
          <div className="pt-1 sm:pt-2 pb-2 sm:pb-4">
            <a 
              href="https://wa.me/573167226947"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#FF3C00] to-[#FFD700] text-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#FF3C00]/30 text-center text-base sm:text-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hacer pedido por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}