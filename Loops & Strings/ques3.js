console.log("Let's Create a Username for You Insta Account")
let str = prompt("Enter your Name");
let usrNme = `${'@' + str.trim() + str.length}`;
console.log(`Your Username is ${usrNme}`);