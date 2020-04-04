export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Rule 34 App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Browse rule34.xxx, rule34.paheal.net, danbooru.donmai.us, gelbooru.com, e621.net, and other popular boorus in the Rule 34 App'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Font
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  /*
   ** Customize the splash loading indicator
   */
  loadingIndicator: {
    name: 'cube-grid',
    color: '#121212',
    background: 'linear-gradient(152deg, #9b9be0 38%, #00d4ff 100%)'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vuex-persist.js', mode: 'client', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    [
      '@nuxtjs/google-analytics',
      {
        // Initialize
        id: 'UA-156285339-1',

        // Anonymize
        set: [{ field: 'anonymizeIp', value: true }]

        // Disable on production
        // debug: {
        //   enabled: true,
        //   // trace: true,
        //   sendHitTask: true
        // }
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/sitemap'],
  /*
   ** Progressive web app
   */
  pwa: {
    manifest: {
      name: 'Rule 34 App',
      short_name: 'Rule 34 App',
      lang: 'en',
      start_url: '/?origin=PWA',
      theme_color: '#121212',
      background_color: '#121212'
    },
    meta: {
      /* meta options */
      ogHost: 'https://r34.app',
      mobileAppIOS: true
    }
  },

  workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: ['https://rsms.me/.*', 'https://r34.app/img/.*']
        // Defaults to `networkFirst` if omitted
        // handler: 'networkFirst',
        // Defaults to `GET` if omitted
        // method: 'GET'
      }
    ]
  },
  /*
   ** TailwindCSS config
   */
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },
  /*
   ** PurgeCSS config
   */
  purgeCSS: {
    // whitelist: ['defaults-and-this-class']
    whitelistPatterns: [/active/, /nsfw-disabled/, /fade/, /enter/, /leave/]
  },
  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: 'https://r34.app',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // Necessary for CSS Purge
    extractCSS: true,

    //  Remove console.log everywhere
    terser: {
      terserOptions: {
        compress: {
          // drop_console: true,
          pure_funcs: ['console.log']
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      console.log(process.env.NODE_ENV)
    }
  }
}
