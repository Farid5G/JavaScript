// let dropDown = document.querySelector("#dropdown")
// const size= ()=>{

// }
// dropDown.addEventListener("mouseover",print)
let div = document.querySelector("div");
// console.log(div.childNodes)
// div[1].innerText = "hello"
let toggle = div.children[1];
console.log(toggle);
let drp = "Static";
const dp = () => {
  if (drp === "Static") {
    drp = "drop";
    toggle.classList.add("dropup");
    toggle.classList.remove("dropdown");
    console.log(drp);
  } else {
    drp = "Static";
    toggle.classList.add("dropup");
    toggle.classList.remove("dropdown");
  }
};
// toggle.addEventListener("click",dp)
