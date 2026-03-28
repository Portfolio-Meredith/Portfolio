# Portfolio — Mérédith Mardirossian

Site vitrine one-page · Personal branding & Communication digitale

## Stack

- **Next.js 15** — App Router, Turbopack
- **Tailwind CSS v4** — design system via `@theme` dans `globals.css`
- **Sanity v3** — CMS headless, Studio embarqué sur `/studio`
- **Framer Motion v11** — animations (import depuis `motion/react`)
- **Lucide React** — icônes
- **Vercel** — déploiement

## Développement

```bash
npm install
npm run dev
```

- App : [http://localhost:3000](http://localhost:3000)
- Studio Sanity : [http://localhost:3000/studio](http://localhost:3000/studio)

## Variables d'environnement

Créer un fichier `.env.local` à la racine :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=ton_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=ton_token_read_only
```

Le token read-only se crée sur [sanity.io/manage](https://sanity.io/manage) → API → Tokens → rôle **Viewer**.

## Peupler le contenu initial

Pour importer le contenu de démo dans Sanity, créer d'abord un token **Editor** sur sanity.io/manage, l'ajouter dans `.env.local` sous `SANITY_API_WRITE_TOKEN`, puis :

```bash
node --env-file=.env.local scripts/seed.mjs
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          — metadata, font Inter, JSON-LD
│   ├── page.tsx            — fetch Sanity + assemblage sections
│   ├── sitemap.ts
│   ├── robots.ts
│   └── studio/[[...tool]]/ — Sanity Studio
├── components/
│   ├── sections/           — Hero, About, WorkList, EducationList, Projects, Skills, Contact
│   ├── ui/                 — CvItem, ProjectCard, Tag, Btn, SectionPill
│   └── Footer.tsx
└── sanity/
    ├── schemaTypes/        — settings, experience, education, project, skill
    └── lib/                — client.ts, queries.ts
```

## Déploiement

```bash
vercel
```

Ajouter les variables d'environnement dans le dashboard Vercel, et les origines CORS sur sanity.io/manage.
