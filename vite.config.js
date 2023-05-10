import {defineConfig} from "vite";

export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            '~': '/assets'
        }
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
});