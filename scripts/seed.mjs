/**
 * Seed Sanity — Portfolio Mérédith Mardirossian
 * Usage: node --env-file=.env.local scripts/seed.mjs
 *
 * Nécessite SANITY_API_WRITE_TOKEN dans .env.local
 * (créer un token "Editor" sur sanity.io/manage → API → Tokens)
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

// ─── Helpers ──────────────────────────────────────────────────────────────────

function key(n) {
  return Math.random().toString(36).slice(2, 10) + n
}

function block(text) {
  return {
    _type: 'block',
    _key: key('b'),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: key('s'), text, marks: [] }],
  }
}

// ─── Documents ────────────────────────────────────────────────────────────────

const settings = {
  _id: 'settings',
  _type: 'settings',
  heroTitle: 'bonjour, je suis\nmérédith 👋',
  heroSub:
    "Étudiante en communication à l'EFAP Lyon, je conçois des stratégies de marque cohérentes et actionnables. Basée à Lyon.",
  about: [
    block(
      "Étudiante en 3ème année à l'EFAP Lyon, je mêle rigueur stratégique et sens du terrain pour construire des communications qui servent de vrais objectifs. De la conception de stratégies de marque à la mise en œuvre de campagnes digitales, j'apporte des idées actionnables à chaque projet."
    ),
    block(
      "Au-delà de la comm, j'aime les rencontres, explorer de nouvelles villes et partager des moments — j'apporte cette même énergie à mon travail."
    ),
  ],
  // email et linkedinUrl à compléter par la cliente depuis /studio
}

const experiences = [
  {
    _id: 'exp-agence',
    _type: 'experience',
    company: 'Agence Digitale',
    role: 'Chargée de communication digitale',
    city: 'Lyon',
    initials: 'AG',
    color: '#3A395E',
    startDate: '2024-01-01',
    isCurrent: true,
  },
  {
    _id: 'exp-freelance',
    _type: 'experience',
    company: 'Freelance',
    role: 'Stratégie de contenu & réseaux sociaux',
    city: 'Lyon',
    initials: 'FR',
    color: '#6E6D8F',
    startDate: '2023-03-01',
    endDate: '2023-09-30',
    isCurrent: false,
  },
  {
    _id: 'exp-asso',
    _type: 'experience',
    company: 'Structure associative',
    role: 'Assistante communication — Stage',
    city: 'Lyon',
    initials: 'ST',
    color: '#C85E0C',
    startDate: '2022-06-01',
    endDate: '2022-08-31',
    isCurrent: false,
  },
]

const education = [
  {
    _id: 'edu-efap',
    _type: 'education',
    school: 'EFAP Lyon',
    degree: 'Bachelor Communication — Stratégie de marque & digital',
    startYear: 2022,
    endYear: 2025,
    initials: 'EF',
    color: '#3A395E',
    websiteUrl: 'https://www.efap.com',
  },
  {
    _id: 'edu-lycee',
    _type: 'education',
    school: 'Lycée · Lyon',
    degree: 'Baccalauréat — Mention bien',
    startYear: 2019,
    endYear: 2022,
    initials: 'LY',
    color: '#374151',
  },
]

const projects = [
  {
    _id: 'proj-brand-x',
    _type: 'project',
    title: 'Repositionnement identitaire — Brand X',
    missionType: 'Audit de marque',
    date: '2025-03-01',
    description:
      "Audit de marque, refonte du positionnement et recommandations stratégiques pour une enseigne locale.",
    tags: ['Audit de marque', 'Positionnement', 'Canva'],
    slug: { _type: 'slug', current: 'repositionnement-brand-x' },
    order: 1,
  },
  {
    _id: 'proj-asso-etudiante',
    _type: 'project',
    title: 'Campagne Social Media — Association étudiante',
    missionType: 'Social media',
    date: '2024-11-01',
    description:
      "Stratégie de contenu et pilotage d'une campagne Meta Ads pour un événement lyonnais.",
    tags: ['Social media', 'Meta Ads', 'Stratégie'],
    slug: { _type: 'slug', current: 'campagne-social-media-asso-etudiante' },
    order: 2,
  },
  {
    _id: 'proj-pme',
    _type: 'project',
    title: 'Audit & recommandations — PME lyonnaise',
    missionType: 'Audit communication',
    date: '2024-09-01',
    description:
      "Diagnostic complet de la communication d'une PME et plan d'action sur 6 mois.",
    tags: ['Audit comm', 'Plan d\'action'],
    slug: { _type: 'slug', current: 'audit-recommandations-pme-lyonnaise' },
    order: 3,
  },
  {
    _id: 'proj-efap',
    _type: 'project',
    title: 'Stratégie de lancement — Projet EFAP',
    missionType: 'Communication 360°',
    date: '2024-06-01',
    description:
      "Conception d'une stratégie de communication 360° pour un lancement produit fictif.",
    tags: ['Lancement', 'Communication 360°'],
    slug: { _type: 'slug', current: 'strategie-lancement-projet-efap' },
    order: 4,
  },
]

const skills = [
  // Stratégie de marque
  { _id: 'skill-analyse-marque',   _type: 'skill', label: 'Analyse de marque',        category: 'strategie', order: 1 },
  { _id: 'skill-positionnement',   _type: 'skill', label: 'Positionnement',            category: 'strategie', order: 2 },
  { _id: 'skill-storytelling',     _type: 'skill', label: 'Brand storytelling',        category: 'strategie', order: 3 },
  { _id: 'skill-identite',         _type: 'skill', label: 'Identité visuelle',         category: 'strategie', order: 4 },
  { _id: 'skill-audit-comm',       _type: 'skill', label: 'Audit de communication',    category: 'strategie', order: 5 },
  { _id: 'skill-segmentation',     _type: 'skill', label: 'Segmentation cibles',       category: 'strategie', order: 6 },

  // Communication digitale
  { _id: 'skill-social',           _type: 'skill', label: 'Social media',              category: 'digital', order: 1 },
  { _id: 'skill-meta-ads',         _type: 'skill', label: 'Meta Ads',                  category: 'digital', order: 2 },
  { _id: 'skill-contenu',          _type: 'skill', label: 'Stratégie de contenu',      category: 'digital', order: 3 },
  { _id: 'skill-community',        _type: 'skill', label: 'Community management',      category: 'digital', order: 4 },
  { _id: 'skill-seo',              _type: 'skill', label: 'SEO éditorial',             category: 'digital', order: 5 },
  { _id: 'skill-emailing',         _type: 'skill', label: 'E-mailing',                 category: 'digital', order: 6 },

  // Outils
  { _id: 'skill-canva',            _type: 'skill', label: 'Canva',                     category: 'outils', order: 1 },
  { _id: 'skill-adobe',            _type: 'skill', label: 'Adobe Suite',               category: 'outils', order: 2 },
  { _id: 'skill-figma',            _type: 'skill', label: 'Figma',                     category: 'outils', order: 3 },
  { _id: 'skill-notion',           _type: 'skill', label: 'Notion',                    category: 'outils', order: 4 },
  { _id: 'skill-meta-business',    _type: 'skill', label: 'Meta Business Suite',       category: 'outils', order: 5 },
  { _id: 'skill-wordpress',        _type: 'skill', label: 'WordPress',                 category: 'outils', order: 6 },
  { _id: 'skill-analytics',        _type: 'skill', label: 'Google Analytics',          category: 'outils', order: 7 },
]

// ─── Import ───────────────────────────────────────────────────────────────────

const allDocs = [settings, ...experiences, ...education, ...projects, ...skills]

async function seed() {
  console.log(`\n🌱 Import de ${allDocs.length} documents dans le dataset "${client.config().dataset}"...\n`)

  const tx = client.transaction()
  for (const doc of allDocs) {
    tx.createOrReplace(doc)
  }

  await tx.commit()
  console.log('✅ Import terminé.')
  console.log('   → Ouvre /studio pour compléter email, LinkedIn et les visuels projets.')
}

seed().catch((err) => {
  console.error('❌ Erreur :', err.message)
  process.exit(1)
})
