import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',
});

// Page dimensions: 210 x 297 mm
const margin = 18;
const pageWidth = 210;
const pageHeight = 297;
const contentWidth = pageWidth - (margin * 2);
let y = margin;

function checkPageBreak(requiredSpace = 12) {
  if (y + requiredSpace > pageHeight - margin) {
    doc.addPage();
    y = margin;
    return true;
  }
  return false;
}

function addSectionTitle(title) {
  checkPageBreak(16);
  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(title.toUpperCase(), margin, y);

  y += 2;
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;
}

function addJobHeader(title, company, period, modality) {
  checkPageBreak(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59); // slate-800

  const leftText = `${title} | ${company}`;
  const rightText = `${period}${modality ? ' • ' + modality : ''}`;

  doc.text(leftText, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139); // slate-500
  const rightWidth = doc.getTextWidth(rightText);
  doc.text(rightText, pageWidth - margin - rightWidth, y);

  y += 5;
}

function addBulletPoint(text) {
  checkPageBreak(10);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85); // slate-700

  doc.text('•', margin + 2, y);

  const splitText = doc.splitTextToSize(text, contentWidth - 8);
  doc.text(splitText, margin + 7, y);
  y += (splitText.length * 4.2) + 1.5;
}

// ==================== HEADER ====================
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(12, 142, 233); // Brand color
doc.text('ISAIAS SILVA', margin, y);
y += 7;

doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(51, 65, 85);
doc.text('Desenvolvedor Full Stack | PHP/Laravel • Python/Django • React & Angular • Docente de Tecnologia', margin, y);
y += 5.5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(100, 116, 139);
doc.text('Araraquara – SP • isaiasvitordealmeidasilva@gmail.com • +55 (16) 99750-5196 • linkedin.com/in/isaiasvasilva • github.com/isaiasvas', margin, y);
y += 5;

// ==================== PERFIL PROFISSIONAL ====================
addSectionTitle('Perfil Profissional');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const profileText = 'Desenvolvedor Full Stack com trajetória consolidada em tecnologia desde 2016, incluindo experiência profissional registrada desde 2020. Atuação sólida em PHP orientado a objetos (Laravel, WordPress, Drupal) e Python (Django), com frontend em JavaScript, React e Angular. Conhecimento intermediário em C# aplicado ao Microsoft Dynamics 365 (CRM). Experiência prática com arquitetura de APIs RESTful, versionamento com Git, conteinerização com Docker e pipelines de CI/CD (Jenkins, Azure DevOps). Vivência em times ágeis (Scrum) e em ambientes de missão crítica, incluindo prestação de serviço para operações da Petrobras. Docente de Desenvolvimento de Sistemas no SENAC, unindo domínio técnico atualizado de mercado à capacidade de comunicar, liderar e formar novos profissionais.';
const splitProfile = doc.splitTextToSize(profileText, contentWidth);
doc.text(splitProfile, margin, y);
y += (splitProfile.length * 4.3) + 2;

// ==================== HABILIDADES TÉCNICAS ====================
addSectionTitle('Habilidades Técnicas');
const skillsData = [
  { label: 'Linguagens:', val: 'PHP (POO), Python, JavaScript, C#, SQL' },
  { label: 'Frameworks & Bibliotecas:', val: 'Laravel, Django, WordPress, Drupal 9, React, Angular, jQuery, .NET' },
  { label: 'Banco de Dados:', val: 'MySQL, PostgreSQL' },
  { label: 'APIs & Arquitetura:', val: 'REST API, Integração de APIs, MVC, Arquitetura Limpa, Microsserviços, MQTT' },
  { label: 'DevOps & Ferramentas:', val: 'Docker, Git, GitHub, Jenkins, Azure DevOps (Repos, CI/CD), Postman, Jira' },
  { label: 'Plataforma Microsoft:', val: 'Dynamics 365 (CRM), Power Automate, Azure (Web Apps, Key Vault, Application Insights), PowerApps' },
  { label: 'Infraestrutura & Redes:', val: 'Active Directory, GPO, SAMBA, Linux' },
  { label: 'Metodologias:', val: 'Scrum, Kanban, Desenvolvimento Ágil, Integração Contínua' }
];

skillsData.forEach(item => {
  checkPageBreak(8);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.text(item.label, margin, y);

  const labelWidth = doc.getTextWidth(item.label) + 2;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);

  const splitVal = doc.splitTextToSize(item.val, contentWidth - labelWidth);
  doc.text(splitVal, margin + labelWidth, y);
  y += (splitVal.length * 4.2) + 1;
});

// ==================== EXPERIÊNCIA PROFISSIONAL ====================
addSectionTitle('Experiência Profissional');

