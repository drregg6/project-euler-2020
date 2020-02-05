/*

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.

*/

const factorial = require('../utils/Num').factorial;
const separateNumToArr = require('../utils/Num').separateNumToArr;
const sumOfArr = require('../utils/Arr').sumOfArr;

const isFactorialSum = num => {
  let arr = separateNumToArr(num);
  let factorials = arr.map(num => factorial(num));

  if (num === sumOfArr(factorials)) {
    return true;
  }
  return false;
}

const findTheFactorials = max => {
  let results = [];
  for (let i = 3; i <= max; i++) {
    if (isFactorialSum(i)) {
      results.push(i);
    }
  }
  console.log(results);
  return sumOfArr(results);
}

console.log(findTheFactorials(1000000));