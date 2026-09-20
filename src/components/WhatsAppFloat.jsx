import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="relative bg-dark-900/95 backdrop-blur-md border border-gold-400/40 text-neutral-200 text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Olá! Deseja agendar um horário?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20agendamento%20na%20Emilia%20Beauty%20Coiffeur."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-dark-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>
        <span className="absolute -inset-0.5 rounded-full border border-gold-400/50 pointer-events-none"></span>
        
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-dark-950 fill-dark-950/20" />
      </a>
    </div>
  );
}
