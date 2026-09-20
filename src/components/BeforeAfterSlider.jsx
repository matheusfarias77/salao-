import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowRight, Sliders, Calendar } from 'lucide-react';

const transformations = [
  {
    id: 'morena-iluminada',
    title: 'Morena Iluminada Toffee Signature',
    tag: 'Técnica Balayage VIP',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    description: 'Transição suave com mechas em degradê caramelo e avelã, preservando 100% da saúde da fibra capilar com protocolo reconstrutor.',
    treatment: 'Protocolo Kérastase Fusio-Dose + Matização Exclusiva',
  },
  {
    id: 'loiro-supreme',
    title: 'Loiro Baunilha & Contorno Visagista',
    tag: 'Loiro Saudável',
    beforeImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop',
    description: 'Abertura de tom precisa com micro-mechas sem marcas e contorno frontal iluminado para valorizar os traços do rosto.',
    treatment: 'Descoloração com Plex Protetor + Banho de Gloss Glaze',
  }
];

export default function BeforeAfterSlider() {
  const [selectedTransform, setSelectedTransform] = useState(transformations[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  const scrollToBooking = () => {
    const el = document.getElementById('agendamento');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="antes-depois" className="w-full max-w-full py-24 sm:py-32 relative bg-[#F8F5EE] border-t border-b border-[#ECE5D8] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Resultados Comprovados
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-4 tracking-tight">
            O Poder da <span className="italic font-normal text-[#C5A059]">Transformação</span>
          </h2>
          <p className="text-[#555555] font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Arraste o cursor para comparar o estado anterior e a revelação final de nossos protocolos de alta precisão.
          </p>

          {/* Transformation Switcher */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 flex-wrap">
            {transformations.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedTransform(item);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                  selectedTransform.id === item.id
                    ? 'bg-[#111111] text-[#FAFAFA] font-medium shadow-md'
                    : 'bg-white text-[#666666] hover:text-[#111111] border border-[#E5DFD3]'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Slider Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-8 border border-[#E8E2D8] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#ECE7DE]"
          >
            {/* After Image (Full Base) */}
            <img
              src={selectedTransform.afterImage}
              alt={`${selectedTransform.title} - Depois`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              draggable="false"
            />

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={selectedTransform.beforeImage}
                alt={`${selectedTransform.title} - Antes`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                draggable="false"
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C5A059] shadow-xl flex items-center justify-center text-[#C5A059] transition-transform hover:scale-110 active:scale-95">
                <div className="flex items-center gap-1 text-xs font-bold select-none">
                  <span>❮</span>
                  <span>❯</span>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs tracking-wider uppercase font-medium border border-white/20">
                Antes
              </span>
            </div>
            <div className="absolute top-4 right-4 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/90 backdrop-blur-md text-white text-xs tracking-wider uppercase font-medium shadow-md">
                Depois
              </span>
            </div>

            {/* Bottom Floating Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
              <span className="px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[#222222] text-[11px] font-medium border border-[#E8E2D8] shadow-sm flex items-center gap-1.5">
                <Sliders className="w-3 h-3 text-[#C5A059]" />
                Arraste para os lados
              </span>
            </div>
          </div>

          {/* Details & Info Footer */}
          <div className="mt-6 pt-6 border-t border-[#F0EBE1] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#8A6208] font-semibold">
                {selectedTransform.tag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A] mt-0.5">
                {selectedTransform.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light mt-1 max-w-xl">
                {selectedTransform.description}
              </p>
            </div>

            <button
              onClick={scrollToBooking}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#B8933E] text-white font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Quero Essa Transformação</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
