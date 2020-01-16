/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

const squared = num => num**2;
const isInt = num => Number.isInteger(num);
function isNaturalSeq() {
  let solution = true;
  let args = [...arguments];
  args.forEach(argument => {
    if (!isInt(argument)) {
      solution = false;
    }
  });
  return solution;
}

const generateTriplet = (largeNum, smallNum) => {
  let a = largeNum * smallNum;
  let b = (squared(largeNum) - squared(smallNum)) / 2;
  let c = (squared(largeNum) + squared(smallNum)) / 2;

  return {
    a,
    b,
    c
  }
}

const findTheTriplet = () => {
  for (let i = 2; i < 100; i++) {
    for (let j = 1; j < i; j++) {
      const { a, b, c } = generateTriplet(i, j);
      if (isNaturalSeq(a, b, c)) {
        if ((a + b + c) === 1000) {
          return a * b * c;
        }
      }
    }
  }
}