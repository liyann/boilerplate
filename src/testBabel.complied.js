'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var a = [1, 2, 3];

var _ref = [].concat(_toConsumableArray(a)),
    a = _ref[0],
    b = _ref[1],
    c = _ref[2];

console.log(a, b, c);
// babel test.js --out-file test.compiled.js

var A = function () {
  function A() {
    _classCallCheck(this, A);

    this.state = a;
  }

  _createClass(A, [{
    key: 'report',
    value: function report() {
      console.log('report');
    }
  }]);

  return A;
}();

Object.defineProperty(A, 'p', {
  enumerable: true,
  writable: true,
  value: 1
});


var newA = new A();
console.log(newA);
console.log(A.prototype);
console.log(A.p);
