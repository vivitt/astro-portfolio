// @ts-check
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://viviyanez.dev",
  integrations: [icon(), partytown()],
});
