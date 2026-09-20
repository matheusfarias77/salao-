import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Sparkles, Clock, MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function BookingForm({ preselectedService }) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: 'Cabelo - Morena Iluminada Signature',
    data: '',
    periodo: 'Tarde (13h às 17h)',
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
      const [year, month, day] = selectedDate.split('-').map(Number);
      const dateObj = new Date(year, month - 1, day);
      const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday

      if (dayOfWeek === 0 || dayOfWeek === 1) {
        setDayWarning('Lembrete: Atendemos com exclusividade de Terça a Sábado. Por favor, escolha uma data de terça a sábado.');
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
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
      `\nFico no aguardo da confirmação!`
    );

    return `https://wa.me/5521999999999?text=${text}`;
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="agendamento" className="w-full max-w-full py-24 sm:py-32 relative bg-[#FAFAFA] border-t border-[#ECE5D8] overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#C5A059]/30 text-[#8A6208] text-xs font-medium tracking-wider uppercase mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            Atendimento Exclusivo
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A] mb-3 sm:mb-4 tracking-tight">
            Reserve seu <span className="italic font-normal text-[#C5A059]">Momento</span>
          </h2>
          <p className="text-[#666666] font-light text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Preencha os dados abaixo para solicitar seu atendimento. Nossa recepção entrará em contato via WhatsApp para confirmar a disponibilidade exata.
          </p>
        </div>

        {/* Floating Light Luxury Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E8E2D8] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05)] relative">
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Nome Completo */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                    Nome Completo <span className="text-[#C5A059]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#E0D9CE] focus:border-[#C5A059] text-[#1A1A1A] text-base sm:text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                    WhatsApp <span className="text-[#C5A059]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(21) 98765-4321"
                      value={formData.whatsapp}
                      onChange={handlePhoneChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#E0D9CE] focus:border-[#C5A059] text-[#1A1A1A] text-base sm:text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Serviço Desejado */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                    Serviço Desejado <span className="text-[#C5A059]">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#E0D9CE] focus:border-[#C5A059] text-[#1A1A1A] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all cursor-pointer"
                    >
                      <optgroup label="✨ Cabelo &amp; Beleza">
                        <option value="Cabelo - Morena Iluminada Signature">Morena Iluminada Signature</option>
                        <option value="Cabelo - Loiro Supreme &amp; Balayage">Loiro Supreme &amp; Balayage</option>
                        <option value="Cabelo - Corte com Visagismo">Corte com Visagismo</option>
                        <option value="Cabelo - Colorimetria &amp; Gloss">Colorimetria &amp; Banho de Brilho</option>
                      </optgroup>
                      <optgroup label="💆‍♀️ Estética Capilar">
                        <option value="Estética - Terapia Capilar &amp; Detox">Terapia Capilar &amp; Detox</option>
                        <option value="Estética - Cronograma Capilar VIP">Cronograma Capilar VIP Intensivo</option>
                        <option value="Estética - Alinhamento Térmico">Alinhamento Térmico Sem Formol</option>
                      </optgroup>
                      <optgroup label="🌿 Bem-estar &amp; Spa">
                        <option value="Bem-estar - Spa dos Fios &amp; Massagem">Spa dos Fios com Massagem Craniana</option>
                        <option value="Bem-estar - Produção Glam &amp; Day Use">Produção Glam &amp; Day Use</option>
                      </optgroup>
                      <optgroup label="Outros">
                        <option value="Outro Serviço ou Avaliação Geral">Outro Serviço / Avaliação Personalizada</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Data de Preferência */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                    Data de Preferência <span className="text-[#C5A059]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={formData.data}
                      onChange={handleDateChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#E0D9CE] focus:border-[#C5A059] text-[#1A1A1A] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Warning for Sunday/Monday */}
              {dayWarning && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2.5 text-amber-800 text-xs animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{dayWarning}</span>
                </div>
              )}

              {/* Período do Dia */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                  Período Preferencial
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
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
                          ? 'border-[#111111] bg-[#111111] text-white shadow-sm font-semibold'
                          : 'border-[#E5DFD3] bg-[#FAFAFA] text-[#666666] hover:border-[#C5A059]'
                      }`}
                    >
                      {periodo}
                    </button>
                  ))}
                </div>
              </div>

              {/* Observações Opcionais */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#444444] mb-2">
                  Observações (Opcional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={2}
                    placeholder="Alguma química anterior nos fios ou detalhe que gostaria de adiantar?"
                    value={formData.observacoes}
                    onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E0D9CE] focus:border-[#C5A059] text-[#1A1A1A] text-base sm:text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full py-4 rounded-full bg-[#111111] hover:bg-[#C5A059] text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Solicitar Pré-Agendamento</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-[#888888] pt-1 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  Privacidade 100% protegida
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Atendimento de Terça a Sábado em Realengo</span>
              </div>
            </form>
          ) : (
            /* Success Screen */
            <div className="text-center py-6 sm:py-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-2">
                Solicitação Recebida com <span className="italic text-[#C5A059]">Sucesso!</span>
              </h3>
              
              <p className="text-[#555555] text-xs sm:text-sm max-w-md mx-auto mb-6">
                Olá <strong className="text-[#111111]">{formData.nome}</strong>! Registramos sua preferência com carinho e prioridade.
              </p>

              {/* Recap Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5DFD3] text-left mb-6 text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-[#ECE5D8] pb-2">
                  <span className="text-[#666666]">Protocolo:</span>
                  <span className="text-[#111111] font-medium text-right truncate max-w-[200px]">{formData.servico}</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE5D8] pb-2">
                  <span className="text-[#666666]">Data Preferencial:</span>
                  <span className="text-[#111111]">{formData.data ? formData.data.split('-').reverse().join('/') : 'A combinar'}</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE5D8] pb-2">
                  <span className="text-[#666666]">Período:</span>
                  <span className="text-[#111111]">{formData.periodo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">WhatsApp:</span>
                  <span className="text-[#111111] font-medium">{formData.whatsapp}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirmar pelo WhatsApp</span>
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
                      periodo: 'Tarde (13h às 17h)',
                      observacoes: '',
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#555555] hover:text-[#111111] text-xs sm:text-sm font-medium border border-[#E0D9CE] hover:border-[#C5A059] transition-all"
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
