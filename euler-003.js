/*

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

*/

// prime: numbers that can only be divided by one and itself
// factors: numbers that, when multiplied, equal the number

// input: num
// output: largest prime factor

const maxNum = num => Math.floor(Math.sqrt(num));
const isPrime = num => {
  let count = 2;
  while (count <= maxNum(num)) {
    if (num % count === 0) {
      return false;
    }
    count++;
  }
  return true;
}
const getLargestPrime = num => {
  if (isPrime(num)) {
    return num;
  }
  let count = 2;
  while (count <= maxNum(num)) {
    if (num % count === 0) {
      return getLargestPrime(num / count);
    }
    count++;
  }
}