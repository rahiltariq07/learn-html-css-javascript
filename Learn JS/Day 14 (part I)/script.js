// Inheritance in JS

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();

// Another Example

class Person {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  work() {
    console.log("solve problems, build something");
  }
}

class Doctor extends Person {
  work() {
    console.log("traet patients");
  }
}

let rahilObj = new Engineer();
