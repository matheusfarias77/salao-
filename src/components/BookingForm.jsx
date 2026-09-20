import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Sparkles, Clock, MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function BookingForm({ preselectedService }) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: 'Cabelo - Morena Iluminada Signature',
    data: '',
    periodo: 'Tarde (13h às 18h)',
    observacoes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dayWarning, setDayWarning] = useState('');

  // Update service if preselected from service cards or gallery
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, servico: preselectedService }));
    }
  }, [preselectedService]);

  // Format Brazilian phone (XX) 9XXXX-XXXX
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData(prev => ({ ...prev, whatsapp: value }));
  };

  // Check day of the week (Tuesday to Saturday)
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData(prev => ({ ...prev, data: selectedDate }));

    if (selectedDate) {
      // Split YYYY-MM-DD
      const [year, month, day] = selectedDate.split('-').map(Number);
      const dateObj = new Date(year, month - 1, day);
      const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday...

      if (dayOfWeek === 0 || dayOfWeek === 1) {
        setDayWarning('Lembrete: Nosso salão atende com excelência de Terça a Sábado. Recomendamos selecionar uma data entre terça e sábado.');
      } else {
        setDayWarning('');
      }
    } else {
      setDayWarning('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API reservation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  // Generate pre-filled WhatsApp link with appointment details
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Emilia Beauty Coiffeur!\n\n` +
      `Gostaria de confirmar meu pré-agendamento solicitado no site:\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `✨ *Serviço:* ${formData.servico}\n` +
      `📅 *Data de preferência:* ${formData.data ? formData.data.split('-').reverse().join('/') : 'A combinar'}\n` +
      `⏰ *Período:* ${formData.periodo}\n` +
      (formData.observacoes ? `📝 *Observação:* ${formData.observacoes}\n` : '') +
      `\nFico no aguardo da confirmação de horário!`
    );

    return `https://wa.me/5521999999999?text=${text}`;
  };

  // Get tomorrow's date as min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="agendamento" className="py-24 relative bg-dark-950 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            Atendimento Exclusivo
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-100 mb-4 tracking-tight">
            Reserve seu <span className="text-gold-gradient italic font-normal">Momento</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Preencha os dados abaixo para solicitar seu horário. Nossa recepção entrará em contato para confirmar a disponibilidade ideal para você.
          </p>
        </div>

        {/* Floating Luxury Glass Form Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-gold-400/30 bg-gradient-to-b from-dark-850/95 to-dark-900/95 shadow-2xl backdrop-blur-xl relative">
          {/* Subtle gold corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-full pointer-events-none"></div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome Completo */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-2">
                    Nome Completo <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amanda Silveira"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950/80 border border-neutral-700/80 focus:border-gold-400 text-neutral-100 text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-2">
                    WhatsApp <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(21) 98765-4321"
                      value={formData.whatsapp}
                      onChange={handlePhoneChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950/80 border border-neutral-700/80 focus:border-gold-400 text-neutral-100 text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Serviço Desejado */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-2">
                    Serviço Desejado <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950/80 border border-neutral-700/80 focus:border-gold-400 text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all cursor-pointer"
                    >
                      <optgroup label="✨ Cabelo & Beleza">
                        <option value="Cabelo - Morena Iluminada Signature">Morena Iluminada Signature</option>
                        <option value="Cabelo - Loiro Supreme & Balayage">Loiro Supreme & Balayage</option>
                        <option value="Cabelo - Corte com Visagismo">Corte com Visagismo</option>
                        <option value="Cabelo - Colorimetria & Gloss">Colorimetria & Banho de Brilho</option>
                      </optgroup>
                      <optgroup label="💆‍♀️ Estética Capilar">
                        <option value="Estética - Terapia Capilar & Detox">Terapia Capilar & Detox</option>
                        <option value="Estética - Cronograma Capilar VIP">Cronograma Capilar VIP Intensivo</option>
                        <option value="Estética - Alinhamento Térmico">Alinhamento Térmico Sem Formol</option>
                      </optgroup>
                      <optgroup label="🌿 Bem-estar & Spa">
                        <option value="Bem-estar - Spa dos Fios & Massagem">Spa dos Fios com Massagem Craniana</option>
                        <option value="Bem-estar - Produção Glam & Day Use">Produção Glam & Day Use</option>
                      </optgroup>
                      <optgroup label="Outros">
                        <option value="Outro Serviço ou Avaliação Geral">Outro Serviço / Avaliação Personalizada</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Data de Preferência */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-2">
                    Data de Preferência <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={formData.data}
                      onChange={handleDateChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950/80 border border-neutral-700/80 focus:border-gold-400 text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Notice if user selected Sunday/Monday */}
              {dayWarning && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-amber-300 text-xs animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{dayWarning}</span>
                </div>
              )}

              {/* Período do Dia */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-2">
                  Período Preferencial
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Manhã (09h às 13h)',
                    'Tarde (13h às 17h)',
                    'Fim de Tarde (17h às 19h)'
                  ].map((periodo) => (
                    <button
                      type="button"
                      key={periodo}
                      onClick={() => setFormData({ ...formData, periodo })}
                      className={`p-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.periodo === periodo
                          ? 'border-gold-400 bg-gold-500/15 text-gold-300 shadow-gold-sm font-semibold'
                          : 'border-neutral-800 bg-dark-950/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {periodo}
                    </button>
                  ))}
                </div>
              </div>

              {/* Observações Opcionais */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-2">
                  Observações ou Desejo Específico (Opcional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gold-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="Conte-nos se possui química recente nos fios ou envie detalhes sobre o resultado que deseja..."
                    value={formData.observacoes}
                    onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950/80 border border-neutral-700/80 focus:border-gold-400 text-neutral-100 text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full py-4 rounded-xl bg-gold-metallic text-dark-950 font-bold text-base shadow-gold-md hover:shadow-gold-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Solicitar Pré-Agendamento</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  Seus dados estão protegidos
                </span>
                <span>•</span>
                <span>Atendimento rápido de Terça a Sábado</span>
              </div>
            </form>
          ) : (
            /* Elegant Success Confirmation Screen */
            <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-100 mb-2">
                Pré-agendamento Recebido com <span className="text-gold-gradient">Sucesso!</span>
              </h3>
              
              <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto mb-8">
                Olá <strong className="text-gold-300">{formData.nome}</strong>! Registramos seu interesse com prioridade em nossa agenda.
              </p>

              {/* Recap Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-dark-950/90 border border-gold-400/30 text-left mb-8 text-sm space-y-2.5">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Serviço:</span>
                  <span className="text-gold-300 font-semibold text-right">{formData.servico}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Data Preferencial:</span>
                  <span className="text-neutral-200">{formData.data ? formData.data.split('-').reverse().join('/') : 'A combinar'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Período:</span>
                  <span className="text-neutral-200">{formData.periodo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Contato:</span>
                  <span className="text-neutral-200">{formData.whatsapp}</span>
                </div>
              </div>

              {/* Direct WhatsApp Confirmation CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirmar Imediatamente no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      nome: '',
                      whatsapp: '',
                      servico: 'Cabelo - Morena Iluminada Signature',
                      data: '',
                      periodo: 'Tarde (13h às 18h)',
                      observacoes: '',
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-dark-800 text-neutral-300 hover:text-white text-sm font-medium border border-neutral-700 hover:border-neutral-600 transition-all"
                >
                  Novo Agendamento
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
