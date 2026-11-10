/**
 * Dados estruturados do currículo (sincronizados com o documento .docx oficial)
 */

export const resumeBaseData = {
  header: {
    name: "ISAIAS SILVA",
    displayName: "Isaias Silva",
    targetRole: "Desenvolvedor Full Stack Sênior | Tech Lead | Especialista PHP/Laravel & Python",
    location: "Araraquara, SP",
    phone: "(16) 99750-5196",
    phoneFull: "+55 (16) 99750-5196",
    email: "isaiasvitordealmeidasilva@gmail.com",
    linkedin: "linkedin.com/in/isaiasvasilva",
    linkedinUrl: "https://linkedin.com/in/isaiasvasilva",
    github: "github.com/isaiasvas",
    githubUrl: "https://github.com/isaiasvas",
    portfolioUrl: "https://isaiasvas.github.io",
    pdfResumeUrl: "./curriculo-isaias-silva.pdf"
  },

  summary:
    "Desenvolvedor Full Stack Sênior e Tech Lead com mais de 8 anos de experiência em engenharia de software corporativa, arquitetura orientada a serviços e sistemas de alta criticidade. Especialista no ecossistema PHP (Laravel, Symfony) e Python (Django, FastAPI), com ampla vivência na sustentação de microsserviços para operações offshore da Petrobras e desenvolvimento de soluções customizadas no ecossistema Microsoft (Dynamics 365, Azure e Power Platform). Histórico comprovado de liderança técnica, implementação de pipelines de CI/CD automatizados, modelagem de bancos relacionais de alto volume e docência de tecnologia no SENAC, aliando rigor arquitetural à capacidade de mentoria e gestão de entregas ágeis.",

  technicalSkills: [
    {
      id: "languages",
      category: "Linguagens de Programação",
      items: "PHP 8 (POO, PSRs), Python 3, JavaScript (ES6+), TypeScript, C# (.NET Core), SQL"
    },
    {
      id: "frameworks",
      category: "Frameworks & Bibliotecas",
      items: "Laravel 10/11, Django, Django REST Framework, React, Angular, Tailwind CSS, Alpine.js, WordPress, Drupal 9"
    },
    {
      id: "architecture",
      category: "Arquitetura & Engenharia",
      items: "APIs RESTful, Microsserviços, Clean Architecture, MVC, Design Patterns, Mensageria MQTT, WebSockets, TDD"
    },
    {
      id: "databases",
      category: "Bancos de Dados & Caches",
      items: "PostgreSQL, MySQL, Redis, TimescaleDB, Dataverse, Modelagem Relacional, Query Optimization"
    },
    {
      id: "devops",
      category: "DevOps & Cloud",
      items: "Docker, Docker Compose, Git, GitHub Actions, Jenkins, Azure DevOps (CI/CD, Repos), Azure (Web Apps, Key Vault, App Insights)"
    },
    {
      id: "microsoft",
      category: "Plataforma Microsoft & Gestão",
      items: "Microsoft Dynamics 365 (CRM/Plugins/Web APIs), Power Automate, Scrum, Kanban, Jira, Postman"
    }
  ],

  experiences: [
    {
      id: "simworx-petrobras",
      role: "Desenvolvedor Full Stack Sênior",
      company: "Simworx (Cliente: Petrobras)",
      period: "2025 - Presente",
      modality: "Home Office",
      location: "Brasil",
      bullets: [
        {
          label: "Engenharia de Microsserviços e Sustentação Crítica",
          text: "Atua no desenvolvimento, manutenção evolutiva e refatoração de microsserviços em Python (Django/DRF) voltados para ambientes operacionais de alta criticidade da Petrobras, assegurando alta disponibilidade e integridade transacional."
        },
        {
          label: "Desenvolvimento Frontend Reativo",
          text: "Constrói interfaces dinâmicas em React integradas a endpoints RESTful de telemetria e operação, reduzindo o tempo de carregamento de visualizações analíticas."
        },
        {
          label: "Padronização de Ambientes & DevOps",
          text: "Conteinerizou stacks de desenvolvimento e homologação utilizando Docker e Docker Compose, eliminando divergências de ambiente entre equipes e reduzindo o tempo de onboarding técnico."
        },
        {
          label: "Automação de CI/CD",
          text: "Mantém pipelines automatizados de integração e entrega contínua com Jenkins e Git, viabilizando deploys sem downtime sob metodologia ágil Scrum (sprints quinzenais)."
        }
      ]
    },
    {
      id: "senac-sp",
      role: "Docente de Tecnologia da Informação",
      company: "SENAC São Paulo",
      period: "2025 - Presente",
      modality: "Presencial - Araraquara, SP",
      location: "Araraquara, SP",
      bullets: [
        {
          label: "Formação Técnica e Liderança Pedagógica",
          text: "Ministra disciplinas práticas das trilhas de Desenvolvimento de Sistemas (POO, Arquitetura MVC, UX/UI, Modelagem de Banco de Dados, Segurança e Testes) e Infraestrutura de Redes para mais de 60 alunos por módulo."
        },
        {
          label: "Orientação de Projetos Integradores de Mercado",
          text: "Coordena projetos práticos interdisciplinares que reproduzem rotinas reais de squads ágeis corporativas, orientando arquitetura em Git/GitHub, Clean Code e padrões de entrega profissional."
        }
      ]
    },
    {
      id: "pentare-microsoft",
      role: "Desenvolvedor Full Stack / Especialista Dynamics 365",
      company: "Pentare (Parceiro Microsoft)",
      period: "2025 (6 meses)",
      modality: "Home Office",
      location: "Brasil",
      bullets: [
        {
          label: "Customização Avançada de CRM",
          text: "Projetou e implementou plugins corporativos, Web APIs, webservices e microsserviços em C# (.NET) integrados ao Microsoft Dynamics 365, automatizando regras de faturamento e governança de pedidos."
        },
        {
          label: "Orquestração de Processos de Negócio",
          text: "Desenvolveu fluxos complexos em Power Automate conectando múltiplos sistemas legados e APIs de terceiros (incluindo serviços fiscais e bancários via REST)."
        },
        {
          label: "Gestão Cloud & Telemetria em Azure",
          text: "Gerenciou provisionamento de Azure Web Apps, segregação de credenciais via Azure Key Vault e monitoramento de logs de auditoria e performance via Application Insights com versionamento no Azure DevOps."
        }
      ]
    },
    {
      id: "visioit-techlead",
      role: "Tech Lead / Desenvolvedor Full Stack",
      company: "VisioIT",
      period: "2020 - 2025",
      modality: "Home Office",
      location: "Brasil",
      bullets: [
        {
          label: "Arquitetura e Desenvolvimento Web de Grande Porte",
          text: "Liderou a concepção e implementação de sistemas web corporativos e portais de conteúdo escaláveis utilizando PHP (Laravel, Drupal 9 e WordPress), atendendo múltiplos clientes corporativos."
        },
        {
          label: "Interfaces Responsivas de Alta Performance",
          text: "Construiu SPAs modulares e componentes frontend em JavaScript (React e Angular), garantindo compatibilidade multiplataforma, 100% de conformidade semântica e consumo otimizado de APIs RESTful."
        },
        {
          label: "Sistemas de Alta Escala em Python",
          text: "Desenvolveu serviços de backend em Python (Django) estruturados sob Arquitetura Limpa, assegurando estabilidade em cenários de alta concorrência e alto volume de acessos."
        },
        {
          label: "Governança e Qualidade de Software",
          text: "Padronizou coleções de testes e documentação de APIs com Postman, estabeleceu fluxo de versionamento Git com Gitflow e acelerou o ciclo de validação de entregas em até 30%."
        }
      ]
    },
    {
      id: "sesc-araraquara",
      role: "Analista de Suporte Técnico I & Infraestrutura",
      company: "SESC Araraquara",
      period: "2023 - 2024",
      modality: "Presencial - Araraquara, SP",
      location: "Araraquara, SP",
      bullets: [
        {
          label: "Gestão de Acessos & Rede Corporativa",
          text: "Administrou infraestrutura Active Directory (AD) e Group Policy Objects (GPO), garantindo políticas de privilégio mínimo e segurança da informação para centenas de estações de trabalho."
        },
        {
          label: "Otimização de SLA e Resolução de Incidentes",
          text: "Gerenciou fila de chamados de hardware, software e conectividade de rede com índice de conformidade de SLA superior a 95%, reduzindo retrabalho por meio de documentação técnica detalhada."
        }
      ]
    }
  ],

  projectsIntro:
    "Seleção de arquiteturas concebidas e implementadas (repositórios e detalhes completos em github.com/isaiasvas):",

  projects: [
    {
      id: "saas-erp-multitenant",
      label: "SaaS de Gestão Empresarial (ERP Cloud Multi-tenant)",
      text: "Arquitetura distribuída em Python/Django REST, React, PostgreSQL, Redis, Celery e Docker. Implementou isolamento lógico rigoroso de tenants, módulo fiscal automatizado de importação/validação de NF-e via chave de 44 dígitos com BrasilAPI e processamento assíncrono de rotinas contábeis."
    },
    {
      id: "iot-telemetry-platform",
      label: "Plataforma de Telemetria e Monitoramento IoT em Tempo Real",
      text: "Sistema em Python/Django REST, MQTT, WebSockets, TimescaleDB e PostgreSQL. Ingestão massiva contínua de telemetria de sensores, motor de regras em tempo real para despacho preventivo de alertas e dashboards analíticos de séries temporais."
    },
    {
      id: "erp-comercial-laravel",
      label: "ERP Comercial & Varejo de Alta Eficiência",
      text: "Desenvolvido em PHP (Laravel 11), PostgreSQL, Redis, Tailwind CSS e Alpine.js. Gestão completa do fluxo de suprimentos, cálculo automatizado de ponto de ressuprimento de estoque, PDV e controle financeiro integrado com cache em memória."
    },
    {
      id: "ecommerce-banking-microservices",
      label: "API de E-commerce e Banking com Microsserviços",
      text: "Arquitetura desacoplada em microsserviços com Java/Spring Boot, Spring Cloud Gateway, JWT e PostgreSQL. Implementou transferências financeiras atômicas com bloqueio contra saldo negativo, auditoria imutável de transações e autenticação centralizada."
    }
  ],

  education: [
    {
      id: "pos-fullstack",
      degree: "Pós-Graduação em Desenvolvimento Full Stack",
      institution: "Estácio de Sá",
      period: "2024 - 2025"
    },
    {
      id: "bacharelado-si",
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Universidade de Araraquara (Uniara)",
      period: "2015 - 2022"
    }
  ],

  languages: "Português: Nativo | Inglês: Técnico para Leitura, Documentação e Comunicação Corporativa"
};
