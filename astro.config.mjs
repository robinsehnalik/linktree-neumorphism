// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  base: "/",
  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Plus Jakarta Sans",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.fontsource(),
        name: "JetBrains Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});