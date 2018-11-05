const webpack = require('webpack');

module.exports = {
  srcDir: 'src/',

  /*
  ** Headers of the page
  */
  head: {
    title: 'membership-front-core',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'MemberShip Front Core Project'
      },
      {property: 'og:url', content: 'https://www.localhost.co.kr'},
      {property: 'og:title', content: '타이틀'},
      // { property: 'og:image', content: ''},
      {property: 'og:description', content: ''},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '~/static/css/animate/animate.css',
    '~/static/css/main.css',
    '~/static/css/util.css',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['jquery', 'bootstrap', '~/plugins/plugins.js'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // '_': 'lodash'
        // ...etc.
      })
    ]
  }
};

