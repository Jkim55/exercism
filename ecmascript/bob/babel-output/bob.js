'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);

    this.phrases = {
      yell: 'Whoa, chill out!',
      question: 'Sure.',
      silence: 'Fine. Be that way!',
      whatever: 'Whatever.'
    };
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      return this.phrases[whatever];
    }
  }]);

  return Bob;
})();

exports['default'] = Bob;
module.exports = exports['default'];