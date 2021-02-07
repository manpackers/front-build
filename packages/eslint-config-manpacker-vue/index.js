module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },

  globals: {
    Vue: false,
    Component: false
  },

  plugins: ['vue'],

  // Document link api: https://eslint.vuejs.org/rules/
  extends: ['manpacker', 'plugin:vue/essential', 'plugin:vue/strongly-recommended', 'plugin:vue/recommended'],

  rules: {
    // remove pascal case components
    // 'vue/component-name-in-template-casing': [
    //   'error',
    //   'PascalCase',
    //   {
    //     registeredComponentsOnly: false,
    //     ignores: []
    //   }
    // ],

    'vue/component-tags-order': [
      'error',
      {
        order: ['style', 'template', 'script']
      }
    ],

    'vue/no-v-html': 'off'
  }
}
