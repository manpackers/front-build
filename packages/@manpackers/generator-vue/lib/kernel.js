const { createEslintLoader, createCssLoader } = require('@manpacker/generator')
// eslint-disable-next-line
const webpack = require('webpack')
const StylelintPlugin = require('stylelint-webpack-plugin')

/**
 * Compatible with low-version Android system to 14X
 */
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = ic => ({
  resolve: {
    alias: { vue$: 'vue/dist/vue.esm.js' }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: createCssLoader(ic),
              less: createCssLoader(ic, 'less-loader'),
              sass: createCssLoader(ic, 'sass-loader'),
              scss: createCssLoader(ic, 'sass-loader'),
              stylus: createCssLoader(ic, 'stylus-loader'),
              styl: createCssLoader(ic, 'stylus-loader')
            }
          }
        }
      }
    ].concat(ic.isEslint ? [createEslintLoader(/\.vue$/, { fix: ic.isEslintFix })] : [])
  },

  plugins: [
    /**
     * Compatible with low-version Android system to 14X
     */
    // new VueLoaderPlugin()
    ...(ic.isStylelint
      ? [
          new StylelintPlugin({
            fix: ic.isStyletlintFix,
            files: ['**/*.s?(a|c)ss', '**/*.l?(e|c)ss', '**/*.vue'],
            failOnError: false
          })
        ]
      : [])
  ]
    .concat(
      ic.isVueProvide
        ? [
            new webpack.ProvidePlugin({
              Vue: ['vue/dist/vue.esm.js', 'default']
            })
          ]
        : []
    )
    .concat(
      ic.isComponentProvide
        ? [
            new webpack.ProvidePlugin({
              Component: ['vue-class-component', 'default']
            })
          ]
        : []
    )
})
