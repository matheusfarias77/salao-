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
    { name: 'Antes & Depois', href: '#antes-depois' },
    { name: 'A Especialista', href: '#especialista' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#111111]/98 backdrop-blur-md border-b border-[#C5A059]/25 py-3.5 shadow-xl shadow-black/40' 
          : 'bg-[#111111] py-4 border-b border-[#222222]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-[#D5D5D5] hover:text-[#C5A059] transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Emilia%20Beauty%20Coiffeur."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#AAAAAA] hover:text-[#C5A059] hover:bg-white/5 transition-all border border-transparent hover:border-[#C5A059]/30"
              title="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="#agendamento"
              className="shimmer-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#B8933E] text-white font-medium text-xs uppercase tracking-wider shadow-sm transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="#agendamento"
              className="px-3.5 py-1.5 rounded-full bg-[#C5A059] text-white font-medium text-[11px] uppercase tracking-wider shadow-sm"
            >
              Agendar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-[#C5A059] hover:bg-neutral-900 border border-neutral-800"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111111] border-b border-[#C5A059]/20 px-6 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-[#C5A059] py-2 text-sm font-medium border-b border-neutral-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#C5A059]">›</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#agendamento"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#C5A059] text-white font-medium text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Meu Horário
            </a>
            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Realengo - RJ
              </span>
              <span>•</span>
              <span className="text-[#C5A059]">Terça a Sábado</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
