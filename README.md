## Objetivo

Construir um TODO List baseado nos aprendizados do curso

## Como começar

Dar um fork no projeto, clonar o repositório em sua máquina local e criar um branch novo para o seu código.

## Regras de negócio

• Listagem de tarefas
• Busca de tarefa
• Adicionar tarefa
• Remover tarefa
• Alterar tarefa para concluído (alterar cor da fonte)

## Referências

• Json de referencia para consumo

const data = [
{
"id": 1,
"title": "Fazer almoço",
"concluded": false
},
{
"id": 2,
"title": "Estudar",
"concluded": false
},
{
"id": 3,
"title": "Lavar louça",
"concluded": false
}
]

## Observações

1. Design de livre escolha.

## Requisitos Técnicos para a entrega do teste

• O projeto deve ter uma documentação em readme ensinando a:

1. instalar o projeto na máquina (engines, versão de node, qual gerenciador de pacote usar)
2. instalar as dependências do projeto
3. rodar o ambiente de desenvolvimento
4. rodar a build de deploy da aplicação.

• Pode utilizar tanto o Axios quanto ou Fetch para requisições.

• Hospedar o projeto em um servidor (Heroku, Vercel, Netlify)

## Requisitos

Clonar o projeto presente neste repositório
https://github.com/EstudioVnW/desafio-todo
Seguir todas as regras apresentadas no README dele porém as seguintes alterações serão feitas:

- O projeto será obrigatoriamente feito em typescript
- A aplicação deve ter completamente componentizada, nenhum código deve aparecer no App que não seja a chamada de componentes
- A estilização deve ser feita completamente em Sass utilizando do padrão BEM
- Utilização de IA para escrever o código é estritamente proibida. Será apenas permitido utilizar de IA para aprendizado e exemplos.
- As interfaces, componentes, enums, classes, types, etc. Devem todos seguir o padrão Orq, ou seja, todas as interfaces começam com IOrq, classes com orq-componente, etc.
  Novos aprendizados:
- Os dados iniciais devem ser passados em um contexto (useContext) e na primeira renderização e ao adicionar ou remover items, tudo deve ser passado no localStorage para garantir que as alterações sejam mantidas após atualização da página

## Diferenciais técnicos

• Utilização de typescript

Boa sorte!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
