// Q.no.01:- Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.style.backgroundColor = "blue";
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modeBtn.style.backgroundColor = "red";
    }

    console.log(currMode);
})