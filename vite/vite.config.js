import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'node:path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    https: true,
  },
  plugins: [
    basicSsl(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src/assets'),
          dest: '',
        },
      ],
    }),
  ],
});