const {Transform} = require('stream')


const OPEN_BRACE = '{'.charCodeAt()


module.exports = function(options)
{
  return new Transform({
    ...options,
    objectMode: true,
    transform(chunk, _, callback)
    {
      // Only try to parse JSON for objects
      const firstByte = typeof chunk === 'string' ? '{' : OPEN_BRACE
      if(chunk[0] === firstByte)
        try {
          chunk = JSON.parse(chunk)
        }
        catch(e) {}

      callback(null, chunk)
    }
  })
}
