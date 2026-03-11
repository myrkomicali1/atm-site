/**
 * Dados da equipe e liderança da Authomathika.
 *
 * TODO: Substituir fotos e mensagem do presidente por conteúdo real.
 * TODO: Adicionar membros reais da equipe de liderança.
 */

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image?: string;
  linkedin?: string;
  bio?: string;
}

export interface PresidentMessage {
  name: string;
  role: string;
  image?: string;
  message: string;
}

// TODO: Substituir por mensagem real do presidente Antonio J. Gusmão
export const presidentMessage: PresidentMessage = {
  name: "Antonio J. Gusmão",
  role: "Presidente e Fundador",
  message:
    "Desde 1999, fundei a Authomathika com um princípio simples: cumprir o que prometemos. Em mais de 25 anos de mercado, construímos nossa reputação entregando projetos industriais críticos com responsabilidade, segurança e excelência técnica. Nossa equipe é formada por profissionais apaixonados por engenharia, que entendem que cada projeto representa a confiança que o cliente deposita em nós. Trabalhamos para que essa confiança seja sempre retribuída com resultados concretos.",
};

// TODO: Substituir por dados reais dos membros da liderança
export const teamMembers: TeamMember[] = [
  {
    name: "Antonio J. Gusmão",
    role: "Presidente e Fundador",
    department: "Diretoria",
    bio: "Engenheiro fundador da Authomathika em 1999. Lidera a visão estratégica e o crescimento da empresa há mais de 25 anos.",
  },
  {
    name: "Diretor de Engenharia",
    role: "Diretor de Engenharia",
    department: "Engenharia",
    bio: "Responsável pela gestão técnica de todas as divisões operacionais e garantia de qualidade dos projetos.",
  },
  {
    name: "Diretor Comercial",
    role: "Diretor Comercial",
    department: "Comercial",
    bio: "Lidera a estratégia comercial e o relacionamento com clientes em todos os setores atendidos.",
  },
  {
    name: "Gerente de Automação",
    role: "Gerente de Automação",
    department: "Automação",
    bio: "Coordena os projetos de automação industrial, programação de CLPs e desenvolvimento de SCADA.",
  },
  {
    name: "Gerente de Projetos EPC",
    role: "Gerente de Projetos EPC",
    department: "EPC",
    bio: "Gerencia os contratos EPC e turnkey, garantindo entregas dentro do prazo e orçamento.",
  },
  {
    name: "Coordenador de Segurança",
    role: "Coordenador de QSMS",
    department: "Qualidade e Segurança",
    bio: "Responsável pelos padrões de qualidade, segurança, meio ambiente e saúde que sustentam os 2.000+ dias sem acidentes.",
  },
];
