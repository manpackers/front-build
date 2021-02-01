const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const file = require('../utils/file')
const { dependencies, devDependencies } = file.parse('package.json')
const externals = (() => {
  const exts = {}

  if (dependencies) {
    Object.keys(dependencies)
      .concat(Object.keys(devDependencies))
      .forEach(value => {
        exts[value] = `commonjs2 ${value}`
      })
  }

  return exts
})()
const createEslintLoader = (rgx, { fix = false } = {}) => ({
  test: rgx,
  enforce: 'pre',
  exclude: /node_modules/,
  use: [
    {
      loader: 'eslint-loader',
      options: { formatter: require('eslint-friendly-formatter'), fix }
    }
  ]
})

// Webpack config
const generator = (ic, env = 'development') => {
  const resolveRoot = path.resolve(ic.root)
  const NODE_ENV = (process.env.NODE_ENV = env.toLowerCase())
  const entry = (() => {
    const rgx = /(\.m?[jt]s)$/
    const files = file.search(resolveRoot, rgx)
    const clone = {}

    // Push entry's name
    files.map(value => {
      const basename = path.basename(value, value.match(rgx)[1])
      return (clone[basename] = path.join(resolveRoot, value))
    })
    return clone
  })()

  return {
    entry,

    externals: ic.isExternalsDependencies ? externals : {},

    output: {
      filename: 'www',
      chunkFilename: 'js/[name].[chunkhash:13].js',
      path: path.resolve(ic.output)
    },

    target: 'node',

    mode: env,

    resolve: {
      extensions: ['.mjs', '.js', '.json', '.hbs', '.ts', '.tsx', '.vue', '.jsx', '.ejs', '.jade'],
      alias: { '@': resolveRoot }
    },

    node: {
      setImmediate: false,
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      path: 'empty',
      child_process: 'empty'
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          include: [resolveRoot],
          use: {
            loader: 'babel-loader?cacheDirectory=true'
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: { loader: 'ts-loader' }
        }
      ].concat(ic.isEslint ? [createEslintLoader(/\.(js|ts|mjs)$/, { fix: ic.isEslintFix })] : [])
    },

    plugins: [
      new webpack.ProgressPlugin(),

      // Define var
      new webpack.DefinePlugin(
        (define => {
          Object.keys(define).forEach(value => (define[value] = JSON.stringify(define[value])))
          return define
        })(merge(ic.define, { NODE_ENV }))
      )
    ]
  }
}

process.noDeprecation = true
module.exports = { generator, createEslintLoader }
