import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function generatePhpEntryPlugin() {
  return {
    name: 'generate-php-entry',
    closeBundle() {
      const htmlPath = path.resolve(__dirname, 'dist/index.html');
      const phpPath = path.resolve(__dirname, 'dist/index.php');
      if (fs.existsSync(htmlPath)) {
        fs.copyFileSync(htmlPath, phpPath);
        console.log('✓ Successfully generated dist/index.php');
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [solidPlugin(), generatePhpEntryPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
