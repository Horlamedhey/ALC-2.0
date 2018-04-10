// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      // 'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      iconSet: 'fontawesome',
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QFab',
        'QFabAction',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QInput',
        'QField',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardMedia',
        'QCardSeparator',
        'QCardActions',
        'QParallax',
        'QAjaxBar',
        'QTooltip',
        'QUploader',
        'QSpinner',
        'QSpinnerPie',
        'QSpinnerBars',
        'QAlert',
        'QPageSticky',
        'QInfiniteScroll',
        'QCollapsible',
        'QModal',
        'QModalLayout'
      ],
      directives: [
        'Ripple',
        'BackToTop',
        'ScrollFire',
        'CloseOverlay'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'LocalStorage',
        'AddressbarColor'
      ]
    },
    // animations: 'all' --- includes all animations
    animations: [
      'fadeIn',
      'fadeOut',
      'bounce',
      'bounceInLeft',
      'bounceOutRight',
      'flip',
      'flipOutY'
    ],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        name: 'Flip\'n\'Add',
        short_name: 'Flip\'n\'Add',
        description: 'Best Contacts App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        appBundleId: 'com.app.FlipnAdd',
        appCategoryType: 'app-category-type=public.app-category.utilities',
        osxSign: true,
        protocol: 'myapp://path',

        // Window only
        win32metadata: {
          CompanyName: 'Variable inc.',
          FileDescription: '',
          OriginalFilename: 'Flip\'n\'Add',
          ProductName: '',
          InternalName: ''
        }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.2'
  }
}
