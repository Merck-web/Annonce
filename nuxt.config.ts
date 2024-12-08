// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools:          { enabled: true },
    modules:           [
        'nuxt-quasar-ui',
        [
            '@pinia/nuxt',
            {
                autoImports: [ [ 'defineStore', 'definePiniaStore' ] ],
            },
        ],
        '@nuxt/eslint',
    ],
    css:               [
        '~/assets/css/main.scss',
    ],
    app:               {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title:     'Тест',
            meta:      [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'yandex-verification', content: '8433f9cecf32af02' },
                { name: 'facebook-domain-verification', content: 'ak2jurbrspjdzh8na9rcbg5ym2mm7i' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://test' },
                { property: 'og:title', content: 'test' },
                { property: 'og:image', content: 'https://test' },
            ],
            link:      [
                { rel: 'icon', type: 'image/x-icon', href: '/test.ico' },
            ],
        },
    },
});