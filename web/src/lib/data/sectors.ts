/**
 * Dados expandidos dos setores atendidos pela Authomathika.
 * 3 setores featured (sucroenergético, mineração, energias renováveis)
 * + 5 setores secundários.
 */

export interface Sector {
  slug: string;
  name: string;
  headline: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  relatedBusinessAreas: string[];
  relatedCaseStudies: string[];
  relatedTestimonials: string[];
  clients: string[];
  metrics: Array<{ value: string; label: string }>;
  faq: Array<{ question: string; answer: string }>;
  icon: string;
  featured: boolean;
}

export const sectors: Sector[] = [
  {
    slug: "sucroenergetico",
    name: "Sucroenergético",
    headline: "Automação e elétrica integradas para usinas que não podem parar",
    description:
      "Desde 1999, a Authomathika é referência em engenharia para o setor sucroenergético. Atuamos em todas as áreas da usina — fermentação, destilaria, caldeira, cogeração e fábrica de açúcar — com soluções integradas de automação, elétrica e montagem eletromecânica. Nossa experiência abrange projetos greenfield completos (turnkey) e revamps de plantas em operação.",
    painPoints: [
      "Paradas não programadas durante a safra geram prejuízos de centenas de milhares de reais por dia",
      "Sistemas de automação legados e desintegrados dificultam o controle de processo e aumentam o consumo energético",
      "Encontrar integradores que conheçam a realidade operacional de uma usina é cada vez mais difícil",
      "Projetos de modernização precisam ser executados na entressafra, com janelas de tempo extremamente curtas",
      "Falta de rastreabilidade e documentação técnica atualizada compromete a manutenção e a segurança",
    ],
    solutions: [
      "Projetos turnkey com responsabilidade integral — da engenharia ao comissionamento em um único contrato",
      "Revamps de automação com migração planejada de CLPs e SCADA sem interromper a produção",
      "Equipes especializadas no setor sucroenergético há mais de 25 anos, conhecendo cada etapa do processo",
      "Execução concentrada na entressafra com planejamento detalhado e cumprimento rigoroso de cronograma",
      "Sistema Serelepe de rastreabilidade com relatórios online e certificados digitais",
    ],
    relatedBusinessAreas: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "engenharia-epc",
      "servicos",
    ],
    relatedCaseStudies: [
      "costa-rica",
      "rio-vermelho",
      "pedra-buriti",
      "ferrari",
      "bunge-moema",
      "santa-helena",
      "bahia-etanol",
      "umoe-1",
    ],
    relatedTestimonials: ["ricardo-m", "marcos-l"],
    clients: [
      "Usina Costa Rica",
      "Usina Rio Vermelho",
      "Usina Pedra Buriti",
      "Usina Ferrari",
      "Usina Santa Helena",
      "Bahia Etanol",
      "UMOE",
      "Bunge Moema",
    ],
    metrics: [
      { value: "180+", label: "Plantas industriais atendidas" },
      { value: "296.400", label: "Pontos de automação implantados" },
      { value: "25+", label: "Anos no setor sucroenergético" },
      { value: "8", label: "Projetos turnkey entregues" },
    ],
    faq: [
      {
        question:
          "A Authomathika executa projetos turnkey completos para usinas?",
        answer:
          "Sim. A Authomathika realiza projetos turnkey (chave na mão) para usinas sucroenergéticas, assumindo responsabilidade integral desde a engenharia básica até o comissionamento e start-up. Cases incluem a Usina Costa Rica (usina completa), Rio Vermelho (fábrica de açúcar) e Pedra Buriti (caldeira e cogeração).",
      },
      {
        question:
          "Como funciona a execução de projetos durante a entressafra?",
        answer:
          "A Authomathika possui experiência comprovada em execução concentrada na entressafra. O planejamento detalhado começa meses antes, com cronograma rigoroso, mobilização de equipes certificadas NR-10/NR-35 e gestão logística completa. O objetivo é minimizar o tempo de parada e garantir que a planta esteja pronta para a próxima safra.",
      },
      {
        question:
          "Quais plataformas de automação a Authomathika trabalha em usinas?",
        answer:
          "Trabalhamos com as principais plataformas do mercado: Rockwell (Allen-Bradley), Siemens, Yokogawa, Emerson, Altus, ABB, Schneider e GE. Desenvolvemos software SCADA customizado e integramos sistemas de supervisão existentes, além de programar CLPs para todas as áreas da usina.",
      },
      {
        question:
          "É possível modernizar a automação da usina sem parar a produção?",
        answer:
          "Sim. A Authomathika tem expertise em migrações planejadas de sistemas de automação com mínimo impacto na produção. Utilizamos estratégias de transição gradual, onde o sistema novo opera em paralelo com o legado até a validação completa, garantindo continuidade operacional.",
      },
      {
        question:
          "A Authomathika oferece suporte após o comissionamento?",
        answer:
          "Sim. A divisão de Serviços da Authomathika oferece suporte pós-comissionamento com paradas programadas, manutenção preventiva e corretiva, metrologia RBC e o sistema Serelepe para rastreabilidade online. São mais de 42.000 equipamentos atendidos e 297.000 horas de serviço acumuladas.",
      },
    ],
    icon: "Factory",
    featured: true,
  },
  {
    slug: "mineracao",
    name: "Mineração",
    headline: "Engenharia eletromecânica e automação para operações de mineração críticas",
    description:
      "A Authomathika atende o setor de mineração com projetos de engenharia elétrica, automação e montagem eletromecânica para plantas de beneficiamento, eletro centros e infraestrutura industrial. Com experiência em grandes players do setor como a Vale, oferecemos soluções que atendem aos rigorosos padrões de segurança e qualificação exigidos pela mineração.",
    painPoints: [
      "Processos de pré-qualificação rigorosos e longos exigem fornecedores com documentação impecável",
      "Operações em áreas remotas demandam fornecedores com logística própria e capacidade de mobilização rápida",
      "Ambientes agressivos (poeira, vibração, corrosão) exigem engenharia robusta e materiais especificados",
      "Requisitos de segurança extremamente rigorosos eliminam fornecedores sem certificações adequadas",
      "Projetos de CAPEX com prazos inflexíveis e penalidades contratuais por atraso",
    ],
    solutions: [
      "Documentação técnica completa — ISO 9001, NR-10, NR-35, certificados RBC — pronta para pré-qualificação",
      "Equipes mobilizáveis para projetos em qualquer localidade do Brasil, com frota própria e logística independente",
      "Engenharia executiva com especificação detalhada de materiais e equipamentos para ambientes severos",
      "2.000+ dias sem acidentes de trabalho — cultura de segurança comprovada em operações de campo",
      "Gestão de projetos com cronograma integrado, marcos contratuais e reporting executivo",
    ],
    relatedBusinessAreas: [
      "eletrica",
      "automacao",
      "montagem-eletromecanica",
      "engenharia-epc",
    ],
    relatedCaseStudies: ["vale-carajas"],
    relatedTestimonials: ["fernanda-o"],
    clients: ["Vale Fertilizantes"],
    metrics: [
      { value: "2.000+", label: "Dias sem acidentes" },
      { value: "ISO 9001", label: "Certificação de qualidade" },
      { value: "NR-10/35", label: "Conformidade em segurança" },
    ],
    faq: [
      {
        question:
          "A Authomathika possui as certificações exigidas pela mineração?",
        answer:
          "Sim. A Authomathika é certificada ISO 9001, possui equipes treinadas e certificadas em NR-10 (Segurança em Instalações e Serviços em Eletricidade) e NR-35 (Trabalho em Altura), além de laboratórios de metrologia com certificação RBC (Rede Brasileira de Calibração). Toda a documentação está disponível para processos de pré-qualificação.",
      },
      {
        question:
          "Como solicitar a documentação para pré-qualificação?",
        answer:
          "A Authomathika mantém um pacote de documentação de pré-qualificação atualizado e pronto para envio. Entre em contato com nossa equipe comercial para receber o kit completo, incluindo certificações, indicadores de segurança (TFCA, TFSA), registros de CNPJ, certidões e referências de projetos anteriores.",
      },
      {
        question:
          "A Authomathika já executou projetos para grandes mineradoras?",
        answer:
          "Sim. A Authomathika executou projetos para a Vale em Carajás (PA), incluindo implantação de eletro centros com engenharia elétrica e automação completa. A empresa também atende empresas do segmento de fertilizantes ligados à mineração, como a Vale Fertilizantes em Uberaba e Araxá.",
      },
    ],
    icon: "Mountain",
    featured: true,
  },
  {
    slug: "energias-renovaveis",
    name: "Energias Renováveis",
    headline: "Do projeto ao MW conectado — engenharia solar de grande porte",
    description:
      "A divisão de Energias Renováveis da Authomathika é especializada na implantação de usinas solares fotovoltaicas de geração centralizada e distribuída. Com 336 MW instalados em 7 parques fotovoltaicos, incluindo o projeto de 540 MW da UFV Belmonte em parceria com o Grupo Cobra, a empresa é referência em montagem elétrica, mecânica e civil para o setor solar.",
    painPoints: [
      "Prazos agressivos de conexão com a rede exigem execução rápida e sem retrabalho",
      "Encontrar equipes com experiência real em parques acima de 10 MW é um desafio",
      "Logística complexa de recebimento, armazenamento e instalação de milhares de módulos e trackers",
      "Garantir qualidade de montagem que assegure a performance ratio (PR) contratada por 25+ anos",
      "Integração entre montagem mecânica, elétrica e civil sem conflitos de interface",
    ],
    solutions: [
      "Capacidade comprovada em parques de até 540 MW — montagem elétrica, mecânica e civil integradas",
      "Equipes especializadas exclusivamente em solar, com mais de 336 MW de experiência acumulada",
      "Gestão logística de canteiro com controle de materiais, rastreabilidade e eficiência de montagem",
      "Comissionamento rigoroso com testes de performance e entrega documentada para O&M",
      "Contrato único para todas as disciplinas — sem interfaces entre múltiplos fornecedores",
    ],
    relatedBusinessAreas: ["energias-renovaveis", "montagem-eletromecanica"],
    relatedCaseStudies: ["ufv-belmonte"],
    relatedTestimonials: ["carlos-s"],
    clients: ["Grupo Cobra"],
    metrics: [
      { value: "336", label: "MW instalados" },
      { value: "7", label: "Parques fotovoltaicos" },
      { value: "540 MW", label: "Maior projeto (UFV Belmonte)" },
    ],
    faq: [
      {
        question:
          "Qual é a capacidade de implantação da Authomathika em energia solar?",
        answer:
          "A Authomathika possui capacidade comprovada para implantação de usinas solares de grande porte. O maior projeto executado foi a UFV Belmonte I & II, com 540 MW de capacidade, em parceria com o Grupo Cobra. Com 7 parques e 336 MW totais instalados, a empresa atende projetos acima de 10 MW.",
      },
      {
        question:
          "A Authomathika oferece serviço de O&M para usinas solares?",
        answer:
          "Sim. O serviço de Operação e Manutenção (O&M) inclui monitoramento remoto de performance, inspeções periódicas, limpeza de módulos, manutenção preventiva e corretiva de inversores e trackers, gestão de alarmes e interface com a distribuidora.",
      },
      {
        question:
          "Qual a diferença entre geração centralizada e distribuída?",
        answer:
          "Geração centralizada (GC) são grandes usinas solares, geralmente acima de 5 MW, que injetam energia diretamente na rede de transmissão. Geração distribuída (GD) são sistemas menores, conectados à rede de distribuição local. A Authomathika atua em ambas as modalidades.",
      },
    ],
    icon: "Sun",
    featured: true,
  },
  {
    slug: "saneamento",
    name: "Saneamento",
    headline: "Automação e montagem para estações de tratamento de água e esgoto",
    description:
      "A Authomathika atua no setor de saneamento com projetos de automação, montagem eletromecânica e manutenção para estações de tratamento de água (ETA) e esgoto (ETE). Com clientes como SAMAR, Ambient, SANEVAP, SESAMM e Odebrecht Ambiental, a empresa entrega soluções que garantem eficiência operacional e conformidade regulatória.",
    painPoints: [
      "Estações de tratamento operam 24/7 e exigem automação confiável com redundância",
      "Equipamentos expostos a ambientes corrosivos demandam manutenção especializada",
      "Necessidade de atender exigências regulatórias de qualidade de água cada vez mais rigorosas",
    ],
    solutions: [
      "Automação de processos com CLPs e SCADA para monitoramento e controle em tempo real",
      "Montagem eletromecânica com materiais e acabamentos adequados para ambientes corrosivos",
      "Manutenção preventiva e metrologia RBC para instrumentos críticos de medição",
    ],
    relatedBusinessAreas: ["automacao", "montagem-eletromecanica", "servicos"],
    relatedCaseStudies: ["sesamm"],
    relatedTestimonials: [],
    clients: ["SAMAR", "SANEVAP", "SESAMM", "Odebrecht Ambiental"],
    metrics: [
      { value: "5+", label: "Clientes no setor" },
      { value: "24/7", label: "Operação contínua" },
    ],
    faq: [
      {
        question:
          "A Authomathika tem experiência em estações de tratamento de água?",
        answer:
          "Sim. A Authomathika já executou projetos completos para ETAs e ETEs, incluindo o greenfield do SESAMM em Mogi Mirim com automação e montagem eletromecânica completa. Atendemos clientes como SAMAR, Ambient, SANEVAP e Odebrecht Ambiental.",
      },
    ],
    icon: "Droplets",
    featured: false,
  },
  {
    slug: "fertilizantes",
    name: "Fertilizantes",
    headline: "Engenharia integrada para plantas de fertilizantes e insumos agrícolas",
    description:
      "A Authomathika atende o setor de fertilizantes com projetos de automação, elétrica e montagem eletromecânica para plantas de produção e beneficiamento. Com experiência em grandes players como Vale Fertilizantes, Bunge e Cargill, a empresa entrega soluções completas que garantem eficiência e segurança operacional.",
    painPoints: [
      "Processos químicos contínuos exigem automação de alta confiabilidade e tempo de resposta rápido",
      "Ambientes com presença de compostos corrosivos demandam instrumentação e materiais especializados",
      "Regulamentações ambientais rigorosas exigem monitoramento e controle precisos de emissões",
    ],
    solutions: [
      "Automação industrial com CLPs e SCADA customizados para processos químicos contínuos",
      "Instrumentação industrial com grau de proteção adequado para ambientes corrosivos e explosivos",
      "Engenharia EPC com gestão integrada de projeto, aquisição e construção",
    ],
    relatedBusinessAreas: [
      "automacao",
      "eletrica",
      "engenharia-epc",
      "servicos",
    ],
    relatedCaseStudies: [],
    relatedTestimonials: ["fernanda-o"],
    clients: ["Vale Fertilizantes", "Bunge Moema", "Cargill"],
    metrics: [
      { value: "3", label: "Grandes clientes atendidos" },
      { value: "EPC", label: "Contratos completos" },
    ],
    faq: [
      {
        question:
          "A Authomathika atende plantas de fertilizantes?",
        answer:
          "Sim. A Authomathika possui experiência em plantas de fertilizantes com clientes como Vale Fertilizantes (Uberaba e Araxá), Bunge e Cargill. Os projetos incluem automação, elétrica, montagem eletromecânica e contratos EPC completos.",
      },
    ],
    icon: "Sprout",
    featured: false,
  },
  {
    slug: "alimentos-bebidas",
    name: "Alimentos & Bebidas",
    headline: "Automação e montagem eletromecânica para a indústria alimentícia",
    description:
      "A Authomathika atende a indústria de alimentos e bebidas com projetos de automação, montagem eletromecânica e manutenção industrial. Com experiência em plantas de processamento como a Indemil (ácido cítrico) e a Amyris, a empresa entrega soluções que atendem aos padrões rigorosos de higiene e segurança alimentar.",
    painPoints: [
      "Normas sanitárias rigorosas (ANVISA, FDA) exigem automação com rastreabilidade completa de processo",
      "Linhas de produção com múltiplos SKUs demandam flexibilidade e reconfigurabilidade do sistema",
      "Manutenção preventiva é crítica para evitar contaminação e paradas não programadas",
    ],
    solutions: [
      "Automação com rastreabilidade de lote e conformidade com normas sanitárias",
      "Montagem eletromecânica de novas linhas com acabamento em aço inox e materiais food-grade",
      "Serviços de manutenção com equipes treinadas em boas práticas de fabricação (BPF)",
    ],
    relatedBusinessAreas: [
      "automacao",
      "montagem-eletromecanica",
      "servicos",
    ],
    relatedCaseStudies: ["indemil"],
    relatedTestimonials: [],
    clients: ["Indemil", "Amyris"],
    metrics: [
      { value: "2+", label: "Plantas atendidas" },
      { value: "100%", label: "Conformidade sanitária" },
    ],
    faq: [
      {
        question:
          "A Authomathika executa montagem eletromecânica para indústria alimentícia?",
        answer:
          "Sim. A Authomathika já executou montagem eletromecânica completa para plantas alimentícias, incluindo a nova planta de ácido cítrico da Indemil. Os projetos seguem normas sanitárias rigorosas com materiais e acabamentos adequados para ambientes de produção de alimentos.",
      },
    ],
    icon: "UtensilsCrossed",
    featured: false,
  },
  {
    slug: "siderurgia-quimica",
    name: "Siderurgia & Química",
    headline: "Engenharia elétrica e automação para indústrias de processo contínuo",
    description:
      "A Authomathika atende os setores de siderurgia, química, petroquímica e farmacêutica com projetos de automação, elétrica e montagem eletromecânica. Com expertise em processos contínuos de alta exigência, a empresa entrega soluções seguras e confiáveis para ambientes industriais severos.",
    painPoints: [
      "Processos contínuos de alta temperatura e pressão exigem instrumentação e automação de máxima confiabilidade",
      "Áreas classificadas (Ex) demandam equipamentos e mão de obra especializada em atmosferas explosivas",
      "Paradas programadas curtas e complexas exigem planejamento milimétrico e execução impecável",
    ],
    solutions: [
      "Automação de processos contínuos com redundância e sistemas de segurança (SIS/SIL)",
      "Engenharia para áreas classificadas com equipamentos à prova de explosão e conformidade NR-10",
      "Paradas programadas com equipes multidisciplinares certificadas e planejamento integrado",
    ],
    relatedBusinessAreas: ["automacao", "eletrica", "servicos"],
    relatedCaseStudies: [],
    relatedTestimonials: [],
    clients: [],
    metrics: [
      { value: "NR-10", label: "Conformidade elétrica" },
      { value: "ISO 9001", label: "Qualidade certificada" },
    ],
    faq: [
      {
        question:
          "A Authomathika trabalha com áreas classificadas (Ex)?",
        answer:
          "Sim. A Authomathika possui equipes treinadas e certificadas para trabalho em áreas classificadas, com conhecimento em normas ABNT/IEC para atmosferas explosivas. A engenharia elétrica e de automação segue rigorosamente os requisitos de zoneamento e classificação de áreas.",
      },
    ],
    icon: "Flame",
    featured: false,
  },
  {
    slug: "logistica",
    name: "Logística",
    headline: "Automação e elétrica para infraestrutura de armazenagem e transporte",
    description:
      "A Authomathika atende o setor de logística industrial com projetos de automação e elétrica para armazéns, silos, sistemas de transporte de bagaço e grãos. A expertise em montagem eletromecânica permite a implantação completa de infraestrutura logística para operações industriais.",
    painPoints: [
      "Sistemas de transporte e armazenagem operam em regime contínuo e exigem manutenção especializada",
      "Automação de silos e armazéns precisa garantir rastreabilidade e controle de inventário em tempo real",
      "Integração entre sistemas de transporte, pesagem e expedição demanda engenharia de automação integrada",
    ],
    solutions: [
      "Automação de sistemas de transporte com CLPs e SCADA para monitoramento contínuo",
      "Montagem eletromecânica de esteiras, elevadores e sistemas de movimentação de materiais",
      "Instrumentação de pesagem e medição com calibração RBC rastreada",
    ],
    relatedBusinessAreas: [
      "automacao",
      "montagem-eletromecanica",
      "servicos",
    ],
    relatedCaseStudies: [],
    relatedTestimonials: [],
    clients: [],
    metrics: [
      { value: "24/7", label: "Operação contínua" },
      { value: "RBC", label: "Calibração rastreada" },
    ],
    faq: [
      {
        question:
          "A Authomathika automatiza sistemas de armazenagem e transporte?",
        answer:
          "Sim. A Authomathika oferece soluções de automação para armazéns, silos, esteiras e sistemas de transporte de materiais a granel. Os projetos incluem CLPs para controle de processo, SCADA para monitoramento e instrumentação para pesagem e medição.",
      },
    ],
    icon: "Warehouse",
    featured: false,
  },
  {
    slug: "papel-celulose",
    name: "Papel & Celulose",
    headline: "Automação e elétrica para fábricas de celulose, papel e embalagens",
    description:
      "A Authomathika atende o setor de papel e celulose com soluções de automação industrial, engenharia elétrica e montagem eletromecânica. Com conhecimento em processos contínuos de alta complexidade — da digestão e branqueamento à formação e secagem — entregamos projetos que aumentam a eficiência energética e a confiabilidade operacional das plantas.",
    painPoints: [
      "Processos contínuos de alta temperatura e pressão exigem automação com redundância e alta disponibilidade",
      "Consumo energético intenso demanda otimização constante de cogeração e recuperação de calor",
      "Ambientes com presença de vapor, umidade e produtos químicos aceleram a degradação de equipamentos elétricos",
      "Janelas de manutenção curtas durante paradas anuais exigem planejamento milimétrico e mobilização rápida",
      "Integração entre sistemas de controle de processo (DCS/SCADA) e sistemas de energia é crítica",
    ],
    solutions: [
      "Automação de processo com CLPs e SCADA customizados para digestores, caldeiras de recuperação e máquinas de papel",
      "Engenharia elétrica para cogeração, distribuição e painéis de média e baixa tensão",
      "Montagem eletromecânica de equipamentos rotativos, tubulações e estruturas metálicas",
      "Paradas programadas com equipes multidisciplinares certificadas NR-10/NR-35",
      "Metrologia RBC para instrumentos críticos de temperatura, pressão e vazão",
    ],
    relatedBusinessAreas: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "servicos",
      "engenharia-epc",
    ],
    relatedCaseStudies: [],
    relatedTestimonials: [],
    clients: [],
    metrics: [
      { value: "25+", label: "Anos em processos contínuos" },
      { value: "296.400", label: "Pontos de automação implantados" },
      { value: "NR-10/35", label: "Equipes certificadas" },
    ],
    faq: [
      {
        question:
          "A Authomathika tem experiência em fábricas de celulose e papel?",
        answer:
          "A Authomathika possui mais de 25 anos de experiência em processos industriais contínuos, com expertise diretamente aplicável a fábricas de celulose e papel. Nossa atuação inclui automação de caldeiras, sistemas de cogeração, montagem eletromecânica e paradas programadas — todas competências essenciais para este setor.",
      },
      {
        question:
          "Vocês trabalham com automação de caldeiras de recuperação?",
        answer:
          "Sim. A Authomathika possui ampla experiência em automação de caldeiras e sistemas de cogeração, incluindo desenvolvimento de software SCADA, programação de CLPs e instrumentação de campo. Já automatizamos dezenas de caldeiras no setor sucroenergético, com a mesma tecnologia aplicável a caldeiras de recuperação de licor negro.",
      },
    ],
    icon: "TreePine",
    featured: false,
  },
  {
    slug: "cimento",
    name: "Cimento",
    headline: "Engenharia integrada para fábricas de cimento e materiais de construção",
    description:
      "A Authomathika atende a indústria cimenteira com projetos de automação, elétrica e montagem eletromecânica para plantas de produção de cimento, cal e materiais de construção. Com experiência em processos de alta temperatura e ambientes severos, oferecemos soluções que garantem eficiência energética, disponibilidade operacional e conformidade ambiental.",
    painPoints: [
      "Processos de clinquerização a 1.450°C exigem instrumentação robusta e automação de altíssima confiabilidade",
      "Consumo energético representa até 40% do custo de produção, exigindo otimização contínua dos motores e acionamentos",
      "Ambientes com poeira abrasiva, vibração e altas temperaturas degradam equipamentos elétricos e instrumentação",
      "Regulamentações ambientais cada vez mais rigorosas para emissões de CO₂ e material particulado",
      "Plantas remotas dificultam a atração de mão de obra qualificada para manutenção e operação",
    ],
    solutions: [
      "Automação de fornos rotativos, moinhos e sistemas de dosagem com CLPs e SCADA de alta disponibilidade",
      "Engenharia elétrica para acionamentos de média tensão, CCMs e bancos de capacitores com eficiência energética",
      "Montagem eletromecânica de equipamentos rotativos de grande porte, transportadores e sistemas de despoeiramento",
      "Instrumentação especializada para medição de temperatura, nível e vazão em ambientes extremos",
      "Manutenção preventiva e preditiva com metrologia RBC e sistema Serelepe de rastreabilidade",
    ],
    relatedBusinessAreas: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "servicos",
    ],
    relatedCaseStudies: [],
    relatedTestimonials: [],
    clients: [],
    metrics: [
      { value: "208+", label: "Projetos industriais entregues" },
      { value: "42.027", label: "Equipamentos atendidos" },
      { value: "ISO 9001", label: "Certificação de qualidade" },
    ],
    faq: [
      {
        question:
          "A Authomathika executa projetos para fábricas de cimento?",
        answer:
          "A Authomathika possui expertise em processos industriais de alta temperatura e ambientes severos, com competências diretamente aplicáveis à indústria cimenteira: automação de processos contínuos, engenharia elétrica de média e baixa tensão, montagem eletromecânica de equipamentos rotativos e serviços de manutenção com metrologia certificada.",
      },
      {
        question:
          "Vocês trabalham com acionamentos de média tensão para moinhos?",
        answer:
          "Sim. A Authomathika projeta e instala sistemas elétricos de média tensão, incluindo CCMs (Centros de Controle de Motores), painéis de partida e acionamentos para motores de grande porte. São mais de 225 CCMs e 256 QGBTs instalados ao longo de 25+ anos.",
      },
    ],
    icon: "Landmark",
    featured: false,
  },
  {
    slug: "petroleo-gas",
    name: "Petróleo & Gás",
    headline: "Automação e elétrica para operações de óleo, gás e petroquímica",
    description:
      "A Authomathika oferece soluções de automação, engenharia elétrica e montagem eletromecânica para o setor de petróleo, gás e petroquímica. Com equipes certificadas para trabalho em áreas classificadas (Ex), instrumentação para ambientes explosivos e experiência em processos contínuos de alta criticidade, atendemos refinarias, terminais, plataformas onshore e plantas petroquímicas.",
    painPoints: [
      "Áreas classificadas (zonas 0, 1 e 2) exigem equipamentos e mão de obra altamente especializados em atmosferas explosivas",
      "Normas regulatórias rigorosas (NR-10, NR-13, NR-20, NR-33, NR-35) tornam a conformidade um desafio constante",
      "Paradas programadas em refinarias e terminais têm janelas extremamente curtas e custos de milhões por dia de atraso",
      "Integração entre sistemas de segurança (SIS/SIL), controle de processo e monitoramento ambiental é complexa",
      "Instrumentação em ambientes corrosivos (H₂S, ácidos) demanda materiais especiais e manutenção frequente",
    ],
    solutions: [
      "Automação de processos com sistemas de segurança instrumentados (SIS/SIL) e CLPs de alta disponibilidade",
      "Engenharia elétrica para áreas classificadas com equipamentos à prova de explosão certificados (Ex d, Ex e, Ex i)",
      "Montagem eletromecânica com procedimentos específicos para ambientes com hidrocarbonetos",
      "Instrumentação industrial com grau de proteção IP68 e materiais resistentes à corrosão (Hastelloy, Inconel, titânio)",
      "Paradas programadas com equipes multidisciplinares certificadas em NR-10, NR-20, NR-33 e NR-35",
    ],
    relatedBusinessAreas: [
      "automacao",
      "eletrica",
      "montagem-eletromecanica",
      "servicos",
      "engenharia-epc",
    ],
    relatedCaseStudies: [],
    relatedTestimonials: [],
    clients: [],
    metrics: [
      { value: "2.000+", label: "Dias sem acidentes" },
      { value: "NR-10/20/33/35", label: "Conformidade total" },
      { value: "25+", label: "Anos em processos industriais" },
    ],
    faq: [
      {
        question:
          "A Authomathika possui certificação para trabalho em áreas classificadas?",
        answer:
          "Sim. A Authomathika possui equipes treinadas e certificadas para trabalho em áreas classificadas conforme normas ABNT NBR IEC 60079. A engenharia segue rigorosamente os requisitos de zoneamento, classificação de áreas e especificação de equipamentos Ex (à prova de explosão). Também atendemos às NR-10, NR-20 e NR-33.",
      },
      {
        question:
          "Vocês instalam sistemas de segurança instrumentados (SIS)?",
        answer:
          "A Authomathika possui experiência em automação de processos críticos com sistemas de alta confiabilidade e redundância. Trabalhamos com as principais plataformas de automação do mercado (Rockwell, Siemens, Yokogawa, Emerson, ABB) que suportam arquiteturas SIS/SIL para o setor de óleo e gás.",
      },
    ],
    icon: "Fuel",
    featured: false,
  },
  {
    slug: "infraestrutura",
    name: "Infraestrutura",
    headline: "Engenharia elétrica e automação para obras de infraestrutura e utilidades",
    description:
      "A Authomathika atende projetos de infraestrutura industrial e urbana com soluções de engenharia elétrica, automação e montagem eletromecânica. De subestações e centrais termelétricas a sistemas de utilidades para grandes empreendimentos, a empresa entrega projetos completos com gestão integrada e conformidade regulatória.",
    painPoints: [
      "Projetos de infraestrutura envolvem múltiplas disciplinas e interfaces complexas entre fornecedores",
      "Cronogramas de obras civis e elétricas precisam ser sincronizados para evitar atrasos em cascata",
      "Subestações e sistemas de distribuição exigem engenharia elétrica de alta confiabilidade e conformidade com ANEEL",
      "Sistemas de utilidades (vapor, ar comprimido, água gelada) precisam de automação integrada e monitoramento 24/7",
    ],
    solutions: [
      "Engenharia EPC com gestão integrada de projeto, aquisição e construção para todas as disciplinas",
      "Montagem eletromecânica de subestações, geradores, transformadores e sistemas de distribuição",
      "Automação de centrais de utilidades com CLPs e SCADA para monitoramento e controle em tempo real",
      "23 centrais termelétricas projetadas e comissionadas — experiência comprovada em geração de energia",
    ],
    relatedBusinessAreas: [
      "eletrica",
      "engenharia-epc",
      "montagem-eletromecanica",
      "automacao",
    ],
    relatedCaseStudies: [],
    relatedTestimonials: [],
    clients: [],
    metrics: [
      { value: "23", label: "Centrais termelétricas" },
      { value: "EPC", label: "Gestão integrada" },
      { value: "25+", label: "Anos de experiência" },
    ],
    faq: [
      {
        question:
          "A Authomathika executa montagem de subestações?",
        answer:
          "Sim. A Authomathika projeta, instala e comissiona subestações de média e baixa tensão, incluindo transformadores, disjuntores, painéis de distribuição e sistemas de proteção. São mais de 25 anos de experiência em engenharia elétrica com 26 plantas greenfield e 73 brownfield entregues.",
      },
      {
        question:
          "Vocês constroem centrais termelétricas?",
        answer:
          "Sim. A Authomathika já projetou e comissionou 23 centrais termelétricas, com engenharia elétrica, automação e montagem eletromecânica completas. Os projetos incluem desde a engenharia básica até o comissionamento e start-up.",
      },
    ],
    icon: "Building",
    featured: false,
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}

export function getFeaturedSectors(): Sector[] {
  return sectors.filter((s) => s.featured);
}
