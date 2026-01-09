import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'tc', 'sc']),
    // Add other fields like date, author
  }),
});

export const collections = {
  blog: blogCollection,
};