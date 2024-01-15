import {defineConfig} from 'vite';
import path from 'path';
import inspect from 'vite-plugin-inspect'
import VitePluginDnsPrefetcher from './src/index'

export default defineConfig({
  plugins: [
    inspect(),
    VitePluginDnsPrefetcher()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: "VitePluginDnsPrefetcher",
      fileName: "main",
      formats: ["es", "cjs"]
    }
  }
})