export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs?: Record<string, string>;
  badge?: string;
}

export const products: Product[] = [
  {
    slug: "slv-1a",
    name: "SLV-1A",
    shortDescription: "Medidor de Nível do Chute Donnelly Inteligente",
    description:
      "O SLV-1A é um medidor de nível do chute Donnelly inteligente, desenvolvido pela Authomathika para o setor sucroenergético. Com mais de 2.650 pontos instalados, é referência em confiabilidade e precisão para usinas de açúcar e etanol.",
    features: [
      "Medição contínua e precisa do nível do chute",
      "Tecnologia ultrassônica avançada",
      "Comunicação industrial (4-20mA, HART, Profibus)",
      "Interface de configuração intuitiva",
      "Alta resistência a ambiente agressivo (IP65)",
      "Fácil instalação e manutenção",
    ],
    specs: {
      "Pontos Instalados": "2.650+",
      "Sinal de Saída": "4-20 mA / HART",
      "Grau de Proteção": "IP65",
      Alimentação: "24 VDC",
    },
    badge: "2.650+ instalações",
  },
  {
    slug: "px-400",
    name: "PX 400",
    shortDescription: "Analisador e Medidor de Pasteurização",
    description:
      "O PX 400 é um analisador e medidor de pasteurização com patente americana (US Patent 6,870,486). Equipamento de alta precisão para controle de processos de pasteurização industrial.",
    features: [
      "Patente americana US Patent 6,870,486",
      "Alta precisão de medição",
      "Monitoramento em tempo real",
      "Interface de usuário avançada",
      "Comunicação industrial",
      "Certificação para uso industrial",
    ],
    specs: {
      Patente: "US Patent 6,870,486",
      "Tipo de Medição": "Pasteurização",
      Comunicação: "Industrial",
    },
    badge: "Patente USA",
  },
  {
    slug: "auth-300",
    name: "AUTH 300",
    shortDescription: "Atuador Cilíndrico Eletropneumático",
    description:
      "O AUTH 300 é um atuador cilíndrico eletropneumático desenvolvido pela Authomathika. Com mais de 190 pontos instalados, oferece precisão e confiabilidade para aplicações de controle de fluxo industrial.",
    features: [
      "Design compacto e robusto",
      "Controle preciso de posição",
      "Alta confiabilidade operacional",
      "Compatível com sistemas de automação",
      "Manutenção simplificada",
      "Ampla faixa de aplicação",
    ],
    specs: {
      "Pontos Instalados": "190+",
      Tipo: "Eletropneumático",
      "Sinal de Controle": "4-20 mA",
    },
    badge: "190+ instalações",
  },
  {
    slug: "dpg-1a",
    name: "DPG-1A",
    shortDescription: "Transmissor de Posição e Deslocamento de Rolo",
    description:
      "O DPG-1A é um transmissor de posição e deslocamento de rolo, projetado para aplicações em moendas e equipamentos de processamento. Fornece medição precisa e confiável em ambientes industriais severos.",
    features: [
      "Medição de posição de alta precisão",
      "Robusto para ambientes agressivos",
      "Sinal de saída analógico",
      "Instalação direta em rolos",
      "Baixa necessidade de manutenção",
    ],
    specs: {
      "Tipo de Medição": "Posição / Deslocamento",
      "Sinal de Saída": "4-20 mA",
      Aplicação: "Moendas industriais",
    },
  },
  {
    slug: "dclt-1c",
    name: "DCLT-1C",
    shortDescription: "Medição Contínua do Nível do Chute Donnelly",
    description:
      "O DCLT-1C é o mais moderno medidor de nível contínuo do chute Donnelly da linha Authomathika. Com display OLED, grau de proteção IP67 e patente pendente, representa o estado da arte em instrumentação para usinas sucroenergéticas.",
    features: [
      "Display OLED de alta visibilidade",
      "Grau de proteção IP67",
      "Patente pendente (Patent pending)",
      "Medição contínua e precisa",
      "Comunicação industrial avançada",
      "Resistência a ambientes úmidos e agressivos",
    ],
    specs: {
      Display: "OLED",
      "Grau de Proteção": "IP67",
      Patente: "Patent pending",
      Medição: "Contínua",
    },
    badge: "Patent Pending",
  },
  {
    slug: "promtec",
    name: "ProMtec",
    shortDescription: "Medidor de Densidade e Processo",
    description:
      "O ProMtec é um medidor de densidade e processo com mais de 8.500 instalações mundiais. Desenvolvido com tecnologia alemã, é referência global em medição de densidade para processos industriais.",
    features: [
      "Tecnologia alemã de ponta",
      "Mais de 8.500 instalações mundiais",
      "Alta precisão na medição de densidade",
      "Robusto para processo industrial",
      "Ampla compatibilidade com fluidos",
      "Baixo custo de manutenção",
    ],
    specs: {
      "Instalações Mundiais": "8.500+",
      Tecnologia: "Alemã",
      "Tipo de Medição": "Densidade / Processo",
    },
    badge: "8.500+ instalações",
  },
  {
    slug: "derivador-asi",
    name: "Derivador AS-i",
    shortDescription: "Derivador para Rede AS-i",
    description:
      "O Derivador AS-i da Authomathika é um equipamento para conexão e distribuição em redes AS-Interface (AS-i), padrão mundial para comunicação em automação industrial de campo.",
    features: [
      "Compatível com padrão AS-Interface",
      "Conexão simplificada de dispositivos",
      "Alta confiabilidade de comunicação",
      "Instalação rápida",
      "Proteção contra interferências",
    ],
    specs: {
      Protocolo: "AS-Interface (AS-i)",
      Aplicação: "Redes industriais de campo",
    },
  },
  {
    slug: "planta-didatica",
    name: "Planta Didática",
    shortDescription: "Para Ensaios de Malhas de Controle",
    description:
      "A Planta Didática da Authomathika é um equipamento de treinamento e educação, desenvolvida para ensaios práticos de malhas de controle. Ideal para capacitação técnica de operadores e engenheiros.",
    features: [
      "Simulação de processos reais",
      "Múltiplas malhas de controle",
      "Interface educacional intuitiva",
      "Compatível com controladores industriais",
      "Ideal para treinamento e capacitação",
      "Material didático incluído",
    ],
    specs: {
      Aplicação: "Treinamento e capacitação",
      "Tipo de Malhas": "PID, cascata, feedforward",
    },
  },
  {
    slug: "paineis",
    name: "Painéis Elétricos",
    shortDescription: "Painéis Elétricos Industriais sob Medida",
    description:
      "A Authomathika projeta e fabrica painéis elétricos industriais sob medida, incluindo CCMs, QGBTs, switchboards e painéis de automação. Cada painel é desenvolvido conforme as normas técnicas vigentes e as necessidades específicas do cliente.",
    features: [
      "Projeto e fabricação sob medida",
      "CCMs, QGBTs e switchboards",
      "Conformidade com normas ABNT/IEC",
      "Parceiros Weg, Siemens, Schneider, ABB",
      "Testes e comissionamento",
      "Documentação técnica completa",
    ],
    specs: {
      Tipos: "CCM, QGBT, Switchboard, Automação",
      Normas: "ABNT / IEC",
      Fabricação: "Sob medida",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
