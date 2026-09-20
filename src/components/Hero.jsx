import React from 'react';
import { Calendar, MessageCircle, Sparkles, Star, Scissors, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="w-full max-w-full relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FBF9F5]">
      {/* Subtle Atmospheric Light & Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1920&auto=format&fit=crop"
          alt="Ambiente Editorial Emilia Beauty Coiffeur"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5] via-[#FBF9F5]/85 to-[#FAFAFA]"></div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[350px] bg-[#C5A059]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[#8A6208] text-[11px] sm:text-xs font-medium tracking-widest uppercase mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Salão de Alto Padrão em Realengo • RJ</span>
          <span className="w-1 h-1 rounded-full bg-[#C5A059]"></span>
          <span className="text-[#666666]">De Terça a Sábado</span>
        </div>

        {/* Editorial Headline with Cormorant Garamond */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111] leading-[1.08] mb-6">
          Emilia Beauty <br />
          <span className="italic font-normal text-[#C5A059]">Coiffeur</span>
        </h1>

        {/* Supporting Copy */}
        <p className="font-sans text-base sm:text-xl text-[#555555] font-light max-w-2xl mx-auto mb-5 leading-relaxed px-2">
          Protocolos exclusivos de visagismo, mechas e saúde capilar para realçar a sua <span className="italic font-serif text-[#111111]">melhor versão</span>.
        </p>

        {/* Pillars: Beleza • Estética • Bem-estar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-[#8A6208] tracking-widest uppercase mb-10">
          <span className="flex items-center gap-1.5">
            <span className="text-[#C5A059]">✨</span> Beleza
          </span>
          <span className="text-[#D5C4AF]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#C5A059]">✨</span> Estética
          </span>
          <span className="text-[#D5C4AF]">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#C5A059]">✨</span> Bem-estar
          </span>
        </div>

        {/* CTAs Light Luxury */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#agendamento"
            className="shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#C5A059] text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Faça seu Pré-agendamento</span>
          </a>

          <a
            href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20agendamento%20na%20Emilia%20Beauty%20Coiffeur."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white hover:bg-[#F8F5EE] text-[#111111] font-medium text-xs sm:text-sm tracking-wider uppercase border border-[#E5DFD3] hover:border-[#C5A059] shadow-sm transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Fale no WhatsApp VIP</span>
          </a>
        </div>

        {/* Authority / Trust Badges Bar in White Luxury Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4">
          <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-center gap-1 text-[#C5A059] mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>
            <p className="text-xs text-[#222222] font-medium">Excelência 5 Estrelas</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
            <p className="font-serif text-xl font-normal text-[#8A6208] mb-0.5">+2.500</p>
            <p className="text-xs text-[#555555] font-light">Clientes Transformadas</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-center text-[#C5A059] mb-1.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs text-[#222222] font-medium">Produtos Importados</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-center text-[#C5A059] mb-1.5">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-xs text-[#222222] font-medium">Com Hora Marcada</p>
          </div>
        </div>

      </div>
    </section>
  );
}
