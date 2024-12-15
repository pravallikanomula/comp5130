import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // The port where your frontend will run
    https: {
      key: '/Users/nomulapravallika/Downloads/full-stack-estate-main3copy/api/certs/localhost-key.pem', // Path to your private key
      cert: '/Users/nomulapravallika/Downloads/full-stack-estate-main3copy/api/certs/localhost.pem', // Path to your certificate
    },
    proxy: {
      // Proxy API requests to the backend
      '/api': {
        target: 'https://localhost:8800', // Your backend URL
        changeOrigin: true,
        secure: false, // Set to false to allow self-signed certificates
      },
    },
  },
})
