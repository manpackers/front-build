const chalk = require('chalk')
const ora = require('ora')
const webpack = require('webpack')
const merge = require('webpack-merge')
const spawn = require('cross-spawn')
const path = require('path')
const file = require('../utils/file')

module.exports = async (ic, config) => {
  const webpackConfig = merge.smart(
    {
      devtool: 'cheap-module-eval-source-map',

      plugins: [
        // remove hot module plugin.
        // new webpack.HotModuleReplacementPlugin()
      ]
    },
    config
  )
  const { output = {}, entry = {} } = webpackConfig

  if (ic.isBuild) {
    const spinner = ora('  Start building the project in real time……\n\n').start()
    const watchFile = path.join(ic.output, output.filename)
    const complie = webpack(webpackConfig)
    let stats = null

    await file.remove(ic.output)
    stats = await new Promise((resolve, reject) =>
      complie.watch({}, (err, stats) => {
        if (err) {
          return reject(err)
        }
        process.stdout.write(
          stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
          }) + '\n\n'
        )
        return resolve(stats)
      })
    )

    spinner.stop()
    spawn(
      'nodemon',
      [...(ic.isDebug ? [`--inspect=${ic.debugPort || 9229}`] : []), ...[`${watchFile}`, '--watch', `${watchFile}`]],
      {
        stdio: 'inherit'
      }
    )
    // Error infomation
    if (stats.hasErrors()) {
      // TODO
      // eslint-disable-next-line
      // console.log(chalk.red('  Build failed with errors.\n'))
    }
    // eslint-disable-next-line
    console.log(chalk.green(`\n Start the service entry：${ic.output}/${webpackConfig.output.filename}\n`))
  } else {
    Object.keys(entry).map(value => spawn('nodemon', [`${entry[value]}`, '--watch', ic.root], { stdio: 'inherit' }))
  }
}
