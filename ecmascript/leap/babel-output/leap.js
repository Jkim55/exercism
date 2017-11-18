"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isLeapYear;

function isLeapYear(year) {
  // const is400thYear = year % 400 === 0
  // const is100thYear = year % 100 === 0
  // const is4thYear = year % 4 ===0

  return evaluate.is400thYear(year) || !evaluate.is100thYear(year) && evaluate.is4thYear(year);
}

var evaluate = {
  is400thYear: function is400thYear(year) {
    return year % 400 === 0;
  },
  is100thYear: function is100thYear(year) {
    return year % 100 === 0;
  },
  is4thYear: function is4thYear(year) {
    return year % 4 === 0;
  }
};
module.exports = exports["default"];