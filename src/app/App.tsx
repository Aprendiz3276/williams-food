import { useState } from 'react';
import { Header } from './components/Header';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';
import { DigitalMenuView } from './components/DigitalMenuView';
import { MenuGrid } from './components/MenuGrid';
import { PromocionBanner } from './components/PromocionBanner';
import { Menu, MapPin, Phone, Instagram } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="w-full max-w-[1080px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Container principal */}
        <div className="space-y-4 sm:space-y-6 py-4 sm:py-6 md:py-8">
          {/* Header */}
          <Header />

          {/* Botones principales */}
          <div className="space-y-3 sm:space-y-4 px-3 sm:px-4 md:px-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-full p-4 rounded-2xl backdrop-blur-md border transition-all duration-300 flex items-center justify-center gap-2 group bg-white/10 border-white/20 text-white hover:bg-gradient-to-r hover:from-[#FF3C00] hover:to-[#FFD700] hover:border-[#FFD700] hover:shadow-2xl hover:shadow-[#FF3C00]/50 hover:scale-[1.02]"
            >
              <div className="text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                <Menu className="w-6 h-6" />
              </div>
              <div className="text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div>Menú digital</div>
              </div>
            </button>
            
            <LinkButton
              icon={<MapPin className="w-6 h-6" />}
              text="Ubicación"
              href="https://www.google.com/maps/search/?api=1&query=Cra+10+%2314a-61,+Barrio+Chiminangos,+Tuluá,+Valle+del+Cauca,+Colombia"
            />
            
            <LinkButton
              icon={<Phone className="w-6 h-6" />}
              text="Pedidos por WhatsApp"
              href="https://wa.me/573167226947"
            />
          </div>

          {/* Cuadrícula de platos */}
          <MenuGrid />

          {/* Promoción del día */}
          <PromocionBanner />

          {/* Horarios - Ordena Ahora */}
          <div className="px-3 sm:px-4 md:px-6">
            <div className="bg-gradient-to-br from-[#FF3C00]/20 via-[#FFD700]/10 to-[#FF3C00]/20 backdrop-blur-md border border-[#FFD700]/30 rounded-3xl p-4 sm:p-5 md:p-6 shadow-xl shadow-[#FF3C00]/20">
              <div className="text-center space-y-3 sm:space-y-4">
                {/* Horarios */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="inline-block bg-[#FF3C00] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    HORARIOS
                  </div>
                  <div className="text-white text-base sm:text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Lunes a Domingo
                  </div>
                  <div className="text-[#FFD700] text-lg sm:text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    6:30 pm - 11:00 pm
                  </div>
                  <div className="inline-block bg-black/40 text-[#FF3C00] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-bold border border-[#FF3C00]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Martes Cerrado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="px-3 sm:px-4 md:px-6">
            <h3 className="text-white text-center mb-3 sm:mb-4 text-base sm:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Síguenos en redes
            </h3>
            <div className="flex justify-center">
              <a 
                href="https://www.instagram.com/williams_food/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[#FF3C00] hover:to-[#FFD700] hover:border-[#FFD700] hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Modal del Menú Digital */}
      <DigitalMenuView isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}