console.log(document.body)
// let color = prompt("What should be My box color")
const div = document.querySelector("div")
// div.setAttribute("class",className)
// const str = div.getAttribute("class")
// console.log(str)
// console.log(document.body)
const box = document.createElement("div")
box.innerHTML = "  <ul><li>orange</li><li>banana</li><li>chikoo</li><li>Mango</li><li>Apple</li></ul>"
let styb = box.style
styb.background = "pink"
styb.border = "2px solid black"
styb.width = '300px'
styb.height = "200px"
styb.marginBottom = "5px"
const btn = document.createElement("button")
btn.innerText = "Submit"
console.log(btn)    
// console.log(box)    
box .append(btn)
div.prepend(box)