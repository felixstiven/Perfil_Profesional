import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        allowedHosts: [
            'perfilprofesional-production-2e21.up.railway.app'
        ]
    }
})