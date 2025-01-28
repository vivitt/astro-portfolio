import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    author: z.string(),

    description: z.string(),
    image: z.object({
      alt: z.string(),
      url: z.string(),
    }),

    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
