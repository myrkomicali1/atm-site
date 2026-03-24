export const company = {
  name: "Authomathika",
  cnpj: "03.119.551/0001-67",
  address: "Rua Ivone Fernandes Bernardi, 504, Jardim Florenzza – Sertãozinho, SP",
  phone: "(16) 3513-4000",
  whatsapp: "+55 16 99646-5516",
  email: {
    comercial: "comercial@authomathika.com.br",
    sac: "sac.atm@authomathika.com.br",
  },
  founded: 1999,
  president: "Antonio J. Gusmão",
  tagline: "A melhor solução para o seu projeto",
  description:
    "Uma empresa completa de engenharia integradora de sistemas Elétricos e de Automação",
  vision:
    "Reconhecidos pela forma responsável e clara de cumprir os contratos, trabalhando dentro da ética e profissionalismo",
  social: {
    facebook: "https://www.facebook.com/authomathika",
    instagram: "https://www.instagram.com/authomathika/",
    linkedin: "https://www.linkedin.com/company/authomathika-epc/",
    youtube: "https://www.youtube.com/@authomathika8151",
  },
  certifications: ["ISO 9001", "NR-10", "NR-35"],
  compliance: ["LGPD", "NR-1"],
  gupy: "https://authomathika.gupy.io",
};

export const stats = [
  {
    value: "251",
    label: "Projetos de Montagem",
    suffix: "",
  },
  {
    value: "380K+",
    label: "Pontos de Controle",
    suffix: "",
  },
  {
    value: "892",
    label: "MW de Energia Solar",
    suffix: " MW",
  },
  {
    value: String(new Date().getFullYear() - 1999),
    label: "Anos de Mercado",
    suffix: "+",
  },
  {
    value: "43",
    label: "Plantas Greenfield Elétrica",
    suffix: "",
  },
  {
    value: "49",
    label: "Plantas Greenfield Automação",
    suffix: "",
  },
  {
    value: "5",
    label: "Países com Projetos",
    suffix: "",
  },
  {
    value: "580",
    label: "Funcionários/Ano",
    suffix: "",
  },
];

export const visionPillars = [
  {
    title: "Com o Cliente",
    description:
      "Vender com responsabilidade, cumprir contratos com transparência e profissionalismo.",
    icon: "Users",
  },
  {
    title: "Com a Sociedade",
    description:
      "Condições seguras, respeito ao meio ambiente e colaboradores satisfeitos.",
    icon: "Globe",
  },
  {
    title: "Com as Finanças",
    description:
      "Garantir retorno sustentável a investidores e colaboradores.",
    icon: "TrendingUp",
  },
  {
    title: "Com o Fornecedor",
    description:
      "Comprar com responsabilidade e honrar compromissos com integridade.",
    icon: "Handshake",
  },
];

export type TimelineType =
  | "founding"
  | "milestone"
  | "project"
  | "award"
  | "expansion"
  | "international";

export interface TimelineWork {
  client: string;
  scope: string;
  sector?: string;
}

