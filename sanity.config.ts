import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/schemas'

export default defineConfig({
  name: 'unclekhalifa',
  title: 'Uncle Khalifa',
  projectId: 'ksxor17g',
  dataset: 'testing',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
