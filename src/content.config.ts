import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    author: z.string(),

    description: z.string().optional(),
    image: z
      .object({
        alt: z.string(),
        url: z.string(),
      })
      .optional(),
    layout: z.string().optional(),

    link: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/projects" }),
  schema: z.object({
    description: z.string(),
    image: z.object({
      alt: z.string(),
      url: z.string(),
    }),
    link: z.string(),
    technologies: z.array(z.string()),
    title: z.string(),
  }),
});

export const collections = { blog };
