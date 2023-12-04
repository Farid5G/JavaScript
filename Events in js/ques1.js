let body = document.querySelector("body")
const btn = document.querySelector("button")
let curr = "light";
// btn.addEventListener("click",()=>{
//     if (curr === "light")
//     {
//         curr = "dark";
//         body.style.background = "grey"
//     }
//     else{
//         curr = "light"
//         body.style.background = "whitesmoke"
//     }
//     console.log(curr)
// })
btn.addEventListener("click",() =>{
    if (curr === "light"){
        curr = "dark";
        btn.innerText = "Dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        curr = "light"
        btn.innerText = "Light"
        body.classList.remove("dark")
        body.classList.add("light")
    }
})