/*

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

*/
const sumOfArr = require('../utils/Arr').sumOfArr;
const isPrime = require('../utils/Prime').isPrime;

const isTruncatable = num => {
  const strNum = num.toString();
  const arrNum = strNum.split('');
  let tempArr = [...arrNum];
  const max = arrNum.length;
  if (max < 2) return false;

  for (let i = 0; i <= max; i++) {
    let tempNum = parseInt(tempArr.join(''));
    if (!isPrime(tempNum)) return false;

    tempArr.pop();
  }

  tempArr = [...arrNum];
  for (let j = 1; j <= max; j++) {
    let tempNum = parseInt(tempArr.join(''));
    if (!isPrime(tempNum)) return false;

    tempArr.shift();
  }

  return true;
}

const findTheTruncatables = (min, max) => {
  let results = [];
  if (min <= 9) return `min must be greater than 9`;
  for (let i = min; i <= max; i++) {
    if (isTruncatable(i)) results.push(i);
  }
  return results;
}

console.log(findTheTruncatables(10,1000000))
console.log(sumOfArr(findTheTruncatables(10,1000000)))