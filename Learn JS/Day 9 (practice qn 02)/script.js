// Qn. 01:- We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks = [55, 67, 88, 92, 76, 98, 56, 99];

let topMarks = marks.filter((val) => {
  return val > 90;
});
console.log(topMarks);

/* Qn. 02:- Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array. */

let n = prompt("enter a number: ");

let arr = [];

for(let i=1; i<=n; i++) {
    arr[i-1] = i; //1(0), 2(1), 3(2),...
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log("sum of numbers = ", sum);

let mul = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log("product of numbers = ", mul);