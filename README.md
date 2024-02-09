# Greenfield Next.js application

Test assessment showcasing a Next.js application with mock data and Tailwind CSS for Greenfield.

## Screencast

You can find deployed version at:

## Get Started

### Prerequisites

1. Node version: v16.20.1 and higher
2. Docker or yarn for running the application

### Yarn

1. Install dependencies: `yarn`.
2. Run `yarn dev` and visit <https://localhost:3000>.

### Docker

1. To run the project in development mode use: `docker compose --file "docker-compose.yml" up --build -d`
2. To run the project in production mode use: `docker compose --file "docker-compose.prod.yml" up --build -d`

## Linting

- `yarn lint` - checks for eslint, prettier, and TS errors

## CI/CD integration

Automatically runs linter checks with github-pipelines on push to the branch.
