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
doc.text('Araraquara – SP • isaias@visioit.com.br • +55 (16) 99750-5196 • linkedin.com/in/isaiasvasilva • github.com/isaiasvas', margin, y);
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

// ==================== PROJETOS RELEVANTES ====================
addSectionTitle('Projetos Relevantes');

const relevantProjects = [
  { title: 'Gestão de Estoque e Vendas (Python/Django)', desc: 'Sistema de gestão de estoque e controle de vendas com fluxo de caixa e dashboard de visualização. Em produção.' },
  { title: 'Portal Institucional em Drupal 9', desc: 'Portal institucional com módulos personalizados, tipos de conteúdo e views configuráveis; integração com APIs externas e cache para performance.' },
  { title: 'Intranet Corporativa (Drupal)', desc: 'Intranet com autenticação LDAP integrada ao Active Directory; dashboard administrativo, permissões e módulos de comunicados e documentos.' },
  { title: 'CRM Customizado – Microsoft Dynamics 365', desc: 'Plugins e APIs para o módulo de Vendas, com automação de cálculos, integração via Power Automate e revalidação de promoções em tempo real.' },
  { title: 'Plataforma de Monitoramento de Ambientes Embarcados (Python/Django)', desc: 'Microsserviços para coleta e análise de dados embarcados, com integração em tempo real via MQTT e REST API; deploy contínuo com Docker e Jenkins.' },
  { title: 'Automação de Fluxos de Aprovação (Power Automate)', desc: 'Fluxos integrando Dynamics 365, SharePoint e Outlook para aprovação de propostas comerciais, reduzindo o tempo de aprovação em 40%.' },
  { title: 'Sistema de Gestão de Chamados Técnicos (Laravel)', desc: 'Sistema com autenticação, níveis de permissão e PostgreSQL; relatórios de SLA e painéis de acompanhamento de tickets.' }
];

relevantProjects.forEach(proj => {
  checkPageBreak(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.text(proj.title, margin, y);
  y += 4;
  addBulletPoint(proj.desc);
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
