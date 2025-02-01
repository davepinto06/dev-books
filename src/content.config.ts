import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string(),
      usa: z.string(),
    }),
  }),
})

export const collections = { books }
