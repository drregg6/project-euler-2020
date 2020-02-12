/*

The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

*/
const isPrime = require('../utils/Prime').isPrime;

const getPrimes = max => {
  let results = [2];
  let count = 3;

  while (count <= max) {
    if (isPrime(count)) results.push(count);
    count = count + 2;
  }

  return results.map(num => BigInt(num));
}
const cumulativeSums = arr => {
  let results = [BigInt(2)];
  for (let i = 1; i < arr.length; i++) {
    results.push(results[i-1] + arr[i]);
  }
  return results;
}

const PRIMES = getPrimes(1000000);

const getGreatestSum = (sums, max) => {
  let chain = 0;
  let result = 0;
  let bigIntMax = BigInt(max);

  for (let i = 0; i < sums.length; i++) {
    for (let j = i; j > -1; j--) {
      if (sums[i] >= bigIntMax || sums[j] >= bigIntMax) break;
      let tempResult = sums[i] - sums[j];
      let tempChain = i - j;
      if (j === i) {
        tempResult = sums[i];
        tempChain = i + 1;
      }
      if (tempResult > bigIntMax) break;
      if (PRIMES.indexOf(tempResult) !== -1 && tempChain > chain) {
        result = tempResult;
        chain = tempChain;
      }
    }
  }
  return {chain, result};
}

console.log(getGreatestSum(cumulativeSums(PRIMES), 1000000));