const {Transform} = require('stream')


module.exports = function(options)
{
  return new Transform({
    ...options,
    objectMode: true,
    transform(chunk, _, callback)
    {
      // Only try to parse JSON for objects
      if(typeof chunk === 'string' && chunk[0] === '{')
        try {
          chunk = JSON.parse(chunk)
        }
        catch(e) {}

      callback(null, chunk)
    }
  })
}
