// vite.config.ts
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
  base: '/build-future-now/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Remove the custom input configuration to use the default index.html in the root
  }
});
