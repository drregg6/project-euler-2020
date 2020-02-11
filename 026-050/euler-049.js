/*

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

*/
const isPrime = require('../utils/Prime').isPrime;
const separateNumToArr = require('../utils/Num').separateNumToArr;

// 1001 <= primeSeq <= 3339

// Func 1: isPrime
// Func 2: arePermutations
// Func 3: combineDigits

const arePermutations = (num, test) => {
  let numArr = separateNumToArr(num);
  let testArr = separateNumToArr(test);

  for (let i = 0; i < testArr.length; i++) {
    if (numArr.indexOf(testArr[i]) !== -1) {
      let idx = numArr.indexOf(testArr[i]);
      numArr.splice(idx, 1);
    }
  }
  if (numArr.length === 0) return true;
  return false;
}

const combineDigits = (...arguments) => {
  let result = '';
  for (let i = 0; i < arguments.length; i++) {
    let strNum = arguments[i].toString();
    result += strNum;
  }

  return parseInt(result);
}

const findTheDigits = () => {
  let results = []
  for (let i = 1001; i <= 3340; i = i + 2) {
    if (isPrime(i)) {
      let firstNum = i;
      let secondNum = firstNum + 3330;
      if (isPrime(secondNum)) {
        let thirdNum = secondNum + 3330;
        if (isPrime(thirdNum)) {
          if (arePermutations(firstNum, secondNum) && arePermutations(firstNum, thirdNum)) {
            results.push(combineDigits(firstNum, secondNum, thirdNum));
          }
        }
      }
    }
  }
  return results;
}

console.log(findTheDigits());