// SENAC
addJobHeader('Docente de Informática', 'SENAC', '2025 – Atual', 'Presencial');
addBulletPoint('Ministra aulas práticas e integradas de Infraestrutura de Redes, Desenvolvimento Web e Lógica de Programação, com foco em empregabilidade e habilidades reais de mercado.');
addBulletPoint('Aplica os currículos técnicos do SENAC nas trilhas de Desenvolvimento de Sistemas (análise, modelagem, POO, UX/UI, banco de dados, segurança, testes e versionamento), Informática para Internet e Programação de Jogos Digitais (Unity).');
addBulletPoint('Conduz projetos integradores que simulam desafios reais do mercado de TI, promovendo resolução de problemas, trabalho em equipe e construção de portfólio dos alunos.');
addBulletPoint('Fomenta visão multidisciplinar conectando infraestrutura, desenvolvimento, versionamento, usabilidade e práticas de DevOps e segurança da informação.');

// Simworx
addJobHeader('Desenvolvedor Full Stack', 'Simworx', '2025 – Atual', 'Home Office');
addBulletPoint('Presta serviço técnico para a Petrobras, atuando em manutenção, correção e evolução de microsserviços e aplicações legadas e modernas.');
addBulletPoint('Desenvolve back-end em Python com Django, priorizando soluções robustas, escaláveis e seguras para ambientes embarcados.');
addBulletPoint('Implementa interfaces frontend em React, com experiências dinâmicas e responsivas integradas via APIs RESTful.');
addBulletPoint('Automatiza ambientes de desenvolvimento com Docker, garantindo consistência e agilidade entre ambientes locais e de homologação.');
addBulletPoint('Integra pipelines de CI/CD com Jenkins, monitorando repositórios Git para entregas contínuas e controladas.');
addBulletPoint('Colabora em time ágil (Scrum), com sprints quinzenais, planning, review e retrospectiva.');

// Pentare
addJobHeader('Desenvolvedor Full Stack', 'Pentare (Parceiro Microsoft)', '2025 (6 meses)', 'Home Office');
addBulletPoint('Desenvolveu e customizou o módulo de CRM do Microsoft Dynamics 365, incluindo plugins, Web APIs, webservices e webapps em C#.');
addBulletPoint('Criou fluxos automatizados de processos de negócio com Power Automate, integrando múltiplos serviços.');
addBulletPoint('Utilizou Azure (Web Apps, Key Vault, Application Insights) para hospedagem, gestão segura de credenciais e monitoramento/telemetria.');
addBulletPoint('Manteve versionamento e pipelines de CI/CD via Azure DevOps (Repos), em equipe técnica distribuída.');

// VisioIT
addJobHeader('Desenvolvedor Full Stack', 'VisioIT', '2020 – 2025', 'Home Office');
addBulletPoint('Desenvolveu aplicações web em PHP com Laravel, Drupal e WordPress para sistemas corporativos, portais de conteúdo e soluções dinâmicas, incluindo customização de módulos, temas e integrações com APIs externas.');
addBulletPoint('Construiu interfaces responsivas em JavaScript (React e Angular), integrando frontend com backends em PHP.');
addBulletPoint('Desenvolveu aplicações escaláveis em Python com Django, com foco em performance, segurança e arquitetura limpa.');
addBulletPoint('Integrou APIs RESTful, versionou código com Git e automatizou ambientes de desenvolvimento com Docker.');
addBulletPoint('Utilizou Postman para testes e documentação de APIs, assegurando qualidade e consistência nas integrações.');

// SESC Araraquara - Suporte
addJobHeader('Analista de Suporte Técnico I', 'SESC Araraquara', '2023 – 2024 (9 meses)', 'Araraquara, SP');
addBulletPoint('Administrou Active Directory (AD) e Group Policy Objects (GPO) para controle de permissões na rede corporativa.');
addBulletPoint('Prestou suporte técnico a usuários internos via sistema de chamados e atendimento remoto, resolvendo problemas de hardware, software e rede.');
addBulletPoint('Documentou processos e monitorou chamados técnicos para análise de padrões e melhoria contínua.');

// SESC Araraquara - Estágio
addJobHeader('Estagiário – Analista de Suporte Técnico I', 'SESC Araraquara', '2016 – 2017', 'Araraquara, SP');
addBulletPoint('Implementou e administrou o sistema SAMBA para compartilhamento de arquivos em rede local.');
addBulletPoint('Realizou manutenção e configuração de computadores e impressoras, com suporte ao usuário interno.');
addBulletPoint('Apoiou a infraestrutura de TI, incluindo trocas de switches e instalação de racks de rede.');

// ==================== FORMAÇÃO ACADÊMICA ====================
addSectionTitle('Formação Acadêmica');

checkPageBreak(12);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Pós-Graduação em Desenvolvimento Full Stack', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(100, 116, 139);
const estacioRight = '2024 – 2025 | EAD';
doc.text(estacioRight, pageWidth - margin - doc.getTextWidth(estacioRight), y);
y += 4.5;
doc.setTextColor(71, 85, 105);
doc.text('Estácio de Sá', margin, y);
y += 6;

checkPageBreak(12);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Bacharelado em Sistemas de Informação', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(100, 116, 139);
const uniaraRight = '2015 – 2022';
doc.text(uniaraRight, pageWidth - margin - doc.getTextWidth(uniaraRight), y);
y += 4.5;
doc.setTextColor(71, 85, 105);
doc.text('Universidade de Araraquara (Uniara)', margin, y);
y += 6;

