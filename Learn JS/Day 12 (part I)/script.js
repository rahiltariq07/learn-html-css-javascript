// Events in JS

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("clicked");
// }

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

let box = document.querySelector("div");

box.onmouseover = () => {
  console.log("hovered");
};
