// Create a Same function to do the same task
let str = "Tahoor";
let lstr = str.toLowerCase();

let vowel = ["a", "e", "i", "o", "u"];


const countVowel = (lstr,vowel) => {
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

let vowNo = countVowel(lstr,vowel);
console.log(`No. of Vowel in ${str} is: ${vowNo}`);
