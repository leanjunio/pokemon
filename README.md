# AgencyAnalytics Frontend React Challenge

> This project recreates a pokedex application that allows a user to search for and select a pokemon so that they can get more details about it.

## Prerequisites

### Node / NPM

This project requires Node.js (version 20 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/).

Please run the following to ensure you have both

```sh
$ npm -v && node -v
10.9.2
v22.14.0
```

### Docker

This project requires docker compose locally. [Install Docker Desktop](https://docs.docker.com/compose/install/)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Clone the repo locally

```sh
$ git clone https://github.com/leanjunio/pokemon.git
$ cd pokemon
```

Run the application through a fresh build

```sh
$ docker compose -f docker-compose.dev.yml up --build
```

Once you see the following output, you can go to [http://localhost:5173](http://localhost:5173)

```sh
Attaching to web-1
web-1  |
web-1  | > react-typescript@1.0.0 dev
web-1  | > vite
web-1  |
web-1  |
web-1  |   VITE v3.0.4  ready in 207 ms
web-1  |
web-1  |   ➜  Local:   http://localhost:5173/
web-1  |   ➜  Network: http://172.19.0.2:5173/
```
