import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["sharp"],
    },
  },
  server: {
    proxy: {
      "/api/*": "http://localhost:5001/",
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
