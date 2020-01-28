/*

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

*/

const fs = require('fs');

fs.readFile('./p022_names.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // data is returned and sorted
  let res = data.toString();
  arr = res.split(',');
  arr = arr.map(name => name.replace(/^"(.*)"$/, '$1'));
  arr.sort();

  // Test case
  arr.forEach((name, i) => {
    if (name === 'COLIN') {
      console.log(stringScore(name) * i)
    }
  });

  // Get alpha score for each name
  arr = arr.map(name => stringScore(name));
  console.log(arr);

  // Multiply alpha score with position (+1 for base 0)
  arr = arr.map((score, i) => score * (i+1));
  console.log(arr.reduce((a,b) => a+b));
});

// create a function which returns a string's 'score'
const stringScore = str => {
  let arr = str.toLowerCase().split('');
  arr = arr.map((str) => str.charCodeAt() - 96);
  return arr.reduce((a,b) => a+b);
}

console.log(stringScore('COLIN'));