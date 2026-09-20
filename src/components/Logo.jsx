import React from 'react';

export default function Logo({ size = 'md', showText = true, className = '' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Circle Medallion Logo */}
      <div className={`relative shrink-0 flex items-center justify-center rounded-full bg-gradient-to-b from-[#1c1a16] to-[#0d0d0d] p-[2px] shadow-gold-sm border border-gold-400/40 group-hover:border-gold-400 transition-all duration-300 ${sizeClasses[size]}`}>
        <img 
          src="/assets/logo-original.jpg" 
          alt="Coiffeur Salão de Beleza Logo" 
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 rounded-full border border-gold-300/20 pointer-events-none"></div>
      </div>

      {showText && (
        <div className="flex flex-col min-w-0">
          <span className="font-serif tracking-wider sm:tracking-widest text-sm sm:text-xl font-bold text-neutral-100 flex items-center gap-1 truncate">
            EMILIA <span className="text-gold-gradient font-light">BEAUTY</span>
          </span>
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold-400/90 font-medium truncate">
            Coiffeur • Realengo RJ
          </span>
        </div>
      )}
    </div>
  );
}
