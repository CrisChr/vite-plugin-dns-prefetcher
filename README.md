# vite-plugin-dns-prefetcher

## Description
An Vite plugin to add dns-prefetch link tag in HTML.

# How to use

## Install

```shell
pnpm add vite-plugin-dns-prefetcher -D
// yarn add vite-plugin-dns-prefetcher -D
// npm install vite-plugin-dns-prefetcher --save-dev
```

## Vite config
```js
import { defineConfig } from 'vite'
import VitePluginDnsPrefetcher from 'vite-plugin-dns-prefetcher'

export default defineConfig({
  plugins: [
    VitePluginDnsPrefetcher({
      fileIncludes: ["jsx"], // default ["ts", "js"]
      limit: 20, // Optional, limit the max dns
      dnsIgnore: ["https://www.xyz.com"] // Optional, ignore the dns
    })
  ],
  // other configs
})
```
