/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

const isEven = (num) => num % 2 === 0;
const hasNoRemainder = (num, divisible) => num % divisible === 0;
const smallestNumberEvenlyDivisible = max => {
  // Let's not test for small sequences
  if (max < 5) return 'Please enter a number greater than or equal to 5';
  if (max > 20) return 'Please enter a number less than or equal to 20';

  let testNum = 60;
  let count = 3;
  
  while (count <= max) {
    if (!isEven(testNum) || !hasNoRemainder(testNum, count)) {
      count = 3;
      testNum++;
    } else {
      count++;
    }
  }
  return testNum;
}

console.log(smallestNumberEvenlyDivisible(20));