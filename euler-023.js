/*

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

*/

const sumOfDivisors = num => {
  let max = Math.floor(num/2);
  let count = 1;
  let results = [];
  while (count <= max) {
    if (num % count === 0) {
      results.push(count);
    }
    count++;
  }
  if (results.length === 0) return null;
  return results.reduce((a,b) => a+b);
}

const isPerfect = num => true ? num === sumOfDivisors(num) : false;
const isDeficient = num => true ? num > sumOfDivisors(num) : false;
const isAbundant = num => true ? num < sumOfDivisors(num) : false;

const getAbundantNums = () => {
  let results = [];
  for (let i = 1; i <= 28123; i++) {
    if (isAbundant(i)) {
      results.push(i);
    }
  }
  return results;
}

const ABUNDANTS = getAbundantNums();
const isSumOfAbundant = num => {
  let count = 1;
  while (count <= num) {
    let additive = num - count;
    if (ABUNDANTS.indexOf(count) !== -1 &&
      ABUNDANTS.indexOf(additive) !== -1) {
        return true;
      }
    count++
  }
  return false;
}

const sumOfNoAbundants = () => {
  let results = [];
  for (let i = 1; i < 28124; i++) {
    if (!isSumOfAbundant(i)) {
      results.push(i);
    }
  }
  return results.reduce((a,b) => a+b);
}

console.log(sumOfNoAbundants());