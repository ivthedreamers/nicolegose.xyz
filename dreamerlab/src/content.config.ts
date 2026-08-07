import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    services: z.array(z.string()).default([]),
    year: z.string().optional(),
    role: z.string().optional(),
    blurb: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    quote: z.string().optional(),
    quoteAuthor: z.string().optional(),
  }),
});

export const collections = { work };
