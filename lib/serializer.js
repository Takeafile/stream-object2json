const {Transform} = require('stream')


module.exports = function(options)
{
  return new Transform({
    ...options,
    objectMode: true,
    transform(chunk, _, callback)
    {
      if(chunk.constructor.name === 'Object') chunk = JSON.stringify(chunk)

      callback(null, chunk)
    }
  })
}
