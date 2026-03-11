/**
 * Cases de sucesso detalhados — evolução dos works[] de company.ts.
 * Cada case possui desafio, solução e resultados mensuráveis.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  location: string;
  year: number;
  duration?: string;
  type: "greenfield" | "brownfield" | "revamp" | "epc" | "montagem" | "solar";
  challenge: string;
  solution: string;
  results: Array<{ metric: string; value: string }>;
  servicesUsed: string[];
  testimonialId?: string;
  image: string;
  altText: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "costa-rica",
    title: "Usina Costa Rica — Projeto Turnkey Completo",
    client: "Usina Costa Rica",
    sector: "sucroenergético",
    location: "Mato Grosso do Sul",
    year: 2010,
    duration: "18 meses",
    type: "greenfield",
    challenge:
      "A Usina Costa Rica precisava de uma implantação greenfield completa de sua planta sucroenergética, incluindo automação, elétrica e montagem eletromecânica. O desafio era entregar todas as disciplinas de engenharia de forma integrada, dentro de um cronograma agressivo de 18 meses, garantindo que a usina estivesse pronta para a primeira safra.",
    solution:
      "A Authomathika assumiu a responsabilidade integral como contratada EPC, coordenando engenharia de projeto, aquisição de materiais, montagem eletromecânica, automação completa com SCADA e comissionamento de todas as áreas. A gestão integrada eliminou interfaces entre fornecedores e garantiu o cumprimento do cronograma.",
    results: [
      { metric: "Prazo", value: "Entregue dentro do cronograma" },
      { metric: "Escopo", value: "Usina completa turnkey" },
      { metric: "Áreas", value: "Automação, elétrica, montagem" },
      { metric: "Modelo", value: "Contrato EPC integrado" },
    ],
    servicesUsed: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "engenharia-epc",
    ],
    image:
      "https://www.authomathika.com.br/public/img/blocos/atvos-costa-rica_8wgo4MCRmTQstujAyXa1jtYp2.webp",
    altText:
      "Usina sucroenergetica Costa Rica - projeto turnkey completo com automacao, eletrica e montagem eletromecanica executado pela Authomathika",
    featured: true,
  },
  {
    slug: "rio-vermelho",
    title: "Rio Vermelho — Fábrica de Açúcar Turnkey",
    client: "Usina Rio Vermelho",
    sector: "sucroenergético",
    location: "São Paulo",
    year: 2008,
    duration: "14 meses",
    type: "greenfield",
    challenge:
      "A Usina Rio Vermelho necessitava da implantação completa de uma fábrica de açúcar greenfield. O projeto exigia coordenação perfeita entre engenharia elétrica, automação de processo e montagem mecânica para atingir capacidade de produção no primeiro ciclo de operação.",
    solution:
      "A Authomathika executou o projeto turnkey da fábrica de açúcar, integrando automação de processo com CLPs e SCADA, montagem elétrica completa incluindo CCMs e QGBTs, e toda a montagem mecânica de equipamentos. O comissionamento foi realizado com acompanhamento técnico até a estabilização da produção.",
    results: [
      { metric: "Prazo", value: "14 meses de execução" },
      { metric: "Escopo", value: "Fábrica de açúcar completa" },
      { metric: "Start-up", value: "Produção no 1o ciclo" },
    ],
    servicesUsed: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "engenharia-epc",
    ],
    image:
      "https://www.authomathika.com.br/public/img/blocos/rio-vermelho_XmZPtvdRiu2oXhIKvwOxXVvfH.webp",
    altText:
      "Usina Rio Vermelho - implantacao greenfield de fabrica de acucar turnkey com engenharia EPC completa pela Authomathika",
    featured: true,
  },
  {
    slug: "pedra-buriti",
    title: "Pedra Buriti — Caldeira e Cogeração Turnkey",
    client: "Usina Pedra Buriti",
    sector: "sucroenergético",
    location: "Mato Grosso do Sul",
    year: 2009,
    duration: "12 meses",
    type: "greenfield",
    challenge:
      "A Usina Pedra Buriti precisava expandir sua capacidade de cogeração de energia com a implantação de um novo sistema de caldeira. O desafio envolvia a montagem eletromecânica completa em paralelo com a operação existente da usina, exigindo gestão rigorosa de segurança e interfaces.",
    solution:
      "A Authomathika executou a montagem completa da caldeira e sistema de cogeração, incluindo toda a parte elétrica, automação com CLPs para controle de combustão e vapor, instrumentação de campo e comissionamento com validação de performance. A integração com o sistema existente foi realizada sem impacto na operação.",
    results: [
      { metric: "Escopo", value: "Caldeira + cogeração" },
      { metric: "Integração", value: "Zero impacto na operação" },
      { metric: "Segurança", value: "Zero acidentes" },
    ],
    servicesUsed: [
      "eletrica",
      "automacao",
      "montagem-eletromecanica",
    ],
    image:
      "https://www.authomathika.com.br/public/img/blocos/pedra-buriti_iAoTM9fLB6IHvO1QjYycQFWkK.webp",
    altText:
      "Usina Pedra Buriti - sistema de caldeira e cogeracao turnkey com montagem eletromecanica e comissionamento pela Authomathika",
    featured: false,
  },
  {
    slug: "ferrari",
    title: "Usina Ferrari — Eletrificação de Moenda",
    client: "Usina Ferrari",
    sector: "sucroenergético",
    location: "São Paulo",
    year: 2012,
    type: "revamp",
    challenge:
      "A Usina Ferrari operava com acionamentos mecânicos na moenda, limitando a eficiência energética e o controle de processo. O projeto de eletrificação precisava ser executado integralmente na entressafra, com janela de aproximadamente 90 dias.",
    solution:
      "A Authomathika executou o revamp completo com eletrificação da moenda, incluindo instalação de acionamentos elétricos, novos painéis CCMs, automação com CLPs para controle de velocidade e torque, e instrumentação de processo. A execução concentrada na entressafra foi cumprida dentro do prazo previsto.",
    results: [
      { metric: "Escopo", value: "Eletrificação completa da moenda" },
      { metric: "Execução", value: "Dentro da janela de entressafra" },
      { metric: "Eficiência", value: "Ganho energético significativo" },
    ],
    servicesUsed: ["eletrica", "automacao"],
    image:
      "https://www.authomathika.com.br/public/img/blocos/ferrari_CE7VRMxBfPw6Hb73y6oUu1PMl.webp",
    altText:
      "Usina Ferrari - revamp e eletrificacao de moenda sucroenergetica com modernizacao de acionamentos eletricos pela Authomathika",
    featured: false,
  },
  {
    slug: "bunge-moema",
    title: "Bunge Moema — Revamp de Automação",
    client: "Bunge Moema",
    sector: "sucroenergético",
    location: "São Paulo",
    year: 2011,
    type: "revamp",
    challenge:
      "A planta da Bunge Moema operava com sistemas de automação defasados que limitavam o controle de processo e geravam ineficiência operacional. O revamp precisava ser planejado para minimizar o tempo de parada e garantir a transição segura do sistema legado para a nova plataforma.",
    solution:
      "A Authomathika realizou o revamp completo do sistema de automação, incluindo migração de CLPs, novo sistema SCADA, substituição de instrumentação de campo e recabeamento. A migração foi feita de forma gradual, com operação em paralelo dos sistemas antigo e novo para validação antes do descomissionamento.",
    results: [
      { metric: "Escopo", value: "Revamp completo de automação" },
      { metric: "Migração", value: "Transição gradual sem parada" },
      { metric: "Confiabilidade", value: "Sistema modernizado" },
    ],
    servicesUsed: ["automacao", "servicos"],
    image:
      "https://www.authomathika.com.br/public/img/blocos/bunge-moema_9q01asH5acLHKcJLrZLPLuRQR.webp",
    altText:
      "Bunge Moema - revamp completo do sistema de automacao industrial com CLPs e SCADA pela Authomathika",
    featured: false,
  },
  {
    slug: "santa-helena",
    title: "Santa Helena — Revamp Turnkey Completo",
    client: "Usina Santa Helena",
    sector: "sucroenergético",
    location: "Goiás",
    year: 2014,
    type: "revamp",
    challenge:
      "A Usina Santa Helena precisava de um revamp integral de sua planta industrial, abrangendo automação, elétrica e instrumentação. A modernização completa deveria ser coordenada para manter a interdependência entre as diferentes áreas da usina funcionando corretamente.",
    solution:
      "A Authomathika coordenou o revamp turnkey completo, abrangendo automação de todas as áreas (fermentação, destilaria, caldeira), modernização da infraestrutura elétrica e substituição de instrumentação. O modelo de contrato único garantiu gestão integrada sem conflitos de interface.",
    results: [
      { metric: "Escopo", value: "Revamp integral turnkey" },
      { metric: "Áreas", value: "Automação + elétrica + instrumentação" },
      { metric: "Modelo", value: "Contrato único integrado" },
    ],
    servicesUsed: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "engenharia-epc",
    ],
    image:
      "https://www.authomathika.com.br/public/img/blocos/santa-helena_r0OMDr5Lp1XB9wV6R282l3tre.webp",
    altText:
      "Usina Santa Helena - revamp turnkey completo com automacao, eletrica e instrumentacao industrial pela Authomathika",
    featured: false,
  },
  {
    slug: "bahia-etanol",
    title: "Bahia Etanol — Modernização Integral",
    client: "Bahia Etanol",
    sector: "sucroenergético",
    location: "Bahia",
    year: 2016,
    type: "revamp",
    challenge:
      "A planta da Bahia Etanol necessitava de modernização completa para aumentar a eficiência produtiva e reduzir custos operacionais. O projeto envolvia a atualização de sistemas de automação, elétrica e instrumentação em uma planta que já estava em operação.",
    solution:
      "A Authomathika realizou a modernização completa com substituição de CLPs e SCADA, atualização do sistema elétrico com novos painéis e proteções, e calibração e substituição de instrumentação de campo. O escopo foi executado em fases para permitir continuidade parcial da operação.",
    results: [
      { metric: "Escopo", value: "Modernização integral" },
      { metric: "Fases", value: "Execução por etapas" },
      { metric: "Resultado", value: "Eficiência operacional aumentada" },
    ],
    servicesUsed: ["automacao", "eletrica", "servicos"],
    image:
      "https://www.authomathika.com.br/public/img/blocos/bahia-etanol_NIQItDaKCOHGyBHNp9SSkeH5s.webp",
    altText:
      "Bahia Etanol - modernizacao integral da planta de etanol com revamp de automacao e eletrica pela Authomathika",
    featured: false,
  },
  {
    slug: "vale-carajas",
    title: "Vale Carajás — Implantação de Eletro Centro",
    client: "Vale",
    sector: "mineracao",
    location: "Carajás, Pará",
    year: 2013,
    type: "greenfield",
    challenge:
      "A Vale necessitava da implantação de um eletro centro na operação de Carajás, região remota do Pará. O desafio incluía a logística de mobilização em área isolada, os rigorosos padrões de segurança e qualificação da mineração, e o ambiente operacional severo com poeira e vibração.",
    solution:
      "A Authomathika executou a implantação completa do eletro centro, incluindo engenharia elétrica, automação e montagem eletromecânica. A mobilização de equipes certificadas NR-10/NR-35 foi planejada com logística independente. Toda a documentação técnica foi entregue conforme os padrões de pré-qualificação da Vale.",
    results: [
      { metric: "Escopo", value: "Eletro centro completo" },
      { metric: "Segurança", value: "Zero acidentes na obra" },
      { metric: "Documentação", value: "Conforme padrões Vale" },
    ],
    servicesUsed: [
      "eletrica",
      "automacao",
      "montagem-eletromecanica",
    ],
    testimonialId: "fernanda-o",
    image:
      "https://www.authomathika.com.br/public/img/blocos/vale-carajas_tBhpbjMurNgnPuxPGyjolK63B.webp",
    altText:
      "Vale Carajas - implantacao de eletro centro para mineracao com engenharia eletrica e automacao pela Authomathika",
    featured: true,
  },
  {
    slug: "umoe-1",
    title: "UMOE — Ampliação e Revamp Completo",
    client: "UMOE",
    sector: "sucroenergético",
    location: "São Paulo",
    year: 2015,
    type: "revamp",
    challenge:
      "A planta da UMOE precisava de ampliação de capacidade produtiva combinada com revamp dos sistemas existentes. O desafio era coordenar a expansão com a modernização sem comprometer a operação em andamento.",
    solution:
      "A Authomathika executou a ampliação e revamp completo, incluindo montagem eletromecânica de novos equipamentos, automação de novas áreas com integração ao sistema existente e modernização da infraestrutura elétrica. A coordenação entre expansão e operação foi gerenciada com planejamento integrado.",
    results: [
      { metric: "Escopo", value: "Ampliação + revamp" },
      { metric: "Integração", value: "Sistemas novos e existentes" },
      { metric: "Operação", value: "Sem interrupção" },
    ],
    servicesUsed: [
      "montagem-eletromecanica",
      "automacao",
      "eletrica",
    ],
    image:
      "https://www.authomathika.com.br/public/img/blocos/umoe-1_dwfq4v5Pa4kEIKOTGvQeZ4SQo.webp",
    altText:
      "UMOE - ampliacao e revamp completo de planta sucroenergetica com montagem eletromecanica pela Authomathika",
    featured: false,
  },
  {
    slug: "sesamm",
    title: "SESAMM — ETA e ETE Mogi Mirim",
    client: "SESAMM",
    sector: "saneamento",
    location: "Mogi Mirim, São Paulo",
    year: 2017,
    type: "greenfield",
    challenge:
      "O SESAMM precisava de plantas de tratamento de água (ETA) e esgoto (ETE) completas para atender a demanda crescente de Mogi Mirim. O projeto exigia automação de processo com alta confiabilidade para operação contínua 24/7 e conformidade com padrões ambientais rigorosos.",
    solution:
      "A Authomathika executou a implantação greenfield das estações de tratamento, incluindo automação completa com CLPs e SCADA para monitoramento e controle de processo, montagem eletromecânica de equipamentos e infraestrutura elétrica. O sistema entregue permite operação e monitoramento remotos.",
    results: [
      { metric: "Escopo", value: "ETA + ETE completas" },
      { metric: "Operação", value: "24/7 automatizada" },
      { metric: "Monitoramento", value: "SCADA remoto" },
    ],
    servicesUsed: ["automacao", "montagem-eletromecanica"],
    image:
      "https://www.authomathika.com.br/public/img/blocos/sesamm_4Qm6F2QSxv2ILjb8LgeNLDkEb.webp",
    altText:
      "SESAMM Mogi Mirim - implantacao greenfield de estacoes de tratamento de agua (ETA) e esgoto (ETE) com automacao pela Authomathika",
    featured: false,
  },
  {
    slug: "indemil",
    title: "Indemil — Nova Planta de Ácido Cítrico",
    client: "Indemil",
    sector: "alimentos-bebidas",
    location: "Paraná",
    year: 2018,
    type: "montagem",
    challenge:
      "A Indemil precisava da montagem eletromecânica completa de uma nova planta de ácido cítrico. O projeto exigia acabamentos e materiais adequados para ambiente food-grade, além de coordenação precisa entre disciplinas mecânica, elétrica e de instrumentação.",
    solution:
      "A Authomathika realizou a montagem eletromecânica completa da planta, incluindo instalação de equipamentos de processo, tubulações, infraestrutura elétrica e instrumentação. Todos os materiais e acabamentos foram especificados para conformidade com normas sanitárias da indústria alimentícia.",
    results: [
      { metric: "Escopo", value: "Montagem eletromecânica completa" },
      { metric: "Conformidade", value: "Normas food-grade" },
      { metric: "Entrega", value: "Planta pronta para operação" },
    ],
    servicesUsed: ["montagem-eletromecanica"],
    image:
      "https://www.authomathika.com.br/public/img/blocos/indemil_7GPL0nwAikV9P5O6rE7q9i9rS.webp",
    altText:
      "Indemil - montagem eletromecanica completa de nova planta industrial de acido citrico pela Authomathika",
    featured: false,
  },
  {
    slug: "ufv-belmonte",
    title: "UFV Belmonte I & II — Usina Solar 540 MW",
    client: "Grupo Cobra",
    sector: "energias-renovaveis",
    location: "Bahia",
    year: 2021,
    duration: "24 meses",
    type: "solar",
    challenge:
      "O Grupo Cobra precisava de um parceiro brasileiro com capacidade para executar a montagem elétrica e mecânica de uma das maiores usinas solares do Brasil, com 540 MW de potência. O prazo era agressivo, a logística complexa e a qualidade da montagem deveria garantir performance ratio contratual por 25+ anos.",
    solution:
      "A Authomathika foi selecionada para a montagem elétrica e mecânica da UFV Belmonte I & II, mobilizando equipes especializadas em solar. O escopo incluiu instalação de trackers, módulos fotovoltaicos, cabeamento DC/AC, inversores string e centrais, além de subestação. O controle de qualidade em campo garantiu rastreabilidade de cada componente instalado.",
    results: [
      { metric: "Capacidade", value: "540 MW instalados" },
      { metric: "Segurança", value: "Zero acidentes graves" },
      { metric: "Entrega", value: "Dentro do cronograma" },
      { metric: "Parceiro", value: "Grupo Cobra (Espanha)" },
    ],
    servicesUsed: ["energias-renovaveis", "montagem-eletromecanica"],
    image:
      "https://www.authomathika.com.br/public/img/blocos/ufv-belmonte_Gm6HFNCJp429Srma7DpwrE8JL.webp",
    altText:
      "UFV Belmonte I e II - usina solar fotovoltaica de 540 MW com montagem eletrica e mecanica pela Authomathika em parceria com Grupo Cobra",
    featured: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudiesBySector(sectorSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.sector === sectorSlug);
}

export function getCaseStudiesByService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.servicesUsed.includes(serviceSlug));
}
