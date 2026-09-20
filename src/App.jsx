import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-neutral-100 font-sans selection:bg-gold-500/30 selection:text-gold-200">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Dobra Principal */}
        <Hero />

        {/* Nossos Serviços (Cards com Lift) */}
        <Services onSelectService={handleSelectService} />

        {/* Galeria de Trabalhos Estilo Instagram */}
        <Gallery onSelectService={handleSelectService} />

        {/* Por que Escolher a Emilia Beauty (Diferenciais) */}
        <WhyUs />

        {/* Depoimentos de Clientes Satisfeitas */}
        <Testimonials />

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
