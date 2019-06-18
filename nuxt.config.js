import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],
  pwa: {
    workbox: {
      // Workbox options
      runtimeCaching: [{
        urlPattern: 'https://misdirection.ohmyhome.com/image/*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          networkTimeoutSeconds: 20,
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
      ]
    },
  },
  workbox: {
    // Workbox options
    runtimeCaching: [{
      urlPattern: 'https://misdirection.ohmyhome.com/image/*',
      handler: 'networkOnly',
      method: 'GET',
      strategyOptions: {
        cacheName: 'api-cache-asasasas',
      }
    }
    ]
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://128.199.176.157/v1/graphql'
      }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
}
