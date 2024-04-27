// Strings
let str = "Rahil Tariq";

console.log(str[0], str[1], str[2], str[3], str[4]); // R  A  H  I  L

//Template Literals
let specialString = `This is a template literal ${1+2+3}`; // back ticks
console.log(specialString);

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item, "is", obj.price, "rupees"); // we usually write this

let output = `the cost of ${obj.item} is ${obj.price} rupees`; // in template, we write like this. It is very easier than above one
console.log(output);

console.log("Rahil\nTariq") // \n create next. it is the <br> of js
console.log("Rahil\tTariq") // \t provides tab spacee2

// String Methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str2 = "     Rahil     is    a   Programmer      ";
console.log(str2.trim());  // removes starting and ending spaces, not middle spaces