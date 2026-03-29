import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'meredith-portfolio',
  title: 'Portfolio Mérédith',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Singleton — un seul document de réglages
            S.listItem()
              .title('Réglages du site')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
                  .title('Réglages du site')
              ),
            S.divider(),
            S.documentTypeListItem('project').title('Projets'),
            S.documentTypeListItem('experience').title('Expériences'),
            S.documentTypeListItem('education').title('Formations'),
            S.documentTypeListItem('skill').title('Compétences'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
