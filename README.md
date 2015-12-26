Kad WebRTC Transport
====================

A WebRTC transport adapter for [Kad](https://github.com/gordonwritescode/kad).

Setup
-----

```
npm install kad@1.1.0-beta.2 kad-webrtc
```

Usage
-----

```js
var Node = require('kad').Node;
var WebRTC = require('kad-webrtc');

var dht = new Node({
  // ...
  transport: WebRTC({ nick: 'mynickname' }, {
    signaller: SignalServer // see examples
  })
});

dht.connect({ nick: 'somebody' }, function(err) {
  console.log('party!');
});
```

Examples
--------

To build the examples, run `npm run build-examples`.

After that, look at the READMEs in each file
to see how to run them.

