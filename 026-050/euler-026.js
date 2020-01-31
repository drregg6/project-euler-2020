/*

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

    1/2	= 	0.5
    1/3	= 	0.(3)
    1/4	= 	0.25
    1/5	= 	0.2
    1/6	= 	0.1(6)
    1/7	= 	0.(142857)
    1/8	= 	0.125
    1/9	= 	0.(1)
    1/10	= 	0.1 

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

*/

// 0.142857142857142857

// start with fraction
// get the remainder of that fraction
// add a zero to that remainder,
// then divide by d
// continue until you find remainder === remainder

const howManyRepeats = d => {
  let remainders = [];
  let remainder = 1 % d;
  let numerator = 0;
  let count = 0;
  while (remainders.indexOf(remainder) === -1) {
    remainders.push(remainder);
    numerator = parseInt(remainder.toString() + '0');
    remainder = numerator % d;
    count++;
  }
  return count;
}

const findTheLongestRepeat = max => {
  let result = 0;
  let count = 3;
  while (count <= max) {
    if (howManyRepeats(count) > result) {
      result = count;
    }
    count = count + 2;
  }
  return result;
}

console.log(findTheLongestRepeat(1000));