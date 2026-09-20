import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: 'Quais são os dias de funcionamento?',
    answer: 'Nosso salão funciona de Terça a Sábado. Recomendamos agendar seu horário com antecedência.'
  },
  {
    id: 2,
    question: 'Onde o salão está localizado?',
    answer: 'Estamos localizados na R: Capitão Teixeira - Realengo, RJ.'
  },
  {
    id: 3,
    question: 'Como funciona o pré-agendamento pelo site?',
    answer: 'Você preenche o formulário com suas preferências e nossa equipe entrará em contato via WhatsApp para confirmar o horário exato e passar mais detalhes.'
  },
  {
    id: 4,
    question: 'Vocês realizam teste de mecha antes da coloração?',
    answer: 'Sim! A saúde do seu cabelo é nossa prioridade. Todos os nossos protocolos de química e mechas incluem uma avaliação capilar e teste de mechas.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full max-w-full py-24 sm:py-32 relative bg-[#F8F5EE] border-t border-[#ECE5D8] overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-4 tracking-tight">
            Perguntas <span className="italic font-normal text-[#C5A059]">Frequentes</span>
          </h2>
          <p className="text-[#555555] font-light text-sm sm:text-base leading-relaxed">
            Reunimos as respostas para as principais dúvidas sobre os nossos atendimentos e protocolos de atendimento exclusivo.
          </p>
        </div>

        {/* Accordion List Light Luxury */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white border-[#C5A059] shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
                    : 'bg-white/90 border-[#E8E2D8] hover:border-[#C5A059]/40 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#1A1A1A] pr-2">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#FAF4E8] border-[#C5A059] text-[#8A6208] rotate-180' 
                      : 'border-[#E8E2D8] text-[#888888]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Box */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[#555555] font-light text-sm sm:text-base leading-relaxed border-t border-[#F0EBE1] animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-medium text-[#1A1A1A] mb-1">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#666666] font-light">
              Nossa equipe está pronta para te atender de forma personalizada no WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Estou%20no%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] hover:bg-[#C5A059] text-white text-xs font-medium tracking-wide transition-all duration-300 shrink-0 flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