export interface TimelineEntry {
  year: number;
  type: TimelineType;
  headline: string;
  highlight?: string;
  count?: number;
  sectors?: string[];
  featured?: TimelineWork[];
  isMajor?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    year: 1999,
    type: "founding",
    headline: "Fundação da Authomathika em Sertãozinho, SP",
    highlight: "Início das operações como integradora de sistemas elétricos e automação industrial",
    count: 2,
    sectors: ["Sucroenergético"],
  },
  {
    year: 2003,
    type: "project",
    headline: "Expansão para termelétricas e cogeração de energia",
    highlight: "Primeiros projetos de automação completa em plantas de cogeração",
    count: 6,
    sectors: ["Sucroenergético", "Energia"],
  },
  {
    year: 2005,
    type: "milestone",
    headline: "Certificação ISO 9001 obtida",
    highlight: "Sistema de gestão da qualidade implementado em todos os processos",
    count: 8,
    sectors: ["Sucroenergético", "Saneamento", "Fertilizantes"],
  },
  {
    year: 2008,
    type: "project",
    headline: "Três grandes greenfields sucroenergéticos simultâneos",
    count: 5,
    sectors: ["Sucroenergético"],
    featured: [
      { client: "São Martinho — Boa Vista", scope: "Automação termoelétrica e etanol — 4.500 pontos" },
      { client: "Da Mata", scope: "Automação etanol e levedura — 2.000 pontos" },
      { client: "Ipê", scope: "Automação etanol — 1.800 pontos" },
    ],
  },
  {
    year: 2009,
    type: "project",
    headline: "Grandes plantas de cogeração no Centro-Oeste",
    count: 4,
    sectors: ["Sucroenergético", "Energia"],
    featured: [
      { client: "Rio Claro", scope: "Automação termoelétrica e etanol — 4.500 pontos" },
      { client: "Santa Luzia", scope: "Automação e cogeração — 4.500 pontos" },
    ],
  },
  {
    year: 2011,
    type: "project",
    headline: "Quatro projetos simultâneos — expansão multissetorial",
    count: 7,
    sectors: ["Sucroenergético", "Saneamento"],
    featured: [
      { client: "Água Emendada", scope: "Automação termoelétrica e etanol — 3.800 pontos" },
      { client: "Alto Taquari", scope: "Automação termoelétrica e etanol — 3.800 pontos" },
      { client: "Conquista do Pontal", scope: "Automação cogeração — 1.300 pontos" },
      { client: "GS Inima — ETE Caiçara", scope: "Automação e elétrica — 1.100 pontos" },
    ],
  },
  {
    year: 2012,
    type: "award",
    headline: "Prêmio Excelência de Fornecedores e expansão fertilizantes",
    count: 6,
    sectors: ["Sucroenergético", "Saneamento", "Fertilizantes"],
    featured: [
      { client: "SESAMM", scope: "ETE Mogi Mirim — automação, civil e elétrica — 1.500 pontos" },
      { client: "Mosaic Fertilizantes", scope: "Área U-830 dosagem microgranulado — 520 pontos" },
    ],
  },
  {
    year: 2013,
    type: "expansion",
    headline: "Entrada no setor de logística — etanoldutos LOGUM",
    count: 8,
    sectors: ["Logística", "Fertilizantes"],
    featured: [
      { client: "LOGUM — Ribeirão Preto", scope: "Automação terminal etanol — 7.300 pontos" },
      { client: "LOGUM — Etanolduto", scope: "Automação, elétrica e civil greenfield — 1.000 pontos" },
    ],
  },
  {
    year: 2014,
    type: "international",
    headline: "Primeiro projeto internacional — Angola + recorde de 18 obras",
    highlight: "Maior volume de projetos simultâneos até então: Vale Fertilizantes (3 plantas), Biocom Angola e expansão logística.",
    count: 18,
    isMajor: true,
    sectors: ["Fertilizantes", "Sucroenergético", "Logística", "Internacional"],
    featured: [
      { client: "Biocom — Angola", scope: "Automação greenfield turnkey completo — 6.000 pontos", sector: "Internacional" },
      { client: "Vale Fertilizantes", scope: "3 plantas simultâneas: U-280, U-260 e U-170 — 8.490 pontos", sector: "Fertilizantes" },
      { client: "LOGUM Uberaba", scope: "Terminal de recebimento e armazenamento — 8.500 pontos", sector: "Logística" },
      { client: "Santa Isabel I", scope: "Automação açúcar e etanol — 1.100 pontos", sector: "Sucroenergético" },
    ],
  },
  {
    year: 2015,
    type: "expansion",
    headline: "Início da divisão de Energias Renováveis — 14 projetos entregues",
    highlight: "Primeiro projeto solar fotovoltaico. Expansão simultânea em saneamento, logística e energia.",
    count: 14,
    sectors: ["Sucroenergético", "Saneamento", "Logística", "Energia"],
    featured: [
      { client: "Costa Rica", scope: "Automação termoelétrica e etanol — 3.800 pontos" },
      { client: "SANEVAP — São José dos Campos", scope: "ETE automação e elétrica — 5.000 pontos" },
      { client: "Floraplac", scope: "Automação termoelétrica 20 MWt — 1.000 pontos" },
    ],
  },
  {
    year: 2016,
    type: "project",
    headline: "Termoelétrica 15 MW, ETE e expansão do ciclo Bunge",
    count: 12,
    sectors: ["Sucroenergético", "Saneamento", "Fertilizantes"],
  },
  {
    year: 2017,
    type: "international",
    headline: "Operação no Panamá — segundo país atendido",
    count: 16,
    sectors: ["Sucroenergético", "Fertilizantes", "Internacional"],
    featured: [
      { client: "Cadasa — Panamá", scope: "Automação e elétrica termoelétrica 40 MVA + eletrificação de moenda", sector: "Internacional" },
      { client: "Mosaic / Vale — CMA e CIU", scope: "Instrumentação e válvulas — paradas programadas", sector: "Fertilizantes" },
    ],
  },
  {
    year: 2018,
    type: "project",
    headline: "Recorde histórico — 20 obras simultâneas",
    highlight: "Maior volume de operações da história da empresa. Bunge (3 unidades), São Martinho, Mosaic e primeiros projetos EPC de grande porte.",
    count: 20,
    isMajor: true,
    sectors: ["Sucroenergético", "Fertilizantes", "Saneamento", "Alimentos"],
    featured: [
      { client: "Bunge Moema / Itatinge / Fruto", scope: "Revamp completo automação — 3 unidades simultâneas" },
      { client: "ISAPA", scope: "Projeto EPC — ampliação completa" },
      { client: "Sada Bioenergia", scope: "Fábrica de açúcar completa — 1.500 pontos" },
      { client: "Aroeira / Caldema", scope: "Automação e elétrica de caldeira" },
    ],
  },
  {
    year: 2019,
    type: "milestone",
    headline: "2.000 dias sem acidentes — marco de segurança operacional",
    highlight: "Marco histórico de segurança consolidado. 18 projetos entregues: São Martinho, FS Bioenergia e expansão de saneamento.",
    count: 18,
    isMajor: true,
    sectors: ["Sucroenergético", "Saneamento", "Fertilizantes"],
    featured: [
      { client: "São Martinho — Iracema (×2)", scope: "Fermentação e Mix Etanol" },
      { client: "FS Bioenergia (×2)", scope: "Lins e Sorriso" },
      { client: "GRASP", scope: "Secador de levedura" },
      { client: "GS Inima Samar", scope: "ETA I e II — Araçatuba" },
    ],
  },
  {
    year: 2020,
    type: "project",
    headline: "12 projetos entregues durante a pandemia",
    count: 12,
    sectors: ["Sucroenergético", "Energia", "Alimentos"],
    featured: [
      { client: "Jalles Machado", scope: "Moenda + tratamento de caldo + CDA + destilaria — 1.200 pontos" },
      { client: "Vale do Paraná — UTE VDPA", scope: "Automação e instrumentação caldeira — 1.200 pontos" },
      { client: "Cerradinho Bio", scope: "Automação fermentação e montagem de campo — 800 pontos" },
    ],
  },
  {
    year: 2021,
    type: "project",
    headline: "UFV Belmonte 300 MW + 20 projetos — entrada definitiva no solar",
    highlight: "Maior projeto solar executado até então, em parceria com o Grupo Cobra. São Martinho (4 unidades), Mosaic (3 unidades) e Adimax simultâneos.",
    count: 20,
    isMajor: true,
    sectors: ["Solar", "Sucroenergético", "Fertilizantes", "Alimentos"],
    featured: [
      { client: "UFV Belmonte I & II — Grupo Cobra", scope: "Montagem eletro-civil 300 MW — São José do Belmonte, PE", sector: "Solar" },
      { client: "São Martinho (×4)", scope: "Iracema, Santa Cruz, Pradópolis e Boa Vista" },
      { client: "Mosaic / Vale (×3)", scope: "Campo Grande e Uberlândia" },
      { client: "Adimax — Feira de Santana", scope: "Planta greenfield alimentos — 1.000 pontos" },
    ],
  },
  {
    year: 2022,
    type: "project",
    headline: "14 projetos — alimentos, soja e sucroenergético",
    count: 14,
    sectors: ["Sucroenergético", "Alimentos", "Fertilizantes"],
    featured: [
      { client: "Serra Verde — Boa Vista, RR", scope: "Planta greenfield extração e refino de óleo de soja — 800 pontos" },
    ],
  },
  {
    year: 2023,
    type: "expansion",
    headline: "UFV São José do Belmonte 300 MW e biogás industrial",
    count: 8,
    sectors: ["Solar", "Alimentos", "Fertilizantes"],
    featured: [
      { client: "Grupo Cobra — UFV São José do Belmonte I & II", scope: "Montagem eletro-civil 300 MW — Pernambuco", sector: "Solar" },
      { client: "Combio / Ingredion", scope: "Elétrica e automação — biogás industrial — 1.500 pontos" },
    ],
  },
  {
    year: 2025,
    type: "expansion",
    headline: "UFV Lins I & II — 207 MW no Ceará",
    count: 4,
    sectors: ["Solar"],
    featured: [
      { client: "Grupo Cobra — UFV Mundo Novo Lins I & II", scope: "Montagem eletromecânica 207 MW — São Gonçalo do Amarante, CE" },
    ],
  },
  {
    year: 2026,
    type: "expansion",
    headline: "UFV Lins III–VIII — 230 MW no Piauí — em execução",
    highlight: "Maior projeto solar em andamento da Authomathika. Cristino Castro, PI.",
    count: 1,
    sectors: ["Solar"],
    isMajor: true,
    featured: [
      { client: "Grupo Cobra — UFV Lins III–VIII", scope: "Montagem eletromecânica 230 MW — Cristino Castro, PI" },
    ],
  },
];

