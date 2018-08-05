const {Transform} = require('stream')


module.exports = function()
{
  return new Transform({
    objectMode: true,
    transform(chunk, _, callback)
    {
      if(chunk.constructor.name === 'Object') chunk = JSON.stringify(chunk)

      callback(null, chunk)
    }
  })
}
