import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Paramètres',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Titre Hero', type: 'string' }),
    defineField({ name: 'heroSub', title: 'Sous-titre Hero', type: 'string' }),
    defineField({
      name: 'about',
      title: 'À propos',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Em', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'avatar',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'linkedinUrl', title: 'URL LinkedIn', type: 'url' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'cvPdf', title: 'CV (PDF)', type: 'file' }),
  ],
})
