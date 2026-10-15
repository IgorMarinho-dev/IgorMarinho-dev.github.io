# 💼 Portfólio — Igor Marinho
 
Site de apresentação pessoal de Igor Marinho, desenvolvedor FullStack e estudante de Ciência da Computação, com seus projetos, tecnologias e formas de contato.
 
🔗 **Acesse:** [igormarinho-dev.github.io](https://igormarinho-dev.github.io)
 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
 
## 🚀 Funcionalidades
 
- 👋 **Apresentação (hero)** com nome, foco profissional e links rápidos
- 🗂️ **Projetos em destaque**, com descrição, principais funcionalidades, tecnologias e link para o repositório
- 🧰 **Tecnologias** organizadas por área (linguagem, front-end, back-end e banco de dados)
- 🙋 **Sobre mim** com trajetória e experiência na Fábrica de Software da UNIPÊ
- 📬 **Contato** no rodapé, com GitHub, LinkedIn e e-mail
- ✨ **Animações de scroll** com revelação das seções e barra de progresso, respeitando a preferência de movimento reduzido do sistema
- 📱 **Layout responsivo** para celular, tablet e desktop
## 🛠️ Tecnologias Utilizadas
 
- **React** — biblioteca de interface
- **TypeScript** — tipagem estática
- **Vite** — build tool e servidor de desenvolvimento
- **Tailwind CSS** — estilização utilitária
- **Motion** — animações e efeitos de scroll
- **GitHub Actions** + **GitHub Pages** — deploy automático
## 📋 Pré-requisitos
 
- Node.js 22 (versão usada no deploy)
- npm
## 🔧 Instalação
 
### 1. Clone o repositório
 
```bash
git clone https://github.com/IgorMarinho-dev/IgorMarinho-dev.github.io.git
cd IgorMarinho-dev.github.io
```
 
### 2. Instale as dependências
 
```bash
npm install
```
 
### 3. Rode o projeto
 
```bash
npm run dev
```
 
## 🌐 Acesso
 
- **Local:** http://localhost:5173
- **Produção:** https://igormarinho-dev.github.io
## 📁 Estrutura do Projeto
 
```
IgorMarinho-dev.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── Reveal.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
├── index.html
├── vite.config.ts
└── package.json
```
 
## 🎯 Como Personalizar
 
O conteúdo fica separado da interface, na pasta `src/data`:
 
1. **Dados pessoais e texto "Sobre mim":** edite `profile.ts`
2. **Projetos:** adicione ou altere itens em `projects.ts` (título, descrição, destaques, tecnologias e link do repositório)
3. **Tecnologias:** edite os grupos em `skills.ts`
Os tipos usados nesses arquivos estão em `src/types.ts`.
 
## 🚀 Deploy
 
- **Hospedagem:** GitHub Pages
- **Automação:** GitHub Actions — a cada push na branch `main`, o workflow em `.github/workflows/deploy.yml` gera o build e publica o site
## 🎨 Paleta de Cores
 
O projeto segue o padrão 60/30/10, usando as cores da paleta do Tailwind CSS:
 
| Uso | Cor | Hex |
|---|---|---|
| 60% — Dominante (fundo) | Slate 950 | `#020617` |
| 30% — Secundária (cards, seções) | Slate 900 | `#0F172A` |
| 10% — Destaque (botões, links, detalhes) | Sky 400 / 500 | `#38BDF8` / `#0EA5E9` |
 
## 👨‍💻 Autor
 
Igor Marinho dos Santos Silva — [GitHub](https://github.com/IgorMarinho-dev) · [LinkedIn](https://www.linkedin.com/in/igor-marinho-842300373/)