"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var a = [1, 2, 3];

var _ref = [].concat(_toConsumableArray(a)),
    a = _ref[0],
    b = _ref[1],
    c = _ref[2];

console.log(a, b, c);
// babel test.js --out-file test.compiled.js

var A = function A() {
  _classCallCheck(this, A);

  this.state = a;
};

Object.defineProperty(A, "p", {
  enumerable: true,
  writable: true,
  value: 1
});


var newA = new A();
console.log(newA);
