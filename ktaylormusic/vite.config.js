import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // server: {
  //   watch: {
  //     ignored: ["**/playwright-report/**"],
  //   },
  // },

  plugins: [react({ fastRefresh: false })],
  worker: [react()],
});
