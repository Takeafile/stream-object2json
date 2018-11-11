# stream-object2json

Convert object mode streams to and from JSON strings

Set of streams to convert from and to plain objects to JSON strings. If they are
of other type, they are emitted untouched.

## Install

```sh
npm install stream-object2json
```

## API

### deserializer

Convert JSON strings to plain objects. In case destination stream is not in
object mode, it will emit an `error` event.

- *options*: options passed to underlying `Transform` stream

### duplex

Wrap a strings based `Duplex` stream object so it's possible to write and read
Javascript plain objects.

- *duplex*: `Duplex` stream to be wrapped
- *options*
  - *deserializer*: options passed to deserializer stream
  - *serializer*: options passed to serializer stream

### serializer

Convert plain objects to JSON strings

- *options*: options passed to underlying `Transform` stream
