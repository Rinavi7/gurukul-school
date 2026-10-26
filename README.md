# Gurukul School Website

Public website for Gurukul School, built on the **ERPN stack**: Express, React, PostgreSQL and Node.js.

> Personal learning project. Not affiliated with any employer: no shared repos, services, cloud accounts or credentials.

## Structure

An npm workspaces monorepo: one `npm install` at the root installs both apps.

| Path                       | What it is                                            |
| -------------------------- | ----------------------------------------------------- |
| `design/gurukul-home.html` | Approved design. Single source of truth for the look. |
| `web/`                     | React 18 + Vite + React Router v6, CSS Modules        |
| `api/`                     | Node.js + Express + Sequelize REST API on PostgreSQL  |
| `docker-compose.yml`       | Local dev stack: postgres, api, web                   |
| `eslint.config.js`         | Shared lint rules for both apps                       |
| `.prettierrc.json`         | Shared formatting rules for both apps                 |

## Prerequisites

- Node.js 24 LTS (`nvm use` reads `.nvmrc`)
- npm 10+
- Docker Desktop (needed from step 7)

## Getting started

```bash
nvm use
npm install
npm run lint
npm run format:check
```

## Run locally with Docker

_Added in step 7._

## Run locally without Docker

_Added in steps 2 and 6._

## Environment variables

Each app has a committed `.env.example`. Copy it to `.env` and fill in values. Never commit a real `.env`.

_Full variable list added in steps 2 and 6._

## API

_Endpoints and curl examples added in step 8._

## Deployment

_Added in step 11: API + Postgres on Render/Railway, web on Vercel/Netlify, SPA rewrites._

## Build progress

1. Root scaffold
2. Web scaffold
3. Navbar, Footer, MottoBand, Hero with OrbitGraphic
4. Remaining Home sections
5. Inner pages and 404
6. API scaffold
7. Docker Compose, Sequelize, migrations, seeders
8. Notices, events and enquiries endpoints
9. Connect frontend to API
10. Responsive and accessibility pass
11. Deployment prep
