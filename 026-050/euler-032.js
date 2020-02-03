/*

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

*/
const sumOfArr = require('../utils/Arr').sumOfArr;
const combiningArrs = require('../utils/Arr').combiningArrs;

const separateNumToArr = num => {
  let str = num.toString();
  let arr = [...str];
  return arr.map(str => parseInt(str));
}

const areUniqueNums = num => {
  let arr = separateNumToArr(num).sort();
  if (arr.indexOf(0) !== -1) return false;
  for (let i = 0; i < (arr.length - 1); i++) {
    if (arr[i] === arr[i+1]) {
      return false;
    }
  }
  return true;
}

const findTheSum = () => {
  let products = [];
  for (let i = 1; i < 10; i++) {
    for (let j = 1000; j < 10000; j++) {
      if (areUniqueNums(j)) {
        let product = j * i;
        let fullArr = combiningArrs(
          separateNumToArr(j),
          separateNumToArr(i),
          separateNumToArr(product)
        );
        let num = fullArr.join('');
        if (areUniqueNums(num) && products.indexOf(product) === -1) products.push(product);
      }
    }
  }
  for (let k = 12; k < 99; k++) {
    if (areUniqueNums(k)) {
      for (let m = 102; m < 987; m++) {
        if (areUniqueNums(m)) {
          let product = m * k;
          let fullArr = combiningArrs(
            separateNumToArr(m),
            separateNumToArr(k),
            separateNumToArr(product)
          );
          let num = fullArr.join('');
          if (areUniqueNums(num) && products.indexOf(product) === -1) products.push(product);
        }
      }
    }
  }
  return sumOfArr(products);
}

console.log(findTheSum());