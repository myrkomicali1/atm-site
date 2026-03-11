# Auditoria Completa do Site Authomathika

**Data da analise:** 06/03/2026
**URL de referencia:** https://www.authomathika.com.br
**Fonte da analise:** Codigo-fonte Next.js em `/web/src/`
**Metodologia:** Analise de marketing, comunicacao e conversao baseada em ICP inferido

---

## ICP Inferido (Perfil de Cliente Ideal)

Com base no conteudo do site, historico da empresa (fundada em 1999, Sertaozinho/SP), setores atendidos e portfolio de projetos, foram identificados 3 ICPs principais:

### ICP Primario: Decisor do Setor Sucroenergetico

- **Perfil:** Diretor Industrial ou Gerente de Engenharia de usinas de acucar e etanol
- **Idade:** 40-60 anos
- **Localizacao:** Interior de SP, MS, GO, MG, BA
- **Dores:** Paradas nao programadas durante a safra (prejuizo de centenas de milhares/dia), sistemas de automacao legados, dificuldade em encontrar integradores que conhecam a realidade de usina, janelas curtas de entressafra para execucao
- **Desejos:** Integrador unico que assuma responsabilidade de ponta a ponta, confiabilidade comprovada, cumprimento de cronograma na entressafra
- **Nivel de consciencia:** Alto (sabe o que precisa, busca o melhor fornecedor)
- **Objecoes:** "Voce conhece realmente o nosso setor?", "Conseguem entregar na entressafra?", "Qual a solidez financeira/tecnica?"

### ICP Secundario: Gestor de Projetos Capex em Mineracao

- **Perfil:** Gerente de Projetos ou Procurement de mineradoras de grande porte
- **Dores:** Processos de pre-qualificacao rigorosos, operacoes remotas, requisitos extremos de seguranca
- **Desejos:** Documentacao impecavel, certificacoes em dia, historico comprovado de zero acidentes
- **Objecoes:** "Passam na pre-qualificacao?", "Tem experiencia real em mineracao?"

### ICP Terciario: Desenvolvedor de Parques Solares

- **Perfil:** Engenheiro/Diretor de EPC em empresas de energia renovavel
- **Dores:** Prazos agressivos de conexao, encontrar equipes com experiencia em parques acima de 10 MW
- **Desejos:** Capacidade comprovada em grande escala, seguranca, entrega no prazo
- **Objecoes:** "Qual a maior escala ja executada?", "Conseguem mobilizar rapido?"

---

## O que esta bem feito

### 1. Headline orientada a beneficio, nao a descricao
A headline "Projetos industriais criticos, entregues com integridade." e excelente. Nao diz "somos uma empresa de engenharia" (descritivo), mas comunica o beneficio central: entrega com integridade em projetos criticos. Isso conecta diretamente com a dor do ICP primario, que precisa de confiabilidade acima de tudo.

### 2. Segmentacao por setor na home
A secao "Em qual segmento voce atua?" (SectorsSection) e uma decisao estrategica acertada. Permite que o visitante se auto-identifique imediatamente e navegue para conteudo relevante. Os 3 setores featured (Sucroenergetico, Mineracao, Energias Renovaveis) estao alinhados com os ICPs mais valiosos.

### 3. Numeros de credibilidade no Hero
O sidebar com "25+ anos", "42.027 equipamentos", "336 MW", "208 projetos" funciona como prova social instantanea. Numeros grandes e especificos (42.027, nao "40.000+") transmitem precisao e confiabilidade -- valores criticos para o ICP industrial.

### 4. Paginas de setor com estrutura persuasiva completa
As paginas `/setores/[slug]` seguem o fluxo ideal: dores do setor -> como a Authomathika resolve -> cases relacionados -> depoimentos -> FAQ -> CTA. Cada setor tem pain points e solucoes especificos, nao genericos. Isso demonstra conhecimento profundo do setor e ressoa fortemente com o ICP.

### 5. Estrutura de dados rica para SEO/GEO
O site implementa JSON-LD (Organization, Website, FAQPage, Article schemas), canonical URLs, metadados OpenGraph e Twitter, e keywords relevantes no layout. A estrutura de FAQ por setor e por divisao de negocios e bem pensada para captura por IAs generativas.

### 6. Pagina de Contato com fluxos segmentados
A pagina `/contato` oferece 4 caminhos distintos: Falar com Especialista, Solicitar Proposta, Fornecedores, Localizacao. Isso e uma boa pratica -- reconhece que diferentes personas tem diferentes necessidades de contato.

### 7. Pagina de Documentacao para gatekeepers
A pagina `/documentacao` com certificacoes, indicadores de seguranca e dados cadastrais atende diretamente o ICP de mineracao (gatekeeper de procurement). A estrutura esta correta, com status "Vigente" nas certificacoes e indicadores de seguranca em destaque.

