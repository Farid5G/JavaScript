let str = "Tahoor";
let lstr = str.toLowerCase();

let vowel = ["a", "e", "i", "o", "u"];
function PrintVowel(lstr, vowel) {
  let vow = 0;
  for (let vi of vowel) {
    for (v of lstr) {
      if (v === vi) {
        vow++;
      }
    }
  }
  return vow;
}

let vowNo = PrintVowel(lstr, vowel);
console.log(`No. of Vowel in ${str} is: ${vowNo}`);
