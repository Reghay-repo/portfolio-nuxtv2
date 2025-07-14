import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
      colorMode: {
        classSuffix: ''              // → now <html class="dark">
    },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxtjs/color-mode',
        'shadcn-nuxt'
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    }
})