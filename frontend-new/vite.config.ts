import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 1. Import it

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add it here
  ],
  test: {
    globals: true, // This enables describe, it, expect globally
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
