import { motion } from "motion/react";
import logoImage from "@/assets/a4cd36ae604a6bb03d53f6750a1e171b23e9af13.png";

export function Header() {
  return (
    <div className="text-center px-3 sm:px-4 md:px-6 space-y-3 sm:space-y-4">
      {/* Logo */}
      <div className="flex justify-center relative">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#FF3C00]/20 to-[#FFD700]/20 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Logo */}
        <motion.div 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#FF3C00] to-[#FFD700] flex items-center justify-center shadow-lg shadow-[#FF3C00]/50 cursor-pointer relative z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: 1,
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.5 }
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center overflow-hidden border-2 border-[#FFD700]/30"
            animate={{
              borderColor: [
                "rgba(255, 215, 0, 0.3)",
                "rgba(255, 60, 0, 0.6)",
                "rgba(255, 215, 0, 0.3)"
              ],
              boxShadow: [
                "0 0 20px rgba(255, 60, 0, 0.3)",
                "0 0 40px rgba(255, 215, 0, 0.6)",
                "0 0 20px rgba(255, 60, 0, 0.3)"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img 
              src={logoImage} 
              alt="Williams Food Logo" 
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  "brightness(1)",
                  "brightness(1.1)",
                  "brightness(1)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 
          className="text-white text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Williams Food
        </h1>
        <p className="text-[#FFD700] text-sm sm:text-base">
          Tu sabor rápido y delicioso
        </p>
      </motion.div>
    </div>
  );
}