// ==================== PROJETOS DE ENGENHARIA & DESENVOLVIMENTO ====================
addSectionTitle('Projetos de Engenharia & Desenvolvimento');

const relevantProjects = [
  {
    title: 'SaaS de Gestão Empresarial (ERP Cloud Multi-tenant)',
    stack: 'Python, Django REST, React, PostgreSQL, Redis, Docker, Celery, BrasilAPI',
    desc: 'Plataforma multi-tenant com isolamento lógico de dados, importação automática de NF-e/XML com decodificação de chave de 44 dígitos, módulo fiscal com regimes tributários, controle de estoque auditado, emissão de pedidos PDV e fluxo de caixa.',
    github: 'https://github.com/isaiasvas/SaaS-de-Gest-o-Empresarial'
  },
  {
    title: 'Plataforma de Monitoramento IoT',
    stack: 'Python, Django, Django REST Framework, MQTT, PostgreSQL, Docker, WebSockets, TimescaleDB',
    desc: 'Sistema distribuído para ingestão e telemetria contínua de sensores em tempo real via broker MQTT, motor de regras para disparo de alertas e dashboards de supervisão temporal.'
  },
  {
    title: 'Sistema de Service Desk',
    stack: 'Python, Django, Django REST Framework, PostgreSQL, Docker, Postman, Bootstrap',
    desc: 'Central de incidentes e requisições de TI com triagem categorizada, controle visual de matriz de prioridades, monitoramento de SLAs e histórico auditável de chamados.',
    github: 'https://github.com/isaiasvas/Sistema-de-Service-Desk'
  },
  {
    title: 'Plataforma LMS (Ambiente Virtual de Aprendizagem)',
    stack: 'Python, Django, Django REST Framework, PostgreSQL, Docker, JavaScript, HTML5/CSS3',
    desc: 'Ambiente educacional modular com trilhas pedagógicas, módulos de aulas em vídeo/texto, exercícios interativos com correção automática e emissão autenticada de certificados.'
  },
  {
    title: 'ERP Comercial & Varejo',
    stack: 'PHP, Laravel 11, PostgreSQL, Redis, Docker, Tailwind CSS, Alpine.js',
    desc: 'Gestão unificada do ciclo comercial: cadastro de clientes/fornecedores, pedidos de venda, ordens de compra, controle de estoque com ponto de ressuprimento e fluxo de caixa.'
  },
  {
    title: 'Sistema de Help Desk & Gestão de SLA',
    stack: 'PHP, Laravel, PostgreSQL, Docker, REST API, Tailwind CSS, Redis',
    desc: 'Plataforma de suporte com filas de trabalho departamentais, controle e alertas de estouro de SLA, múltiplos anexos e relatórios gerenciais de desempenho.'
  },
  {
    title: 'Plataforma de Eventos & Credenciamento Digital',
    stack: 'PHP, Laravel, PostgreSQL, Tailwind CSS, JavaScript, QR Code Engine',
    desc: 'Sistema de publicação de eventos e congressos, gestão de inscrições por lotes de ingressos, emissão de vouchers com QR Code e check-in instantâneo via câmera.'
  },
  {
    title: 'SaaS de Governança de Contratos',
    stack: 'PHP, Laravel, PostgreSQL, Docker, Tailwind CSS, Redis, Cron Scheduler',
    desc: 'Governança e administração de contratos corporativos, alertas preventivos de vencimentos de vigência, versionamento de aditivos e fluxo formal de aprovações multinível.'
  },
  {
    title: 'API de E-commerce com Microsserviços',
    stack: 'Java, Spring Boot, Spring Security, Spring Cloud Gateway, PostgreSQL, Docker, JWT, OpenAPI',
    desc: 'Ecossistema desacoplado de microsserviços com API Gateway, autenticação centralizada JWT, catálogo, estoque, ciclo de vida de pedidos e integração de pagamentos.'
  },
  {
    title: 'Sistema Financeiro & Banking API',
    stack: 'Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Docker, JWT, JUnit/Mockito',
    desc: 'API bancária transacional com isolamento de contas correntes, transferências com bloqueio atômico contra saldo negativo, extratos detalhados e trilhas de auditoria imutáveis.'
  }
];

relevantProjects.forEach(proj => {
  checkPageBreak(16);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text(proj.title, margin, y);
  y += 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(12, 142, 233); // Brand accent
  doc.text('Stack: ', margin + 2, y);
  const stackLabelWidth = doc.getTextWidth('Stack: ');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  const splitStack = doc.splitTextToSize(proj.stack, contentWidth - stackLabelWidth - 4);
  doc.text(splitStack, margin + 2 + stackLabelWidth, y);
  y += (splitStack.length * 3.8) + 1.5;

  addBulletPoint(proj.desc);
  y += 1;
});

// Output
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'curriculo-isaias-silva.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log(`PDF successfully created at: ${outputPath}`);
