# CLAUDE.md — Portfolio Mérédith Mardirossian
> Ce fichier est lu automatiquement par Claude Code à chaque session.
> Il constitue le contexte de référence pour l'ensemble du projet.

---

## 🎯 Contexte du projet

Tu développes le portfolio personnel de **Mérédith Mardirossian**, étudiante en communication à l'EFAP Lyon. C'est un site vitrine one-page destiné à décrocher un stage ou une alternance. Le client doit pouvoir mettre à jour son contenu seul via Sanity Studio sur `/studio`.

**Stack validée — ne pas dévier :**
- Next.js 15 (App Router, Turbopack)
- Tailwind CSS v4 (config via `@theme` dans globals.css, pas de tailwind.config.ts)
- Sanity v3 + next-sanity v9+
- Framer Motion v11+ (import depuis `motion/react`, pas `framer-motion`)
- Lucide React (icônes)
- Font : Inter via `next/font/google`
- Deploy : Vercel

**Référence visuelle :** `meredith-portfolio-v3.html` dans le dossier starter. C'est le mockup validé. Ne pas s'en écarter sans instruction explicite.
**Plan de départ :** Tu trouveras les infos pour bien start et mener le projet dans le dossier starter.

---

## 📐 Design system — valeurs figées

Ces valeurs sont validées et ne doivent pas être modifiées sans confirmation explicite.

### Couleurs
```
--color-nuit:    #3A395E   → icônes, accents forts
--color-gris:    #6E6D8F   → textes secondaires
--color-lavande: #D5D5E7   → avatar bg, badges froids
--color-orange:  #C85E0C   → "En cours", hovers, accents
--color-fg:      #0a0a0a   → texte principal
--color-muted:   #6b7280   → texte secondaire (rôles, descriptions)
--color-subtle:  #9ca3af   → méta, dates
--color-border:  #e5e7eb   → toutes les bordures
--color-bg:      #ffffff   → fond global
```

### Typographie
```
Font stack : Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, ...

hero h1       → 2.75rem / 800 / tracking -0.04em / leading 1.05
section h2    → 2.5rem  / 800 / tracking -0.04em / leading 1.1
section-title → 1.05rem / 700 / tracking -0.02em
item-name     → 0.9rem  / 600 / tracking -0.02em
body/cv-text  → 0.875rem / 400 / leading 1.8
project-title → 0.875rem / 600 / tracking -0.02em
tags / pills  → 0.65–0.7rem / 500
dates / meta  → 0.72–0.78rem / 400
```

### Layout
```
Colonne centrale : max-width 620px, margin auto
Zone CV          : padding 3rem 1.5rem, left-aligned
Zones centrées   : padding 5rem 1.5rem, text-center
Séparateur       : <hr> border-top 1px solid #e5e7eb
```

---

## 🚨 Plans de vigilance

### 1. SÉCURITÉ

**Variables d'environnement**
- Ne jamais hardcoder `NEXT_PUBLIC_SANITY_PROJECT_ID`, `SANITY_API_READ_TOKEN` ou toute clé dans le code source
- Toujours vérifier que les vars sont lues depuis `process.env`
- Le token Sanity doit être **read-only** (Viewer) — jamais Editor ou Admin en frontend
- `.env.local` ne doit jamais être commité — vérifier que `.gitignore` l'exclut bien

**Route Studio**
- La route `/studio` expose l'interface d'édition Sanity — elle est protégée par l'auth sanity.io nativement
- Ne jamais exposer de token d'écriture côté client (`NEXT_PUBLIC_*`)
- Si un jour une API route de contact (formulaire) est ajoutée : valider et sanitiser tous les inputs côté serveur, utiliser un rate limiter

**Headers de sécurité**
- Toujours configurer ces headers dans `next.config.ts` :
```ts
headers: [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]
```

**Dépendances**
- Ne jamais installer un package sans vérifier sa dernière version sur npmjs.com
- Packages interdits dans ce projet (cassés ou obsolètes) :
  - `@next/font` → utiliser `next/font/google`
  - `framer-motion` < v11 → import cassé avec Turbopack
  - `autoprefixer` v11 → incompatible Tailwind v4
  - `tailwindcss-animate` → conflits Tailwind v4
  - `@sanity/ui` → pas nécessaire, alourdit inutilement
  - `next-sanity` < v9 → config obsolète

---

### 2. PERFORMANCE

**Images**
- Toujours utiliser `next/image` — jamais de balise `<img>` brute
- Définir `width` et `height` explicitement ou utiliser `fill` avec un wrapper positionné
- Les images Sanity doivent passer par `@sanity/image-url` avec les transformations :
  ```ts
  urlFor(image).width(800).quality(80).auto('format').url()
  ```
- Format : laisser `.auto('format')` pour servir WebP/AVIF automatiquement

**Fetch & cache**
- Tous les fetches Sanity dans des Server Components — jamais de `useEffect` pour la data
- Utiliser la revalidation ISR :
  ```ts
  client.fetch(query, {}, { next: { revalidate: 60 } })
  ```
- Ne pas fetcher la même donnée dans plusieurs composants — centraliser dans `page.tsx` et passer en props