export const sectors = [
  {
    name: "Sucroenergético",
    description:
      "Especialistas desde 1999. Fermentação, destilaria, caldeira, cogeração e fábrica de açúcar.",
    icon: "Factory",
    featured: true,
  },
  {
    name: "Fertilizantes",
    description: "Vale Fertilizantes (Uberaba e Araxá), Bunge, Cargill.",
    icon: "Sprout",
  },
  {
    name: "Saneamento",
    description: "SAMAR, Ambient, SANEVAP, SESAMM, Odebrecht Ambiental.",
    icon: "Droplets",
  },
  {
    name: "Logística",
    description: "Armazéns, silos, transporte de bagaço e grãos.",
    icon: "Warehouse",
  },
  {
    name: "Mineração",
    description: "Projetos eletromecânicos e de automação para mineração.",
    icon: "Mountain",
  },
  {
    name: "Energias Renováveis",
    description: "Solar fotovoltaica centralizada e distribuída.",
    icon: "Sun",
  },
  {
    name: "Alimentos & Bebidas",
    description: "Indústrias alimentícias e de bebidas.",
    icon: "UtensilsCrossed",
  },
  {
    name: "Siderurgia & Química",
    description: "Petróleo, química, farmacêutica e siderurgia.",
    icon: "Flame",
  },
  {
    name: "Papel & Celulose",
    description: "Fábricas de celulose, papel e embalagens.",
    icon: "TreePine",
  },
  {
    name: "Cimento",
    description: "Fábricas de cimento, cal e materiais de construção.",
    icon: "Landmark",
  },
  {
    name: "Petróleo & Gás",
    description: "Refinarias, terminais, plantas petroquímicas e onshore.",
    icon: "Fuel",
  },
  {
    name: "Infraestrutura",
    description: "Subestações, termelétricas e centrais de utilidades.",
    icon: "Building",
  },
];

