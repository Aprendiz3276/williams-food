export function FeaturedCombo() {
  return (
    <div className="mx-6 rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF3C00] to-[#FF3C00]/80 shadow-2xl shadow-[#FF3C00]/50">
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1763689389824-dd2cea2e5772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBjb21ibyUyMGZyaWVzJTIwZHJpbmt8ZW58MXx8fHwxNzY3Mzg2NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Combo Estrella"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
      </div>
      
      {/* Contenido */}
      <div className="p-6 bg-[#0D0D0D] border-t-2 border-[#FFD700]">
        <div className="flex items-center justify-between">
          <div>
            <h3 
              className="text-white text-xl mb-1"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Combo Estrella
            </h3>
            <p className="text-white/70 text-sm">
              Hamburguesa + Papas + Bebida
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#FFD700] text-sm mb-1">Desde</p>
            <p 
              className="text-white text-2xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              $15.000
            </p>
          </div>
        </div>
        
        <a 
          href="https://wa.me/573167226947"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-4 py-3 rounded-xl bg-[#FFD700] text-[#0D0D0D] hover:bg-[#FFD700]/90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#FFD700]/30 text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ordenar ahora
        </a>
      </div>
    </div>
  );
}