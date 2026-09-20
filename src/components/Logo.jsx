import React from 'react';

export default function Logo({ size = 'md', showText = true, className = '' }) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circle Medallion Logo */}
      <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-b from-[#1c1a16] to-[#0d0d0d] p-[2px] shadow-gold-sm border border-gold-400/40 group-hover:border-gold-400 transition-all duration-300 ${sizeClasses[size]}`}>
        {/* Real photo logo if available, with gold scissor vector fallback */}
        <img 
          src="/assets/logo-original.jpg" 
          alt="Coiffeur Salão de Beleza Logo" 
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // If image fails, switch to vector fallback
            e.target.style.display = 'none';
          }}
        />
        {/* Inner subtle gold ring */}
        <div className="absolute inset-0 rounded-full border border-gold-300/20 pointer-events-none"></div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif tracking-widest text-lg md:text-xl font-bold text-neutral-100 flex items-center gap-1">
            EMILIA <span className="text-gold-gradient font-light">BEAUTY</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400/90 font-medium">
            Coiffeur • Realengo RJ
          </span>
        </div>
      )}
    </div>
  );
}
