const { createEslintLoader } = require('@manpacker/generator')
// eslint-disable-next-line
const webpack = require('webpack')

module.exports = ic => ({
  module: {
    rules: [{ test: /\.jsx$/, use: ['babel-loader'] }].concat(
      ic.isEslint ? [createEslintLoader(/\.(t|j)sx$/, { fix: ic.isEslintFix })] : []
    )
  },

  plugins: [].concat(ic.isReactProvide ? [new webpack.ProvidePlugin({ React: 'react', ReactDOM: 'react-dom' })] : [])
})
