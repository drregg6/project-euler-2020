/*

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

    1634 = 1^4 + 6^4 + 3^4 + 4^4
    8208 = 8^4 + 2^4 + 0^4 + 8^4
    9474 = 9^4 + 4^4 + 7^4 + 4^4

As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

*/

const toTheExpo = (num, expo) => num**expo;
const isExpoEqualToSum = (num, expo) => {
  const arr = num.toString().split('').map(num => parseInt(num));
  const exponentials = arr.map(num => toTheExpo(num,expo));
  if (exponentials.reduce((a,b) => a+b) === num) {
    return true;
  }
  return false;
}

const findTheSum = exponent => {
  let results = [];
  let strMax = "1";
  for (let i = 0; i < exponent + 1; i++) {
    strMax += "0";
  }
  let numMax = parseInt(strMax);

  for (let i = 2; i < numMax; i++) {
    if (isExpoEqualToSum(i, exponent)) {
      results.push(i);
    }
  }
  return results.reduce((a,b) => a+b);
}

console.log(findTheSum(5));