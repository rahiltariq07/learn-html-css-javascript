/* Qno.01:- Create a H2 heading element with text - "Hello JavaScript". Append "from HDV students" to this text using JS.*/

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from HDV students";
console.dir(h2.innerText);

/* Qno.02:- Create 3 divs with common class name - "box". Access them & add some unique text to each of them. */

let divs = document.querySelectorAll(".box");

// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";

let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}