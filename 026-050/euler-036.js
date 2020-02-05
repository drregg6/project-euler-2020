/*

The decimal number, 585(sub10) = 1001001001(sub2) (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/
const separateNumToArr = require('../utils/Num').separateNumToArr;
const isEven = require('../utils/Num').isEven;
const sumOfArr = require('../utils/Arr').sumOfArr;

const convertToBinary = num => {
  /*
    - Divide the number by 2.
    - Get the integer quotient for the next iteration.
    - Get the remainder for the binary digit.
    - Repeat the steps until the quotient is equal to 0.
  */
  let results = [];
  let quotient = num;
  while (quotient > 0) {
    let result = quotient % 2;
    results.push(result);
    quotient = Math.floor(quotient/2);
  }

  return BigInt(results.reverse().join(''));
}

const isPalindrome = num => {
  let bigIntNum = BigInt(num);
  let arr = separateNumToArr(num);
  let reverseNum = BigInt(arr
    .reverse()
    .join(''));
  if (bigIntNum === reverseNum) return true;
  return false;
}

const findThePalindromes = (min, max) => {
  let results = [];
  if (isEven(min)) min++;
  for (let i = min; i <= max; i = i + 2) {
    let binaryNum = convertToBinary(i);
    if (isPalindrome(i) && isPalindrome(binaryNum)) {
      results.push(i);
    }
  }
  return results;
}

console.log(isPalindrome(convertToBinary(73737)));
console.log(isPalindrome(585585));
console.log(sumOfArr(findThePalindromes(1, 1000000)));