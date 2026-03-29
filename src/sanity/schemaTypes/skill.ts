import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Compétences',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Intitulé de la compétence',
      type: 'string',
      description: 'Ex : "Meta Ads", "SEO éditorial", "Adobe Illustrator"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Stratégie & marque', value: 'strategie' },
          { title: 'Digital & réseaux', value: 'digital' },
          { title: 'Outils & logiciels', value: 'outils' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Les compétences sont triées par catégorie puis par cet ordre',
    }),
  ],
  orderings: [
    { title: 'Catégorie puis ordre', name: 'categoryOrder', by: [{ field: 'category', direction: 'asc' }, { field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'category',
    },
  },
})
