/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

// Compare two arrays
const areArraysEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);

// Check if a number is a palindrome
const isPalindrome = num => {
  // Cannot simply reverse and check because then arr1 is mutated
  let str = num.toString();
  let arr = [...str];
  let str2 = str.split('').reverse().join('');
  let arrRev = [...str2];
  return areArraysEqual(arr, arrRev);
}

// Find the largest palidrome
// Hoping it's factors between 900 - 999
const largestPalidrome = () => {
  for (let i = 999; i > 900; i--) {
    for (let j = 998; j > 990; j--) {
      if (isPalindrome(i * j)) {
        return i * j;
      }
    }
  }
  return null;
}

// Used for testing
const findPalidromes = () => {
  let results = [];
  let count = 99999;
  while (count >= 90000) {
    if (isPalindrome(count)) {
      results.push(count);
    }
    count--;
  }
  return results;
}