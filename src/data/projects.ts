import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Sistema de Gerenciamento de Estoque',
    description:
      'Sistema completo de gerenciamento de estoque desenvolvido com TypeScript, React, Node.js e Prisma.',
    highlights: [
      'CRUD completo de produtos',
      'Dashboard com estatísticas em tempo real',
      'Alertas de estoque baixo',
      'Controle e histórico de movimentações (entrada/saída)',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Prisma'],
    repoUrl: 'https://github.com/IgorMarinho-dev/Stock-manager-FullStack',
  },
  {
    title: 'Overwatch Heroes',
    description:
      'Aplicação frontend que consome a OverFast API para exibir os heróis do Overwatch 2, com busca por nome, filtro por role e paginação.',
    highlights: [
      'Busca por nome combinável com filtro por role',
      'Paginação numérica com navegação direta',
      'Estados de loading, erro e vazio tratados individualmente',
    ],
    tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'OverFast API'], // ajuste com a stack real do projeto
    repoUrl: 'https://github.com/IgorMarinho-dev/wsFrontend-Fabrica26.2',
  },
  {
    title: 'CineTrack',
    description:
      'Sistema web para gerenciar catálogos pessoais de filmes e séries: os usuários organizam, avaliam e compartilham opiniões sobre os títulos.',
    highlights: [
      'Autenticação, catálogo público e catálogo pessoal',
      'Avaliações com nota de 0 a 10 e comentários',
      'Dashboard do usuário com estatísticas e gêneros favoritos',
      'Área administrativa para títulos e usuários',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'], // adicione banco e demais tecnologias usadas
    repoUrl: 'https://github.com/IgorMarinho-dev/Projeto_Cinetrack',
  },
]