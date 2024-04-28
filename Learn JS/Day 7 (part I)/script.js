// Arrays

let marks = [97, 43, 76, 98];
marks[1] = 78; // we can change the value of arrays
console.log(marks);

let heroes = ["abu bakar", "umar", "usman", "ali"];
console.log(heroes);
console.log(heroes[3]); //array index

// Looping over an Array:

//for loop
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

//for-of
for (let hero of heroes) {
    console.log(hero.toUpperCase());
}