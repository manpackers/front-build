// eslint-disable-next-line import/no-extraneous-dependencies
const deepmerge = require('deepmerge')

// module.exports = require('./')
module.exports = deepmerge.all([require('./'), require('./prettier'), require('./npm')])
