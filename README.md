# API Voiture (NestJS + Swagger + .env)

Module **Voiture** : `nom`, `couleur`, `nbrChevaux` (stockage en mémoire).

## Lancer le projet

```bash
npm install
npm run start:dev
```

- API : http://localhost:3000
- Swagger : http://localhost:3000/api

Le port est défini dans `.env`.

## Les 3 API

| Méthode | Route          | Description             |
|---------|----------------|-------------------------|
| POST    | `/voiture`     | Ajouter une voiture     |
| GET     | `/voiture`     | Toutes les voitures     |
| GET     | `/voiture/:id` | Une voiture par son id  |

Exemple de body pour POST :

```json
{ "nom": "Golf 7", "couleur": "Noir", "nbrChevaux": 7 }
```

## Push sur GitHub

Le dépôt contient déjà un commit par étape :

1. Création de projet
2. Implémentation Swagger
3. Implémentation .env
4. Création module voiture (Ajouter, All, By Id)

```bash
git remote add origin https://github.com/<ton-user>/voiture-api.git
git push -u origin main
```
