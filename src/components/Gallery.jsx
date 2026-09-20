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
    <section id="galeria" className="w-full max-w-full py-24 sm:py-32 relative bg-[#FAFAFA] border-t border-[#ECE5D8] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase mb-4 shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
            Feed &amp; Transformações
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-4 tracking-tight">
            Galeria de <span className="italic font-normal text-[#C5A059]">Inspiração Real</span>
          </h2>
          <p className="text-[#555555] font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
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
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#111111] text-[#FAFAFA] shadow-sm'
                    : 'bg-white text-[#666666] hover:text-[#111111] border border-[#E8E2D8] hover:border-[#C5A059]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Instagram Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer bg-white border border-[#E8E2D8] hover:border-[#C5A059]/50 transition-all duration-500 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] aspect-[4/5]"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.98] group-hover:brightness-100"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Top Tag & Instagram Icon */}
              <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FAFAFA] text-[9px] sm:text-[11px] font-medium border border-white/20 truncate max-w-[120px]">
                  {item.tag}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:text-[#C5A059] group-hover:scale-110 transition-all border border-white/20 shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5">
                <h3 className="font-serif text-sm sm:text-base font-medium text-white mb-1 drop-shadow-sm truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 font-light line-clamp-1 sm:line-clamp-2 mb-2 hidden sm:block">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/80 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1 text-rose-300 font-medium">
                    <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-rose-300" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1 text-[#F5D77F] group-hover:underline font-light">
                    <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">Ampliar</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile CTA Banner Light Luxury */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-[#F8F5EE] border border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 p-[2px] shadow-sm shrink-0">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#111111]">
                <Instagram className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] mb-1">
                Acompanhe o nosso dia a dia no Instagram
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] font-light">
                Mais de 2.400 seguidoras acompanhando resultados e novidades exclusivas em Realengo.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#C5A059] text-white font-medium text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4 text-[#C5A059]" />
            <span>Seguir @coiffeursalaodebeleza</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-[#E8E2D8] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="max-h-[50vh] sm:max-h-[58vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover sm:object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-widest text-[#8A6208] font-semibold">
                  {selectedImage.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-rose-500 font-medium">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  {selectedImage.likes} curtidas
                </span>
              </div>
              
              <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mb-2">
                {selectedImage.title}
              </h3>
              
              <p className="text-sm text-[#555555] font-light mb-6 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F0EBE1]">
                <span className="text-xs text-[#888888] font-light text-center sm:text-left">
                  Podemos reproduzir ou adaptar este visual para o seu tom e textura!
                </span>
                <button
                  onClick={() => handleBookLook(selectedImage.title)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] hover:bg-[#C5A059] text-white font-medium text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Quero esse Visual</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
