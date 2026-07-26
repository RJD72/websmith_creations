import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: `${projectRoot}index.html`,
        huronBjj: `${projectRoot}case-studies/huron-bjj/index.html`,
        timelessRusticAcres: `${projectRoot}case-studies/timeless-rustic-acres/index.html`,
        dpMusicTherapy: `${projectRoot}case-studies/dp-music-therapy/index.html`,
        webDesignHuronCounty: `${projectRoot}web-design-huron-county/index.html`,
      },
    },
  },
});