### 8. Navigation bem estruturada com mega menus
O header oferece mega menus para Empresa, Solucoes e Setores, com descricoes e metricas. Isso facilita a navegacao e expoe a profundidade da empresa sem exigir cliques extras.

### 9. CTAs multiplos e hierarquizados
O site oferece CTAs em varios pontos: Hero ("Solicitar proposta" + "Encontre sua solucao"), sidebar de setores/cases ("Fale com especialista em [Setor]"), ContactCTA ("Solicitar proposta tecnica" + "Fale conosco"), e FloatingCTA (WhatsApp). Ha uma hierarquia clara entre CTAs primarios e secundarios.

### 10. Cases estruturados com desafio/solucao/resultado
Cada case study segue o formato Desafio -> Solucao -> Resultados, com metadados ricos (localizacao, ano, duracao, tipo, setor). Isso permite que o visitante encontre cases relevantes ao seu contexto.

---

## O que precisa melhorar

### 1. Depoimentos sao TODOS placeholders (CRITICO)
**Problema:** O arquivo `testimonials.ts` declara explicitamente nos comentarios TODO que TODOS os 8 depoimentos sao placeholders. Os nomes (Ricardo M., Fernanda O., Carlos S.) e empresas ("Usina Sucroenergetica", "Industria de Fertilizantes") sao genericos por design. Em um setor B2B industrial onde as pessoas se conhecem, depoimentos falsos destroem credibilidade instantaneamente.

**Recomendacao:** Remover os depoimentos placeholder imediatamente e substituir por uma das opcoes:
- Coletar 3-5 depoimentos reais com nome completo, cargo, empresa e foto (prioridade maxima)
- Enquanto nao tiver depoimentos, substituir por secao de "Clientes de Referencia" com logos em grayscale (menos impactante, mas nao mente)
- Se tiver autorizacao verbal mas nao escrita, usar formato "Diretor Industrial, Usina no MS" sem nome -- menos forte, mas honesto

### 2. Cases sem resultados quantificaveis (CRITICO)
**Problema:** Todos os 13 cases tem resultados descritivos, nao numericos. Exemplos: "Entregue dentro do cronograma", "Usina completa turnkey", "Sistema modernizado". Nenhum case mostra ROI, reducao de custos, aumento de eficiencia, ou comparacao antes/depois.

**Recomendacao:** Adicionar pelo menos 1 metrica quantitativa por case:
- Costa Rica: "Usina operando desde 2010 com disponibilidade de X%"
- Ferrari: "Reducao de X% no consumo energetico apos eletrificacao"
- Bunge Moema: "X pontos de automacao migrados em Y dias"
- UFV Belmonte: "540 MW conectados ao grid em 24 meses"

### 3. Documentacao sem PDFs reais disponiveis
**Problema:** A pagina `/documentacao` lista 4 materiais tecnicos (Portfolio, Catalogo, ISO 9001, Ficha de Pre-Qualificacao), mas TODOS estao marcados como `available: false` com o texto "Em breve". Para o ICP de mineracao, que precisa de documentos para pre-qualificacao, encontrar uma pagina sem downloads e frustrante.

**Recomendacao:**
- Priorizar upload do certificado ISO 9001 e Ficha de Pre-Qualificacao (os 2 mais solicitados)
- Se os PDFs nao existirem em formato digital, criar pelo menos 1 (a Ficha de Pre-Qualificacao pode ser montada com os dados que ja estao no site)
- Enquanto PDFs nao estiverem prontos, adicionar botao "Solicitar por e-mail" que preencha um formulario rapido

### 4. FAQ da home nao esta renderizado
**Problema:** Na `page.tsx` da home, ha um comentario `{/* TODO: FAQSection -- criar componente reutilizavel (Fase 3) */}` mas o componente FAQSection JA existe em `/components/content/FAQSection.tsx` e os dados JA existem em `/lib/data/faq.ts` (com 8 FAQs estrategicas prontas). O componente esta implementado mas nao plugado na home.

**Recomendacao:** Ativar imediatamente o FAQSection na home page. Basta importar e renderizar:
```tsx
import { FAQSection } from "@/components/content/FAQSection";
import { getHomeFaqs } from "@/lib/data/faq";
// ...
<FAQSection items={getHomeFaqs()} title="Perguntas frequentes" />
```

### 5. TestimonialsSection nao esta na home
**Problema:** O componente `TestimonialsSection` existe e esta funcional, mas NAO e renderizado na home page. A secao de depoimentos -- mesmo que com dados placeholder -- nao aparece. (Nota: quando os depoimentos forem reais, a secao deve ser adicionada.)

**Recomendacao:** Apos coletar depoimentos reais, adicionar `<TestimonialsSection />` na home entre WorksGallery e CompanyBrief.

