"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isLeapYear;

function isLeapYear(year) {
  var is400thYear = year % 400 === 0;
  var is100thYear = year % 100 === 0;
  var is4thYear = year % 4 === 0;

  return is400thYear || !is100thYear && is4thYear;
}

module.exports = exports["default"];