/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

const isPrime = num => {
  const max = Math.floor(Math.sqrt(num));
  let count = 2;
  while (count <= max) {
    if (num % count === 0) {
      return false;
    }
    count++;
  }
  return true;
}

const findThePrime = position => {
  let count = 2;
  let positionCount = 0;
  
  while (true) {
    if (isPrime(count)) {
      positionCount += 1;
      if (positionCount === position) {
        return count;
      }
    }
    count++;
  }
}