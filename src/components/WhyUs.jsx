import React from 'react';
import { Award, Sparkles, Coffee, ShieldCheck, HeartHandshake, Scissors } from 'lucide-react';

export default function WhyUs() {
  const differentials = [
    {
      icon: <Scissors className="w-6 h-6 text-gold-400" />,
      title: 'Diagnóstico & Visagismo Individual',
      description: 'Antes de qualquer tesoura ou pincel, analisamos seu tom de pele, estilo de vida e a saúde da fibra para criar um resultado harmônico sob medida.'
    },
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: 'Cosméticos de Alto Luxo',
      description: 'Utilizamos apenas linhas de padrão internacional reconhecidas pela nutrição profunda e proteção dos fios (Kérastase, L’Oréal Professionnel, Wella).'
    },
    {
      icon: <Coffee className="w-6 h-6 text-gold-400" />,
      title: 'Ambiente Climatizado & Welcome Drink',
      description: 'Relaxe em um espaço moderno e aconchegante com café espresso gourmet, espumante e lavatórios ultra confortáveis com massagem relaxante.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      title: 'Biossegurança & Horário Pontual',
      description: 'Respeitamos seu tempo com atendimento organizado e sem filas, além de rigorosa higienização e esterilização de todos os instrumentos.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 relative bg-dark-900 border-t border-b border-neutral-900 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            O Padrão Coiffeur
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-3 sm:mb-4 tracking-tight">
            Por que escolher a <span className="text-gold-gradient italic font-normal">Emilia Beauty?</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Muito mais do que um salão de beleza, proporcionamos uma experiência de autocuidado, confiança e sofisticação em Realengo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between glass-card-hover border border-neutral-800 hover:border-gold-400/40 bg-gradient-to-b from-dark-850 to-dark-900"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mb-6 shadow-gold-sm">
                  {diff.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-100 mb-3">
                  {diff.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-1.5 text-gold-400 text-xs font-semibold">
                <span>Padrão Coiffeur VIP</span>
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
