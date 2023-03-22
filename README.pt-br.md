_Leia isto em outros idiomas:_ [English](README.md)

<h1 align="center">Imagem Uploader</h1>

<div align="center">
   Solução para um desafio do <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://image-uploader-devchalenger-io.vercel.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/eduardosantanna/image-uploader-devchalenger-io">
      Solução
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Desafio 
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Visão geral](#visão-geral)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Contato](#contato)

<!-- OVERVIEW -->

## Visão geral

<img src="https://i.imgur.com/BUhZBtm.png" width="49%"/>
<img src="https://i.imgur.com/ArqRwX5.png" width="49%"/>
<img src="https://i.imgur.com/WMslAyR.png" width="49%"/>

### Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Nest.js](https://nestjs.com/)
- [Firebase](https://firebase.google.com/)

## Funcionalidades

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

In this application, the user can upload an image and retrieve its URL to be used later.

## Como rodar o projeto

<!-- Example: -->

Para clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com [npm](http://npmjs.com)) instalado no seu computador.

Também será necessário que você tenha um projeto firebase e que tenha sua chave baixada em seu computador, para que ela possa ser adicionada ao arquivo .env do diretório back-end. Exemplo de chave:

```bash
{
  "type": "*",
  "project_id": "*",
  "private_key_id": "*",
  "private_key": "*",
  "client_email": "*",
  "client_id": "*",
  "auth_uri": "*",
  "token_uri": "*",
  "auth_provider_x509_cert_url": "*",
  "client_x509_cert_url": "*"
}
```

Após obter a chave firebase, basta adicioná-la ao .env do repositório back-end e seguir os passos abaixo:

```bash
#Front-end

# Entering the project directory
$ cd image-uploader-devchalenger-io-frontend

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

```bash
#Back-end

# Entering the project directory
$ cd image-uploader-devchalenger-io-backend

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Contato

- GitHub [@eduardosantanna](https://github.com/eduardosantanna)
- Linkedin [@Luis Eduardo](https://www.linkedin.com/in/eduardosanntana)
