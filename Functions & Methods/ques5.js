let num = parseInt(prompt("Enter the Number!!"));
let arr = [];
for (let i = 1; i <= num; i++) {
  arr[i - 1] = i;
}
console.log(arr);

const sum = arr.reduce((prv, cur) => {
  return prv + cur;
});

const mul = arr.reduce((prv, cur) => {
  return prv * cur;
});

console.log(
  `The Sum of the Number: ${sum} \n The Product of the Number: ${mul}`
);
