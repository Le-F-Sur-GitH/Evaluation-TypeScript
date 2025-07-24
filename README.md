<p align="center">
  <img src="https://img.shields.io/badge/Zoo-Full%20Stack-brightgreen" alt="Zoo Full-Stack" />
  <img src="https://img.shields.io/badge/NestJS-API-orange" alt="NestJS" />
  <img src="https://img.shields.io/badge/Angular-Frontend-red" alt="Angular" />
</p>

# 🦁 Zoo Full-Stack

> **Objectif** : Déployer localement l’API NestJS et l’app Angular pour une **évaluation**.

---

## 🚀 Prérequis

* **Node.js** (v18+) & **npm**
* **Docker** / **Docker Desktop**
* **Git**

---

## 📥 1. Installation

```bash
# 1. Cloner le projet
git clone https://github.com/Le-F-Sur-GitH/Evaluation-TypeScript.git
cd Evaluation-TypeScript

# 2. Dépendances Backend
cd zoo-backend && npm install

# 3. Dépendances Frontend
cd ../zoo-frontend && npm install
```

---

## ⚙️ 2. Configuration

### 🔧 Backend

1. Copier l’exemple d’env :

   ```bash
   cd zoo-backend
   cp .env.example .env
   ```
2. Modifier `.env` :

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=myuser
   DB_PASSWORD=mypassword
   DB_DATABASE=zoo

   AUTH0_ISSUER_BASE_URL=https://<VOTRE_DOMAINE>.auth0.com/
   AUTH0_AUDIENCE=<VOTRE_IDENTIFIER_API>
   ```

### 🌐 Frontend

* Ouvrir `zoo-frontend/src/main.ts` et ajuster :

  ```ts
  provideAuth0({
    domain: '<VOTRE_DOMAINE>.auth0.com',
    clientId: '<VOTRE_CLIENT_ID>',
    authorizationParams: {
      redirect_uri: 'http://localhost:4200',
      audience: '<VOTRE_IDENTIFIER_API>',
      scope: 'openid profile email'
    },
    httpInterceptor: {
      allowedList: ['http://localhost:3000/*'],
    },
  });
  ```

---

## ▶️ 3. Lancement

### Terminal 1 : 🐘 PostgreSQL

```bash
docker run --name zoo-db \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypassword \
  -e POSTGRES_DB=zoo \
  -p 5432:5432 -d postgres:16
# ou : docker start zoo-db
```

### Terminal 2 : 🚏 API (NestJS)

```bash
cd Evaluation-TypeScript/zoo-backend
npm run start:dev
```

🔗 [http://localhost:3000](http://localhost:3000)

### Terminal 3 : 🦓 Frontend (Angular)

```bash
cd Evaluation-TypeScript/zoo-frontend
ng serve
```

🔗 [http://localhost:4200](http://localhost:4200)

---

## 🔍 4. Tester avec Swagger

1. Ouvrir 👉 [http://localhost:3000/api](http://localhost:3000/api)
2. Pour les endpoints protégés :

   * Se connecter via le frontend
   * Copier l’Access Token (Console devtools)
   * Cliquer **Authorize** et coller le token

---

> *Voilà ! Votre application zoo est prête pour l’évaluation.* 🎉
