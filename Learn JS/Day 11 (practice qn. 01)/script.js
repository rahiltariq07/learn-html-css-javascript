/* Create a new button element. Give it a text "click me", background color of red & text color of white.
   Insert the button as the first element inside the body tag.*/

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red",
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);
