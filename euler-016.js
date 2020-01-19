/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

const getSumOfDigits = num => {
  let strNum = num.toString();
  let arrNum = strNum.split('');
  arrNum = arrNum.map(num => parseInt(num));
  return arrNum.reduce((a, v) => a + v);
}

const twoToAnExponent = exponent => {
  let solution = 2**exponent;
  if (solution > 9007199254740991) {
    return BigInt(solution);
  }
  return solution;
}

console.log(getSumOfDigits(twoToAnExponent(1000)));