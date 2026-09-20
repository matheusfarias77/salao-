import React from 'react';
import { Sparkles, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function AboutSpecialist() {
  const scrollToBooking = () => {
    const el = document.getElementById('agendamento');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="especialista" className="w-full max-w-full py-24 sm:py-32 relative bg-[#FAFAFA] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle back decorative frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-[#F5F2EB] border border-[#E8E2D8] -rotate-1 pointer-events-none"></div>
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-[#E8E2D8] bg-white aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop"
                  alt="Especialista Emilia Beauty Coiffeur"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03]"
                />
                
                {/* Floating Seal */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E2D8] shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8A6208] font-semibold">Atendimento VIP</p>
                    <p className="font-serif text-sm font-medium text-[#111111]">Diagnóstico Individualizado</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF4E8] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FAFAFA] text-xs font-serif tracking-wider shadow-lg flex items-center gap-1.5">
                <span className="text-[#C5A059]">✦</span> Realengo • RJ
              </div>
            </div>
          </div>

          {/* Text Content Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase shadow-sm">
              <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
              A Especialista &amp; Nosso Espaço
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight leading-[1.15]">
              A beleza com alma, <br />
              <span className="italic font-normal text-[#C5A059]">respeito aos fios</span> e alta precisão.
            </h2>

            <p className="text-[#444444] font-light text-base sm:text-lg leading-relaxed">
              No <strong className="font-medium text-[#111111]">Emilia Beauty Coiffeur</strong>, acreditamos que nenhum cabelo é igual ao outro. Não seguimos fórmulas prontas nem tendências passageiras: criamos desenhos de luz, mechas e cortes pensados exclusivamente para harmonizar com o seu tom de pele, sua rotina e a sua essência.
            </p>

            <p className="text-[#666666] font-light text-sm sm:text-base leading-relaxed">
              Nosso espaço em Realengo foi idealizado para ser o seu refúgio particular. Aqui, você encontra pontualidade rigorosa, poltronas confortáveis, café espresso gourmet e uma equipe apaixonada por entregar a sua melhor versão sem jamais abrir mão da saúde do seu cabelo.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#EBE5DA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-serif text-sm font-medium text-[#1A1A1A]">Teste de Mechas</h4>
                <p className="text-[11px] text-[#666666] font-light mt-1">Segurança absoluta antes de qualquer procedimento químico.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#EBE5DA]">
                <Award className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-serif text-sm font-medium text-[#1A1A1A]">Alta Performance</h4>
                <p className="text-[11px] text-[#666666] font-light mt-1">Linhas internacionais consagradas para nutrição e brilho.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#EBE5DA]">
                <Sparkles className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-serif text-sm font-medium text-[#1A1A1A]">Visagismo Facial</h4>
                <p className="text-[11px] text-[#666666] font-light mt-1">Harmonização da cor e corte para realçar seu olhar e rosto.</p>
              </div>
            </div>

            {/* Signature & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#EAE4D8]">
              <div>
                <p className="font-serif italic text-xl text-[#111111]">Emilia Candido</p>
                <p className="text-xs text-[#8A6208] uppercase tracking-widest font-medium">Coiffeur &amp; Master Colorista</p>
              </div>

              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#2A2A2A] text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                <span>Conhecer Nosso Espaço</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
