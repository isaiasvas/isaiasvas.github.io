/**
 * Single Source of Truth (Fonte Única de Verdade) — Currículo Otimizado para ATS Pro
 * Sincronizado integralmente com Curriculo_Isaias_Silva_ATS_Pro.docx
 * Metodologia dos Três Leitores: Parser Sintático (Gupy/Workday), IA Semântica e Decisor Humano.
 */

export const resumeBaseData = {
  meta: {
    version: "2.0.0-ats-pro",
    lastUpdated: "2026-11",
    methodology: "Suíte Otimizador ATS Pro — Metodologia dos Três Leitores",
    layout: "single-column-strict",
    primaryColor: "#0F2D5A"
  },

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
      focusTags: ["default", "python-microservices", "tech-lead", "php-laravel"],
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
      focusTags: ["default", "tech-lead", "php-laravel", "python-microservices"],
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
      focusTags: ["default", "tech-lead", "php-laravel", "python-microservices"],
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
      focusTags: ["default", "php-laravel", "tech-lead", "python-microservices"],
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
      focusTags: ["default", "tech-lead", "php-laravel", "python-microservices"],
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
      text: "Arquitetura distribuída em Python/Django REST, React, PostgreSQL, Redis, Celery e Docker. Implementou isolamento lógico rigoroso de tenants, módulo fiscal automatizado de importação/validação de NF-e via chave de 44 dígitos com BrasilAPI e processamento assíncrono de rotinas contábeis.",
      focusTags: ["default", "python-microservices", "tech-lead"]
    },
    {
      id: "iot-telemetry-platform",
      label: "Plataforma de Telemetria e Monitoramento IoT em Tempo Real",
      text: "Sistema em Python/Django REST, MQTT, WebSockets, TimescaleDB e PostgreSQL. Ingestão massiva contínua de telemetria de sensores, motor de regras em tempo real para despacho preventivo de alertas e dashboards analíticos de séries temporais.",
      focusTags: ["default", "python-microservices", "tech-lead"]
    },
    {
      id: "erp-comercial-laravel",
      label: "ERP Comercial & Varejo de Alta Eficiência",
      text: "Desenvolvido em PHP (Laravel 11), PostgreSQL, Redis, Tailwind CSS e Alpine.js. Gestão completa do fluxo de suprimentos, cálculo automatizado de ponto de ressuprimento de estoque, PDV e controle financeiro integrado com cache em memória.",
      focusTags: ["default", "php-laravel", "tech-lead"]
    },
    {
      id: "ecommerce-banking-microservices",
      label: "API de E-commerce e Banking com Microsserviços",
      text: "Arquitetura desacoplada em microsserviços com Java/Spring Boot, Spring Cloud Gateway, JWT e PostgreSQL. Implementou transferências financeiras atômicas com bloqueio contra saldo negativo, auditoria imutável de transações e autenticação centralizada.",
      focusTags: ["default", "tech-lead", "php-laravel", "python-microservices"]
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

/**
 * Perfis de Visualização & Otimização Semântica (Alternância de Foco no Gerador)
 * O perfil 'default' espelha 100% o documento Curriculo_Isaias_Silva_ATS_Pro.docx.
 */
export const resumeFocusProfiles = {
  default: {
    id: "default",
    badge: "Versão Canônica DOCX (100% Fiel)",
    label: "Completo (ATS Pro / DOCX)",
    targetRole: resumeBaseData.header.targetRole,
    summary: resumeBaseData.summary,
    experienceOrder: ["simworx-petrobras", "senac-sp", "pentare-microsoft", "visioit-techlead", "sesc-araraquara"],
    skillOrder: ["languages", "frameworks", "architecture", "databases", "devops", "microsoft"]
  },
  "php-laravel": {
    id: "php-laravel",
    badge: "Foco Ecossistema PHP & Portais",
    label: "Full Stack PHP / Laravel",
    targetRole: "Desenvolvedor Full Stack Sênior | Especialista PHP 8, Laravel, React & Arquitetura Web",
    summary:
      "Desenvolvedor Full Stack Sênior e Tech Lead com mais de 8 anos de experiência em engenharia de software corporativa, especializado no ecossistema PHP 8 (Laravel 10/11, Symfony, Drupal 9 e WordPress) integrado a frontends reativos em React, Angular e Tailwind CSS. Forte atuação na liderança e sustentação de sistemas web de alto volume, ERPs multi-tenant, modelagem PostgreSQL/MySQL, cache com Redis, conteinerização com Docker e automação de CI/CD (Jenkins, GitHub Actions e Azure DevOps).",
    experienceOrder: ["visioit-techlead", "simworx-petrobras", "pentare-microsoft", "senac-sp", "sesc-araraquara"],
    skillOrder: ["languages", "frameworks", "databases", "architecture", "devops", "microsoft"]
  },
  "python-microservices": {
    id: "python-microservices",
    badge: "Foco Missão Crítica & Dados",
    label: "Python / Microsserviços",
    targetRole: "Engenheiro de Software Sênior | Especialista Python (Django/FastAPI) & Microsserviços",
    summary:
      "Engenheiro de Software Full Stack Sênior com mais de 8 anos de trajetória em tecnologia e sólida especialização em Python 3 (Django, Django REST Framework, FastAPI, Celery) e arquitetura de microsserviços. Atuação comprovada na sustentação de sistemas operacionais de missão crítica para a Petrobras, ingestão de telemetria IoT em tempo real (MQTT/TimescaleDB), interfaces analíticas em React e pipelines de CI/CD automatizados com Docker e Jenkins.",
    experienceOrder: ["simworx-petrobras", "visioit-techlead", "pentare-microsoft", "senac-sp", "sesc-araraquara"],
    skillOrder: ["architecture", "languages", "frameworks", "databases", "devops", "microsoft"]
  },
  "tech-lead": {
    id: "tech-lead",
    badge: "Foco Liderança & Arquitetura",
    label: "Tech Lead / Staff Engineer",
    targetRole: "Tech Lead | Staff Software Engineer | Arquitetura de Sistemas, Cloud & DevOps",
    summary:
      "Tech Lead e Engenheiro de Software Sênior com mais de 8 anos de experiência liderando a concepção, arquitetura e entrega de sistemas corporativos críticos (Petrobras, Parceiros Microsoft e SaaS Multi-tenant). Domínio de Clean Architecture, microsserviços em Python e PHP, integrações corporativas em C# (.NET / Microsoft Dynamics 365 / Azure), governança de qualidade de software (Gitflow, TDD, CI/CD) e mentoria técnica ativa como Docente de Tecnologia no SENAC São Paulo.",
    experienceOrder: ["simworx-petrobras", "visioit-techlead", "pentare-microsoft", "senac-sp", "sesc-araraquara"],
    skillOrder: ["architecture", "devops", "microsoft", "languages", "frameworks", "databases"]
  }
};

/**
 * Retorna os dados do currículo ordenados e adaptados para o modo de foco selecionado.
 */
export function getResumeByFocus(focusKey = "default") {
  const focus = resumeFocusProfiles[focusKey] || resumeFocusProfiles.default;

  const orderedSkills = focus.skillOrder
    .map((id) => resumeBaseData.technicalSkills.find((s) => s.id === id))
    .filter(Boolean);

  const orderedExperiences = focus.experienceOrder
    .map((id) => resumeBaseData.experiences.find((e) => e.id === id))
    .filter(Boolean);

  return {
    ...resumeBaseData,
    focus,
    header: {
      ...resumeBaseData.header,
      targetRole: focus.targetRole
    },
    summary: focus.summary,
    technicalSkills: orderedSkills,
    experiences: orderedExperiences
  };
}

/**
 * Gera a string de Texto Puro estritamente formatada para colar em ATS (Gupy, Workday, Bloco de Notas)
 * ou converter para .docx sem risco de falha de parsing.
 */
export function generateAtsPlainText(focusKey = "default") {
  const data = getResumeByFocus(focusKey);
  const lines = [];

  // Cabeçalho Canônico (3 linhas estritas)
  lines.push(data.header.name);
  lines.push(data.header.targetRole);
  lines.push(
    `${data.header.location} | ${data.header.phone} | ${data.header.email} | ${data.header.linkedin} | ${data.header.github}`
  );
  lines.push("");

  // RESUMO PROFISSIONAL
  lines.push("RESUMO PROFISSIONAL");
  lines.push(data.summary);
  lines.push("");

  // HABILIDADES TÉCNICAS
  lines.push("HABILIDADES TÉCNICAS");
  data.technicalSkills.forEach((skill) => {
    lines.push(`${skill.category}: ${skill.items}`);
  });
  lines.push("");

  // EXPERIÊNCIA PROFISSIONAL
  lines.push("EXPERIÊNCIA PROFISSIONAL");
  data.experiences.forEach((exp, idx) => {
    lines.push(`${exp.role} | ${exp.company} — ${exp.period} (${exp.modality})`);
    exp.bullets.forEach((b) => {
      lines.push(`• ${b.label}: ${b.text}`);
    });
    if (idx < data.experiences.length - 1) {
      lines.push("");
    }
  });
  lines.push("");

  // PROJETOS RELEVANTES DE ENGENHARIA & PORTFÓLIO
  lines.push("PROJETOS RELEVANTES DE ENGENHARIA & PORTFÓLIO");
  lines.push(data.projectsIntro);
  data.projects.forEach((proj) => {
    lines.push(`• ${proj.label}: ${proj.text}`);
  });
  lines.push("");

  // FORMAÇÃO ACADÊMICA
  lines.push("FORMAÇÃO ACADÊMICA");
  data.education.forEach((edu) => {
    lines.push(`${edu.degree} | ${edu.institution} (${edu.period})`);
  });
  lines.push("");

  // IDIOMAS
  lines.push("IDIOMAS");
  lines.push(data.languages);

  return lines.join("\n");
}

