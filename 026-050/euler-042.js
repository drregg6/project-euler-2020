/*

The n^th term of the sequence of triangle numbers is given by, t(n) = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t(10). If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

*/

const fs = require('fs');

fs.readFile('./p042_words.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Get the data
  let res = data.toString();
  arr = res.split(',');
  arr = arr.map(str => str.replace(/^"(.*)"$/, '$1'))

  let triNums = getTriangleNumArr(100);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isWordValTriNum(arr[i], triNums)) result += 1;
  }
  console.log(result);
});

const getTriangleNumArr = max => {
  let results = [];
  for (let i = 1; i <= max; i++) {
    let result = (1/2) * i * (i + 1);
    results.push(result);
  }
  return results;
}

const getWordValue = str => {
  let arr = str.toUpperCase().split('');
  arr = arr.map(str => str.charCodeAt(0) - 64);

  return arr.reduce((a,b) => a+b);
}

const isWordValTriNum = (str, triNums) => {
  let wordVal = getWordValue(str);
  if (triNums.indexOf(wordVal) !== -1) {
    return true;
  }
  return false;
}