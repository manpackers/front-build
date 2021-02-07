/**
 * Ic init config item options
 */
const path = require('path')
const packageJson = require(path.resolve(path.join(process.cwd(), './package.json')))
const { eslintConfig, stylelint } = packageJson

module.exports = {
  root: 'src',
  output: 'view',
  ext: 'htm',
  cdn: '',
  define: {},
  pages: {},
  remUnit: 100,
  isPx2rem: true,
  injectStyle: [],
  isMergeCommon: false,
  minChunks: 2,
  isCssModule: false,
  isMiniHTML: true,
  template: 'template.html',
  port: 8090,
  proxy: {},
  isCssExtract: false,
  map: '',
  isZip: false,
  isEslint: !!eslintConfig,
  isEslintFix: false,
  isStylelint: !!stylelint,
  isStyletlintFix: false,
  isCssExtract: false,
  isZip: false
}
