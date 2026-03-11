/**
 * FAQs por divisão de negócios.
 * Cada divisão possui perguntas relevantes ao seu contexto técnico,
 * otimizadas para FAQ schema (GEO) e captura por IAs generativas.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const businessFaqs: Record<string, FAQ[]> = {
  automacao: [
    {
      question: "O que é um integrador de sistemas de automação industrial?",
      answer:
        "Um integrador de sistemas de automação industrial é uma empresa especializada em projetar, instalar e comissionar soluções completas de controle e monitoramento de processos. A Authomathika atua como integradora desde 1999, tendo implantado mais de 290.000 pontos de automação em 180 plantas industriais no Brasil, trabalhando com plataformas como CLPs Rockwell, Siemens, Yokogawa e sistemas SCADA.",
    },
    {
      question: "Qual a diferença entre projeto greenfield e brownfield em automação?",
      answer:
        "Um projeto greenfield é uma implantação totalmente nova, onde a automação é projetada do zero para uma planta que ainda será construída. Já o brownfield envolve a modernização, ampliação ou revamp de sistemas existentes em plantas já em operação. A Authomathika possui experiência em ambos: 41 plantas greenfield e 139 brownfield na divisão de Automação.",
    },
    {
      question: "Quais sistemas SCADA e CLPs a Authomathika trabalha?",
      answer:
        "A Authomathika trabalha com as principais plataformas do mercado: CLPs Rockwell (Allen-Bradley), Siemens, Yokogawa, Emerson, Altus, ABB, Schneider e GE. Em SCADA, desenvolvemos software customizado e integramos sistemas de supervisão para monitoramento em tempo real de processos industriais.",
    },
    {
      question: "Quanto tempo leva um projeto de automação industrial?",
      answer:
        "O prazo depende da complexidade e escopo do projeto. Um revamp parcial de automação (brownfield) pode levar de 3 a 6 meses, enquanto uma implantação greenfield completa pode demandar de 8 a 18 meses. A Authomathika oferece estudo de escopo gratuito para dimensionar prazos e custos de cada projeto.",
    },
  ],

  eletrica: [
    {
      question: "O que é engenharia elétrica industrial?",
      answer:
        "Engenharia elétrica industrial abrange o projeto, construção e comissionamento de sistemas elétricos para plantas industriais, incluindo subestações, painéis elétricos (CCMs, QGBTs), sistemas de cogeração e centrais termoelétricas. A Authomathika já executou projetos em 26 plantas greenfield e 73 brownfield, com mais de 225 CCMs e 256 QGBTs instalados.",
    },
    {
      question: "Qual a diferença entre CCM e QGBT?",
      answer:
        "CCM (Centro de Controle de Motores) é um painel elétrico projetado para alimentar, proteger e controlar motores elétricos industriais. QGBT (Quadro Geral de Baixa Tensão) é o painel principal de distribuição de energia elétrica em baixa tensão de uma instalação. A Authomathika projeta e instala ambos os tipos de painéis, além de switchboards e bancos de capacitores.",
    },
    {
      question: "O que é um sistema de cogeração de energia?",
      answer:
        "Cogeração é o processo de gerar simultaneamente energia elétrica e térmica a partir de uma única fonte de combustível, como bagaço de cana em usinas sucroenergéticas. A Authomathika já implantou 23 centrais termoelétricas com sistemas de cogeração, otimizando a eficiência energética e permitindo a venda de excedentes ao grid.",
    },
    {
      question: "A Authomathika fornece painéis elétricos?",
      answer:
        "Sim. A Authomathika projeta, fabrica e instala painéis elétricos industriais, incluindo CCMs, QGBTs, switchboards e bancos de capacitores. Trabalhamos com os principais fabricantes de componentes como WEG, Rockwell, Siemens, ABB, Schneider, GE e EATON, garantindo conformidade com normas técnicas e certificações NR-10.",
    },
  ],

  servicos: [
    {
      question: "O que é uma parada programada industrial?",
      answer:
        "Uma parada programada é uma interrupção planejada da operação de uma planta industrial para realizar manutenção preventiva, calibração de instrumentos, inspeções e reparos. A Authomathika executa paradas programadas com equipes certificadas NR-10 e NR-35, tendo acumulado mais de 297.000 horas de serviço e 42.027 equipamentos atendidos.",
    },
    {
      question: "Quanto custa uma parada programada industrial?",
      answer:
        "O custo varia conforme o porte da planta, quantidade de equipamentos, escopo dos serviços e duração. Uma parada de pequeno porte pode custar a partir de R$ 50.000, enquanto paradas de grande porte em usinas sucroenergéticas podem ultrapassar R$ 500.000. A Authomathika oferece orçamentos detalhados com escopo técnico completo para dimensionamento preciso.",
    },
    {
      question: "O que é metrologia RBC e por que é importante?",
      answer:
        "Metrologia RBC (Rede Brasileira de Calibração) é o sistema de calibração de instrumentos de medição com rastreabilidade certificada pelo INMETRO. É fundamental para garantir que instrumentos como transmissores de pressão, temperatura e vazão forneçam medidas precisas e confiáveis. A Authomathika possui laboratórios fixos e móveis com certificação RBC.",
    },
    {
      question: "O que é o sistema Serelepe da Authomathika?",
      answer:
        "O Serelepe é o sistema online proprietário da Authomathika para gestão de serviços de campo. Ele permite rastreabilidade completa de atendimentos técnicos, geração de certificados digitais e acompanhamento em tempo real do status de manutenções e calibrações, garantindo transparência e qualidade em cada atendimento.",
    },
  ],

  "montagem-eletromecanica": [
    {
      question: "O que é montagem eletromecânica industrial?",
      answer:
        "Montagem eletromecânica é o processo de instalação integrada de componentes elétricos e mecânicos em plantas industriais, incluindo equipamentos, tubulações, estruturas metálicas, painéis e sistemas de força e controle. A Authomathika já executou 208 projetos de montagem, desde pequeno até grande porte, em mais de 23 anos de atuação.",
    },
    {
      question: "Quais setores a Authomathika atende em montagem eletromecânica?",
      answer:
        "A Authomathika atende diversos setores industriais: sucroenergético (usinas de açúcar e etanol), fertilizantes, saneamento, logística, mineração, alimentos e bebidas, química e siderurgia. Com 105 projetos de pequeno porte, 74 de médio porte e 29 de grande porte entregues, a empresa possui experiência multissetorial comprovada.",
    },
    {
      question: "Qual a diferença entre montagem de pequeno, médio e grande porte?",
      answer:
        "A classificação depende do volume de serviços, complexidade e investimento. Projetos de pequeno porte envolvem equipamentos individuais ou sistemas isolados. Médio porte abrange setores completos de uma planta. Grande porte compreende implantações integrais, como uma usina completa (turnkey). A Authomathika possui experiência em todas as escalas.",
    },
  ],

  "engenharia-epc": [
    {
      question: "O que é engenharia EPC?",
      answer:
        "EPC significa Engineering, Procurement and Construction (Engenharia, Aquisição e Construção). É um modelo de contrato onde uma única empresa assume a responsabilidade integral por um projeto: desde a engenharia básica e executiva, passando pela aquisição de materiais e equipamentos, até a construção, montagem e comissionamento. A Authomathika realiza contratos EPC desde 1999.",
    },
    {
      question: "Qual a vantagem de contratar um projeto EPC?",
      answer:
        "O modelo EPC oferece ponto único de responsabilidade, o que simplifica a gestão, reduz riscos de interfaces entre fornecedores, garante cronograma integrado e maior previsibilidade de custos. Para o contratante, significa ter um único interlocutor para todo o projeto, desde a engenharia até a entrega operacional.",
    },
    {
      question: "Qual a diferença entre EPC e EPCM?",
      answer:
        "No EPC, a contratada assume responsabilidade total pela execução, incluindo custos e prazos (geralmente preço fixo). No EPCM (Engineering, Procurement, Construction Management), a contratada gerencia o projeto mas não executa diretamente a construção, atuando como gestora. A Authomathika oferece ambos os modelos, com parcerias estratégicas para execução quando necessário.",
    },
    {
      question: "A Authomathika realiza projetos turnkey?",
      answer:
        "Sim. Projetos turnkey (chave na mão) são uma especialidade da Authomathika, onde entregamos a planta pronta para operar. Cases incluem a Usina Costa Rica (usina sucroenergética completa), Rio Vermelho (fábrica de açúcar turnkey) e Pedra Buriti (caldeira turnkey). Todos entregues dentro do prazo e orçamento acordados.",
    },
  ],

  "energias-renovaveis": [
    {
      question: "A Authomathika instala usinas solares fotovoltaicas?",
      answer:
        "Sim. A divisão de Energias Renováveis da Authomathika já instalou 336 MW de energia solar em 7 parques fotovoltaicos, atuando em geração centralizada e distribuída. Os serviços incluem montagem elétrica e mecânica, montagem civil, engenharia executiva, comissionamento e operação e manutenção (O&M).",
    },
    {
      question: "Qual a diferença entre geração centralizada e distribuída de energia solar?",
      answer:
        "Geração centralizada (GC) são grandes usinas solares, geralmente acima de 5 MW, que injetam energia diretamente na rede de transmissão. Geração distribuída (GD) são sistemas menores, instalados em telhados ou terrenos de consumidores, conectados à rede de distribuição local. A Authomathika atua em ambas as modalidades.",
    },
    {
      question: "O que inclui o serviço de O&M para usinas solares?",
      answer:
        "O serviço de Operação e Manutenção (O&M) para usinas solares inclui monitoramento remoto de performance, inspeções periódicas, limpeza de módulos, manutenção preventiva e corretiva de inversores e trackers, gestão de alarmes e indicadores de desempenho (PR - Performance Ratio), e interface com a distribuidora para questões de conexão.",
    },
    {
      question: "Qual a capacidade de implantação da Authomathika em energia solar?",
      answer:
        "A Authomathika possui capacidade comprovada para implantação de usinas solares de grande porte. O maior projeto executado foi a UFV Belmonte I & II, com 540 MW de capacidade, em parceria com o Grupo Cobra. Com 7 parques e 336 MW totais instalados, a empresa tem experiência para atender projetos acima de 10 MW.",
    },
  ],
};
