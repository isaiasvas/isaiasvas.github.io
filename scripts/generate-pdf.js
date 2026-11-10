import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resumeBaseData } from '../src/data/resumeData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',
});

// Page dimensions: A4 (210 x 297 mm)
// Matching Curriculo_Isaias_Silva_ATS_Pro.docx margins (top/bottom 0.6in = 15.24mm, left/right 0.65in = 16.51mm)
const marginX = 16.5;
const marginY = 15.2;
const pageWidth = 210;
const pageHeight = 297;
const contentWidth = pageWidth - marginX * 2;
let y = marginY;

// Palette from Curriculo_Isaias_Silva_ATS_Pro.docx
const COLOR_NAVY = [15, 45, 90];       // #0F2D5A
const COLOR_DARK = [30, 30, 30];       // #1E1E1E
const COLOR_BODY = [40, 40, 40];       // #282828
const COLOR_SUBTITLE = [70, 70, 70];   // #464646
const COLOR_MUTED = [90, 90, 90];      // #5A5A5A

function checkPageBreak(requiredSpace = 12) {
  if (y + requiredSpace > pageHeight - marginY) {
    doc.addPage();
    y = marginY;
    return true;
  }
  return false;
}

function addSectionTitle(title) {
  checkPageBreak(14);
  y += 3.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11.5);
  doc.setTextColor(...COLOR_NAVY);
  doc.text(title.toUpperCase(), marginX, y);

  y += 1.5;
  doc.setDrawColor(...COLOR_NAVY);
  doc.setLineWidth(0.35);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 4.5;
}

/**
 * Renders a single-column paragraph or bullet item where the prefix (`label: `) is bold
 * and the rest of `text` flows naturally across wrapped lines.
 */
function addLabeledParagraph(label, text, options = {}) {
  const { isBullet = false, indent = 0, lineSpacing = 4.1, afterSpace = 1.4 } = options;
  const startX = marginX + indent;
  const availWidth = contentWidth - indent;

  doc.setFontSize(9.5);
  const fullPrefix = `${label}: `;
  const fullString = `${fullPrefix}${text}`;

  doc.setFont('helvetica', 'normal');
  const wrappedLines = doc.splitTextToSize(fullString, availWidth);
  checkPageBreak(wrappedLines.length * lineSpacing + afterSpace + 2);

  if (isBullet) {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLOR_DARK);
    doc.text('•', marginX + 1.5, y);
  }

  // Render first line with bold prefix + normal remainder
  const firstLine = wrappedLines[0] || '';
  if (firstLine.startsWith(fullPrefix)) {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLOR_DARK);
    doc.text(fullPrefix, startX, y);

    const prefixWidth = doc.getTextWidth(fullPrefix);
    const remainderFirstLine = firstLine.slice(fullPrefix.length);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLOR_BODY);
    doc.text(remainderFirstLine, startX + prefixWidth, y);
  } else {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLOR_DARK);
    doc.text(firstLine, startX, y);
  }

  y += lineSpacing;

  // Render remaining wrapped lines
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLOR_BODY);
  for (let i = 1; i < wrappedLines.length; i++) {
    checkPageBreak(lineSpacing + 2);
    doc.text(wrappedLines[i], startX, y);
    y += lineSpacing;
  }

  y += afterSpace;
}

function addJobHeader(role, company, period, modality) {
  checkPageBreak(12);
  y += 1.2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLOR_NAVY);

  const mainTitle = `${role} | ${company}`;
  doc.text(mainTitle, marginX, y);
  const mainWidth = doc.getTextWidth(mainTitle);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_MUTED);
  doc.text(` — ${period} (${modality})`, marginX + mainWidth, y);

  y += 4.5;
}

// ==================== CABEÇALHO CANÔNICO ====================
doc.setFont('helvetica', 'bold');
doc.setFontSize(17);
doc.setTextColor(...COLOR_NAVY);
doc.text(resumeBaseData.header.name, marginX, y);
y += 5.5;

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...COLOR_SUBTITLE);
doc.text(resumeBaseData.header.targetRole, marginX, y);
y += 4.8;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(...COLOR_SUBTITLE);
const contactPrefix = `${resumeBaseData.header.location} | ${resumeBaseData.header.phone} | ${resumeBaseData.header.email} | `;
doc.text(contactPrefix, marginX, y);
let contactX = marginX + doc.getTextWidth(contactPrefix);

doc.setFont('helvetica', 'bold');
doc.setTextColor(...COLOR_NAVY);
doc.text(resumeBaseData.header.linkedin, contactX, y);
contactX += doc.getTextWidth(resumeBaseData.header.linkedin);

doc.setFont('helvetica', 'normal');
doc.setTextColor(...COLOR_SUBTITLE);
doc.text(' | ', contactX, y);
contactX += doc.getTextWidth(' | ');

doc.setFont('helvetica', 'bold');
doc.setTextColor(...COLOR_NAVY);
doc.text(resumeBaseData.header.github, contactX, y);
y += 3.5;

// ==================== 1. RESUMO PROFISSIONAL ====================
addSectionTitle('RESUMO PROFISSIONAL');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(...COLOR_BODY);
const splitSummary = doc.splitTextToSize(resumeBaseData.summary, contentWidth);
doc.text(splitSummary, marginX, y);
y += splitSummary.length * 4.2 + 1.5;

// ==================== 2. HABILIDADES TÉCNICAS ====================
addSectionTitle('HABILIDADES TÉCNICAS');
resumeBaseData.technicalSkills.forEach((skill) => {
  addLabeledParagraph(skill.category, skill.items, {
    isBullet: false,
    indent: 0,
    lineSpacing: 4.1,
    afterSpace: 0.9
  });
});

// ==================== 3. EXPERIÊNCIA PROFISSIONAL ====================
addSectionTitle('EXPERIÊNCIA PROFISSIONAL');
resumeBaseData.experiences.forEach((exp) => {
  addJobHeader(exp.role, exp.company, exp.period, exp.modality);
  exp.bullets.forEach((b) => {
    addLabeledParagraph(b.label, b.text, {
      isBullet: true,
      indent: 5,
      lineSpacing: 4.1,
      afterSpace: 1.2
    });
  });
});

// ==================== 4. PROJETOS RELEVANTES DE ENGENHARIA & PORTFÓLIO ====================
addSectionTitle('PROJETOS RELEVANTES DE ENGENHARIA & PORTFÓLIO');
doc.setFont('helvetica', 'italic');
doc.setFontSize(9);
doc.setTextColor(80, 80, 80);
doc.text(resumeBaseData.projectsIntro, marginX, y);
y += 4.5;

resumeBaseData.projects.forEach((proj) => {
  addLabeledParagraph(proj.label, proj.text, {
    isBullet: true,
    indent: 5,
    lineSpacing: 4.1,
    afterSpace: 1.2
  });
});

// ==================== 5. FORMAÇÃO ACADÊMICA ====================
addSectionTitle('FORMAÇÃO ACADÊMICA');
resumeBaseData.education.forEach((edu) => {
  checkPageBreak(8);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_DARK);
  doc.text(edu.degree, marginX, y);
  const degWidth = doc.getTextWidth(edu.degree);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(` | ${edu.institution} (${edu.period})`, marginX + degWidth, y);
  y += 4.6;
});

// ==================== 6. IDIOMAS ====================
addSectionTitle('IDIOMAS');
checkPageBreak(8);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(...COLOR_BODY);
doc.text(resumeBaseData.languages, marginX, y);

// Output PDF
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'curriculo-isaias-silva.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log(`ATS Pro PDF successfully created at: ${outputPath}`);
