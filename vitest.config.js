import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // ✅ import the plugin

export default defineConfig({
  plugins: [react()],          // ✅ use the plugin here
  test: {
    environment: 'jsdom',      // enables DOM for tests
  },
});
