/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

*/

const halfNumber = num => num / 2;
const tripleNumber = num => (num * 3) + 1;
const sequence = num => {
  let count = 1;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = halfNumber(num);
    } else {
      num = tripleNumber(num);
    }
    count++;
  }
  return count;
}

const findLargestSeqUnder = num => {
  let startingNum = 0;
  let chainCount = 0;
  let count = 1;
  while (count <= num) {
    if (chainCount < sequence(count)) {
      chainCount = sequence(count);
      startingNum = count;
    }
    count++;
  }
  return startingNum;
}

console.log(findLargestSeqUnder(1000000));