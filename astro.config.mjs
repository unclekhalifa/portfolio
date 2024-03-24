import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sanity from '@sanity/astro'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET,
      useCdn: true,
      apiVersion: '2024-03-23',
      studioBasePath: import.meta.env.PUBLIC_SANITY_STUDIO_BASE_PATH,
    }),
    react(),
  ],
})