**Bundle**
- Framer Motion : importer uniquement `motion` et `AnimatePresence` depuis `motion/react`
- Lucide : importer chaque icône individuellement (`import { ArrowRight } from 'lucide-react'`), jamais l'index complet
- Vérifier le bundle avec `npm run build` — signaler si un chunk dépasse 100kb

**Core Web Vitals — cibles**
- LCP < 2.5s
- CLS = 0 (toujours définir les dimensions des images)
- FID / INP < 100ms
- Lighthouse score > 90 en performance

---

### 3. SEO

**Metadata — à configurer dans `layout.tsx` ET potentiellement dans `page.tsx`**
```ts
export const metadata: Metadata = {
  title: 'Mérédith Mardirossian — Stratégie de marque & Communication digitale',
  description: 'Portfolio de Mérédith Mardirossian, étudiante en communication à l\'EFAP Lyon. Stratégie de marque, communication digitale, disponible en stage et alternance à Lyon.',
  keywords: ['communication', 'stratégie de marque', 'EFAP Lyon', 'stage', 'alternance', 'portfolio'],
  openGraph: {
    title: 'Mérédith Mardirossian — Portfolio',
    description: '...',
    url: 'https://merédithmardirossian.fr',
    siteName: 'Portfolio Mérédith Mardirossian',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mérédith Mardirossian — Portfolio',
    description: '...',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://merédithmardirossian.fr' },
}
```

**Règles SEO à respecter**
- Un seul `<h1>` par page — c'est le nom dans le Hero
- La hiérarchie des titres doit être logique : h1 → h2 → pas de h3 si pas de h2 avant
- Les balises `<section>` doivent avoir un `aria-label` ou être précédées d'un heading
- Toutes les images `next/image` doivent avoir un `alt` descriptif — jamais `alt=""`  sauf pour les images purement décoratives
- Générer un `sitemap.xml` via `app/sitemap.ts`
- Générer un `robots.txt` via `app/robots.ts`

**Données structurées (Schema.org)**
- Ajouter un JSON-LD `Person` dans le `<head>` :
```ts
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mérédith Mardirossian',
  jobTitle: 'Étudiante en communication — Stratégie de marque & digital',
  url: 'https://merédithmardirossian.fr',
  address: { '@type': 'PostalAddress', addressLocality: 'Lyon', addressCountry: 'FR' },
}
```

---

### 4. UI/UX

**Principes non négociables**
- Le layout colonne 620px ne doit jamais être élargi — c'est ce qui donne l'effet éditorial validé
- Aucune décoration superflue : pas de box-shadows portées, pas de gradients de fond global, pas d'éléments flottants
- Les animations sont légères : `opacity` + `translateY(10px)`, durée max 0.45s, `once: true`
- Le site doit être navigable **sans JavaScript** (Server Components, pas de SPA)

**Accessibilité — règles minimales**
- Tous les liens doivent avoir un texte accessible — pas de "cliquez ici"
- Les boutons `<button>` sans texte visible doivent avoir `aria-label`
- Contraste de couleur : vérifier que le texte sur fond coloré respecte WCAG AA (ratio ≥ 4.5:1)
- Focus visible sur tous les éléments interactifs — ne jamais faire `outline: none` sans alternative
- Les icônes purement décoratives doivent avoir `aria-hidden="true"`

**Mobile-first**
- Le site est prioritairement consulté sur smartphone (recruteurs)
- Breakpoint principal : `max-width: 640px`
- Sur mobile : la grille projets passe en 1 colonne, le hero passe en colonne (avatar caché ou réduit)
- Touch targets : minimum 44×44px pour tous les éléments cliquables
- Pas de hover-only interactions — tout doit fonctionner au touch

**UX — règles de bon sens**
- Le CV téléchargeable doit s'ouvrir dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`)
- Les liens externes (LinkedIn, efap.com) : toujours `target="_blank"` + `rel="noopener noreferrer"`
- Le formulaire de contact (si implémenté) : feedback visuel immédiat sur l'envoi (état loading + confirmation)
- Pas de page blanche pendant le chargement — utiliser les `loading.tsx` de Next.js si nécessaire

---

## 📁 Structure de fichiers attendue

```
src/
├── app/
│   ├── layout.tsx          ← metadata, font Inter, JSON-LD
│   ├── page.tsx            ← fetch Sanity + assemblage sections
│   ├── sitemap.ts
│   ├── robots.ts
│   └── studio/[[...tool]]/
│       ├── page.tsx
│       └── layout.tsx
├── components/
│   ├── sections/           ← Hero, About, WorkList, EducationList, Projects, Skills, Contact
│   ├── ui/                 ← CvItem, ProjectCard, Tag, Btn, SectionPill
│   └── Footer.tsx
└── sanity/
    ├── schemaTypes/        ← settings, experience, education, project, skill
    └── lib/
        ├── client.ts
        └── queries.ts
```

---

## ✅ Checklist avant chaque commit

- [ ] Aucune clé d'API dans le code source
- [ ] Toutes les images utilisent `next/image` avec `alt` renseigné
- [ ] `npm run build` passe sans erreur ni warning TypeScript
- [ ] Le layout 620px est respecté sur desktop
- [ ] La grille projets est en 1 colonne sur mobile
- [ ] Les liens externes ont `target="_blank" rel="noopener noreferrer"`
- [ ] Aucun `console.log` en production
- [ ] Les headers de sécurité sont présents dans `next.config.ts`
