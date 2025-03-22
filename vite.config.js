import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true // Or host: '0.0.0.0' for explicit all addresses
},
  plugins: [react(), tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'AniTracker',
        short_name: 'AniTracker',
        description: 'A web app by Zikri',
        theme_color: '#000000',
        icons: [
          {
            src: '/anitracker-high-resolution-logo-192.webp',
            sizes: '192x192',
            type: 'image/webp',
          },
          {
            src: '/anitracker-high-resolution-logo-512.webp',
            sizes: '512x512',
            type: 'image/webp',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