export const clients = [
  "Vale Fertilizantes",
  "Bunge Moema",
  "Cargill",
  "Amyris",
  "Odebrecht Ambiental",
  "SAMAR",
  "SANEVAP",
  "SESAMM",
  "Grupo Cobra",
  "Indemil",
  "Usina Costa Rica",
  "Usina Rio Vermelho",
  "Usina Pedra Buriti",
  "Usina Ferrari",
  "Usina Santa Helena",
  "Bahia Etanol",
  "UMOE",
];

export const works = [
  {
    title: "Costa Rica",
    type: "Greenfields",
    category: "Usina Turnkey",
    description: "Projeto completo turnkey para usina sucroenergética.",
    image: "https://www.authomathika.com.br/public/img/blocos/atvos-costa-rica_8wgo4MCRmTQstujAyXa1jtYp2.webp",
    altText: "Usina sucroenergetica Costa Rica - projeto turnkey completo com automacao, eletrica e montagem eletromecanica executado pela Authomathika",
  },
  {
    title: "Rio Vermelho",
    type: "Greenfields",
    category: "Fábrica de Açúcar Turnkey",
    description: "Implantação completa de fábrica de açúcar.",
    image: "https://www.authomathika.com.br/public/img/blocos/rio-vermelho_XmZPtvdRiu2oXhIKvwOxXVvfH.webp",
    altText: "Usina Rio Vermelho - implantacao greenfield de fabrica de acucar turnkey com engenharia EPC completa pela Authomathika",
  },
  {
    title: "Pedra Buriti",
    type: "Greenfields",
    category: "Caldeira Turnkey",
    description: "Sistema de caldeira e cogeração completo.",
    image: "https://www.authomathika.com.br/public/img/blocos/pedra-buriti_iAoTM9fLB6IHvO1QjYycQFWkK.webp",
    altText: "Usina Pedra Buriti - sistema de caldeira e cogeracao turnkey com montagem eletromecanica e comissionamento pela Authomathika",
  },
  {
    title: "Ferrari",
    type: "Revamp",
    category: "Moenda Eletrificada",
    description: "Modernização e eletrificação de moenda.",
    image: "https://www.authomathika.com.br/public/img/blocos/ferrari_CE7VRMxBfPw6Hb73y6oUu1PMl.webp",
    altText: "Usina Ferrari - revamp e eletrificacao de moenda sucroenergetica com modernizacao de acionamentos eletricos pela Authomathika",
  },
  {
    title: "Bunge – Moema",
    type: "Revamp",
    category: "Automação",
    description: "Revamp completo do sistema de automação.",
    image: "https://www.authomathika.com.br/public/img/blocos/bunge-moema_9q01asH5acLHKcJLrZLPLuRQR.webp",
    altText: "Bunge Moema - revamp completo do sistema de automacao industrial com CLPs e SCADA pela Authomathika",
  },
  {
    title: "Santa Helena",
    type: "Revamp",
    category: "Turnkey Completo",
    description: "Revamp integral da planta industrial.",
    image: "https://www.authomathika.com.br/public/img/blocos/santa-helena_r0OMDr5Lp1XB9wV6R282l3tre.webp",
    altText: "Usina Santa Helena - revamp turnkey completo com automacao, eletrica e instrumentacao industrial pela Authomathika",
  },
  {
    title: "Bahia Etanol",
    type: "Revamp",
    category: "Revamp Integral",
    description: "Modernização completa da planta.",
    image: "https://www.authomathika.com.br/public/img/blocos/bahia-etanol_NIQItDaKCOHGyBHNp9SSkeH5s.webp",
    altText: "Bahia Etanol - modernizacao integral da planta de etanol com revamp de automacao e eletrica pela Authomathika",
  },
  {
    title: "Vale – Carajás",
    type: "Projeto",
    category: "Eletro Centro",
    description: "Implantação de eletro centro.",
    image: "https://www.authomathika.com.br/public/img/blocos/vale-carajas_tBhpbjMurNgnPuxPGyjolK63B.webp",
    altText: "Vale Carajas - implantacao de eletro centro para mineracao com engenharia eletrica e automacao pela Authomathika",
  },
  {
    title: "UMOE 1",
    type: "Revamp",
    category: "Ampliação Completa",
    description: "Ampliação e revamp da planta.",
    image: "https://www.authomathika.com.br/public/img/blocos/umoe-1_dwfq4v5Pa4kEIKOTGvQeZ4SQo.webp",
    altText: "UMOE - ampliacao e revamp completo de planta sucroenergetica com montagem eletromecanica pela Authomathika",
  },
  {
    title: "SESAMM",
    type: "Greenfields",
    category: "ETA e ETE Mogi Mirim",
    description: "Plantas de tratamento de água e esgoto.",
    image: "https://www.authomathika.com.br/public/img/blocos/sesamm_4Qm6F2QSxv2ILjb8LgeNLDkEb.webp",
    altText: "SESAMM Mogi Mirim - implantacao greenfield de estacoes de tratamento de agua (ETA) e esgoto (ETE) com automacao pela Authomathika",
  },
  {
    title: "Indemil",
    type: "Montagem",
    category: "Nova Planta Ácido Cítrico",
    description: "Montagem eletromecânica completa.",
    image: "https://www.authomathika.com.br/public/img/blocos/indemil_7GPL0nwAikV9P5O6rE7q9i9rS.webp",
    altText: "Indemil - montagem eletromecanica completa de nova planta industrial de acido citrico pela Authomathika",
  },
  {
    title: "UFV Belmonte I & II",
    type: "Energia Solar",
    category: "455 MW — Grupo Cobra",
    description: "Usina fotovoltaica de 455 MW.",
    image: "https://www.authomathika.com.br/public/img/blocos/ufv-belmonte_Gm6HFNCJp429Srma7DpwrE8JL.webp",
    altText: "UFV Belmonte I e II - usina solar fotovoltaica de 455 MW com montagem eletrica e mecanica pela Authomathika em parceria com Grupo Cobra",
  },
];
