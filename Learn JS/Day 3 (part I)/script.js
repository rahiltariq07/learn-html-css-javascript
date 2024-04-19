console.log("I am learning JS Loops");

let a = 1;
// console.log(a + 1);
// console.log(a + 2);
// console.log(a + 3);
// console.log(a + 4);  Its very Hectic to do with this

// FOR LOOP: for (statement 1; statement 2; statement 3){
//     code to be executed
// }
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

// FOR-IN LOOP: for (key in obejct){
//     code to be executed
// }
let obj = {
    name: "Rahil",
    role: "Programmer",
    company: "HDV"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
}

// FOR-OF LOOP: for (variable of iterable) {             (Iterable data structure like arrays, strings,etc)
//     code to be executed
// }
for (const iterator of "Rahil") {
    console.log(iterator)
}

// WHILE-LOOP: while (condition) {
//     code to be executed
// }
let i = 5;
while (condition) {
    console.log(i)
    i++; // it will print 5
}

// DO-WHILE LOOP: do {                *LEAST USED*
//     code to be executed            
// }
// while (condition)
let i = 5;
do {
    console.log(i)
    i++;    
} while (i < 6);   // it will print 0 to 5