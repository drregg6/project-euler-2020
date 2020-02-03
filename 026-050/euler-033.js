/*

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

*/

const areUniqueNums = require('../utils/Num').areUniqueNums;
const separateNumToArr = require('../utils/Num').separateNumToArr;
const quotientOfArr = require('../utils/Arr').quotientOfArr;

// Helper
const fractionAsArr = str => str.split('/').map(str => parseInt(str));
const listTheDivisors = num => {
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
  return [...results, num];
}

/*
Step 1
------
List the fractions
*/
const fractionsWithLikeNums = digits => {
  // Numerator and Demoninator will both be 2-digits
  // Numerator < Demoninator
  // Both will need a digit in common with eachother
  let results = [];
  let max = 1;
  if (digits === 2) max = 100;

  for (let numerator = 11; numerator < max-1; numerator++) {
    if (areUniqueNums(numerator)) {
      for (let denominator = numerator + 1; denominator < max; denominator++) {
        if (areUniqueNums(denominator)) {
          let numerArr = separateNumToArr(numerator);
          let denomArr = separateNumToArr(denominator);
          numerArr.forEach((num, i) => {
            if (denomArr.indexOf(num) !== -1 && denomArr.indexOf(num) !== i) {
              results.push(numerator + "/" + denominator);
            }
          });
        }
      }
    }
  }

  return results;
}

/*
Step 2
------
Input: Fraction - Output: Fraction with like-digits removed
*/
const removeLikeDigits = fractionString => {
  let arr = fractionString.split('/').map(str => parseInt(str)).map(num => separateNumToArr(num));

  for (let i = 0; i <= arr[0].length; i++) {
    // If num in arr[0] exists in arr[1]
    if (arr[1].indexOf(arr[0][i]) !== -1) {
      // Splice if from both
      let i2 = arr[1].indexOf(arr[0][i]);

      if (i === 1 && arr[0].length === 1) {
        arr[0].splice(0, 1);
      } else {
        arr[0].splice(i, 1);
      }

      arr[1].splice(i2, 1);
    }
  }

  let resultArr = arr.flat();
  if (resultArr.length < 2) return null;

  return resultArr.join('/');
}

/*
Step 3
------
Return true if original === reduced
*/
const areTheSame = fraction => {
  let reducedFraction = removeLikeDigits(fraction);
  let fracArr = fractionAsArr(fraction);
  let fracArr2 = fractionAsArr(reducedFraction);
  if (quotientOfArr(fracArr) === quotientOfArr(fracArr2)) {
    return true;
  }
  return false;
}

/*
Step 4
------
Find the four terms
*/
const findTheTerms = () => {
  let results = [];
  let fractions = fractionsWithLikeNums(2);
  fractions.forEach(fraction => {
    if (areTheSame(fraction)) {
      results.push(fraction);
    }
  });
  return results;
}

/*
Step 5
------
Separate the terms
*/
const termFractionsIntoArr = arr => arr.map(fraction => fractionAsArr(fraction));

/*
Step 6
------
Multiply the Numerators together
Multiply the Denominators together
Return the fraction
*/
const multiplyFractions = arr => {
  let num = 1;
  let den = 1;
  for (let i = 0; i < arr.length; i++) {
    num *= arr[i][0];
    den *= arr[i][1];
  }

  let numDivisors = listTheDivisors(num);
  let denDivisors = listTheDivisors(den);
  let greatestCommonDivisor = 1;
  for (let j = 0; j < numDivisors.length; j++) {
    if (denDivisors.indexOf(numDivisors[j]) !== -1) {
      greatestCommonDivisor = numDivisors[j];
    }
  }
  return den / greatestCommonDivisor;
}

console.log(multiplyFractions(termFractionsIntoArr(findTheTerms())));