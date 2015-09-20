'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _module2 = require('../module');

var _module3 = _interopRequireDefault(_module2);

(0, _tape2['default'])('pubsub', function (t) {
  t.plan(2);
  var pubsub = new _module3['default']();
  pubsub.sub('//chat1');
  var recvd = '',
      recvdPath = '';
  pubsub.on('//chat1', function (path, msg) {
    recvd = msg;
  });
  pubsub.pub('//chat1/main', 'hello');
  t.equal(recvd, 'hello');
  recvd = false;
  pubsub.sub('main');
  pubsub.on('main', function (path, msg) {
    recvdPath = path;
  });
  pubsub.pub('//chat1/main', 'test');
  t.equal(recvdPath, '//chat1/main');
});