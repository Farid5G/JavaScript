let num = parseInt(prompt("Enter ur Score(0-100)"));

if (num >= 0 && num <= 49) {
    console.log("Grade F");
}else if (num >= 50 && num <= 59) {
    console.log("Grade D");
}else if (num >= 60 && num <= 69) {
    console.log("Grade C");
}else if (num >= 70 && num <= 89) {
    console.log("Grade B");
}else if (num >= 90 && num <= 100) {
    console.log("Grade A");
}else{
    console.log("Invalid Input");
    console.log("The Grade should be in between 0-100");
}


