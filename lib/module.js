'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var PubSub = (function (_EventEmitter) {
  _inherits(PubSub, _EventEmitter);

  function PubSub() {
    _classCallCheck(this, PubSub);

    _get(Object.getPrototypeOf(PubSub.prototype), 'constructor', this).call(this);
    this.subs = [];
  }

  _createClass(PubSub, [{
    key: 'pub',
    value: function pub(name, data, cb) {
      var _this = this;

      this.subs.filter(function (s) {
        return name.includes(s);
      }).map(function (s) {
        _this.emit(s, name, data);
      });
    }
  }, {
    key: 'sub',
    value: function sub(substring) {
      this.subs.push(substring);
    }
  }, {
    key: 'unsub',
    value: function unsub(substring) {
      var index = this.subs.indexOf(substring);
      if (index >= 0) {
        this.subs.splice(index, 1);
      }
    }
  }]);

  return PubSub;
})(_events.EventEmitter);

exports['default'] = PubSub;
module.exports = exports['default'];