import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages'},
      { find: '@components', replacement: '/src/components'},
      { find: '@pages', replacement: '/src/assets/pages'},
      { find: '@containers', replacement: '/src/components/containers'},
      { find: "@images", replacement: '/src/assets/images'},
      { find: "@ui", replacement: '/src/components/ui'}
    ]
  }
})
