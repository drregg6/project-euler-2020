/*

The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2^2 × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

*/
// Check four-digit numbers
// Divide by primes until there are four+ unique primes
const howManyUniquePrimes = num => {
  let results = [];
  const max = num / 2;
  
  let count = 2;
  while (count <= max) {
    if (num % count === 0) {
      if (results.indexOf(count) === -1) {
        results.push(count);
      }
      num = num / count;
      count = 2;
    } else {
      count++;
    }
  }

  return {
    length: results.length,
    results
  };
}

const findTheConsecutives = (sequence) => {
  let result = 0;
  for (let i = 1000; i <= 1000000; i++) {
    let numOfPrimes = howManyUniquePrimes(i).length;
    if (numOfPrimes === 4) {
      result = i;
      let primes = howManyUniquePrimes(i).results;
      if (howManyUniquePrimes(i+1).length === 4 &&
      howManyUniquePrimes(i+2).length === 4 &&
      howManyUniquePrimes(i+3).length === 4) {
        let nextNum = i+1;
        let primes1 = howManyUniquePrimes(i+1).results;
        let numNumberThree = i+2;
        let primes2 = howManyUniquePrimes(i+2).results;
        let numNumberFour = i+3;
        let primes3 = howManyUniquePrimes(i+3).results;
        return {
          result,
          primes,
          nextNum,
          primes1,
          numNumberThree,
          primes2,
          numNumberFour,
          primes3
        };
      }
    }
  }
  return result;
}

console.log(howManyUniquePrimes(4023));
console.log(howManyUniquePrimes(4024));
console.log(howManyUniquePrimes(4025));
console.log(howManyUniquePrimes(4026));
console.log(findTheConsecutives());