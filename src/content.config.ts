import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    when: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    flowTitle: z.string().default('How it flows'),
    flow: z.array(z.object({ step: z.string(), note: z.string().optional() })).default([]),
    flowLoops: z.boolean().default(false),
    // true = shown as a sanitised template with invented data
    template: z.boolean().default(false),
    // false = has its own page but no block on the home page (it sits under its parent)
    listed: z.boolean().default(true),
    // true = no page is built at all
    hidden: z.boolean().default(false),
    // id of the project this one belongs to, for the back link
    parent: z.string().optional(),
    // shown in a box right under the title
    notice: z.string().optional(),
    // Set live: true once the template repo and its demo are public.
    live: z.boolean().default(false),
    repo: z.string().optional(),
    demoPath: z.string().optional(),
    video: z.string().optional(),
    poster: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    shotsTitle: z.string().default('More screens'),
    shots: z.array(z.object({ src: z.string(), alt: z.string(), tall: z.boolean().default(false) })).default([]),
    siteUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
