import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { copyFileSync, existsSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: process.env.NODE_ENV === 'production' ? '/fernandez-photography/' : '/',
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        minify: 'esbuild',
        // Optimize for static hosting
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom']
            },
            // Ensure consistent file names for better caching
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]'
          }
        },
        // Generate manifest for static hosting
        manifest: true,
        // Optimize chunk size
        chunkSizeWarningLimit: 1000
      },
      // Static optimization
      preview: {
        port: 4173,
        host: true
      },
      // Copy 404.html to dist folder
      plugins: [
        {
          name: 'copy-404',
          writeBundle() {
            const src404 = path.resolve(__dirname, 'public/404.html');
            const dest404 = path.resolve(__dirname, 'dist/404.html');
            if (existsSync(src404)) {
              copyFileSync(src404, dest404);
            }
          }
        }
      ]
    };
});
