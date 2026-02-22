# Sprint 03 — Página de disciplina e conteúdo

## Objetivo
Permitir que o usuário acesse cada disciplina em uma página própria,
adicionando assuntos, subtópicos e anotações livres.

## Período
Data de início: (data de hoje)
Data de término: (uma semana)

## User Stories

### US-01 — Página da disciplina
Como usuário, quero clicar em uma disciplina e abrir sua página
com todos os conteúdos relacionados a ela.

### US-02 — Assuntos
Como usuário, quero adicionar assuntos estudados dentro de cada disciplina.

### US-03 — Subtópicos
Como usuário, quero adicionar subtópicos dentro de cada assunto
para organizar melhor o conteúdo.

### US-04 — Anotações livres
Como usuário, quero adicionar uma anotação livre por assunto
para registrar algo importante que não quero esquecer.

## Divisão de tarefas

### Branch: feature/pagina-disciplina-html (Dev 1)
- Criar arquivo disciplina.html
- Estrutura com seção de assuntos, subtópicos e anotações

### Branch: feature/pagina-disciplina-css (Dev 2)
- Estilizar a página da disciplina
- Botão de voltar para a página principal

### Branch: feature/navegacao-disciplina (Dev 3)
- Adicionar botão de acessar em cada disciplina na index
- Navegação para disciplina.html passando o id pela URL
- Carregar o nome da disciplina correta na página

### Branch: feature/conteudo-disciplina (Dev 4)
- Adicionar e salvar assuntos no localStorage
- Adicionar subtópicos dentro dos assuntos
- Adicionar anotações livres por assunto

## O que NÃO entra nesse Sprint
- Marcar último assunto estudado
- Exportação de conteúdo

## Tecnologias
HTML, CSS, JavaScript, localStorage, query string