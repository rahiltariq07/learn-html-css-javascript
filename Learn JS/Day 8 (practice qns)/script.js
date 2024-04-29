/* Qn.01:- Create a Function using the "function" keyword that takes  String as an argument & returns the number of vowels in the string.*/

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

/* Qn.02:- Create an arrow function to perform the same task */

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    return count;
  }