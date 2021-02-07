module.exports = {
  root: './__test__/src',
  injectStyle: ['./style/index.scss'],
  isCssExtract: true,
  isCssModule: false,
  isMergeCommon: true,
  isEslint: false,
  template: './__test__/template.html',
  isZip: true,

  port: 10001,

  devRouter: '/test'
  // cdn: 'https://www.test.cn/cdn/',
  // map: 'https://www.test.cn/map/'
}
