# Isaias Silva — Portfólio Profissional & Currículo Online

> **Senior Full Stack Developer & Docente de Tecnologia**  
> Especialista em PHP (Laravel, WordPress, Drupal), Python (Django), JavaScript (React, Angular), APIs RESTful, Docker, CI/CD e Microsoft Dynamics 365.

---

## 📌 Sobre o Projeto

Este projeto é um portfólio profissional e currículo online moderno, minimalista, responsivo e de alta performance, projetado para publicação direta no **GitHub Pages** (`https://isaiasvas.github.io/` ou `https://isaiasvas.github.io/portfolio/`).

### 🎯 Principais Recursos:
- 🌓 **Tema Claro e Escuro (Light/Dark Mode):** Alternância instantânea e suave, persistência no `localStorage` e detecção automática do `prefers-color-scheme` do sistema operacional.
- ⚡ **Zero FOUC:** Script inline no cabeçalho do HTML para evitar flashes de tema incorreto no carregamento.
- 📱 **Mobile-First & Totalmente Responsivo:** Layout adaptável para telas de 320px até 4K (320px, 375px, 768px, 1024px, 1440px+).
- 🧩 **10 Projetos com Filtros e Modal Arquitetural:** 4 projetos em Django, 4 em Laravel e 2 em Spring Boot, com filtros em tempo real e visualização em modal acessível.
- 📄 **Currículo PDF Integrado:** Download direto do arquivo PDF oficial e visualização em aba dedicada.
- ⏱️ **Timeline de Experiência Profissional:** Apresentação cronológica (SENAC, Simworx/Petrobras, Pentare/Microsoft, VisioIT, SESC).
- 🚀 **SEO & Structured Data:** Tags OpenGraph completas, Twitter Cards, Sitemap XML, Robots.txt e Schema.org (`Person`) em JSON-LD.
- 🤖 **CI/CD Automatizado via GitHub Actions:** Workflow configurado para compilar e publicar automaticamente no GitHub Pages a cada push na branch principal.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Utilitários:** `clsx` + `tailwind-merge` + `jspdf` (geração de PDF nativo)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## 📂 Estrutura do Projeto

```
estacionamento/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline CI/CD para deploy no GitHub Pages
├── public/
│   ├── curriculo-isaias-silva.pdf  # Currículo oficial em PDF
│   ├── favicon.svg                 # Favicon vetorial
│   ├── robots.txt                  # Configuração de indexação SEO
│   └── sitemap.xml                 # Sitemap XML
├── scripts/
│   └── generate-pdf.js             # Script utilitário para geração/atualização do PDF
├── src/
│   ├── components/                 # Componentes modulares
│   │   ├── About.jsx               # Perfil profissional e destaques
│   │   ├── Contact.jsx             # Seção de contato com cópia de e-mail e links
│   │   ├── Education.jsx           # Formação acadêmica e pós-graduação
│   │   ├── Experience.jsx          # Timeline vertical de experiências
│   │   ├── Footer.jsx              # Rodapé com ano dinâmico
│   │   ├── Header.jsx              # Navbar fixa com blur, menu mobile e toggle
│   │   ├── Hero.jsx                # Hero section com rotador de tecnologias
│   │   ├── ProjectCard.jsx         # Card do projeto com capas abstratas
│   │   ├── ProjectModal.jsx        # Modal de detalhes de arquitetura
│   │   ├── Projects.jsx            # Grid e filtros de projetos
│   │   ├── SectionHeading.jsx      # Título de seção padronizado
│   │   ├── Skills.jsx              # Tech Stack categorizada
│   │   ├── ThemeToggle.jsx         # Alternador de tema Claro/Escuro
│   │   └── Toast.jsx               # Notificação de feedback
│   ├── data/                       # Arquivos centralizados de conteúdo
│   │   ├── education.js            # Dados acadêmicos
│   │   ├── experience.js           # Dados das empresas e cargos
│   │   ├── profile.js              # Informações pessoais, links e bio
│   │   ├── projects.js             # 10 projetos estruturados
│   │   └── skills.js               # Matriz de habilidades técnicas
│   ├── hooks/                      # Hooks customizados
│   │   ├── useActiveSection.js     # Identificação da seção ativa no scroll
│   │   └── useTheme.js             # Gerenciamento de tema Claro/Escuro
│   ├── styles/
│   │   └── index.css               # Estilos globais e utilitários
│   ├── App.jsx                     # Componente raiz
│   └── main.jsx                    # Ponto de entrada React
├── index.html                      # HTML semântico com meta tags e Schema.org
├── vite.config.js                  # Configuração do Vite com base relativa
├── tailwind.config.js              # Configuração do Tailwind CSS
├── package.json                    # Dependências e scripts do projeto
└── README.md                       # Documentação do projeto
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- **Node.js**: Versão 18.x ou superior (recomendado 20.x LTS)
- **NPM**: Versão 9.x ou superior

### 1. Clonar o repositório
```bash
git clone https://github.com/isaiasvas/portfolio.git
cd portfolio
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o servidor de desenvolvimento
```bash
npm run dev
```
O servidor estará acessível em: `http://localhost:3000`

### 4. Gerar build de produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

### 5. Pré-visualizar o build de produção localmente
```bash
npm run preview
```

---

## 🚀 Publicação no GitHub Pages

### Deploy Automático (GitHub Actions)
1. Crie um repositório no seu GitHub chamado `isaiasvas.github.io` ou `portfolio`.
2. Conecte o repositório local ao GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio profissional de Isaias Silva pronto para producao"
   git branch -M main
   git remote add origin https://github.com/isaiasvas/portfolio.git
   git push -u origin main
   ```
3. No GitHub, acesse **Settings** > **Pages**.
4. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
5. A cada novo `git push`, o workflow `.github/workflows/deploy.yml` será acionado automaticamente e publicará o site.

---

## 📝 Como Atualizar o Conteúdo

Todos os dados do site estão centralizados e desacoplados na pasta `src/data/`:
- **Informações Pessoais / Links:** Edite `src/data/profile.js`.
- **Novas Experiências:** Adicione objetos em `src/data/experience.js`.
- **Habilidades / Ferramentas:** Atualize as categorias em `src/data/skills.js`.
- **Novos Projetos / Repositórios:** Adicione ou edite em `src/data/projects.js` (incluindo links de GitHub e Demo quando disponíveis).
- **Geração de Novo PDF:** Execute `npm run generate-pdf`.

---

## 👤 Autor

**Isaias Silva**  
- **E-mail:** [isaias@visioit.com.br](mailto:isaias@visioit.com.br)  
- **LinkedIn:** [linkedin.com/in/isaiasvasilva](https://linkedin.com/in/isaiasvasilva)  
- **GitHub:** [github.com/isaiasvas](https://github.com/isaiasvas)  
- **Localização:** Araraquara – SP, Brasil

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
