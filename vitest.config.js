import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // <--- enables DOM for tests
  },
   plugins: [react()],
});
