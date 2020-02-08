/*

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?

*/
const isPrime = require('../utils/Prime').isPrime;
const isEven = require('../utils/Num').isEven;
const separateNumToArr = require('../utils/Num').separateNumToArr;

const areUniqueNums = num => {
  let arr = separateNumToArr(num).sort();
  let len = arr.length;
  let nums = [];
  for (let j = 1; j <= len; j++) {
    nums.push(j);
  }
  if (arr.indexOf(0) !== -1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length-1) {
      if (arr[i] === arr[i+1]) return false;
    }
    if (nums.indexOf(arr[i]) === -1) return false;
  }
  return true;
}

const findMax = digit => {
  let results = [];
  while (digit > 0) {
    results.push(digit);
    digit--;
  }
  return parseInt(results.join(''));
}

const largestPandigitalPrime = digits => {
  let max = findMax(digits);
  if (isEven(max)) max = max - 1;
  for (let i = max; i > 0; i = i - 2) {
    if (isPrime(i) && areUniqueNums(i)) {
      return i;
    }
  }
}

console.log(largestPandigitalPrime(7));
