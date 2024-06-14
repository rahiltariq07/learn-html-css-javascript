// Asynchronous Programing
console.log("one");
console.log("two");

// Set Timeout
function hello() {
    console.log("hello");
}

setTimeout(hello, 4000) // timeout; 4000ms = 4 sec

// setTimeout(() => {
//     console.log("hello"); // Arrow Function
// }, 4000);

console.log("three");
console.log("four");