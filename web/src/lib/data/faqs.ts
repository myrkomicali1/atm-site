/**
 * FAQs por divisao de negocios.
 * Cada divisao possui perguntas relevantes ao seu contexto tecnico,
 * otimizadas para FAQ schema (GEO) e captura por IAs generativas.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const businessFaqs: Record<string, FAQ[]> = {
  automacao: [
    {
      question: "O que e um integrador de sistemas de automacao industrial?",
      answer:
        "Um integrador de sistemas de automacao industrial e uma empresa especializada em projetar, instalar e comissionar solucoes completas de controle e monitoramento de processos. A Authomathika atua como integradora desde 1999, tendo implantado mais de 290.000 pontos de automacao em 180 plantas industriais no Brasil, trabalhando com plataformas como CLPs Rockwell, Siemens, Yokogawa e sistemas SCADA.",
    },
    {
      question: "Qual a diferenca entre projeto greenfield e brownfield em automacao?",
      answer:
        "Um projeto greenfield e uma implantacao totalmente nova, onde a automacao e projetada do zero para uma planta que ainda sera construida. Ja o brownfield envolve a modernizacao, ampliacao ou revamp de sistemas existentes em plantas ja em operacao. A Authomathika possui experiencia em ambos: 41 plantas greenfield e 139 brownfield na divisao de Automacao.",
    },
    {
      question: "Quais sistemas SCADA e CLPs a Authomathika trabalha?",
      answer:
        "A Authomathika trabalha com as principais plataformas do mercado: CLPs Rockwell (Allen-Bradley), Siemens, Yokogawa, Emerson, Altus, ABB, Schneider e GE. Em SCADA, desenvolvemos software customizado e integramos sistemas de supervisao para monitoramento em tempo real de processos industriais.",
    },
    {
      question: "Quanto tempo leva um projeto de automacao industrial?",
      answer:
        "O prazo depende da complexidade e escopo do projeto. Um revamp parcial de automacao (brownfield) pode levar de 3 a 6 meses, enquanto uma implantacao greenfield completa pode demandar de 8 a 18 meses. A Authomathika oferece estudo de escopo gratuito para dimensionar prazos e custos de cada projeto.",
    },
  ],

  eletrica: [
    {
      question: "O que e engenharia eletrica industrial?",
      answer:
        "Engenharia eletrica industrial abrange o projeto, construcao e comissionamento de sistemas eletricos para plantas industriais, incluindo subestacoes, paineis eletricos (CCMs, QGBTs), sistemas de cogeracao e centrais termoeletricas. A Authomathika ja executou projetos em 26 plantas greenfield e 73 brownfield, com mais de 225 CCMs e 256 QGBTs instalados.",
    },
    {
      question: "Qual a diferenca entre CCM e QGBT?",
      answer:
        "CCM (Centro de Controle de Motores) e um painel eletrico projetado para alimentar, proteger e controlar motores eletricos industriais. QGBT (Quadro Geral de Baixa Tensao) e o painel principal de distribuicao de energia eletrica em baixa tensao de uma instalacao. A Authomathika projeta e instala ambos os tipos de paineis, alem de switchboards e bancos de capacitores.",
    },
    {
      question: "O que e um sistema de cogeracao de energia?",
      answer:
        "Cogeracao e o processo de gerar simultaneamente energia eletrica e termica a partir de uma unica fonte de combustivel, como bagaco de cana em usinas sucroenergeticas. A Authomathika ja implantou 23 centrais termoeletricas com sistemas de cogeracao, otimizando a eficiencia energetica e permitindo a venda de excedentes ao grid.",
    },
    {
      question: "A Authomathika fornece paineis eletricos?",
      answer:
        "Sim. A Authomathika projeta, fabrica e instala paineis eletricos industriais, incluindo CCMs, QGBTs, switchboards e bancos de capacitores. Trabalhamos com os principais fabricantes de componentes como WEG, Rockwell, Siemens, ABB, Schneider, GE e EATON, garantindo conformidade com normas tecnicas e certificacoes NR-10.",
    },
  ],

  servicos: [
    {
      question: "O que e uma parada programada industrial?",
      answer:
        "Uma parada programada e uma interrupcao planejada da operacao de uma planta industrial para realizar manutencao preventiva, calibracao de instrumentos, inspecoes e reparos. A Authomathika executa paradas programadas com equipes certificadas NR-10 e NR-35, tendo acumulado mais de 297.000 horas de servico e 42.027 equipamentos atendidos.",
    },
    {
      question: "Quanto custa uma parada programada industrial?",
      answer:
        "O custo varia conforme o porte da planta, quantidade de equipamentos, escopo dos servicos e duracao. Uma parada de pequeno porte pode custar a partir de R$ 50.000, enquanto paradas de grande porte em usinas sucroenergeticas podem ultrapassar R$ 500.000. A Authomathika oferece orcamentos detalhados com escopo tecnico completo para dimensionamento preciso.",
    },
    {
      question: "O que e metrologia RBC e por que e importante?",
      answer:
        "Metrologia RBC (Rede Brasileira de Calibracao) e o sistema de calibracao de instrumentos de medicao com rastreabilidade certificada pelo INMETRO. E fundamental para garantir que instrumentos como transmissores de pressao, temperatura e vazao fornecam medidas precisas e confiaveis. A Authomathika possui laboratorios fixos e moveis com certificacao RBC.",
    },
    {
      question: "O que e o sistema Serelepe da Authomathika?",
      answer:
        "O Serelepe e o sistema online proprietario da Authomathika para gestao de servicos de campo. Ele permite rastreabilidade completa de atendimentos tecnicos, geracao de certificados digitais e acompanhamento em tempo real do status de manutencoes e calibracoes, garantindo transparencia e qualidade em cada atendimento.",
    },
  ],

  "montagem-eletromecanica": [
    {
      question: "O que e montagem eletromecanica industrial?",
      answer:
        "Montagem eletromecanica e o processo de instalacao integrada de componentes eletricos e mecanicos em plantas industriais, incluindo equipamentos, tubulacoes, estruturas metalicas, paineis e sistemas de forca e controle. A Authomathika ja executou 208 projetos de montagem, desde pequeno ate grande porte, em mais de 23 anos de atuacao.",
    },
    {
      question: "Quais setores a Authomathika atende em montagem eletromecanica?",
      answer:
        "A Authomathika atende diversos setores industriais: sucroenergetico (usinas de acucar e etanol), fertilizantes, saneamento, logistica, mineracao, alimentos e bebidas, quimica e siderurgia. Com 105 projetos de pequeno porte, 74 de medio porte e 29 de grande porte entregues, a empresa possui experiencia multissetorial comprovada.",
    },
    {
      question: "Qual a diferenca entre montagem de pequeno, medio e grande porte?",
      answer:
        "A classificacao depende do volume de servicos, complexidade e investimento. Projetos de pequeno porte envolvem equipamentos individuais ou sistemas isolados. Medio porte abrange setores completos de uma planta. Grande porte compreende implantacoes integrais, como uma usina completa (turnkey). A Authomathika possui experiencia em todas as escalas.",
    },
  ],

  "engenharia-epc": [
    {
      question: "O que e engenharia EPC?",
      answer:
        "EPC significa Engineering, Procurement and Construction (Engenharia, Aquisicao e Construcao). E um modelo de contrato onde uma unica empresa assume a responsabilidade integral por um projeto: desde a engenharia basica e executiva, passando pela aquisicao de materiais e equipamentos, ate a construcao, montagem e comissionamento. A Authomathika realiza contratos EPC desde 1999.",
    },
    {
      question: "Qual a vantagem de contratar um projeto EPC?",
      answer:
        "O modelo EPC oferece ponto unico de responsabilidade, o que simplifica a gestao, reduz riscos de interfaces entre fornecedores, garante cronograma integrado e maior previsibilidade de custos. Para o contratante, significa ter um unico interlocutor para todo o projeto, desde a engenharia ate a entrega operacional.",
    },
    {
      question: "Qual a diferenca entre EPC e EPCM?",
      answer:
        "No EPC, a contratada assume responsabilidade total pela execucao, incluindo custos e prazos (geralmente preco fixo). No EPCM (Engineering, Procurement, Construction Management), a contratada gerencia o projeto mas nao executa diretamente a construcao, atuando como gestora. A Authomathika oferece ambos os modelos, com parcerias estrategicas para execucao quando necessario.",
    },
    {
      question: "A Authomathika realiza projetos turnkey?",
      answer:
        "Sim. Projetos turnkey (chave na mao) sao uma especialidade da Authomathika, onde entregamos a planta pronta para operar. Cases incluem a Usina Costa Rica (usina sucroenergetica completa), Rio Vermelho (fabrica de acucar turnkey) e Pedra Buriti (caldeira turnkey). Todos entregues dentro do prazo e orcamento acordados.",
    },
  ],

  "energias-renovaveis": [
    {
      question: "A Authomathika instala usinas solares fotovoltaicas?",
      answer:
        "Sim. A divisao de Energias Renovaveis da Authomathika ja instalou 336 MW de energia solar em 7 parques fotovoltaicos, atuando em geracao centralizada e distribuida. Os servicos incluem montagem eletrica e mecanica, montagem civil, engenharia executiva, comissionamento e operacao e manutencao (O&M).",
    },
    {
      question: "Qual a diferenca entre geracao centralizada e distribuida de energia solar?",
      answer:
        "Geracao centralizada (GC) sao grandes usinas solares, geralmente acima de 5 MW, que injetam energia diretamente na rede de transmissao. Geracao distribuida (GD) sao sistemas menores, instalados em telhados ou terrenos de consumidores, conectados a rede de distribuicao local. A Authomathika atua em ambas as modalidades.",
    },
    {
      question: "O que inclui o servico de O&M para usinas solares?",
      answer:
        "O servico de Operacao e Manutencao (O&M) para usinas solares inclui monitoramento remoto de performance, inspecoes periodicas, limpeza de modulos, manutencao preventiva e corretiva de inversores e trackers, gestao de alarmes e indicadores de desempenho (PR - Performance Ratio), e interface com a distribuidora para questoes de conexao.",
    },
    {
      question: "Qual a capacidade de implantacao da Authomathika em energia solar?",
      answer:
        "A Authomathika possui capacidade comprovada para implantacao de usinas solares de grande porte. O maior projeto executado foi a UFV Belmonte I & II, com 540 MW de capacidade, em parceria com o Grupo Cobra. Com 7 parques e 336 MW totais instalados, a empresa tem experiencia para atender projetos acima de 10 MW.",
    },
  ],
};
