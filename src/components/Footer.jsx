import React from 'react';
import { MapPin, Clock, Phone, Instagram, ArrowUp, Heart, Sparkles, Navigation } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="localizacao" className="w-full max-w-full relative bg-dark-950 border-t border-neutral-900 pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-full max-w-[400px] h-[400px] bg-gold-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-neutral-400 text-sm leading-relaxed pt-2">
              “Protocolos exclusivos para realçar sua melhor versão.” Excelência em visagismo, loiros, morenas iluminadas e terapias capilares de luxo em Realengo.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-900 border border-neutral-800 hover:border-gold-400 text-neutral-300 hover:text-gold-400 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Instagram Coiffeur"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-900 border border-neutral-800 hover:border-emerald-400 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="WhatsApp Coiffeur"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-neutral-100 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-gold-300 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold-300 transition-colors">Serviços & Protocolos</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-gold-300 transition-colors">Galeria Instagram</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-gold-300 transition-colors font-light">Diferenciais Coiffeur</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors font-light">Perguntas Frequentes (FAQ)</a>
              </li>
              <li>
                <a href="#agendamento" className="text-gold-400 font-medium hover:underline">Solicitar Pré-Agendamento</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-neutral-100 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" />
              Funcionamento
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="p-3.5 rounded-xl bg-dark-900 border border-neutral-800">
                <p className="font-semibold text-neutral-200 mb-1">De Terça a Sábado</p>
                <p className="text-gold-400 text-xs">09:00 às 19:00 (Com hora marcada)</p>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-900/60 border border-neutral-800/60 text-xs text-neutral-500">
                <p>Domingo e Segunda: Fechado para descanso e capacitação técnica da equipe.</p>
              </div>
            </div>
          </div>

          {/* Location & Address */}
          <div>
            <h4 className="font-serif text-lg font-bold text-neutral-100 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              Localização
            </h4>
            <div className="p-4 rounded-xl bg-dark-900 border border-gold-400/30 text-sm space-y-3">
              <p className="text-neutral-200 font-medium">
                Rua Capitão Teixeira
              </p>
              <p className="text-neutral-400 text-xs">
                Realengo, Rio de Janeiro - RJ
              </p>
              <a
                href="https://maps.google.com/?q=Rua+Capit%C3%A3o+Teixeira+Realengo+Rio+de+Janeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gold-500/15 hover:bg-gold-500 text-gold-300 hover:text-dark-950 text-xs font-semibold transition-all border border-gold-400/30"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Emilia Beauty Coiffeur. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span>✨ Beleza • Estética • Bem-estar</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-neutral-800 hover:border-gold-400 text-neutral-400 hover:text-gold-400 transition-colors flex items-center gap-1"
              title="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