### 6. Ausencia de conteudo intermediario para captura de leads
**Problema:** O site tem apenas 2 pontos de conversao: "Solicitar Proposta" (alto comprometimento) e WhatsApp (muito informal para B2B industrial de alto ticket). Nao ha conteudo intermediario para visitantes em estagio de pesquisa -- que representa 70-80% do trafego.

**Recomendacao:** Criar pelo menos 1 ativo de captura intermediaria:
- "Guia: Como planejar uma parada programada de sucesso" (PDF para download com formulario)
- "Checklist de pre-qualificacao para fornecedores industriais" (util para quem esta avaliando)
- Newsletter tecnica mensal com insights do setor
- Webinar gravado sobre tendencias de automacao industrial

### 7. Meta description da home e generica
**Problema:** A meta description do layout e: "Authomathika e uma empresa completa de engenharia integradora de sistemas Eletricos e de Automacao, sediada em Sertaozinho, SP." Isso e descritivo e institucional, nao persuasivo.

**Recomendacao:** Reescrever para incluir beneficio e numeros: "25+ anos integrando eletrica, automacao e EPC para usinas, mineradoras e parques solares. 42.000+ equipamentos, 336 MW instalados. Solicite uma proposta."

### 8. Blog e Noticias sem conteudo
**Problema:** As paginas `/media-center/blog` e `/media-center/noticias` existem na estrutura mas nao ha dados de posts. Paginas vazias prejudicam SEO e credibilidade.

**Recomendacao:**
- Se nao ha capacidade de produzir conteudo agora, remover os links do menu e footer temporariamente
- Plano de conteudo sugerido: 2 posts/mes focados nas dores dos ICPs (ex: "5 sinais de que sua automacao de usina precisa de revamp", "Como a eletrificacao de moenda reduz custos operacionais")

### 9. Nenhuma mencionamento do CEO/lideranca
**Problema:** O campo `president: "Antonio J. Gusmao"` existe nos dados, mas nao aparece em nenhuma pagina visivel. Em B2B industrial, a credibilidade pessoal do fundador/presidente e um fator importante na decisao.

**Recomendacao:** Adicionar na pagina Institucional ou na CompanyBrief da home uma secao com foto e mensagem do presidente. Exemplo: "Uma palavra do nosso fundador" com uma citacao sobre a visao da empresa.

### 10. Slug com acento pode causar problemas de SSR
**Problema:** O setor "Sucroenergetico" tem slug `sucroenergético` (com acento). Isso pode causar problemas de encoding em URLs, SSR e compartilhamento de links.

**Recomendacao:** Normalizar o slug para `sucroenergetico` (sem acento). Manter o `name` com acento para exibicao.

### 11. Clientes exibidos como texto, nao logos
**Problema:** Na CompanyBrief, os 17 clientes sao exibidos como texto em cards. O proprio codigo tem um TODO dizendo "Substituir nomes por logos SVG/PNG em grayscale". Logos transmitem 10x mais credibilidade que nomes em texto.

**Recomendacao:** Coletar logos dos clientes principais e implementar grid de logos em grayscale com hover colorido. Priorizar: Vale, Bunge, Cargill, Grupo Cobra (marcas reconhecidas).

### 12. Parceiros tecnologicos nao estao visiveis nas paginas certas
**Problema:** Os dados de `partners` (Rockwell, Siemens, Yokogawa, etc.) existem nos businessAreas mas nao sao exibidos nas paginas de negocios ou na home. Para o ICP tecnico (influenciador), saber que a empresa trabalha com Rockwell ou Siemens e um fator decisivo.

**Recomendacao:** Adicionar secao "Parceiros Tecnologicos" nas paginas de Automacao e Eletrica, e na home (CompanyBrief ou secao propria). Exibir logos dos parceiros.

### 13. Formulario de proposta sem contexto de setor
**Problema:** A pagina de "Solicitar Proposta Tecnica" nao pergunta o setor/segmento do cliente. Se o visitante veio de uma pagina de setor, essa informacao deveria ser pre-preenchida.

**Recomendacao:** Adicionar campo de setor no formulario e implementar pre-preenchimento via query parameter (ex: `/contato/solicitacao-de-orcamento?setor=sucroenergetico`). Atualizar os CTAs das paginas de setor para incluir o parametro.

---

## Scorecard

