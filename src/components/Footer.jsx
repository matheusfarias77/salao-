import React from 'react';
import { MapPin, Clock, Phone, Instagram, ArrowUp, Heart, Sparkles, Navigation } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="localizacao" className="w-full max-w-full relative bg-[#111111] border-t border-[#222222] pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed pt-2">
              “Protocolos exclusivos para realçar sua melhor versão.” Excelência em visagismo, loiros, morenas iluminadas e terapias capilares de luxo em Realengo.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-neutral-800 hover:border-[#C5A059] text-neutral-300 hover:text-[#C5A059] flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Instagram Coiffeur"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-neutral-800 hover:border-emerald-400 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="WhatsApp Coiffeur"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-normal text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
              <li>
                <a href="#inicio" className="hover:text-[#C5A059] transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">Serviços Editoriais</a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-[#C5A059] transition-colors">Antes &amp; Depois</a>
              </li>
              <li>
                <a href="#especialista" className="hover:text-[#C5A059] transition-colors">A Especialista &amp; Espaço</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#C5A059] transition-colors">Galeria Instagram</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#C5A059] transition-colors">Diferenciais Coiffeur</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C5A059] transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
              <li>
                <a href="#agendamento" className="text-[#C5A059] font-medium hover:underline">Solicitar Pré-Agendamento</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-lg font-normal text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              Funcionamento
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-400 font-light">
              <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-neutral-800">
                <p className="font-medium text-neutral-200 mb-1">De Terça a Sábado</p>
                <p className="text-[#C5A059] text-xs">09:00 às 19:00 (Com hora marcada)</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#171717] border border-neutral-850 text-xs text-neutral-400">
                <p>Domingo e Segunda: Fechado para descanso e aprimoramento técnico da equipe.</p>
              </div>
            </div>
          </div>

          {/* Location & Address */}
          <div>
            <h4 className="font-serif text-lg font-normal text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              Localização
            </h4>
            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#C5A059]/30 text-xs sm:text-sm space-y-3">
              <p className="text-neutral-200 font-medium">
                Rua Capitão Teixeira
              </p>
              <p className="text-neutral-400 text-xs font-light">
                Realengo — Rio de Janeiro, RJ
              </p>
              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] text-[#C5A059]">Fácil Acesso &amp; Estacionamento Próximo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} Emilia Beauty Coiffeur. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#C5A059] transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
