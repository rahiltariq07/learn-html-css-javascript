console.log("I am Learning JS Fuctions");

// FUCTION:
function variable(name) {
  console.log("Hey " + name + ", you are nice!");
  console.log("Hey " + name + ", you are good!");
  console.log("Hey " + name + ", your tshirt is nice!");
  console.log("Hey " + name + ", you are doing great!");
}

variable("Rahil");
variable("Aayik");

// function sum(a, b) {
//     console.log(a + b)
// }

// sum(3, 5)

function sum(a, b) {
    return a + b
}
 result = sum(4, 5)

 console.log("The sum of these numbers is", result)

 // ARROW FUCTION:
 const Func1 = (x)=>{
    console.log("I am an arrow fuction", x)
 }

 Func1(34);
 Func1(44);
 Func1(94);