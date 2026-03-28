import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Formation',
  type: 'document',
  fields: [
    defineField({ name: 'school', title: 'École', type: 'string' }),
    defineField({ name: 'degree', title: 'Diplôme / Filière', type: 'string' }),
    defineField({ name: 'startYear', title: 'Année de début', type: 'number' }),
    defineField({ name: 'endYear', title: 'Année de fin', type: 'number' }),
    defineField({ name: 'initials', title: 'Initiales', type: 'string' }),
    defineField({ name: 'color', title: 'Couleur (hex)', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo (optionnel)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'websiteUrl', title: "URL du site de l'école", type: 'url' }),
  ],
})
