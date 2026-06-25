import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Postfabrica landing page — Astro 7 + Tailwind v4 (Vite plugin)
// Build output: ./dist (Cloudflare Pages, Netlify, GitHub Pages ile uyumlu)
export default defineConfig({
  site: "https://postfabrica-landing-page.pages.dev",
  trailingSlash: "ignore",
  integrations: [
    sitemap(),
  ],
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
