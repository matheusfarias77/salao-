import React, { useState } from 'react';
import { serviceCategories, services } from '../data/servicesData';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredServices = activeCategory === 'todos' 
    ? services 
    : services.filter(s => s.category === activeCategory);

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
    <section id="servicos" className="py-24 relative bg-dark-900 border-t border-neutral-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Menu de Experiências
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-4 tracking-tight">
            Nossos <span className="text-gold-gradient italic font-normal">Serviços Exclusivos</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Cada fio possui uma história única. Nossos procedimentos combinam alta ciência tricológica e visagismo para revelar o seu brilho mais sofisticado.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-metallic text-dark-950 font-bold shadow-gold-sm scale-105'
                  : 'bg-dark-850 text-neutral-400 hover:text-neutral-200 border border-neutral-800 hover:border-gold-400/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Card Lift Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col group border border-neutral-800/80 hover:border-gold-400/40 bg-gradient-to-b from-dark-850 to-dark-900 shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30"></div>
                
                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-gold-400/40 text-gold-300 text-[11px] font-semibold tracking-wider uppercase shadow-md">
                    {service.badge}
                  </span>
                )}

                {/* Duration Tag */}
                <span className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-950/90 text-neutral-300 text-xs font-medium border border-neutral-800 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  {service.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-100 mb-2 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Included points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/70">
                    <p className="text-xs uppercase tracking-wider text-gold-400/80 font-semibold mb-2">
                      O que está incluso:
                    </p>
                    {service.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider block">Investimento</span>
                    <span className="font-serif text-base font-bold text-gold-300">{service.price}</span>
                  </div>
                  <button
                    onClick={() => handleBookingClick(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-500/15 hover:bg-gold-500 text-gold-300 hover:text-dark-950 text-xs font-semibold transition-all duration-300 border border-gold-400/30 hover:border-gold-400 group/btn"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
