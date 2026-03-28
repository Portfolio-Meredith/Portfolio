import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Compétences',
  type: 'document',
  fields: [
    defineField({ name: 'label', title: 'Compétence', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Stratégie', value: 'strategie' },
          { title: 'Digital', value: 'digital' },
          { title: 'Outils', value: 'outils' },
        ],
      },
    }),
    defineField({ name: 'order', title: 'Ordre', type: 'number' }),
  ],
})
