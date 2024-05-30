/// <reference types="vitest" />
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      routes: path.resolve(__dirname, "./src/routes"),
      types: `${path.resolve(__dirname, "./src/@types")}`,
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
    include: ['src/*.test.{ts,tsx}'],
    exclude: ['node_modules'],
    coverage: {
      include: ['src/**/*.{ts,tsx}']
    }
  }
});
