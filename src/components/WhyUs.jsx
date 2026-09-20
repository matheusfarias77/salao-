import React from 'react';
import { Award, Sparkles, Coffee, ShieldCheck, Scissors } from 'lucide-react';

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
    <section id="diferenciais" className="py-24 sm:py-32 relative bg-dark-900 border-t border-b border-neutral-900/80 overflow-hidden w-full max-w-full">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[350px] bg-gold-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-[#D4AF37]/30 text-gold-300 text-xs font-medium tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            O Padrão Coiffeur
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-4 tracking-tight">
            Por que escolher a <span className="text-gold-gradient italic font-normal">Emilia Beauty?</span>
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Muito mais do que um salão de beleza, proporcionamos uma experiência de autocuidado, confiança e sofisticação em Realengo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between glass-card-hover border border-neutral-800/80 hover:border-[#D4AF37]/35 bg-gradient-to-b from-dark-850/90 to-dark-900/90 shadow-md"
            >
              <div>
                <div className="w-13 h-13 rounded-xl bg-gold-500/10 border border-[#D4AF37]/30 flex items-center justify-center mb-5 shadow-sm">
                  {diff.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-neutral-100 mb-2.5">
                  {diff.title}
                </h3>
                <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-800/70 flex items-center gap-1.5 text-gold-400/90 text-xs font-medium">
                <span>Padrão Coiffeur VIP</span>
                <span className="text-[10px]">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
