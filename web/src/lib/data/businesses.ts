export interface BusinessArea {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  services: string[];
  metrics: Array<{ value: string; label: string }>;
  partners?: string[];
  icon: string;
  color?: string;
}

export const businessAreas: BusinessArea[] = [
  {
    slug: "energias-renovaveis",
    name: "Energias Renováveis",
    shortDescription: "336 MW de energia solar instalados em 7 parques fotovoltaicos",
    description:
      "A divisão de Energias Renováveis da Authomathika atua na implantação de usinas solares fotovoltaicas de geração centralizada e distribuída. Com expertise em montagem elétrica, mecânica e civil, além de engenharia executiva, entregamos soluções completas para o setor de energia limpa.",
    services: [
      "Solar fotovoltaica – Geração Centralizada",
      "Solar fotovoltaica – Geração Distribuída",
      "Montagem elétrica e mecânica",
      "Montagem civil",
      "Engenharia executiva",
      "Comissionamento e start-up",
      "Operação e manutenção (O&M)",
    ],
    metrics: [
      { value: "336 MW", label: "Energia Solar Instalada" },
      { value: "7", label: "Parques Executados" },
    ],
    icon: "Sun",
  },
  {
    slug: "eletrica",
    name: "Elétrica",
    shortDescription: "43 plantas Greenfield e 82 Brownfield em processos industriais e prediais",
    description:
      "A divisão Elétrica da Authomathika oferece soluções completas para processos industriais, prediais, de geração e cogeração de energia. Desde o projeto até o comissionamento, nossa equipe de engenheiros especializados garante excelência técnica e cumprimento de prazos.",
    services: [
      "Projeto e aquisição de materiais",
      "Construção e montagem elétrica",
      "Comissionamento e start-up",
      "Painéis elétricos (CCMs, QGBTs, switchboards)",
      "Bancos de capacitores",
      "Centrais termelétricas",
      "Sistemas de cogeração",
    ],
    metrics: [
      { value: "43", label: "Plantas Greenfield" },
      { value: "82", label: "Plantas Brownfield" },
      { value: "245", label: "CCMs Instalados" },
      { value: "281", label: "QGBTs Instalados" },
      { value: "23", label: "Centrais Termelétricas" },
      { value: "3", label: "Subestações" },
    ],
    partners: ["Weg", "Rockwell", "Siemens", "Altus", "ABB", "Schneider", "GE", "EATON"],
    icon: "Zap",
  },
  {
    slug: "automacao",
    name: "Automação",
    shortDescription: "49 plantas Greenfield, 144 Brownfield e 296.400 pontos de automação",
    description:
      "A divisão de Automação da Authomathika é uma das mais completas do setor, atuando em automação industrial e instrumentação para geração e cogeração. Desenvolvemos software SCADA, programamos CLPs e executamos projetos de automação do início ao fim.",
    services: [
      "Automação industrial e instrumentação",
      "Desenvolvimento de software SCADA",
      "Programação de CLPs",
      "Projetos de automação integrados",
      "Fabricação de painéis de automação",
      "Montagem e comissionamento de campo",
      "Treinamento operacional",
    ],
    metrics: [
      { value: "49", label: "Plantas Greenfield" },
      { value: "144", label: "Plantas Brownfield" },
      { value: "296.400", label: "Pontos de Automação" },
    ],
    partners: [
      "Rockwell",
      "Siemens",
      "Yokogawa",
      "Emerson",
      "Altus",
      "ABB",
      "Schneider",
      "GE",
    ],
    icon: "Cpu",
  },
  {
    slug: "servicos",
    name: "Serviços",
    shortDescription: "42.027 equipamentos, 297.000 horas e 1.630 atendimentos técnicos",
    description:
      "A divisão de Serviços da Authomathika oferece suporte técnico especializado para manutenção, metrologia e diagnóstico de equipamentos industriais. Com laboratórios fixos e móveis e o sistema online Serelepe, garantimos rastreabilidade e qualidade em cada atendimento.",
    services: [
      "Paradas programadas (NR-10, NR-35)",
      "Manutenção corretiva e preventiva",
      "Metrologia RBC – certificados rastreados",
      "Diagnóstico e certificação de redes",
      "Serviços em campo (sistema Serelepe online)",
      "Tecnologia da Informação (CFTV, fibra óptica, redes)",
      "Laboratórios fixos e móveis",
    ],
    metrics: [
      { value: "42.027", label: "Equipamentos Atendidos" },
      { value: "297.000", label: "Horas de Serviço" },
      { value: "1.630", label: "Atendimentos Técnicos" },
    ],
    partners: [
      "Yokogawa",
      "Smar",
      "Endress+Hauser",
      "Emerson",
      "Metso",
      "ABB",
      "WEG",
      "Siemens",
      "Rockwell",
    ],
    icon: "Wrench",
  },
  {
    slug: "montagem-eletromecanica",
    name: "Montagem Eletromecânica",
    shortDescription: "251 projetos em 23+ anos de experiência multissetorial",
    description:
      "Com mais de 23 anos de resultados comprovados, a divisão de Montagem Eletromecânica da Authomathika atende os mais variados segmentos industriais. Da montagem de pequenos equipamentos a grandes projetos industriais, entregamos qualidade e segurança.",
    services: [
      "Montagem eletromecânica industrial",
      "Instalações mecânicas e elétricas",
      "Alinhamento e nivelamento de equipamentos",
      "Montagem de tubulações industriais",
      "Instalação de estruturas metálicas",
      "Comissionamento mecânico",
    ],
    metrics: [
      { value: "126", label: "Projetos Pequeno Porte" },
      { value: "81", label: "Projetos Médio Porte" },
      { value: "44", label: "Projetos Grande Porte" },
    ],
    icon: "Settings",
  },
  {
    slug: "inteligencia-artificial-dados",
    name: "IA & Dados",
    shortDescription: "Inteligência artificial e dados para gestão administrativa, operacional e tomada de decisão empresarial",
    description:
      "A divisão de IA & Dados da Authomathika aplica inteligência artificial, automação de processos e análise de dados para transformar a gestão de empresas. Atuamos na otimização de rotinas administrativas, gestão financeira, controle de estoque, planejamento de recursos, atendimento ao cliente e inteligência comercial. Ajudamos empresas de qualquer segmento a tomar decisões mais rápidas e fundamentadas em dados — da diretoria ao operacional.",
    services: [
      "Dashboards de gestão e indicadores (KPIs) em tempo real",
      "Automação de processos administrativos e operacionais (RPA)",
      "Análise de dados para tomada de decisão empresarial",
      "Inteligência comercial e previsão de demanda",
      "Otimização de gestão financeira e fluxo de caixa",
      "Controle inteligente de estoque e supply chain",
      "Chatbots e assistentes de IA para atendimento e suporte",
      "Integração de dados entre ERPs, CRMs e sistemas corporativos",
      "Relatórios automatizados e business intelligence",
      "Consultoria em transformação digital e cultura de dados",
    ],
    metrics: [],
    icon: "Brain",
  },
  {
    slug: "engenharia-epc",
    name: "Engenharia EPC",
    shortDescription: "EPC completo desde 1999 – Projetos, administração, construção e produção",
    description:
      "A Authomathika realiza contratos EPC (Engineering, Procurement and Construction) completos desde sua fundação em 1999. Nossa capacidade de gerenciar projetos de engenharia do início ao fim, com parcerias estratégicas para execução, garante entregas dentro do prazo e do orçamento.",
    services: [
      "Engenharia de projetos (básica e executiva)",
      "Procurement – aquisição e gerenciamento de materiais",
      "Construction – construção e montagem",
      "Gerenciamento integrado de projetos",
      "Administração e controle de contratos",
      "Parcerias estratégicas para execução",
    ],
    metrics: [
      { value: "25+", label: "Anos de EPC" },
      { value: "100%", label: "Projetos Entregues" },
    ],
    icon: "Building2",
  },
];

export function getBusinessArea(slug: string): BusinessArea | undefined {
  return businessAreas.find((b) => b.slug === slug);
}
