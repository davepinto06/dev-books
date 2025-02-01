// @ts-check
import { defineConfig, envField } from "astro/config"

import tailwind from "@astrojs/tailwind"

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind()],

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  adapter: cloudflare(),
})