'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);

    this.response = {
      annoyed: 'Whoa, chill out!',
      nonchalent: 'Sure.',
      angry: 'Fine. Be that way!',
      disengaged: 'Whatever.'
    };
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      if (speaker.isShouty(message)) {
        return this.response.annoyed;
      } else if (speaker.isAsking(message)) {
        return this.response.nonchalent;
      } else if (speaker.isSilent(message)) {
        return this.response.angry;
      } else {
        return this.response.disengaged;
      }
    }
  }]);

  return Bob;
})();

var speaker = {
  isShouty: function isShouty(input) {
    return (/[a-zA-Z]/.test(input) && input === input.toUpperCase()
    );
  },
  isAsking: function isAsking(input) {
    return (/\?$/.test(input)
    );
  },
  isSilent: function isSilent(input) {
    return !/[a-zA-Z0-9]/.test(input);
  }
};

exports['default'] = Bob;
module.exports = exports['default'];