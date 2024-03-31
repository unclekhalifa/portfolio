import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sanity from '@sanity/astro'
import react from '@astrojs/react'

if (process.env.NODE_ENV === 'development') {
  const { config } = await import('dotenv')
  config()
}

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      useCdn: true,
      apiVersion: '2024-03-23',
      studioBasePath: process.env.SANITY_STUDIO_BASE_PATH,
    }),
    react(),
  ],
})
