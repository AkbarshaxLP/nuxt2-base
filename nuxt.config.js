export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'unicon-base-frontend',
    htmlAttrs: {
      lang: 'uz'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/scss/main.scss',
  ],
  
  styleResources: {
    scss: [
      // Makes scss variables and mixins available in every component
      // Do not import here actual styles!
      'assets/scss/_variables.scss',
    ]
  },

  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vee-validate.js',
    // Custom plugin for getting information about the user's device
    '~/plugins/device.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false, extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
  ],

  // i18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    locales: [
      { code: 'uz', iso: 'uz-UZ', file: 'uz.js', title: 'O’zbekcha' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', title: 'Русский' },
      { code: 'uz_cy', iso: 'uz_cy-UZ_CY', file: 'uz_cy.js', title: 'Ўзбекча' },
    ],
    defaultLocale: 'uz_cy',
    baseUrl: 'http://localhost:3000/',
    sortRoutes: true, // set false if adding custom routes https://i18n.nuxtjs.org/options-reference#sortroutes
    lazy: true,
    langDir: '~/locales/',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      useCookie: true,
      cookieKey: 'i18n_redirected',
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
