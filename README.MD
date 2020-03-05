# desafio VoltBras

Esta aplicação em GraphQl foi proposta pela VoltBras, com objetivo de buscar os planetas com massa maior que 25 [M_jup] da API da Arcsecond, retornando nome, massa e se tem estação. Também deve ser capaz de criar uma estação em um planeta.

### Tecnologias usadas

-   Node.js
-   Apollo GraphQL Server
-   Express
-   Mongoose

### Como instalar

Clone o repositorio do projeto:

```
$ git clone https://github.com/CarlosValdiero/Desafio_VoltBras.git
```

Instale as dependências:

```
$ yarn install ou npm install
```

Crie um arquivo .env e adicione a url do mongoDB, no meu caso estou usando o banco no MongoDB Atlas:

```
DATABASE_CONNECTION_STRING =
```

### Como testar

Atráves de um terminal execute o comando para iniciar o servidor

```
yarn start ou npm start
```

Acesse a página playground do servidor atráves da url http://localhost:4000/graphql.

##### Query

Para buscar os planetas com gravidade alta execute a query suitablePlanets.

```query suitablePlanets
{
    suitablePlanets {
        name
        mass
        hasStation
    }
}
```

##### Mutation

Para criar uma estação em um planeta, passe o nome do planeta como parâmetro na mutation installStation.

```mutation installStation
mutation installStation {
  installStation(name: "") {
    name
  }
}
```

## Requisitos

-   [x] Crie um servidor em Node.js usando [Apollo GraphQL Server](https://www.apollographql.com/docs/apollo-server/)
-   [x] Crie o schema GraphQL com uma query `suitablePlanets`, que retorna os dados dos planetas com gravidade alta
-   [x] Crie uma mutation `installStation`, que dado um planeta, instala uma estação de carregamento no planeta(é sugerido criar uma tabela em algum DB que guarde a informação de aonde estão instaladas as estações)
-   [x] Use um [RESTDataSource](https://www.apollographql.com/docs/apollo-server/data/data-sources/) para pegar os dados da [Arcsecond]
-   [x] Deixe aberto em algum repositório open-source(gitlab, github, etc...)
-   [x] Integre o servidor com algum banco de dados(para marcar onde as estações foram instaladas)
-   [x] Documente o seu projeto, e explique como rodar ele

## Extras

-   [ ] Adicione testes usando [Jest] ou qualquer outro framework para testes
-   [ ] Usar Typescript
-   [ ] Coloque um docker-compose, que simplifique rodar o seu servidor e o DB
-   [ ] Usamos [prisma](prisma.io) mas sinta-se livre para usar qualquer ORM
-   [x] Como o dado da [Arcsecond] vem páginado, tente pegar mais de uma página(e.g. 10 páginas)
