const {obj: pumpify} = require('pumpify')

const deserializer = require('./deserializer')
const serializer   = require('./serializer')


module.exports = function(
  duplex,
  {deserializer: recvOpts, serializer: sendOpts} = {}
) {
  return pumpify(serializer(sendOpts), duplex, deserializer(recvOpts))
}
