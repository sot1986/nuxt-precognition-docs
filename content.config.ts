import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import * as z from 'zod'

export default defineContentConfig({
  collections: {
    pages: defineCollection(
      asSitemapCollection({
      // Specify the type of content in this collection
        type: 'page',
        // Load every file inside the `content` directory
        source: {
          include: 'pages/**/*.md',
          exclude: ['hero/**'],
          prefix: '/',
        },
        schema: z.object({
          section: z.string(),
          excerpt: z.object({
            type: z.string(),
            children: z.any(),
          }),
        }),
      }),
    ),
    hero: defineCollection({
      type: 'page',
      source: 'hero/**/*.md',
      schema: z.object({
        filename: z.string(),
        lines: z.number(),

      }),
    }),
  },
})
