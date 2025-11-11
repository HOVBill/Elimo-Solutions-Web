import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'], // ensures only one copy of React
  },
      alias: {
      '@heroicons/react': '@heroicons/react/esm',
    },
});
