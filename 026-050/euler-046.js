/*

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

*/
const isPrime = require('../utils/Prime').isPrime;

const generateSquares = terms => {
  let results = [];
  let count = 2;
  while (results.length !== terms) {
    results.push(2**count);
    count++;
  }
  return results;
}
const generatePrimes = terms => {
  let results = [];
  let count = 2;
  while (results.length !== terms) {
    if (isPrime(count)) results.push(count);
    count++;
  }
  return results;
}
const isSquare = num => {
  if (num === 0) return false;
  let number = Math.sqrt(num / 2);
  return Number.isInteger(number);
}

const PRIMES = generatePrimes(150);
const SQUARES = generateSquares(74);



const findTheSmallestOdd = () => {
  let result = 3;
  let flag = true;

  while (flag) {
    let count = 0;
    flag = false;
    while (result >= PRIMES[count]) {
      let diff = result - PRIMES[count];
      let prime = PRIMES[count]
      console.log({diff, result, prime})
      if (isSquare(diff)) {
        flag = true;
      }
      count++;
    }
    result += 2;
  }
}

// console.log(PRIMES);
// console.log(SQUARES)
console.log(findTheSmallestOdd());
// INCOMPLETE