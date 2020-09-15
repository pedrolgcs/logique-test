# Encurtador de URL

Encurtador simples de URL

## Descrição

Projeto desenvolvido para processo seletivo da logique

## Começando

## Dependências

- Postgres (recomendo utilizar Docker);
- Node
- npm ou yarn

## Backend

- Execute o comando **yarn** ou **npm**, então abra o arquivo **ormconfig.json** e atualize com as credenciais de acesso do seu BD.

```json
  "username": "postgres",
  "password": "docker",
  "database": "logique",
```

Criando nossa base de dados

```bash
  yarn typeorm migration:run
```

### Executando

```
yarn dev:server
```

### rotas

---

##### Index

- ( / ) - GET - Index API

---

##### Session

- ( /sessions ) - POST - Realiza login
  - BODY
    - email
    - password

---

##### Users

- ( /users ) - POST - Cadastra um novo usuário
  - BODY
    - email
    - password

---

##### Favorites

- ( /favorites ) - GET - Lista todos as url do usuário logado

  - Middleware
    - AUTH (token)
  - BODY
    - email
    - password

- ( /favorites ) - POST - Cria uma nova url

  - Middleware
    - AUTH (token)
  - BODY
    - title
    - url

- ( /favorites ) - DELETE - Deleta uma URL
  - Middleware
    - AUTH (token)
  - PARAMS
    - favorite_id

---

## web

Para executar o projeto web basta apenas abrir a pasta web e executar:

```bash
  yarn
```

```bash
  yarn start
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
