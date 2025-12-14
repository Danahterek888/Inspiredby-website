import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',           // Enables DOM API for testing
    setupFiles: './src/setupTests.js', // Runs before all tests
    globals: true,                    // Allows using 'expect' without importing each time
    include: ['src/**/*.test.{js,jsx}'], // Ensures Vitest picks up all your test files
  },
});
