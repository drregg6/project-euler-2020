/*

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

*/

// 3x3 spiral
const spiralSum = (num) => {
  if (num % 2 === 0 || num < 3) {
    console.log('Please enter an odd number greater than 3')
    return;
  }
  let row = 3;
  let res = 1;
  
  while (row <= num) {
    let min = (row - 2)**2 + (row - 1);
    let max = row**2;
    for (let i = min; i <= max; i = i + (row - 1)) {
      res += i;
    }
    row = row + 2;
  }
  return res;
}

console.log(spiralSum(21));