import img1 from '@/assets/509bc1d6a76697d1d27d48603e92e8a5950c05c8.png';
import img2 from '@/assets/40281ffd448a3d4deda52313afaa8c91f8728e0b.png';
import img3 from '@/assets/293ae4d309f1237f9687ec6457b7fa612dfcafd2.png';
import img4 from '@/assets/cae09528a0fd0eded6e7826905ea5e9f12577d2e.png';
import img5 from '@/assets/099c401ebcdf4b497920ce830b202c25451da4f0.png';
import img6 from '@/assets/a4e3acb89887aa9acf8644550a54747e7f2bf4db.png';
import img7 from '@/assets/229ffa280f6e0621542a815d09b19b8408102950.png';
import img8 from '@/assets/9baa24592f226b5ed4c53852ad73134efb888d23.png';

const menuItems = [
  {
    id: 1,
    name: 'Salchicostilla',
    image: img1
  },
  {
    id: 2,
    name: 'La Toxica',
    image: img2
  },
  {
    id: 3,
    name: 'Salchimaduro',
    image: img3
  },
  {
    id: 4,
    name: 'Salchitocineta',
    image: img4
  },
  {
    id: 5,
    name: 'Salchichorizo',
    image: img5
  },
  {
    id: 7,
    name: 'La Werita',
    image: img6
  },
  {
    id: 8,
    name: 'Salchipapa Tripleta',
    image: img7
  },
  {
    id: 9,
    name: 'Super Williams Talla M',
    image: img8
  }
];

export function MenuGrid() {
  return (
    <div className="px-3 sm:px-4 md:px-6">
      <h3 
        className="text-white text-center mb-3 sm:mb-4 text-xl sm:text-2xl"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Nuestros Platos
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className="group relative overflow-hidden rounded-lg bg-white/15 backdrop-blur-md border border-white/30 hover:border-[#FFD700] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#FF3C00]/40"
          >
            {/* Imagen */}
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-110"
              />
            </div>
            
            {/* Nombre del plato - solo para La Toxica */}
            {item.id === 2 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para Salchicostilla */}
            {item.id === 1 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para Salchimaduro */}
            {item.id === 3 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para Salchitocineta */}
            {item.id === 4 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para Super Willians Talla M */}
            {item.id === 5 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para Salchipapa Tripleta */}
            {item.id === 8 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para Super Willians Talla M (parrillada) */}
            {item.id === 9 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Nombre del plato - solo para La Werita */}
            {item.id === 7 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                <p 
                  className="text-white text-center text-base sm:text-lg md:text-xl font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                </p>
              </div>
            )}
            
            {/* Acento dorado en hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3C00] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}