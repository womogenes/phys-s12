import { z, defineCollection } from 'astro:content';

const weekCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    blurb: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  weeks: weekCollection,
};
