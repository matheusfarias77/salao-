import React from 'react';
import { testimonials } from '../data/testimonialsData';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative bg-dark-900 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Voz de Quem Confia
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-4 tracking-tight">
            Experiências <span className="text-gold-gradient italic font-normal">Transformadoras</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Veja o que nossas clientes dizem sobre o cuidado, a técnica e a atmosfera da Emilia Beauty Coiffeur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between glass-card-hover border border-neutral-800 bg-gradient-to-b from-dark-850 to-dark-900"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-gold-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-neutral-300 text-sm italic leading-relaxed mb-6">
                  “{test.comment}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/80">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold-400/40"
                />
                <div>
                  <h4 className="font-medium text-sm text-neutral-100">{test.name}</h4>
                  <span className="text-[11px] text-gold-400/90 block">{test.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
