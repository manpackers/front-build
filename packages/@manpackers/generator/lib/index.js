const merge = require('webpack-merge')

const Commander = require('./commander')
const file = require('../utils/file')
const { createCssLoader, createURILoader, generator, createEslintLoader } = require('./kernel')

const { meipian = {} } = file.parse('package.json')
const icNormal = merge.smart(require('./config/ic'), meipian)

const compile = async ({ env = 'development', ic = {}, config = () => {} }) => {
  let icFinal
  let type
  let configFinal = {}

  if (env.toLowerCase() === 'production') {
    icFinal = merge.smart(icNormal, ic)
    type = 'build'
  } else {
    icFinal = merge.smart(icNormal, { ext: 'html' }, ic)
    type = 'server'
  }
  configFinal = config(icFinal) || configFinal

  return await require(`./${type}`)(icFinal, merge.smart(generator(env, icFinal, configFinal), configFinal))
}
module.exports = { Commander, createCssLoader, createURILoader, compile, createEslintLoader }
