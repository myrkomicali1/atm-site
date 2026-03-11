/**
 * FAQ estratégico — tratamento de objeções disfarçado de FAQ.
 * Baseado na análise de marketing e personas (ICPs).
 *
 * Categorias:
 * - geral: FAQ para home e páginas gerais
 * - orcamento: FAQ sobre processo de orçamento/proposta
 * - prazos: FAQ sobre prazos e cronogramas
 * - qualidade: FAQ sobre qualidade e certificações
 * - seguranca: FAQ sobre segurança no trabalho
 *
 * As FAQs por divisão de negócios ficam em faqs.ts (businessFaqs).
 * As FAQs por setor ficam nos próprios dados de sectors.ts.
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: "geral" | "orcamento" | "prazos" | "qualidade" | "seguranca";
  sector?: string;
  businessArea?: string;
}

export const generalFaqs: FAQItem[] = [
  {
    question: "Como funciona um projeto-piloto com a Authomathika?",
    answer:
      "A Authomathika oferece estudos de escopo gratuitos para dimensionar o projeto antes de qualquer compromisso. Para clientes que desejam validar nossa atuação, podemos iniciar com um escopo menor — como uma parada programada, calibração de instrumentos ou automação de uma área específica — que demonstra nossa qualidade técnica e capacidade de entrega antes de projetos maiores.",
    category: "geral",
  },
  {
    question: "Os projetos podem ser feitos de forma modular?",
    answer:
      "Sim. A Authomathika oferece flexibilidade de escopo. Um projeto de modernização de planta pode ser dividido em fases — por exemplo, primeiro a automação de uma área crítica, depois a atualização elétrica, e finalmente a instrumentação. Cada fase entrega valor independente e permite ao cliente distribuir o investimento ao longo do tempo.",
    category: "orcamento",
  },
  {
    question: "Quais setores a Authomathika atende?",
    answer:
      "A Authomathika atende os setores sucroenergético (principal, desde 1999), mineração, energias renováveis (solar fotovoltaica), saneamento, fertilizantes, alimentos e bebidas, siderurgia, química e logística. São mais de 200 projetos entregues em diferentes segmentos industriais, com equipes especializadas para cada contexto operacional.",
    category: "geral",
  },
  {
    question: "Onde encontro as certificações e documentos da empresa?",
    answer:
      "A Authomathika possui certificação ISO 9001, equipes certificadas NR-10 e NR-35, e laboratórios de metrologia com certificação RBC. Toda a documentação está disponível para processos de pré-qualificação. Entre em contato com nossa equipe comercial para receber o kit de documentação completo, incluindo certidões, indicadores de segurança e referências de projetos.",
    category: "qualidade",
  },
  {
    question: "Como é o processo de transição em projetos de automação?",
    answer:
      "A Authomathika utiliza estratégias de migração planejada para projetos de automação. O sistema novo é configurado e testado em paralelo com o legado, garantindo que a transição seja segura e sem impacto na produção. A equipe de comissionamento acompanha todo o processo até a estabilização completa da operação com o novo sistema.",
    category: "geral",
  },
  {
    question: "Qual o prazo médio de entrega de um projeto EPC?",
    answer:
      "O prazo depende da complexidade e escopo do projeto. Um revamp parcial pode levar de 3 a 6 meses. Uma implantação greenfield de porte médio demanda de 8 a 14 meses. Projetos turnkey de grande porte podem levar de 14 a 24 meses. A Authomathika oferece estudo de escopo gratuito para dimensionar prazos e custos com precisão.",
    category: "prazos",
  },
  {
    question: "A Authomathika oferece suporte após o comissionamento?",
    answer:
      "Sim. A divisão de Serviços da Authomathika oferece suporte pós-comissionamento completo: paradas programadas, manutenção preventiva e corretiva, metrologia RBC com certificados rastreados, diagnóstico de redes e o sistema proprietário Serelepe para acompanhamento online de atendimentos. São mais de 42.000 equipamentos e 297.000 horas de serviço acumuladas.",
    category: "geral",
  },
  {
    question: "Com quais fabricantes e plataformas vocês trabalham?",
    answer:
      "A Authomathika trabalha com as principais plataformas do mercado: Rockwell (Allen-Bradley), Siemens, Yokogawa, Emerson, Altus, ABB, Schneider e GE em automação. Em elétrica, trabalhamos com WEG, Siemens, ABB, Schneider, GE e EATON. Desenvolvemos software SCADA customizado e integramos qualquer plataforma existente, sem lock-in de fornecedor.",
    category: "geral",
  },
];

/** FAQs filtradas para a home — as 6 mais importantes */
export function getHomeFaqs(): FAQItem[] {
  return generalFaqs.slice(0, 6);
}

/** FAQs filtradas por categoria */
export function getFaqsByCategory(
  category: FAQItem["category"]
): FAQItem[] {
  return generalFaqs.filter((f) => f.category === category);
}
