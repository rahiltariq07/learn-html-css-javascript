// Functions in JS

function myFunction() {
  console.log("Welcome to HDV!");
  console.log("We are learning JS");
}
myFunction();
//
function myNewFunction(msg) { // parameter :- input
  console.log(msg);
}
myNewFunction("I Love JS"); // argument
//
function sum(x, y) { // x, y are local variables
  s = x + y;
  return s;
}
let val = sum(3, 4);
console.log(val);

// Arrow Function
function sum(a, b) {
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
};