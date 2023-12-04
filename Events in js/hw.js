let body = document.body;
let h1 = document.querySelector("h1");
let main = document.querySelector("main");
let div = document.createElement("div");
main.appendChild(div);
div.classList.add("slider");
let slider = document.querySelector(".slider");
const visible = () => {
  slider.style.visibility = "visible";
};
h1.addEventListener("mouseover", visible);

console.log(body);
