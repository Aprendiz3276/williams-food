import { motion } from 'motion/react';

export function PromocionBanner() {
  return (
    <div className="px-3 sm:px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        {/* Banner con glassmorphism como enlace */}
        <a
          href="https://wa.me/573167226947?text=%C2%A1Hola%21%20Quiero%20saber%20sobre%20la%20promocion%20del%20dia"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="bg-gradient-to-r from-[#FF3C00]/30 via-[#FFD700]/30 to-[#FF3C00]/30 backdrop-blur-md border border-[#FFD700]/40 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-[#FF3C00]/30 hover:shadow-[#FFD700]/50 hover:border-[#FFD700]/60 transition-all duration-300 cursor-pointer"
            style={{ backgroundSize: '200% 200%' }}
          >
            <div className="flex items-center justify-center gap-2">
              {/* Icono de papas fritas animado izquierda */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-xl sm:text-2xl"
              >
                🍟
              </motion.div>

              {/* Texto principal */}
              <motion.div
                className="text-center"
                animate={{
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <p 
                  className="text-white text-sm sm:text-base font-bold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Pregunta por nuestra{' '}
                  <motion.span
                    className="text-[#FFD700]"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255, 215, 0, 0.5)',
                        '0 0 20px rgba(255, 215, 0, 0.8)',
                        '0 0 10px rgba(255, 215, 0, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    promoción del día
                  </motion.span>
                </p>
              </motion.div>

              {/* Icono de papas fritas animado derecha */}
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="text-xl sm:text-2xl"
              >
                🍟
              </motion.div>
            </div>

            {/* Partículas flotantes en el fondo */}
            <motion.div
              className="absolute top-0 left-0 w-2 h-2 bg-[#FFD700] rounded-full opacity-60"
              animate={{
                x: [0, 300, 0],
                y: [0, -20, 0],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF3C00] rounded-full opacity-60"
              animate={{
                x: [0, -300, 0],
                y: [0, 20, 0],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}