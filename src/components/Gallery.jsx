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
    <section id="galeria" className="py-24 relative bg-dark-950">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Instagram className="w-3.5 h-3.5 text-gold-400" />
            Feed & Transformações
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-4 tracking-tight">
            Galeria de <span className="text-gold-gradient italic font-normal">Inspiração Real</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Acompanhe nossas transformações diárias. Loiros radiantes, morenas iluminadas e cortes de alta precisão realizados com excelência.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-metallic text-dark-950 font-bold shadow-gold-sm'
                  : 'bg-dark-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800 hover:border-gold-400/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Instagram / Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer bg-dark-900 border border-neutral-800/80 hover:border-gold-400/50 transition-all duration-500 shadow-lg hover:shadow-gold-sm"
              style={{
                height: index % 3 === 0 ? '380px' : index % 3 === 1 ? '340px' : '360px'
              }}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Top Tag & Instagram Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-gold-300 text-[11px] font-medium border border-gold-400/30">
                  {item.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-dark-950/80 backdrop-blur-md flex items-center justify-center text-neutral-300 group-hover:text-gold-400 group-hover:scale-110 transition-all border border-neutral-700/50">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-base font-bold text-neutral-100 mb-1 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300/90 line-clamp-2 mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-700/40">
                  <span className="flex items-center gap-1 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-rose-400" />
                    {item.likes} curtidas
                  </span>
                  <span className="flex items-center gap-1 text-gold-300 group-hover:underline">
                    <ZoomIn className="w-3.5 h-3.5" />
                    Ver detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-gold-400/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 p-[2px] shadow-lg shrink-0">
              <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center text-gold-300">
                <Instagram className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-100">
                Acompanhe o nosso dia a dia no Instagram
              </h4>
              <p className="text-sm text-neutral-400">
                Mais de 2.400 seguidores acompanhando resultados e bastidores exclusivos em Realengo.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn px-6 py-3 rounded-full bg-gold-metallic text-dark-950 font-bold text-sm shadow-gold-sm hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir @coiffeursalaodebeleza</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-dark-900 rounded-2xl border border-gold-400/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-950/80 text-neutral-300 hover:text-white border border-neutral-700"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[60vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  {selectedImage.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-rose-400">
                  <Heart className="w-4 h-4 fill-rose-400" />
                  {selectedImage.likes} curtidas
                </span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-neutral-100 mb-2">
                {selectedImage.title}
              </h3>
              
              <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400">
                  Gostou desse resultado? Podemos reproduzir ou adaptar para o seu tom!
                </span>
                <button
                  onClick={() => handleBookLook(selectedImage.title)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold-metallic text-dark-950 font-bold text-xs shadow-gold-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform"
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
