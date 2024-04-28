/* Qn.1:- Create an array to store companies:- "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

          a. Remove the first company from the array
          b. Remove Uber and add OLA in its place
          c. Add Amazon at the end*/

// a.
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);

// b.
companies.splice(0, 1, "OLA");
console.log(companies);

// c.
companies.push("Amazon");
console.log(companies);