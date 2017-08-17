var a = [1, 2, 3];
var [a, b, c] = [...a];
console.log(a, b, c);
// babel test.js --out-file test.compiled.js

class A {
  static p = 1;
  constructor() {
    this.state = a;
  }
  report() {
    console.log("report");
  }
}

let newA = new A();
console.log(newA);
console.log(A.prototype);
console.log(A.p);
let newA = new A();
console.log(newA);
console.log(A.prototype);
