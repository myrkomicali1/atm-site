export interface ServicePage {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  certifications?: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "paradas-programadas",
    name: "Paradas Programadas",
    shortDescription: "Gestão completa de paradas industriais com conformidade NR-10 e NR-35",
    description:
      "A Authomathika oferece serviços completos de paradas programadas, com equipes especializadas e treinadas conforme as normas NR-10 e NR-35. Planejamos e executamos paradas de forma segura, eficiente e dentro do prazo estabelecido.",
    features: [
      "Planejamento e programação de paradas",
      "Equipes treinadas em NR-10 e NR-35",
      "Gestão de segurança do trabalho",
      "Manutenção elétrica e de instrumentação",
      "Inspeção e diagnóstico de equipamentos",
      "Relatórios técnicos detalhados",
    ],
    certifications: ["NR-10", "NR-35"],
  },
  {
    slug: "manutencao",
    name: "Manutenção",
    shortDescription: "Manutenção corretiva e preventiva para equipamentos elétricos e de automação",
    description:
      "Nossa divisão de manutenção oferece serviços corretivos e preventivos para equipamentos elétricos e de automação, com equipes multidisciplinares e ferramental completo para atendimento ágil e de qualidade.",
    features: [
      "Manutenção corretiva emergencial 24/7",
      "Programas de manutenção preventiva",
      "Manutenção preditiva",
      "Revisão e overhaul de equipamentos",
      "Calibração de instrumentos",
      "Sistema Serelepe – relatórios online",
    ],
  },
  {
    slug: "metrologia",
    name: "Metrologia",
    shortDescription: "Laboratórios fixos e móveis com certificados RBC rastreados",
    description:
      "O serviço de metrologia da Authomathika conta com laboratórios fixos e móveis, emitindo certificados rastreados pela RBC (Rede Brasileira de Calibração). Garantimos conformidade e precisão para todos os seus instrumentos de medição.",
    features: [
      "Laboratórios fixos e móveis",
      "Certificados rastreados RBC",
      "Calibração de instrumentos industriais",
      "Verificação e ajuste de transmissores",
      "Diagnóstico e certificação de redes",
      "Relatórios de conformidade",
    ],
    certifications: ["RBC", "ISO 9001"],
  },
  {
    slug: "servicos-em-campo",
    name: "Serviços em Campo",
    shortDescription: "Atendimento técnico especializado com sistema online Serelepe",
    description:
      "A Authomathika oferece serviços em campo com equipes altamente capacitadas e respaldo do sistema Serelepe, que permite acompanhamento online de relatórios e histórico de atendimentos. Frota própria com controle por radar garante agilidade no atendimento.",
    features: [
      "Atendimento técnico especializado",
      "Sistema Serelepe – acompanhamento online",
      "Frota própria com controle por radar",
      "Relatórios online em tempo real",
      "Histórico de atendimentos",
      "Suporte técnico remoto",
    ],
  },
  {
    slug: "tecnologia-da-informacao",
    name: "Tecnologia da Informação",
    shortDescription: "CFTV, fibra óptica e redes industriais",
    description:
      "A divisão de TI da Authomathika oferece soluções completas em infraestrutura de telecomunicações e redes industriais, incluindo sistemas de CFTV, instalação de fibra óptica e redes de comunicação industrial.",
    features: [
      "Sistemas de CFTV e monitoramento",
      "Instalação de fibra óptica",
      "Redes industriais (Ethernet, Profibus, DeviceNet)",
      "Infraestrutura de telecomunicações",
      "Certificação de redes",
      "Suporte e manutenção de infraestrutura",
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
