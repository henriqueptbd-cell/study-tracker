# Sprint 02 — Persistência de dados, navegação em etapas e deploy

## Objetivo
Evoluir o Study Tracker para salvar os dados do usuário, melhorar o fluxo
de navegação e publicar o projeto online.

## Período
Data de início: 21/02/2026
Data de término: 28/02/2026

## User Stories

### US-01 — Salvar dados
Como usuário, quero que meus dados não sumam ao recarregar a página.

### US-02 — Navegação em etapas
Como usuário, quero primeiro cadastrar meu curso e só depois ver a seção
de disciplinas, para não pular etapas.

### US-03 — Remover disciplina
Como usuário, quero poder remover uma disciplina da lista caso eu cometa
um erro.

### US-04 — Deploy
Como usuário, quero acessar o Study Tracker online pelo celular.

## Divisão de tarefas

### Branch: feature/navegacao (Dev 1 — HTML e CSS)
- Atualizar HTML para mostrar só o formulário do curso inicialmente
- Esconder a seção de disciplinas até o curso ser cadastrado
- Estilizar a transição entre as etapas

### Branch: feature/persistencia (Dev 2 — JavaScript)
- Salvar curso e disciplinas no localStorage
- Carregar dados automaticamente ao abrir a página
- Implementar botão de remover disciplina

## O que NÃO entra nesse Sprint
- Login de usuário
- Múltiplos cursos
- Anotações dentro das disciplinas

## Referências e aprendizados
- DRY — Don't Repeat Yourself.