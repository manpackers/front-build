module.exports = {
  plugins: ['prettier'],

  extends: ['prettier', 'plugin:prettier/recommended'],

  // Reset rules's configuration information for some "eslint-config-standard".
  rules: {
    // Document link：https://prettier.io/docs/en/options.html
    'prettier/prettier': [
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
