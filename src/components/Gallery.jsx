import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Instagram, Heart, Sparkles, X, ZoomIn, Calendar } from 'lucide-react';

export default function Gallery({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleBookLook = (lookTitle) => {
    setSelectedImage(null);
    if (onSelectService) {
      onSelectService(lookTitle);
    }
    const form = document.getElementById('agendamento');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" className="py-24 sm:py-32 relative bg-dark-950 overflow-hidden w-full max-w-full">
      {/* Subtle Glow contained */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[350px] bg-gold-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with generous whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-[#D4AF37]/30 text-gold-300 text-xs font-medium tracking-wider uppercase mb-4">
            <Instagram className="w-3.5 h-3.5 text-gold-400" />
            Feed & Transformações
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-4 tracking-tight">
            Galeria de <span className="text-gold-gradient italic font-normal">Inspiração Real</span>
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Acompanhe nossas transformações diárias. Loiros radiantes, morenas iluminadas e cortes de alta precisão realizados com excelência.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-10 sm:mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 px-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gold-metallic text-dark-950 font-semibold shadow-sm scale-102'
                    : 'bg-dark-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800 hover:border-[#D4AF37]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Instagram Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-dark-900 border border-neutral-800/70 hover:border-[#D4AF37]/40 transition-all duration-500 shadow-md hover:shadow-gold-sm aspect-[4/5]"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Top Tag & Instagram Icon */}
              <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-gold-300 text-[9px] sm:text-[11px] font-medium border border-[#D4AF37]/30 truncate max-w-[110px]">
                  {item.tag}
                </span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-dark-950/80 backdrop-blur-md flex items-center justify-center text-neutral-300 group-hover:text-gold-400 group-hover:scale-110 transition-all border border-neutral-700/50 shrink-0">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <h3 className="font-serif text-xs sm:text-base font-medium text-neutral-100 mb-0.5 sm:mb-1 drop-shadow-md truncate">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-neutral-300/80 font-light line-clamp-1 sm:line-clamp-2 mb-2 hidden sm:block">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-400 pt-1.5 sm:pt-2 border-t border-neutral-700/30">
                  <span className="flex items-center gap-1 text-rose-400 font-medium">
                    <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-rose-400" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1 text-gold-300 group-hover:underline font-light">
                    <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">Ver detalhes</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile CTA Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 p-[2px] shadow-md shrink-0">
              <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center text-gold-300">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-xl font-bold text-neutral-100 mb-1">
                Acompanhe o nosso dia a dia no Instagram
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Mais de 2.400 seguidores acompanhando resultados e novidades exclusivas em Realengo.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn w-full sm:w-auto px-6 py-3 rounded-full bg-gold-metallic text-dark-950 font-semibold text-xs sm:text-sm shadow-sm hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir @coiffeursalaodebeleza</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal (Mobile Optimized) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto bg-dark-900 rounded-2xl border border-[#D4AF37]/35 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-dark-950/80 text-neutral-300 hover:text-white border border-neutral-700 shadow-lg"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[50vh] sm:max-h-[58vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover sm:object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  {selectedImage.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-rose-400">
                  <Heart className="w-3.5 h-3.5 fill-rose-400" />
                  {selectedImage.likes} curtidas
                </span>
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-100 mb-2">
                {selectedImage.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-neutral-300 font-light mb-5 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400 font-light text-center sm:text-left">
                  Podemos reproduzir ou adaptar este visual para o seu tom e textura!
                </span>
                <button
                  onClick={() => handleBookLook(selectedImage.title)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold-metallic text-dark-950 font-semibold text-xs shadow-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <Calendar className="w-4 h-4" />
                  Quero esse Visual
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
