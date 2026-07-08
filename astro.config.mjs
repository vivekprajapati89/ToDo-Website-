// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://vivekprajapati89.github.io",
  base: "/ToDo-Website-/",

  vite: {
    plugins: [tailwindcss()],
  },
});