const deepmerge = require('deepmerge')

module.exports = (context, options = {}) => {
  const presets = []
  const plugins = []
  const { loose, debug, useBuiltIns, corejs, modules, targets } = options
  const envOptions = deepmerge({ loose, debug, modules, useBuiltIns, corejs, targets }, options)

  presets.unshift(['manpacker', envOptions])
  presets.push('@babel/react')
  plugins.push('transform-react-remove-prop-types')
  return { presets, plugins }
}
