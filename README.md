# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Nuxt 4 tips

## Squelette initial

| Élément            | Rôle                                                |
| :----------------- | :-------------------------------------------------- |
| app.vue            | Squelette global de ton site (header, footer, etc.) |
| \<NuxtPage />      | Emplacement où la page active est rendue            |
| app/pages/         | Contient les vraies pages de ton site               |
| NuxtRouteAnnouncer | Accessibilité (peut être gardé)                     |

Résultat attendu :
• / → affiche pages/index.vue dans le <main> de ton app.vue
• /about → affiche pages/about.vue au même endroit
• ton layout global reste visible partout

## Routing

| Élément     | Où le mettre    | Rôle                            |
| :---------- | :-------------- | :------------------------------ |
| app.vue     | app/            | Root de l'app                   |
| pages/      | app/pages/      | Gère le routing automatiquement |
| layouts/    | app/layouts/    | Layout globaux                  |
| components/ | app/components/ | Composants réutilisables        |

## Styles

L'organisaiton des styles globaux se trouve dans `app/assets/scss/`

- `_variables.scss` : contient les variables globales (couleurs, espacements, tailles, etc.).
- `_typography.scss` : contient les règles de typographie globales.
- `global.scss` : importe tous les fichiers partiels et définit le style root du projet.
