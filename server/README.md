<h1 align="center" style="font-weight: bold;">ToDo 💻</h1>

<p align="center">
    <a href="#tech">Tecnologias</a> • 
    <a href="#started">Introdução</a> • 
    <a href="#routes">API Endpoints</a> •
    <a href="#author">Autor</a> •
</p>

<p align="center">
    <b>Projeto simple de gerenciamento de tarefas.</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- Node
- Typescript
- Express
- Prisma

<h2 id="started">🚀 Introdução</h2>

A principio esse projeto é para o teste técnico da Jack Expert.

<h3>Pré-requisitos</h3>

Aqui você lista todos os pré-requisitos necessários para execução do seu projeto. Por exemplo:

- [NodeJS](https://nodejs.org/pt)
- [Git 2](https://git-scm.com)

<h3>Clonando</h3>

Como fazer para clonar o projeto

```bash
git clone https://github.com/DFelipe1/ToDo
```

<h3>Configurar variaves ambientes</h2>

Crie um arquivo `.env` e adicione o codigo abaixo para informar o caminho para o arquivo do banco de dados.

```yaml
DATABASE_URL="file:./dev.db"
TOKEN_KEY="digite qualquer coisa"
```

<h3>Iniciando</h3>

Como iniciar o projeto

```bash
cd ToDo/server
npm intall
npm run dev
```

para consultar as informações do banco de dados você pode ver pelo `prisma studio`.

```bash
npx prisma studio
```


<h2 id="routes">📍 API Endpoints</h2>

​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /user </kbd>     | criar um usuário, consulte [request details](#post-create-user)
| <kbd>DELETE /user/:id </kbd>     | deletar um usuário, consulte: [response details](#delete-user)
| <kbd>POST /login</kbd>     | autenticar o usuário na API, consulte [request details](#post-auth-detail)
| <kbd>POST /validate</kbd>     | validar token, consulte [request details](#post-validate-token)
| <kbd>POST /task</kbd>     | criar nova tarefa, consulte [request details](#post-create-task)
| <kbd>GET /task</kbd>     | pega todas as tarefas do usuário logado, consulte [request details](#get-all-tasks)
| <kbd>PUT /task/:id</kbd>     | alterar informações da tarefa desejada, consulte [request details](#put-update-task)
| <kbd>PATCH  /task/:id</kbd>     | faz o toggle co check, consulte [request details](#patch-toggle-task)
| <kbd>DELETE  /task/:id</kbd>     | deleta tarefa, consulte [request details](#delete-task)

todas as rotas então sendo restadas no arquivo <a href="./route.http">route.http</a>, mas precisará da extenção [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) instalada no seu VScode.

<h3 id="post-create-user">POST /user</h3>

**REQUEST**
Certifique que esses dados estão salvos no servidor para a requisição funcionar como esperado.

```json
{
  "email": "email@gmail.com",
  "password": "12345678"
}
```

<h3 id="delete-user">DELETE /user/:id</h3>

**RESPONSE**
```json
{ 
  "message": "usuário deletado com sucesso"
}
```

<h3 id="get-auth-detail">POST /login</h3>

**RESPONSE**
```json
{
    "email": "our-email@gmail.com",
    "password": "12345678"
}
```

<h3 id="post-auth-detail">POST /authenticate</h3>

**REQUEST**
```json
{
  "username": "fernandakipper",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhYmU0M2UxLTJlZjYtNDQ0Ni04M2IwLWVmOWI1MmM0YTFkNiIsIm5hbWUiOiJmZWxpcGUiLCJlbWFpbCI6ImZlbGlwZS5kZUBnbWFpbC5jb20iLCJpYXQiOjE3MjUxMjg1MjAsImV4cCI6MTcyNTE1MDEyMH0.U0q6YDB6QzrFpCDrdEVm2YvfZz_QM6o2ZDzzfaTpshw"
}
```

<h3 id="post-validate-token">POST /validate</h3>

**REQUEST**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhYmU0M2UxLTJlZjYtNDQ0Ni04M2IwLWVmOWI1MmM0YTFkNiIsIm5hbWUiOiJmZWxpcGUiLCJlbWFpbCI6ImZlbGlwZS5kZUBnbWFpbC5jb20iLCJpYXQiOjE3MjUxMjg1MjAsImV4cCI6MTcyNTE1MDEyMH0.U0q6YDB6QzrFpCDrdEVm2YvfZz_QM6o2ZDzzfaTpshw"
}
```

**RESPONSE**
```json
{
  "id": "1abe43e1-2ef6-4446-83b0",
  "name": "felipe",
  "email": "felipe.de@gmail.com",
  "iat": 1725128520,
  "exp": 1725150120
}
```

<h3 id="post-create-task">POST /task</h3>

**HEADERS**
```
Authorization: Bearer TOKEN
```

**REQUEST**
```json
{
    "title": "Nadar na piscina",
    "description": "nadar para relaxar e treinar"
}
```


**RESPONSE**
```json
{
  "id": "0396e4a3-0d3b-44cf-829c",
  "title": "Nadar na piscina",
  "description": "nadar para relaxar e treinar para o triato",
  "isChecked": false,
  "created_at": "2024-08-31T21:13:31.470Z",
  "authorId": "1abe43e1-2ef6-4446-83b0"
}
```

<h3 id="get-all-tasks">GET /task</h3>

**HEADERS**
```
Authorization: Bearer TOKEN
```

**RESPONSE**
```json 
[
  {
    "id": "0396e4a3-0d3b-44cf-829c",
    "title": "Nadar na piscina",
    "description": "nadar para relaxar e treinar para o triato",
    "isChecked": false,
    "created_at": "2024-08-31T21:13:31.470Z",
    "authorId": "1abe43e1-2ef6-4446-83b0"
  }
]
```

<h3 id="put-update-task">PUT /task/:id</h3>

**HEADERS**
```
Authorization: Bearer TOKEN
```

**REQUEST**
```json
{
    "title": "Integrar o back no front",
    "description": "é de estrema necessidade fazer isso"
}

**RESPONSE**
```json 
{
  "id": "311dd030-3c03-4465-92ab-af384dd05f08",
  "title": "Integrar o back no front",
  "description": "é de estrema necessidade fazer isso",
  "isChecked": true,
  "created_at": "2024-08-31T19:10:52.204Z",
  "authorId": "1abe43e1-2ef6-4446-83b0-ef9b52c4a1d6"
}
```

<h3 id="patch-toggle-task">PATCH  /task/:id</h3>

**HEADERS**
```
Authorization: Bearer TOKEN
```

**RESPONSE**
```json 
{
  "id": "311dd030-3c03-4465-92ab-af384dd05f08",
  "title": "Integrar o back no front",
  "description": "é de estrema necessidade fazer isso",
  "isChecked": true,
  "created_at": "2024-08-31T19:10:52.204Z",
  "authorId": "1abe43e1-2ef6-4446-83b0-ef9b52c4a1d6"
}
```

<h3 id="delete-task">DELETE  /task/:id</h3>

**HEADERS**
```
Authorization: Bearer TOKEN
```

**RESPONSE**
```
 deletado com sucesso
```

<h2 id="author"> 💻 Author </h2>

<img style="border-radius: 50%;" src="https://github.com/DFelipe1.png" width="100px;" alt="Rodrigo Santos"/>

By David Felipe 👋🏽 Find me:


[![Linkedin Badge](https://img.shields.io/badge/-DavidFelipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lipedev/)]