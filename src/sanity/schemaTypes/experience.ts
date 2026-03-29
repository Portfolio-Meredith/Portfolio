import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Expériences',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Entreprise / Structure',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      title: 'Intitulé du poste',
      type: 'string',
      description: 'Ex : "Chargée de communication digitale"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'contractType',
      title: 'Type de contrat',
      type: 'string',
      options: {
        list: [
          { title: 'Stage', value: 'Stage' },
          { title: 'Alternance', value: 'Alternance' },
          { title: 'CDI', value: 'CDI' },
          { title: 'CDD', value: 'CDD' },
          { title: 'Freelance', value: 'Freelance' },
          { title: 'Bénévolat / Associatif', value: 'Bénévolat' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'city',
      title: 'Ville',
      type: 'string',
      description: 'Ex : Lyon, Paris, Remote',
    }),
    defineField({
      name: 'description',
      title: 'Missions principales',
      type: 'text',
      rows: 3,
      description: 'Optionnel — décris les tâches ou réalisations clés',
    }),
    defineField({
      name: 'startDate',
      title: 'Date de début',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Date de fin',
      type: 'date',
      description: 'Laisser vide si le poste est en cours',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Poste actuel',
      type: 'boolean',
      initialValue: false,
      description: 'Cocher si c\'est le poste en cours — affiche "En cours" à la place de la date de fin',
    }),
    defineField({
      name: 'logo',
      title: 'Logo de l\'entreprise',
      type: 'image',
      description: 'Optionnel — remplace les initiales si fourni',
      options: { hotspot: true },
    }),
    defineField({
      name: 'initials',
      title: 'Initiales (fallback)',
      type: 'string',
      description: 'Affichées si aucun logo n\'est uploadé — 2 à 3 lettres max',
      validation: (r) => r.max(3),
    }),
    defineField({
      name: 'color',
      title: 'Couleur de fond des initiales (hex)',
      type: 'string',
      description: 'Ex : #D5D5E7 — utilisée uniquement si pas de logo',
    }),
  ],
  orderings: [
    { title: 'Date (plus récent en premier)', name: 'startDateDesc', by: [{ field: 'startDate', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'role',
      media: 'logo',
    },
  },
})
