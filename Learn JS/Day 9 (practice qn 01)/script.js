// Qn. 01:- For a given array of numbers, print the square of each value using the forEach Loop.

// Rahil's way
let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach((val) => {
    console.log("square of", val, "=", val**2);
});

// Mam's Way
let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num*num);
});