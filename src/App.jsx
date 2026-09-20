import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AboutSpecialist from './components/AboutSpecialist';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-[#FAFAFA] text-[#222222] font-sans selection:bg-[#C5A059]/25 selection:text-[#8A6208] relative">
      {/* Fixed Luxury Black Header */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Dobra Principal Editorial */}
        <Hero />

        {/* 2. Serviços em Layout Assimétrico Revista de Moda */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Slider Interativo de Antes e Depois */}
        <BeforeAfterSlider />

        {/* 4. A Especialista & Nosso Espaço */}
        <AboutSpecialist />

        {/* 5. Galeria de Inspirações Instagram com Lightbox */}
        <Gallery onSelectService={handleSelectService} />

        {/* 6. Diferenciais e Padrão Coiffeur */}
        <WhyUs />

        {/* 7. Perguntas Frequentes (FAQ Accordion Oficial) */}
        <FAQ />

        {/* 8. Formulário Flutuante de Pré-Agendamento */}
        <BookingForm preselectedService={preselectedService} />
      </main>

      {/* Rodapé Preto de Luxo com Endereço e Horários de Realengo RJ */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
