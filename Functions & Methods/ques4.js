// Filter out the students who scored above 90+
let allStudMarks = [95, 92, 94, 91, 93, 17, 38, 64, 72, 86];
let topStudMarks = allStudMarks.filter((val) => {
  return val > 90;
});
console.log(topStudMarks);
