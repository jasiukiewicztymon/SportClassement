import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.css',
        '~/assets/css/main.scss'
    ],
    components: true,
    dirs: [
        './components'
    ]
})