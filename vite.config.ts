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
  resolve: {
    alias: {
      "@": resolve("src"),
      "@images": resolve("src/assets/images"),
    },
  },
  plugins: [react()],
});
