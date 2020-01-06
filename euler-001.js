/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

*/

// IF num is divisible by 3
// OR
// IF num is divisible by 5
// Add to SUM

const isMultipleOfThree = num => true && num % 3 === 0;
const isMultipleOfFive = num => true && num % 5 === 0;
const sumMultiplesThreeAndFive = num => {
  let result = 0;
  let count = 0;
  while (count < num) {
    if (isMultipleOfThree(count) || isMultipleOfFive(count)) {
      result += count;
    }
    count++;
  }
  return result;
}

console.log(sumMultiplesThreeAndFive(1000));