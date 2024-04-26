// Comment Loops before browsing

For Loop

for (let i = 1; i <= 5; i++) {
    console.log("i=", i);
}

Whie Loop

let i = 1;
while (i<=5) {
    console.log("i=" , i);
    i++;
}

Do-While Loop

let i = 1;
do {
    console.log("i=", i);
    i++;
} while (i<=5);

For-Of Loop

let str = "Rahil";

for (let i of str) {
    console.log("i=", i);
}

For-In Loop

let student = {
    name: "Rahil Tariq",
    age: "20",
    cgpa: "7.5",
    isPass: true
};

for (let key in student) {
    console.log(key, student[key]);
}