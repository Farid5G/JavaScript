// function dark(){
//     document.body.style.backgroundColor = "Black";
//     document.body.style.color = "white";
// }
// function light(){
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
// }
let heading = document.querySelector("h2");
heading.innerText = heading.innerText + " from Apna College";

let divs = document.querySelectorAll(".box");
// console.log(divs.firstChild)
divs[0].innerText = "Hey";

// let bx = document.querySelector(".box")
// bx.innnerText = "hey"
console.log(divs.length);
for (let i = 0; i < divs.length; i++) {
  divs[i].innerText = `Unique Value ${i}`;
}
