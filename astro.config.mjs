// @ts-check
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://umeshsm.com',
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({
      applyBaseStyles: false
    }),
    partytown({
      config: { forward: ['dataLayer.push'] }
    })
  ]
})
