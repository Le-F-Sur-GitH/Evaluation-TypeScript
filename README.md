Projet d'évaluation : Zoo Full-Stack (NestJS + Angular)

Ce document fournit les instructions nécessaires pour installer, configurer et lancer l'application complète de gestion de zoo.

Prérequis

    Node.js (v18 ou supérieure)

    Docker et Docker Desktop

    Git

1. Installation

Clonez le dépôt et installez les dépendances pour le backend et le frontend.
Bash

# 1. Cloner le projet
git clone https://github.com/Le-F-Sur-GitH/Evaluation-TypeScript.git
cd Evaluation-TypeScript

# 2. Installer les dépendances du Backend
cd zoo-backend
npm install

# 3. Installer les dépendances du Frontend
cd ../zoo-frontend
npm install

2. Configuration d'Auth0

Ce projet utilise Auth0 pour l'authentification. Une configuration minimale est requise.

Backend (zoo-backend/.env)

À la racine du dossier zoo-backend, créez un fichier .env et remplissez-le avec vos informations Auth0 :
Extrait de code

# Configuration de la base de données
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=myuser
DB_PASSWORD=mypassword
DB_DATABASE=zoo

# Configuration Auth0
AUTH0_ISSUER_BASE_URL=https://[VOTRE_DOMAINE].auth0.com/
AUTH0_AUDIENCE=[VOTRE_IDENTIFIER_API]

Frontend (zoo-frontend/src/main.ts)

Ouvrez le fichier zoo-frontend/src/main.ts et mettez à jour la configuration provideAuth0 :
TypeScript

// ...
provideAuth0({
  domain: '[VOTRE_DOMAINE].auth0.com',
  clientId: '[VOTRE_CLIENT_ID]',
  authorizationParams: {
    redirect_uri: 'http://localhost:4200',
    audience: '[VOTRE_IDENTIFIER_API]',
    scope: 'openid profile email'
  },
  httpInterceptor: {
    allowedList: [`http://localhost:3000/*`],
  },
}),
// ...

3. Lancement de l'application

Ouvrez 3 terminaux distincts à la racine du projet.

Terminal 1 : Base de données (Docker)

Bash

# Démarre le conteneur PostgreSQL
docker run --name zoo-db -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=zoo -p 5432:5432 -d postgres:16

# Si le conteneur existe déjà, utilisez plutôt :
docker start zoo-db

Terminal 2 : Backend (API NestJS)

Bash

cd zoo-backend
npm run start:dev

L'API est maintenant disponible sur http://localhost:3000.

Terminal 3 : Frontend (Angular)

Bash

cd zoo-frontend
ng serve

L'application est maintenant accessible sur http://localhost:4200.