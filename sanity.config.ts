import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/schemas'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'unclekhalifa',
  title: 'Uncle Khalifa',
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  plugins: [structureTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
})