| Categoria | Nota (1-10) | Observacoes |
|-----------|-------------|-------------|
| Proposta de Valor | 8 | Headline excelente. Subheadline clara. Visitante entende o que a empresa faz em 5 segundos. |
| Comunicacao e Tom | 7 | Tom tecnico-profissional adequado ao ICP. Poderia ter mais conexao emocional com as dores. |
| Estrutura e Hierarquia | 8 | Fluxo logico na home: hero -> setores -> capacidades -> prova -> portfolio -> empresa -> CTA. Paginas de setor com estrutura persuasiva completa. FAQ da home nao renderizado. |
| CTAs | 7 | CTAs claros e bem posicionados. Falta CTA intermediario para visitantes em fase de pesquisa. "Solicitar proposta" e a unica opcao de conversao real. |
| Prova Social | 4 | Numeros fortes (42.027 equipamentos, 336 MW). Mas depoimentos sao 100% placeholder, cases sem metricas quantitativas, clientes exibidos como texto. A credibilidade factual e alta, mas a apresentacao e fraca. |
| Design e Experiencia | 8 | Design moderno, limpo, profissional (estilo Linear/Vercel). Tipografia consistente. Mega menus bem feitos. Bento grid eficaz. Responsivo. |
| SEO e Conteudo | 7 | Metadados, schemas, canonical URLs, keywords -- tudo implementado. Blog vazio. Meta description da home generica. FAQs existem nos dados mas nao estao todas renderizadas. |
| Tratamento de Objecoes | 6 | Paginas de setor com pain points + solucoes + FAQ. Pagina de documentacao existe (mas sem PDFs). Falta FAQ na home. Nao ha garantias explicitas ou SLAs. |
| **Nota Geral** | **6.9** | Site com fundacoes solidas em estrutura, dados e design. Falta de ativos reais (depoimentos, PDFs, metricas de cases) impede que o potencial se realize. |

---

## Top 3 Prioridades de Melhoria

### 1. Resolver a crise de prova social (Impacto: ALTO | Esforco: MEDIO)
**O que fazer:**
- Remover depoimentos placeholder imediatamente
- Coletar 3-5 depoimentos reais de clientes (foco em Sucroenergetico e Solar)
- Adicionar pelo menos 1 resultado numerico por case (top 5 cases)
- Coletar logos dos 5 clientes mais reconhecidos (Vale, Bunge, Cargill, Grupo Cobra, UMOE)

**Por que e prioridade #1:** Prova social e o fator #1 de decisao em B2B industrial de alto ticket. Depoimentos placeholder sao piores que nenhum depoimento -- podem destruir confianca se identificados como falsos.

### 2. Ativar conteudo existente nao renderizado (Impacto: ALTO | Esforco: BAIXO)
**O que fazer:**
- Plugar FAQSection na home page (componente e dados ja existem)
- Normalizar slug `sucroenergético` para `sucroenergetico`
- Exibir parceiros tecnologicos (Rockwell, Siemens, etc.) nas paginas de negocios
- Remover links para Blog/Noticias se nao houver conteudo

**Por que e prioridade #2:** Ha conteudo pronto que nao esta sendo exibido. E a melhoria de maior retorno por menor esforco. O FAQ sozinho pode melhorar a nota de "Tratamento de Objecoes" em 2 pontos.

### 3. Criar caminho de conversao intermediario (Impacto: ALTO | Esforco: MEDIO)
**O que fazer:**
- Criar 1 material rico para download (ex: "Guia de Planejamento de Entressafra" para ICP sucroenergetico)
- Adicionar formulario leve de captura (nome, email, empresa, setor)
- Tornar PDFs da documentacao disponiveis (minimo: ISO 9001 e Ficha de Pre-Qualificacao)
- Implementar passagem de setor via query parameter nos CTAs

**Por que e prioridade #3:** 70-80% dos visitantes de sites B2B industriais nao estao prontos para "Solicitar Proposta" na primeira visita. Sem um meio-termo, esses visitantes saem sem deixar contato. Um material rico captura essas leads para nurturing.

---

## Resumo Executivo

O site da Authomathika possui uma base tecnica e estrutural forte: design moderno e profissional, arquitetura de informacao bem pensada (segmentacao por setor, fluxo persuasivo nas paginas internas), SEO tecnico implementado, e dados ricos. A headline da home e uma das melhores que ja vi em sites B2B industriais brasileiros.

No entanto, o site sofre de um gap entre infraestrutura e conteudo real. Os depoimentos sao todos placeholders, os cases nao tem resultados quantificaveis, os PDFs nao estao disponiveis, e o blog esta vazio. E como um predio bonito sem mobilia -- a estrutura e impressionante, mas falta o que da vida ao espaco.

A boa noticia: as correcoes mais impactantes sao de conteudo, nao de tecnologia. A estrutura ja esta pronta para receber depoimentos reais, metricas de cases e materiais para download. A prioridade absoluta e coletar ativos reais de clientes e ativar o conteudo que ja existe no codigo mas nao esta renderizado.

**Projecao:** Com a implementacao das 3 prioridades acima, a nota geral deve subir de 6.9 para 8.0-8.5, posicionando o site como referencia no segmento de engenharia industrial.
