/*

Euler discovered the remarkable quadratic formula:

n^2+n+41

It turns out that the formula will produce 40 primes for the consecutive integer values 0 <= n <= 39. However, when n=40, 40^2+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41, 41^2+41+41 is clearly divisible by 41.

The incredible formula n^2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0 <= n <= 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

  n^2+an+b, where |a| < 1000 and |b| <= 1000

where |n| is the modulus/absolute value of n - e.g. |11|=11 and |−4|=4

Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

*/
const isPrime = require('../utils/Prime.js').isPrime;

// -1000 < a < 1000; b <= 1000
// for each combination
// find the largest consecutive list of primes

// if n starts at 0, 0^2 + 0 + b forces b to be prime
// b will be a positive prime greater than 0


// function that counts the primes
const largestStringOfPrimes = max => {
  let res = 0;
  let longestChain = 0;
  for (let b = 1; b <= max; b++) {
    if (isPrime(b)) {
      for (let a = (max * -1); a < max; a++) {
        let count = 1;
        while (isPrime(count**2 + (a * count) + b)) {
          count++;
        }
        if (count > longestChain) {
          longestChain = count;
          res = a * b;
        }
      }
    }
  }
  return res;
}

console.log(largestStringOfPrimes(1000));