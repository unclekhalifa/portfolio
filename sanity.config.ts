import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/schemas'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'unclekhalifa',
  title: 'Uncle Khalifa',
  projectId: 'ksxor17g',
  dataset: 'testing',
  plugins: [structureTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
})
