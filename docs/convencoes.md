# Convenções do Projeto — Study Tracker

## Objetivo
Documento que define os padrões de código adotados pelo time.
Todos os devs devem seguir essas convenções para manter o projeto consistente.

## HTML
- ids e classes sempre em kebab-case: `nome-curso`, `lista-disciplinas`
- Comentários para identificar cada seção: `<!-- Seção 1: Cadastro do curso -->`
- Identação com 2 espaços

## CSS
- Uma propriedade por linha
- Agrupar estilos por seção seguindo a ordem do HTML
- Comentários para separar blocos: `/* Header */`

## JavaScript
- Variáveis e funções em camelCase: `nomeCurso`, `adicionarDisciplina`
- Usar `const` por padrão, `let` só quando o valor vai mudar
- Comentários em português explicando a lógica
- Sempre usar `addEventListener` ao invés de `onclick` no HTML

## Git
- Commits no padrão Conventional Commits: `feat:`, `fix:`, `docs:`
- Mensagens de commit em português
- Uma funcionalidade por branch
- Nunca commitar direto na branch `main`