module.exports = {
  plugins: ['stylelint-order'],

  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines', 'stylelint-config-prettier'],

  // https://ask.dcloud.net.cn/article/36067
  rules: {
    'no-missing-end-of-source-newline': true,
    'no-eol-whitespace': true,
    'string-quotes': 'single',
    'string-no-newline': true,
    'max-empty-lines': 1,
    'color-hex-case': ['lower'],
    'comment-whitespace-inside': 'never',
    'max-nesting-depth': 4,
    'no-unknown-animations': true,
    'shorthand-property-no-redundant-values': true,
    'property-case': 'lower',
    'number-leading-zero': 'always',
    'value-keyword-case': 'lower',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-max-compound-selectors': 5,
    'selector-class-pattern': '^[^A-Z]+$',
    'scss/at-import-partial-extension-blacklist': ['css'],
    'selector-no-qualifying-type': null,
    'property-no-unknown': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null
  }
}
