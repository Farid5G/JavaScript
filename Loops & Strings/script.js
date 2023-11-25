// let grp = parseInt(prompt("How Many Groups are participating !!"));
// For Loop
// let i;
// for(i = 1; i <= 5; i++){
//     console.log(`Hi Group ${i}`);
// }
// console.log("Let's Start")
// console.log(i);

// // while loop - Entry control loop
// let a = 0 ;
// while(a<5)
// {
//     console.log(`a = ${a}`);
//     a++;
// }

// // do while - Exit control loop
// let b = 1;
// do{
//     console.log(`b = ${b}`)
//     b++;
// }while(b<=5);

// for of Loop - iterate over the string and the arrays to find each element
let name = "Farid"
let len = 0;
// for(let char of name)
// {
//     console.log(char)
//     len++;
// }
// console.log(len)

// for in loop - iterate over the objects and the array
// In objects it finds the key
let student = {
    name: "Farid",
    Marks: 34,
    age:17
};
console.log(student.age)
for(let key in student)
{
    console.log(key)
    console.log(student[key])
}