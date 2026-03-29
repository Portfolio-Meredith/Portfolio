import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Formations',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'École / Établissement',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Diplôme ou filière',
      type: 'string',
      description: 'Ex : "Bachelor Communication & Stratégie de marque"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Spécialisation / Activités notables',
      type: 'text',
      rows: 2,
      description: 'Optionnel — précise la majeure, les projets ou les associations',
    }),
    defineField({
      name: 'startYear',
      title: 'Année de début',
      type: 'number',
      validation: (r) => r.required().min(1990).max(2100),
    }),
    defineField({
      name: 'endYear',
      title: 'Année de fin (ou prévue)',
      type: 'number',
      validation: (r) => r.min(1990).max(2100),
    }),
    defineField({
      name: 'logo',
      title: 'Logo de l\'école',
      type: 'image',
      description: 'Optionnel — remplace les initiales si fourni',
      options: { hotspot: true },
    }),
    defineField({
      name: 'initials',
      title: 'Initiales (fallback)',
      type: 'string',
      description: '2 à 3 lettres — affichées si aucun logo',
      validation: (r) => r.max(3),
    }),
    defineField({
      name: 'color',
      title: 'Couleur de fond des initiales (hex)',
      type: 'string',
      description: 'Ex : #3A395E',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Site web de l\'école',
      type: 'url',
    }),
  ],
  orderings: [
    { title: 'Année (plus récent en premier)', name: 'endYearDesc', by: [{ field: 'endYear', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'school',
      subtitle: 'degree',
      media: 'logo',
    },
  },
})
