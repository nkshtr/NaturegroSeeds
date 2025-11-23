import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'product.html'),
                about: resolve(__dirname, 'about.html'),
                notice: resolve(__dirname, 'notice.html'),
            },
        },
    },
})
