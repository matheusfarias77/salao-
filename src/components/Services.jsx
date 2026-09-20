import React, { useState } from 'react';
import { serviceCategories, servicesByCategory } from '../data/servicesData';
import { Sparkles, Clock, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('beleza');
  const [hoveredServiceId, setHoveredServiceId] = useState('morena-iluminada');

  const currentServices = servicesByCategory[activeTab] || servicesByCategory.beleza;
  
  // Find current active service for image preview
  const currentActiveService = currentServices.find(s => s.id === hoveredServiceId) || currentServices[0];

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
    <section id="servicos" className="py-20 sm:py-28 relative bg-dark-900 border-t border-neutral-900">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gold-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Menu de Protocolos
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-3 sm:mb-4 tracking-tight">
            Nossos <span className="text-gold-gradient italic font-normal">Serviços Exclusivos</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tratamentos personalizados para realçar a autenticidade e a saúde da sua beleza com técnicas de visagismo e produtos de padrão internacional.
          </p>
        </div>

        {/* Pillar Tabs Navigation */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-dark-950/90 border border-gold-400/20 shadow-lg max-w-full overflow-x-auto scrollbar-none">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  const firstInCat = (servicesByCategory[cat.id] || [])[0];
                  if (firstInCat) setHoveredServiceId(firstInCat.id);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-gold-metallic text-dark-950 font-bold shadow-gold-sm scale-105'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Layout: Services List + Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Services List (Clean Editorial Flow) */}
          <div className="lg:col-span-7 space-y-4">
            {currentServices.map((service) => {
              const isSelected = (currentActiveService && currentActiveService.id === service.id);
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                  onClick={() => setHoveredServiceId(service.id)}
                  className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-dark-850 border-gold-400/50 shadow-gold-sm -translate-y-1'
                      : 'bg-dark-950/60 border-neutral-800/80 hover:border-gold-400/30 hover:bg-dark-850/60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-100">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-400/30">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium shrink-0">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-neutral-300/90 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Included points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 pt-3 border-t border-neutral-800/70">
                    {service.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 flex items-center justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookingClick(service.title);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-metallic hover:bg-gold-gradient-hover text-dark-950 font-bold text-xs shadow-gold-sm hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>Solicitar Horário</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase (Photography & Salon Ambience) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="relative rounded-3xl overflow-hidden border border-gold-400/30 bg-dark-950 shadow-2xl">
              <div className="h-[460px] overflow-hidden relative">
                <img
                  src={currentActiveService.image}
                  alt={currentActiveService.title}
                  className="w-full h-full object-cover transition-all duration-700 brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent"></div>
              </div>

              {/* Bottom Card Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-950 via-dark-950/90 to-transparent backdrop-blur-[2px]">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Protocolo de Excelência</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-neutral-100 mb-2">
                  {currentActiveService.title}
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2 mb-4">
                  {currentActiveService.description}
                </p>
                <button
                  onClick={() => handleBookingClick(currentActiveService.title)}
                  className="w-full py-3 rounded-xl bg-gold-metallic text-dark-950 font-bold text-xs shadow-gold-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Agendar este Protocolo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
