const {Transform} = require('stream')


const OPEN_BRACE = '{'.charCodeAt()


module.exports = function()
{
  return new Transform({
    objectMode: true,
    transform(chunk, _, callback)
    {
      if(chunk[0] === OPEN_BRACE)  // Only try to parse JSON for objects
        try {
          chunk = JSON.parse(chunk)
        }
        catch(e) {}

      callback(null, chunk)
    }
  })
}
