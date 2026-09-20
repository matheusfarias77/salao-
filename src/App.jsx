import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
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
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-dark-950 text-neutral-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 relative">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Dobra Principal */}
        <Hero />

        {/* Nossos Serviços (Menu Editorial de Alta Costura) */}
        <Services onSelectService={handleSelectService} />

        {/* Galeria de Trabalhos Estilo Instagram */}
        <Gallery onSelectService={handleSelectService} />

        {/* Por que Escolher a Emilia Beauty (Diferenciais) */}
        <WhyUs />

        {/* Perguntas Frequentes (Accordion FAQ) */}
        <FAQ />

        {/* Formulário de Pré-Agendamento Flutuante */}
        <BookingForm preselectedService={preselectedService} />
      </main>

      {/* Rodapé com Endereço e Horários de Realengo RJ */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
