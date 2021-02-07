const os = require('os')
const network = os.networkInterfaces()

const ip = (() => {
  let currentIp = '0.0.0.0'

  Object.keys(network).forEach(value => {
    network[value].forEach(val => {
      if (val.family === 'IPv4' && val.internal === false) {
        currentIp = val.address
      }
    })
  })
  return currentIp
})()

module.exports = { ip }
