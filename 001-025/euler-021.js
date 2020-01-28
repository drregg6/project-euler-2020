/*

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

*/

const reduceDivisors = arr => {
  if (arr.length === 0) return null;
  return arr.reduce((a,b) => a+b);
}
const findDivisors = num => {
  let results = [];
  let count = 1;
  let max = Math.floor(num / 2);
  while (count <= max) {
    if (num % count === 0) {
      results.push(count);
    }
    count++;
  }
  return results;
}

const isAmicable = num => {
  let numDivisors = findDivisors(num);
  let secondNum = reduceDivisors(numDivisors);
  let secondNumDivisors = findDivisors(secondNum);
  let testNum = reduceDivisors(secondNumDivisors);
  
  if (num === secondNum) return false;
  if (num === testNum) return true;
  return false;
}

const findTheAmicables = (min, max) => {
  let results = [];
  for (let i = min; i < max; i++) {
    if (isAmicable(i)) {
      results.push(i);
    }
  }
  return results;
}

const sumOfAmicables = arr => arr.reduce((a,b) => a+b);

console.log(findDivisors(8128));
console.log(reduceDivisors(findDivisors(8128)))
console.log(findDivisors(284));
console.log(isAmicable(220));
console.log(sumOfAmicables(findTheAmicables(1,10000)));