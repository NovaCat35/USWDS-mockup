import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  // Set the base path if the site is hosted in a subdirectory
  base: './', // Use './' for relative paths if deploying to subfolders
  
  resolve: {
    alias: {
      // Alias for easier importing of assets
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
    },
  },

  build: {
    outDir: 'dist', // Output folder for build
    assetsDir: 'assets', // Specify the assets directory inside the dist folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  
  server: {
    open: true, // Automatically open the browser when running `vite`
  },
});
