import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Expériences',
  type: 'document',
  fields: [
    defineField({ name: 'company', title: 'Entreprise', type: 'string' }),
    defineField({ name: 'role', title: 'Poste', type: 'string' }),
    defineField({ name: 'city', title: 'Ville', type: 'string' }),
    defineField({ name: 'initials', title: 'Initiales (2 lettres)', type: 'string', validation: (r) => r.max(4) }),
    defineField({ name: 'color', title: 'Couleur (hex)', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo (optionnel)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'startDate', title: 'Date de début', type: 'date' }),
    defineField({ name: 'endDate', title: 'Date de fin', type: 'date' }),
    defineField({ name: 'isCurrent', title: 'En cours', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    { title: 'Date (récent)', name: 'startDateDesc', by: [{ field: 'startDate', direction: 'desc' }] },
  ],
})
