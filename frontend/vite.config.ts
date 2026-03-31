// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Gör att du slipper importera 'describe', 'it' etc.
    environment: 'jsdom',    // Simulerar en webbläsare för dina komponenter
    setupFiles: './src/setupTests.ts', // Laddar in jest-dom matchers
  },
});