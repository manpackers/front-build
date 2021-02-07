module.exports = {
  extends: ['manpacker/prettier', 'plugin:prettier-vue/recommended', 'prettier/vue'],

  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        semi: false,
        trailingComma: 'none',
        bracketSpacing: true,
        arrowParens: 'avoid',
        requirePragma: false,
        proseWrap: 'preserve'
      }
    ]
  }
}
