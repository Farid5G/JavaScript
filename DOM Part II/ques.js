// Question  1

const btn = document.createElement("button");
btn.innerText = "Click me!";
btnStyle = btn.style;
btnStyle.background = "red";
btnStyle.color = "white";
document.querySelector("body").prepend(btn);

// Question 2
const para = document.querySelector("p");
para.classList.add("newClass");
