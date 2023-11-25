// Let's Create  a gameNo And tell user to Guess (Run the loop till user Enters right No.)

let gameNo = 34;
let useNo = parseInt(prompt("Guess the Number!!"));
while (useNo !== gameNo) {
  useNo = parseInt(prompt("You Entered a wrong Number Guess Again!!"));
}
console.log("Congrats you Won!!");
