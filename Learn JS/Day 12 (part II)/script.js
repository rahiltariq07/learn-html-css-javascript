// Events in JS

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
  console.log("clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("clicked - handler2");
  });

const handler3 = () => {
  console.log("clicked - handler3");
};

  btn1.addEventListener("click", handler3);

  btn1.addEventListener("click", () => {
    console.log("clicked - handler4");
  });

btn1.removeEventListener("click", handler3);

