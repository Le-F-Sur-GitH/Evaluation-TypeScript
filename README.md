Projet Zoo Full-Stack (NestJS + Angular)

Ce projet est une application complète de gestion de zoo avec un backend en NestJS et un frontend en Angular, sécurisée par Auth0.

Prérequis

Avant de commencer, assurez-vous d'avoir installé :

    Node.js (version 18 ou supérieure)

    Docker et Docker Desktop

    Git

Installation

    Cloner le projet : https://github.com/Le-F-Sur-GitH/Evaluation-TypeScript
    Bash

git clone VOTRE_LIEN_DE_DEPOT_GIT
cd zoo-projet

Installer les dépendances du Backend :
Bash

cd api
npm install

Installer les dépendances du Frontend :
Bash

    cd ../frontend
    npm install

Configuration

1. Base de données & Auth0 (Backend)

    À la racine du dossier api, créez un fichier .env en copiant le modèle .env.example (s'il existe) ou en utilisant le contenu ci-dessous.

    Remplacez les valeurs pour AUTH0_ISSUER_BASE_URL et AUTH0_AUDIENCE par vos informations Auth0.

    Fichier : api/.env
    Extrait de code

    # Configuration de la base de données
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=myuser
    DB_PASSWORD=mypassword
    DB_DATABASE=zoo

    # Configuration Auth0
    AUTH0_ISSUER_BASE_URL=https://VOTRE_DOMAINE.auth0.com/
    AUTH0_AUDIENCE=http://localhost:3000

2. Auth0 (Frontend)

    Ouvrez le fichier frontend/src/main.ts.

    Remplacez les placeholders VOTRE_DOMAINE_AUTH0 et VOTRE_CLIENT_ID_AUTH0 par vos informations.

    Fichier : frontend/src/main.ts
    TypeScript

    // ...
    provideAuth0({
      domain: 'VOTRE_DOMAINE_AUTH0',
      clientId: 'VOTRE_CLIENT_ID_AUTH0',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200',
        audience: 'http://localhost:3000',
        scope: 'openid profile email'
      },
      httpInterceptor: {
        allowedList: [`http://localhost:3000/*`],
      },
    }),
    // ...

Lancement de l'application

Vous aurez besoin de 3 terminaux ouverts pour lancer toute l'application.

    Terminal 1 : Démarrer la base de données

        Placez-vous à la racine du projet (zoo-projet).

        Lancez le conteneur Docker :
    Bash

docker run --name zoo-db -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=zoo -p 5432:5432 -d postgres:16

(Si le conteneur existe déjà, utilisez docker start zoo-db)

Terminal 2 : Démarrer le Backend (API)

    Placez-vous dans le dossier api.

    Lancez le serveur de développement :

Bash

npm run start:dev

    L'API est maintenant accessible sur http://localhost:3000.

Terminal 3 : Démarrer le Frontend

    Placez-vous dans le dossier frontend.

    Lancez le serveur de développement :

Bash

    ng serve

        L'application est maintenant accessible sur http://localhost:4200.

Tester l'API avec Swagger

    Une fois le backend démarré, la documentation Swagger est accessible à l'adresse :

        http://localhost:3000/api

    Pour tester les routes protégées (celles avec un cadenas) :

        Connectez-vous sur l'application frontend (http://localhost:4200).

        Utilisez l'outil "Tester l'API" pour afficher votre Access Token dans la console du navigateur.

        Copiez ce token et collez-le dans Swagger en cliquant sur le bouton Authorize.