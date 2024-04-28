// // Array Methods

// let foodItems = ["potato", "apple", "litchi", "tomato"];

// // foodItems.push("layz", "cold drink"); adds items at end
// console.log(foodItems);
// let deletedItem = foodItems.pop(); // delete the items from ending
// console.log(foodItems);

// console.log(`deletem item: ${deletedItem}`);

// console.log(foodItems.toString()); // Convert array into string

// let marvelHeroes = ["iron man", "spider man", "thor"];
// let dcHeroes = ["super man", "bat man", "flash"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// // marvelHeroes.unshift("captain america"); add items on starting

// let val = marvelHeroes.shift()
// console.log(`deleted hero ${val}`)

let marvelHeroes = ["iron man", "spider man", "thor", "ant man", "dr strange"];
console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 3));

// marvelHeroes.splice(3, 2, "hulk", "rahil");
console.log(marvelHeroes);

marvelHeroes.splice(2, 0, "hulk")
console.log(marvelHeroes);