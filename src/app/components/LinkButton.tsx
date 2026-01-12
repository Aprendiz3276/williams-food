import { ReactNode } from 'react';

interface LinkButtonProps {
  icon: ReactNode;
  text: string;
  href: string;
  highlight?: boolean;
  subtitle?: string;
}

export function LinkButton({ icon, text, href, highlight = false, subtitle }: LinkButtonProps) {
  const baseClasses = "w-full p-3 sm:p-4 rounded-2xl backdrop-blur-md border transition-all duration-300 flex items-center justify-center gap-2 group";
  
  const normalClasses = "bg-white/10 border-white/20 text-white hover:bg-gradient-to-r hover:from-[#FF3C00] hover:to-[#FFD700] hover:border-[#FFD700] hover:shadow-2xl hover:shadow-[#FF3C00]/50 hover:scale-[1.02]";
  
  const highlightClasses = "bg-gradient-to-r from-[#FF3C00] to-[#FF3C00]/80 border-[#FF3C00] text-white hover:from-[#FF3C00] hover:to-[#FFD700] hover:shadow-2xl hover:shadow-[#FF3C00]/50 hover:scale-[1.02] animate-pulse-slow";

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${highlight ? highlightClasses : normalClasses}`}
    >
      <div className="text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="text-sm sm:text-base">{text}</div>
        {subtitle && (
          <div className="text-xs sm:text-sm text-white/70 mt-1">{subtitle}</div>
        )}
      </div>
    </a>
  );
}