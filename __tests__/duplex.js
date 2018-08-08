const {PassThrough} = require('stream')

const {duplex} = require('..')


test('object', function(done)
{
  duplex(new PassThrough)
  .on('error', function(error)
  {
    expect(error).toEqual('Source stream must be in object mode')

    done()
  })
  .write({asdf: 1234})
})

test('object (duplex objectMode)', function(done)
{
  const expected = {asdf: 1234}

  duplex(new PassThrough({objectMode: true}))
  .on('data', function(data)
  {
    expect(data).toEqual(expected)

    done()
  })
  .write(expected)
})

test('string', function(done)
{
  const expected = "asdf"

  duplex(new PassThrough({objectMode: true}))
  .on('data', function(data)
  {
    expect(data.toString()).toEqual(expected)

    done()
  })
  .write(expected)
})
