import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, Instagram, MapPin, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#localizacao' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-gold-400/20 py-3 shadow-lg shadow-black/50' 
          : 'bg-gradient-to-b from-dark-950/90 via-dark-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-gold-300 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Emilia%20Beauty%20Coiffeur."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-neutral-400 hover:text-gold-400 hover:bg-gold-500/10 transition-all border border-transparent hover:border-gold-400/30"
              title="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="#agendamento"
              className="shimmer-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-metallic text-dark-950 font-semibold text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-dark-950" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#agendamento"
              className="px-3.5 py-1.5 rounded-full bg-gold-metallic text-dark-950 font-semibold text-xs shadow-gold-sm"
            >
              Agendar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-gold-400 hover:bg-neutral-900 border border-neutral-800"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/98 backdrop-blur-xl border-b border-gold-400/20 px-6 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-gold-400 py-2 text-base font-medium border-b border-neutral-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gold-500/50">›</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#agendamento"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-gold-metallic text-dark-950 font-bold text-sm shadow-gold-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Meu Horário
            </a>
            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Realengo - RJ
              </span>
              <span>•</span>
              <span className="text-gold-400">Terça a Sábado</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
