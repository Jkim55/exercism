'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Transcriptor = (function () {
  function Transcriptor() {
    _classCallCheck(this, Transcriptor);
  }

  _createClass(Transcriptor, [{
    key: 'toRna',
    value: function toRna(dna) {
      return [].concat(_toConsumableArray(dna)).map(this.translate).join('');
    }
  }, {
    key: 'translate',
    value: function translate(char) {
      if (translationKey.hasOwnProperty(char)) {
        return translationKey[char];
      }
      throw new Error('Invalid input DNA.');
    }
  }]);

  return Transcriptor;
})();

var translationKey = {
  C: 'G',
  G: 'C',
  A: 'U',
  T: 'A'
};
exports['default'] = Transcriptor;
module.exports = exports['default'];