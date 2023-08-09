import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: resolve("src"),
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3333,
    host: true,
    open: true,
  },
  preview: {
    port: 3333,
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve("src"),
      "@images": resolve("src/assets/images"),
    },
  },
  plugins: [react()],
});
