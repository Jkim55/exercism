'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: 'compute',
    value: function compute(d1, d2) {
      if (d1.length === d2.length) {
        return [].concat(_toConsumableArray(d1)).filter(function (nucleotide, i) {
          return nucleotide !== d2[i];
        }).length;
      }
      throw new Error('DNA strands must be of equal length.');
    }
  }]);

  return Hamming;
})();

exports['default'] = Hamming;
module.exports = exports['default'];