module.exports = {
  rules: {
    // eslint-config-import dependencies package
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ]
  }
}
