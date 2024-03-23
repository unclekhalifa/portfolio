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
      projectId: 'ksxor17g',
      dataset: 'testing',
      useCdn: true,
      apiVersion: '2024-03-23',
      studioBasePath: '/studio',
    }),
    react(),
  ],
})
