let marks = [85,97,44,37,76,60];
let sum = 0;
for(let mark of marks){
    sum = sum + mark;
}
console.log(`Avg marks of the Class is: ${sum/marks.length}`)