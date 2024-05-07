// Prototypes in JavaScript

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const rahilTariq = {
  salary: 50000,
};

rahilTariq.__proto__ = employee;
