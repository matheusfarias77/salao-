import React from 'react';
import { Calendar, MessageCircle, Sparkles, Star, Scissors, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Luxury Vignette and Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop"
          alt="Ambiente Salão de Beleza de Alto Padrão"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow filter brightness-[0.38] contrast-110"
        />
        {/* Gradients to blend smoothly with dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/40"></div>
        <div className="absolute inset-0 bg-dark-radial pointer-events-none"></div>
      </div>

      {/* Floating Gold Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[350px] bg-gold-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-dark-900/90 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide shadow-gold-sm mb-6 animate-float max-w-full truncate">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
          <span className="truncate">Salão de Alto Padrão em Realengo • RJ</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"></span>
          <span className="text-neutral-400 shrink-0">De Terça a Sábado</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.15] mb-5 sm:mb-6">
          Emilia Beauty <br />
          <span className="text-gold-gradient italic font-normal">Coiffeur</span>
        </h1>

        {/* Subtitle from salon bio */}
        <p className="text-sm sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl mx-auto mb-4 leading-relaxed px-2">
          “Protocolos exclusivos para realçar sua melhor versão.”
        </p>

        {/* Pillars: Beleza • Estética • Bem-estar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gold-300/90 tracking-widest uppercase mb-10">
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✨</span> Beleza
          </span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✨</span> Estética
          </span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✨</span> Bem-estar
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#agendamento"
            className="shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-metallic text-dark-950 font-bold text-base shadow-gold-md hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-5 h-5 text-dark-950" />
            <span>Faça seu Pré-agendamento</span>
          </a>

          <a
            href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20agendamento%20na%20Emilia%20Beauty%20Coiffeur."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-dark-900/90 text-neutral-200 hover:text-gold-300 font-semibold text-base border border-gold-400/40 hover:border-gold-400 hover:bg-dark-800 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Fale no WhatsApp VIP</span>
          </a>
        </div>

        {/* Authority / Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-neutral-800/80">
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-neutral-800/60 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1 text-gold-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-xs text-neutral-300 font-medium">Excelência 5 Estrelas</p>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-neutral-800/60 backdrop-blur-sm">
            <p className="font-serif text-lg font-bold text-gold-300">+2.500</p>
            <p className="text-xs text-neutral-400">Clientes Transformadas</p>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-neutral-800/60 backdrop-blur-sm">
            <div className="flex items-center justify-center text-gold-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs text-neutral-300 font-medium">Produtos Importados</p>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-neutral-800/60 backdrop-blur-sm">
            <div className="flex items-center justify-center text-gold-400 mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-xs text-neutral-300 font-medium">Horário Personalizado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
