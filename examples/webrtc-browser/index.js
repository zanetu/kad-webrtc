'use strict';

var kademlia = require('kad');
var KadLocalStorage = require('kad-localstorage');
var EventEmitter = require('events').EventEmitter;
var WebRTC = require('../..');

// The two nodes share a signaller
var signaller = new EventEmitter();

// Create our first node
var node1 = new kademlia.Node({
  transport: new WebRTC({ nick: 'node1' }, { signaller: signaller }),
  storage: new KadLocalStorage('node1')
});

// Create a second node
var node2 = new kademlia.Node({
  transport: new WebRTC({ nick: 'node2' }, { signaller: signaller }),
  storage: new KadLocalStorage('node2')
});

node2.on('connect', onConnect);

node2.connect({ nick: 'node1' });

function onConnect() {
  node1.put('beep', 'boop', onPut);
}

function onPut(err) {
  node2.get('beep', onGet);
}

function onGet(err, value) {
  alert(value); // 'boop'
}
