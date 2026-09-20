export const serviceCategories = [
  { id: 'beleza', label: '✨ Beleza & Mechas', icon: 'Scissors' },
  { id: 'estetica', label: '💆‍♀️ Estética Capilar', icon: 'Sparkles' },
  { id: 'bem-estar', label: '🌿 Bem-estar & Spa', icon: 'Heart' },
];

export const servicesByCategory = {
  beleza: [
    {
      id: 'morena-iluminada',
      title: 'Morena Iluminada Signature',
      badge: 'Exclusividade',
      description: 'Clareamento sofisticado em tons quentes (avelã, caramelo, mel e toffee) que valoriza a cor natural com transições suaves e luminosidade sob medida sem marcas.',
      duration: '3h30 - 4h',
      includes: ['Diagnóstico de visagismo', 'Proteção estrutural (Plex)', 'Tonalização e matização', 'Finalização com ondas modeladas'],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop'
    },
    {
      id: 'loiro-supreme',
      title: 'Loiro Supreme & Balayage',
      badge: 'Alta Performance',
      description: 'Do loiro manteiga ao platinado refinado. Protocolo que alia máxima potência de clareamento à preservação total da integridade e elasticidade dos fios.',
      duration: '4h - 5h',
      includes: ['Teste de mecha rigoroso', 'Tratamento reconstrutor anti-quebra', 'Matização neutralizadora', 'Brilho espelhado'],
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop'
    },
    {
      id: 'corte-visagismo',
      title: 'Corte com Visagismo Feminino',
      badge: 'Tendência',
      description: 'Análise morfológica facial para desenhar o corte ideal para a sua rotina e personalidade. Do chanel moderno ao corte em camadas com movimento natural.',
      duration: '1h',
      includes: ['Consultoria de estilo e visagismo', 'Lavagem relaxante no lavatório', 'Corte de precisão', 'Styling e finalização'],
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=900&auto=format&fit=crop'
    },
    {
      id: 'colorimetria-gloss',
      title: 'Colorimetria & Banho de Brilho Gloss',
      badge: 'Efeito Espelhado',
      description: 'Uniformização da cor, cobertura de brancos com efeito luminoso e selamento cuticular que reflete luz em cada movimento.',
      duration: '1h30',
      includes: ['Coloração premium sem agressão', 'Tratamento acidificante', 'Secagem e escovação modelada'],
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop'
    }
  ],
  estetica: [
    {
      id: 'terapia-capilar',
      title: 'Terapia Capilar & Detox do Couro',
      badge: 'Saúde dos Fios',
      description: 'Tratamento tricológico voltado para purificação profunda do couro cabeludo, desobstrução folicular, controle de oleosidade e fortalecimento da raiz.',
      duration: '1h30',
      includes: ['Esfoliação tricológica calmante', 'Ozonioterapia e vapor', 'Nutrição tópica ativa', 'Massagem estimulante'],
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop'
    },
    {
      id: 'cronograma-vip',
      title: 'Cronograma Capilar VIP Intensivo',
      badge: 'Regeneração',
      description: 'Protocolo de alta performance com máscaras importadas para restaurar massa proteica, repor lipídios essenciais e selar a água no córtex capilar.',
      duration: '1h15',
      includes: ['Diagnóstico com microcâmera capilar', 'Tratamento sob medida Kérastase/Braé', 'Cauterização a frio'],
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop'
    },
    {
      id: 'alinhamento-termico',
      title: 'Alinhamento Térmico Sem Formol',
      badge: 'Brilho & Sedosidade',
      description: 'Redução de frizz, alinhamento elegante e disciplina absoluta com balanço e movimento natural, sem agredir os fios nem alterar a cor.',
      duration: '2h30 - 3h',
      includes: ['Avaliação prévia dos fios', 'Ativos botânicos e aminoácidos', 'Selagem térmica com proteção'],
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop'
    }
  ],
  bem_estar: [
    {
      id: 'spa-dos-fios',
      title: 'Spa dos Fios & Massagem Craniana',
      badge: 'Puro Relaxamento',
      description: 'Um ritual sensorial inesquecível em nosso lavatório exclusivo. Aromaterapia, toalhas aquecidas e massagem que alivia tensões e estresse.',
      duration: '1h',
      includes: ['Aromaterapia com óleos essenciais', 'Lavatório reclinável VIP com massagem', 'Máscara sensorial', 'Chá de ervas ou café gourmet'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop'
    },
    {
      id: 'day-use-noivas',
      title: 'Produção Glam & Day Spa de Eventos',
      badge: 'Exclusivo',
      description: 'Produção completa para noivas, formandas, madrinhas e momentos especiais. Atendimento individualizado em ambiente reservado com espumante.',
      duration: '3h - 4h',
      includes: ['Penteado clássico ou contemporâneo', 'Fixação profissional de longa duração', 'Área VIP com welcome drink', 'Apoio para colocação de véu/acessórios'],
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=900&auto=format&fit=crop'
    }
  ]
};
