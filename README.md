# Eventify — Frontend

Interface web de l'application Eventify, une plateforme de gestion et découverte d'événements. Développée avec React 19, React Router et Tailwind CSS, bundlée avec Vite.

---

## Stack

- React 19
- React Router DOM 7
- Tailwind CSS 3
- Vite 6
- Font Awesome / Heroicons
- Prettier + ESLint

---

## Prérequis

- Node.js 18+
- npm 9+

---

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-username/eventify-frontend.git
cd eventify-frontend
```

### 2. Installer les dépendances

```bash
npm install
```

Cela installe React, React Router, Tailwind CSS, Vite et toutes les autres dépendances listées dans `package.json`.

### 3. Générer le CSS Tailwind

Tailwind fonctionne en scannant les fichiers source pour générer un fichier CSS optimisé. Lance cette commande dans un terminal séparé pour qu'elle reste active pendant le développement :

```bash
npm run build:css
```

Cette commande surveille les fichiers dans `src/` et génère `dist/output.css` automatiquement à chaque modification.

> Le fichier `dist/output.css` est référencé directement dans `index.html`. Sans cette étape, les styles Tailwind ne s'appliqueront pas.

---

## Lancer le projet

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (ou une autre adresse affichée dans le terminal si le port est occupé).

---

## Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

---

## Structure du projet

```
src/
├── pages/
│   ├── auth/         # Login, Register
│   ├── user/         # Profil, informations du compte, mot de passe
│   └── events/       # Création, recherche, détail et favoris d'événements
├── components/       # Composants réutilisables (Header, Footer, billetterie...)
├── styles/
│   └── index.css     # Directives Tailwind (@tailwind base/components/utilities)
├── App.jsx           # Routeur principal
└── main.jsx          # Point d'entrée React
```
