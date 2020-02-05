/*

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

*/

const separateNumToArr = require('../utils/Num').separateNumToArr;
const isPrime = require('../utils/Prime').isPrime;

// let num = arr.shift()
// let newNum = arr.push(num);
// results.push(newNum)

const getAllNumVariations = num => {
  let results = [];
  let arr = separateNumToArr(num);
  let max = arr.length;
  let count = 0;
  while (count < max) {
    let num = arr.shift();
    arr.push(num);
    let resArr = arr.join('');
    results.push(resArr);

    count++;
  }
  return results.map(str => parseInt(str));
}

const isCircularPrime = num => {
  let arr = separateNumToArr(num);
  if (arr.indexOf(0) !== -1) return false;

  let circularNumbers = getAllNumVariations(num);
  for (let i = 0; i < circularNumbers.length; i++) {

    if (!isPrime(circularNumbers[i])) {
      return false;
    }
  }
  return true;
}

const getCircularPrimes = (min, max) => {
  let results = [];
  for (let i = min; i <= max; i++) {
    if (isCircularPrime(i)) {
      results.push(i);
    }
  }
  return results;
}

console.log(getCircularPrimes(2,1000000).length);