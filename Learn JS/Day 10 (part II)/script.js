// DOM Manipulation:

let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("heading");
console.dir(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

// Query Selector

let firstEl = document.querySelector("p"); // 1st element
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); // all elements
console.dir(allEl);

let id = document.querySelectorAll("#heading"); // 1st element
console.dir(id);

let class1 = document.querySelectorAll(".heading"); // 1st element
console.dir(class1);

let div = document.querySelector("div");
console.dir(div);

let id5 = document.querySelector("#id5");
console.dir(id5);