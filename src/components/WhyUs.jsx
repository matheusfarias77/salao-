import React from 'react';
import { Award, Sparkles, Coffee, ShieldCheck, Scissors } from 'lucide-react';

export default function WhyUs() {
  const differentials = [
    {
      icon: <Scissors className="w-5 h-5 text-[#C5A059]" />,
      title: 'Diagnóstico & Visagismo Individual',
      description: 'Antes de qualquer tesoura ou pincel, analisamos seu tom de pele, estilo de vida e a saúde da fibra para criar um resultado harmônico sob medida.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#C5A059]" />,
      title: 'Cosméticos de Alto Luxo',
      description: 'Utilizamos apenas linhas de padrão internacional reconhecidas pela nutrição profunda e proteção dos fios (Kérastase, L’Oréal Professionnel, Wella).'
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#C5A059]" />,
      title: 'Ambiente Climatizado & Welcome Drink',
      description: 'Relaxe em um espaço moderno e aconchegante com café espresso gourmet, espumante e lavatórios ultra confortáveis com massagem relaxante.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
      title: 'Biossegurança & Horário Pontual',
      description: 'Respeitamos seu tempo com atendimento organizado e sem filas, além de rigorosa higienização e esterilização de todos os instrumentos.'
    }
  ];

  return (
    <section id="diferenciais" className="w-full max-w-full py-24 sm:py-32 relative bg-[#F8F5EE] border-t border-b border-[#ECE5D8] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            O Padrão Coiffeur
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-4 tracking-tight">
            Por que escolher a <span className="italic font-normal text-[#C5A059]">Emilia Beauty?</span>
          </h2>
          <p className="text-[#555555] font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Muito mais do que um salão de beleza, proporcionamos uma experiência de autocuidado, confiança e sofisticação em Realengo.
          </p>
        </div>

        {/* 4 Cards Grid Light Luxury */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#E8E2D8] hover:border-[#C5A059]/40 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#C5A059]/30 flex items-center justify-center mb-5 shadow-sm">
                  {diff.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] mb-2.5">
                  {diff.title}
                </h3>
                <p className="text-[#555555] font-light text-xs sm:text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#F0EBE1] flex items-center gap-1.5 text-[#8A6208] text-xs font-medium">
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
