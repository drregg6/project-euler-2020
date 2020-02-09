/*

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

  d(2)d(3)d(4)=406 is divisible by 2
  d(3)d(4)d(5)=063 is divisible by 3
  d(4)d(5)d(6)=635 is divisible by 5
  d(5)d(6)d(7)=357 is divisible by 7
  d(6)d(7)d(8)=572 is divisible by 11
  d(7)d(8)d(9)=728 is divisible by 13
  d(8)d(9)d(10)=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.

*/
const getTestDigits = num => {
  const strNum = num.toString();
  let results = [];
  let limit = strNum.length - 1;

  while (limit > -1) {
    results.push(limit);
    limit--;
  }
  return results;
}

const isPandigital = num => {
  let strNum = num.toString();
  let arrStrNum = strNum.split('');
  let arrNum = arrStrNum.map(str => parseInt(str)).sort();

  const testArr = getTestDigits(num);
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] !== arrNum.length - 1) {
      if (arrNum[i] === arrNum[i+1]) return false;
    }
    if (testArr.indexOf(arrNum[i]) === -1) return false;
  }

  return true;
}

const getTestSeq = num => {
  let results = [];
  const strNum = num.toString();
  const arrStrNum = strNum.split('');
  const max = arrStrNum.length - 2;

  for (let i = 1; i < max; i++) {
    let tempNum = parseInt(arrStrNum[i] + arrStrNum[i+1] + arrStrNum[i+2]);
    results.push(tempNum);
  }
  return results;
}

const findThePandigitals = maxDigits => {
  results = [];
  let max = '1';
  let min = '1';
  let count = 1;
  while (count <= maxDigits) {
    max += '0';
    if (count !== maxDigits) {
      min += '0';
    }
    count++;
  }
  max = parseInt(max);
  min = parseInt(min);
  console.log(max, min);
  for (let i = min; i < max; i++) {
    if (isPandigital(i)) {
      results.push(i);
    }
  }
  return results;
}

console.log(findThePandigitals(10));