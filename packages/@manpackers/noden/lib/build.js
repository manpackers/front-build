const chalk = require('chalk')
const ora = require('ora')
const webpack = require('webpack')
const merge = require('webpack-merge')

const dater = require('../utils/dater')
const file = require('../utils/file')

const packageConfig = file.parse('package.json')
const webpackConfig = config =>
  merge.smart(
    {
      devtool: 'source-map',

      plugins: [
        new webpack.BannerPlugin({
          banner: [
            `(c): ${packageConfig.version}`,
            `@license Author: ${
              typeof (packageConfig.author || '') === 'object' ? packageConfig.author.name : packageConfig.author
            }`,
            `(t) ${dater.format()}`
          ].join('\n')
        }),

        new webpack.HashedModuleIdsPlugin()
      ]
    },
    config
  )

module.exports = async (ic, config) => {
  const builder = webpackConfig(config)
  const complie = webpack(builder)
  const spinner = ora('  Start building production environment……\n\n').start()
  let stats = null

  await file.remove(ic.output)
  stats = await new Promise((resolve, reject) => complie.run((err, stats) => (err ? reject(err) : resolve(stats))))
  spinner.stop()
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  )

  if (stats.hasErrors()) {
    // eslint-disable-next-line
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }
  // eslint-disable-next-line
  console.log(chalk.yellow(`${packageConfig.name} project build success.\n`))
  // eslint-disable-next-line
  console.log(chalk.yellow(`Start the service entry：${ic.output}/${builder.output.filename}\n`))
  return complie
}
