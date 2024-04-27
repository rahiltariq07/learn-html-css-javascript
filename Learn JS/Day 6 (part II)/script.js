// String Methods
let str = "Rahil Tariq";

console.log(str.toUpperCase());

console.log(str.toLowerCase());

let str0 = "     Rahil     is    a   Programmer      ";
console.log(str0.trim()); // removes starting and ending spaces, not middle spaces

console.log(str.slice(1, 9));

let str1 = "Rahil";
let str2 = "Tariq";
let result = str1.concat(str2); // we can also write str1 + str2
console.log(result);

let str3 = "hellololololo";
console.log(str3.replace("lo", "p")); // it replaces only first letter
console.log(str3.replaceAll("lo", "p")); // it replaces all

console.log(str.charAt(4));