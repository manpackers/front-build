const generator = require('@manpacker/generator')
const kernel = require('./kernel')
// eslint-disable-next-line
const merge = require('webpack-merge')
const icNormal = require('./ic')

const compile = ({ env = 'development', ic, config }) =>
  generator.compile({
    env,
    ic,
    config: ic => {
      const icFinal = merge.smart(icNormal, ic)
      return merge.smart(kernel(icFinal, env), config(icFinal))
    }
  })
module.exports = { compile }
