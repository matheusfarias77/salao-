import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip message in light luxury style */}
      {showTooltip && (
        <div className="relative bg-white/95 backdrop-blur-md border border-[#E5DFD3] text-[#222222] text-[11px] sm:text-xs px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Olá! Deseja agendar seu horário?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#888888] hover:text-[#111111] p-0.5 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with soft green color and gentle pulse */}
      <a
        href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20agendamento%20na%20Emilia%20Beauty%20Coiffeur."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1ea952] hover:bg-[#189144] text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-subtle"
        aria-label="Falar no WhatsApp"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#1ea952]/25 animate-ping pointer-events-none"></span>
        <span className="absolute -inset-0.5 rounded-full border border-white/30 pointer-events-none"></span>
        
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white/20" />
      </a>
    </div>
  );
}
