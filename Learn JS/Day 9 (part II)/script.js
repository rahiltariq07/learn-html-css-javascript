// Map Method:
let nums = [72, 88, 92];

let newArr = nums.map((val) => {
  return val * val;
});
console.log(newArr);

// Filter Method:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr.filter((val) => {
  return val % 2 === 0;
})

console.log(evenArr);

// Reduce Method:
let arr1 = [1, 2, 3, 4];

const output = arr1.reduce((res, curr) => {
  return res + curr;
});
console.log(output);

/* find out the largest no. */
let arr2 = [66, 36, 88, 99, 101];

let output1 = arr2.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
})
console.log(output1);