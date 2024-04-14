console.log("Hey this is day 1 part II")

// ***** Variables ***** (Var is a Globallyscope)
var a = 5;
a = a + 1;
var b = 6;
var c = "Rahil";
// var 55a = "Rahil";  NOT ALLOWED

console.log(a + b + 8);

// How to know any variables data type (typeof operator)

console.log(typeof a, typeof b, typeof c);

// ***** Constatnts *****
const a1 = 6;
// we can't change the value of a Constant eg: (a1 = a1 + 1)  NOT ALLOWED

// ***** Let ***** (Let is a Blockscope)

let d = 5;
let e = 6;

{
    let d = 78;
    console.log(d); //it will print internal d
}

console.log(d); //it will print external d

// ***** Primitive Data Types & Objects *****

// ** Primitive Data Type: are a set of basic data types in JS

// 7 Primitive Data Types in JS
/* Null, Number, String, Symbol, Undefined, Boolean & Big Int */

let x = "Rahil";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);



// ** Objects: User defined Data type

let o = {
    fname: "Rahil",
    "job code": 1234 // use double quote in job code because we use double quote if we use space between the words
}

console.log(o);
console.log(typeof o);

o.salary = "50lacs" //add anything in object
console.log(o);

o.salary = "55lacs"
console.log(o)