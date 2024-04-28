/* Qn.1:- For a given array with marks of students :- [85, 95, 74, 37, 76, 60]
          Find the average marks of the entire class. */

let marks = [85, 95, 74, 37, 76, 60];

let sum = 0;

for (let val of marks) {
  sum += val;
}

// console.log(sum); we will get sum of marks here

let avg = sum / marks.length;
console.log(`Average marks of the class : ${avg}`);