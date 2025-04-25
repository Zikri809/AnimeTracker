import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
import iconsdata from './public/AppImages/icons.json' assert { type: 'json' }
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
        background_color: '#000000',
        icons: iconsdata.icons,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
