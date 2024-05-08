//  Classes in JavaScript

class ToyotaCar {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new ToyotaCar("fortuner", 10); // constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12); // constructor
console.log(lexus);
