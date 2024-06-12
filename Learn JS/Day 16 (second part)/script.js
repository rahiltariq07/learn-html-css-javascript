// ERROR HANDLING

let a = 2;
let b = 5;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);

try {
    console.log("a + b = ", a + c);
} catch (err) {
    console.log(err); // err is error object
}

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);