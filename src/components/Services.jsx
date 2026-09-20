import React, { useState } from 'react';
import { serviceCategories, servicesByCategory } from '../data/servicesData';
import { Sparkles, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('beleza');

  const currentServices = servicesByCategory[activeCategory] || servicesByCategory.beleza;

  const handleBookingClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const bookingSection = document.getElementById('agendamento');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="w-full max-w-full py-24 sm:py-32 relative bg-[#FAFAFA] border-t border-[#ECE5D8] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Menu de Protocolos
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A] mb-4 tracking-tight">
            Nossos <span className="italic font-normal text-[#C5A059]">Serviços Exclusivos</span>
          </h2>
          <p className="text-[#555555] font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tratamentos personalizados para realçar a autenticidade e a saúde da sua beleza com técnicas de visagismo e produtos de padrão internacional.
          </p>

          {/* Pillar Navigation Tabs */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex p-1.5 rounded-full bg-[#F5F2EB] border border-[#E5DFD3] shadow-sm max-w-full overflow-x-auto scrollbar-none">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#111111] text-[#FAFAFA] shadow-sm'
                      : 'text-[#666666] hover:text-[#111111] hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Magazine Layout */}
        <div className="space-y-20 sm:space-y-28">
          {currentServices.map((service, index) => {
            const isEven = index % 2 === 1;
            const stepNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 pb-12 border-b border-[#ECE5D8] last:border-0"
              >
                {/* Photo Column (5 cols) - Alternating side on desktop */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group mx-auto max-w-md lg:max-w-none">
                    {/* Editorial background shadow plate */}
                    <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-[#F5F2EB] border border-[#E5DFD3] -rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"></div>

                    {/* Rectangular Editorial Photo */}
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.06)] border border-[#E8E2D8] bg-white aspect-[4/5]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
                        loading="lazy"
                      />
                      
                      {/* Top floating badge */}
                      {service.badge && (
                        <div className="absolute top-4 left-4 pointer-events-none">
                          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8A6208] text-[10px] font-semibold tracking-wider uppercase border border-[#C5A059]/30 shadow-sm">
                            {service.badge}
                          </span>
                        </div>
                      )}

                      {/* Bottom duration indicator */}
                      <div className="absolute bottom-4 right-4 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-[#111111]/85 backdrop-blur-md text-white text-xs font-light tracking-wide flex items-center gap-1.5 shadow-md">
                          <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content Column (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Protocol Index Number & Category */}
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl sm:text-4xl text-[#C5A059] font-light tracking-widest">
                      {stepNumber}
                    </span>
                    <span className="w-8 h-[1px] bg-[#C5A059]/40"></span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#888888] font-medium">
                      Protocolo Coiffeur
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight leading-[1.15]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#555555] font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  {/* Includes List (High-End Editorial Details) */}
                  <div className="pt-2 pb-2">
                    <p className="text-xs uppercase tracking-widest text-[#8A6208] font-semibold mb-3">
                      Etapas &amp; Cuidados Inclusos:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.includes.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444] font-light">
                          <span className="text-[#C5A059] font-serif text-sm leading-none mt-0.5">✦</span>
                          <span className="leading-snug">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      onClick={() => handleBookingClick(service.title)}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#C5A059] text-white text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Reservar Este Horário</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-white" />
                    </button>

                    <span className="text-xs text-[#888888] font-light">
                      Atendimento exclusivo de Terça a Sábado
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
