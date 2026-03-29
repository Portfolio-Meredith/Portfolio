import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Réglages du site',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Titre principal (Hero)',
      type: 'string',
      description: 'Ex : "bonjour, je suis mérédith 👋"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'heroSub',
      title: 'Accroche (Hero)',
      type: 'string',
      description: 'Ligne courte sous le titre — ex : "Étudiante en communication à l\'EFAP Lyon"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Photo de profil',
      type: 'image',
      description: 'Format carré recommandé, minimum 400 × 400 px',
      options: { hotspot: true },
    }),
    defineField({
      name: 'about',
      title: 'Texte "À propos"',
      description: 'Paragraphe de présentation — le gras et l\'italique sont supportés',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Gras', value: 'strong' },
              { title: 'Italique', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'Profil LinkedIn',
      type: 'url',
      description: 'https://linkedin.com/in/…',
    }),
    defineField({
      name: 'email',
      title: 'Adresse e-mail de contact',
      type: 'string',
      description: 'Apparaît dans le bouton "Me contacter"',
    }),
    defineField({
      name: 'cvPdf',
      title: 'CV au format PDF',
      type: 'file',
      description: 'Remplacer ce fichier pour mettre le CV à jour',
      options: { accept: '.pdf' },
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Réglages du site' }),
  },
})
