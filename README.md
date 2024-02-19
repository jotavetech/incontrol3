# inControl 🚀

inControl é uma aplicação de controle financeiro, criada usando uma combinação de ótimas tecnologias como: Typescript, NextJS, Prisma, PostgreSQL, TailwindCSS, shadcn-ui & Clerk.

![inControl Home] (/public/images/incontrol_readme.png)

## Para que serve? 🤔

O _inControl_ foi desenvolvido com objetivo de simplificar o controle dos seus gastos financeiros. Com ele você pode registrar todas as suas entradas e gastos, pode acompanhar o saldo disponível no mês atual e visualizar onde está concentrando suas entradas e gastos, por meio do nosso sistema de categorias.

### Funcionalidades 📚

- Adicionar registros de entradas e saídas
- Editar e deletar registros
- Categorizar registros
- Visualizar receitas e despesas gerais ou do mês atual
- Filtrar e ordernar lista de receitas e despesas
- Ver um gráfico mostrando em que categorias estão focados seus registros

### Principais tecnologias usadas ⚙️

- Typescript
- NextJS
- Prisma
- PostgreSQL
- Clerk
- TailwindCSS
- shadcn-ui
- Zod

### Requisitos 🪛

- Você precisar ter o [NodeJs](https://nodejs.org/en/) instalado localmente.
- Você precisa configurar uma base de dados PostgreSQL, aqui foi usado a db grátis do [ElephantSQL](https://www.elephantsql.com/) e configurar uma aplicação usando [Clerk](https://clerk.com/) para a autenticação, seguindo o exemplo do código abaixo:

_/.env_

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<key publica do clerk>
CLERK_SECRET_KEY=<key secreta do clerk>

DATABASE_URL=<url da base de dados>

# NÃO MEXER:
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/home
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/home

```

### Fazer um clone e rodar localmente 💽

Para clonar o projeto escreva no console:

```terminal
$ git clone https://github.com/jotavetech/incontrol3.git
```

Se você fazer um clone com sucesso, agora entre no diretório que foi criado _incontrol3_ e digite no console:

```terminal
# usando yarn:

$ yarn install # pra instalar todas as dependências
$ yarn dev # pra rodar o projeto em modo desenvolvedor

# usando npm:

$ npm install
$ npm run dev
```

O _inControl_ é um projeto open-source e se você quiser, pode contribuir criando um [Fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) e enviando um [Pull Request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) com suas alterações 😊.
