/**
 * Dados de depoimentos / testimonials (placeholder).
 * Estrutura pronta para dados reais quando disponíveis.
 * Inclui schema Review para SEO/GEO.
 *
 * TODO: Substituir por depoimentos reais coletados com clientes.
 * Os nomes, cargos e empresas abaixo são placeholders baseados nas personas
 * identificadas na análise de marketing (ICPs).
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  sector: string;
  quote: string;
  result?: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  // TODO: Substituir por depoimentos reais coletados com clientes
  {
    id: "ricardo-m",
    name: "Ricardo M.",
    role: "Diretor Industrial",
    company: "Usina Sucroenergética",
    sector: "sucroenergético",
    quote:
      "A Authomathika entregou o projeto de automação da nossa planta dentro do prazo e com qualidade técnica excepcional. A equipe demonstrou profundo conhecimento do setor sucroenergético, e o sistema SCADA implantado reduziu nosso tempo de resposta a alarmes em 40%.",
    result: "Tempo de resposta a alarmes reduzido em 40%",
    rating: 5,
    featured: true,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "fernanda-o",
    name: "Fernanda O.",
    role: "Gerente de Projetos Capex",
    company: "Indústria de Fertilizantes",
    sector: "fertilizantes",
    quote:
      "Contratamos a Authomathika para um projeto EPC completo e ficamos impressionados com a gestão integrada. O cronograma foi cumprido rigorosamente, a documentação técnica entregue foi impecável e a comunicação durante todo o projeto foi transparente.",
    result: "Cronograma cumprido com documentação impecável",
    rating: 5,
    featured: true,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "carlos-s",
    name: "Carlos S.",
    role: "Engenheiro de Automação",
    company: "Parque Solar",
    sector: "energias-renovaveis",
    quote:
      "A expertise da Authomathika em montagem eletromecânica para parques solares é diferenciada. Executaram 120 MW no nosso parque com zero acidentes e entregaram antes do prazo previsto. A qualidade da montagem e comissionamento superou nossas expectativas.",
    result: "120 MW montados com zero acidentes",
    rating: 5,
    featured: true,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "marcos-l",
    name: "Marcos L.",
    role: "Gerente de Manutenção",
    company: "Usina de Açúcar e Etanol",
    sector: "sucroenergético",
    quote:
      "Trabalhamos com a Authomathika em paradas programadas há mais de 10 anos. A equipe certificada NR-10 e NR-35, aliada ao sistema Serelepe de rastreabilidade, nos dá total confiança na qualidade e segurança dos serviços prestados.",
    result: "10+ anos de parceria em paradas programadas",
    rating: 5,
    featured: false,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "andre-p",
    name: "André P.",
    role: "Diretor de Engenharia",
    company: "Concessionária de Saneamento",
    sector: "saneamento",
    quote:
      "A automação das nossas estações de tratamento pela Authomathika transformou nossa operação. O sistema SCADA permite monitoramento remoto em tempo real de todas as ETAs e ETEs, reduzindo a necessidade de equipe presencial e aumentando a eficiência operacional.",
    result: "Monitoramento remoto de todas as estações",
    rating: 5,
    featured: false,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "patricia-r",
    name: "Patrícia R.",
    role: "Coordenadora de Projetos",
    company: "Indústria Química",
    sector: "siderurgia-quimica",
    quote:
      "O que nos impressionou na Authomathika foi a capacidade de entregar um projeto completo — elétrica, automação e montagem — em uma parada programada de apenas 45 dias. A gestão de segurança em área classificada foi exemplar, com zero ocorrências.",
    result: "Parada de 45 dias executada com zero ocorrências",
    rating: 5,
    featured: false,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "lucas-f",
    name: "Lucas F.",
    role: "Gerente de Operações",
    company: "Grupo Sucroenergético",
    sector: "sucroenergético",
    quote:
      "Após a eletrificação da moenda pela Authomathika, nosso consumo energético caiu significativamente e ganhamos controle total sobre o processo de extração. O retorno do investimento veio na segunda safra, e a confiabilidade do sistema é excepcional.",
    result: "Retorno do investimento na segunda safra",
    rating: 5,
    featured: true,
  },
  // TODO: Substituir por depoimento real coletado com cliente
  {
    id: "roberto-g",
    name: "Roberto G.",
    role: "Diretor Técnico",
    company: "Desenvolvedora de Parques Solares",
    sector: "energias-renovaveis",
    quote:
      "Para um parque de 540 MW, precisávamos de um parceiro local com capacidade real de execução. A Authomathika mobilizou equipes rapidamente, manteve a qualidade de montagem em escala e garantiu os indicadores de performance ratio. Parceria renovada para os próximos projetos.",
    result: "Performance ratio garantida em 540 MW",
    rating: 5,
    featured: false,
  },
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}

export function getTestimonialsBySector(sector: string): Testimonial[] {
  return testimonials.filter((t) => t.sector === sector);
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
