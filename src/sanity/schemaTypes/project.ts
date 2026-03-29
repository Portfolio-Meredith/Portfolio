import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projets',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du projet',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'missionType',
      title: 'Type de mission',
      type: 'string',
      description: 'Catégorie principale du projet',
      options: {
        list: [
          { title: 'Stratégie de marque', value: 'Stratégie de marque' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Communication digitale', value: 'Communication digitale' },
          { title: 'Identité visuelle', value: 'Identité visuelle' },
          { title: 'Audit & Conseil', value: 'Audit & Conseil' },
          { title: 'Contenu éditorial', value: 'Contenu éditorial' },
          { title: 'Relations Presse', value: 'Relations Presse' },
          { title: 'Événementiel', value: 'Événementiel' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de réalisation',
      type: 'date',
      description: 'Mois et année du projet',
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      description: 'Résumé du projet en 2-3 phrases — contexte, objectif, résultat',
    }),
    defineField({
      name: 'image',
      title: 'Visuel principal',
      type: 'image',
      description: 'Format 16/10 recommandé — utilisé comme aperçu de la carte',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tags',
      title: 'Compétences mobilisées',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex : Canva, Meta Ads, Copywriting — visibles sur la carte',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'link',
      title: 'Lien vers le projet',
      type: 'url',
      description: 'Optionnel — lien vers une étude de cas, présentation ou livrable en ligne',
    }),
    defineField({
      name: 'slug',
      title: 'Identifiant URL (slug)',
      type: 'slug',
      description: 'Généré automatiquement depuis le titre — ne pas modifier',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: '1 = affiché en premier — les projets sont triés par cet ordre',
    }),
  ],
  orderings: [
    { title: 'Ordre d\'affichage', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Date (plus récent)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'missionType',
      media: 'image',
    },
  },
})
