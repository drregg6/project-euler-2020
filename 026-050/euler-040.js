/*

An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d(n) represents the nth digit of the fractional part, find the value of the following expression.

d(1) × d(10) × d(100) × d(1000) × d(10000) × d(100000) × d(1000000)

*/

const generateDecimal = max => {
  let result = '';
  let count = 1;
  while (result.length <= max) {
    let strNum = count.toString();
    result += strNum;

    count++;
  }
  return result;
}

const getDigit = index => {
  let number = generateDecimal(index);
  return number.slice(index-1, index);
}

const getTheProduct = (...arguments) => {
  let results = [];
  for (let i = 0; i < arguments.length; i++) {
    results.push(getDigit(arguments[i]));
  }
  let numArr = results.map(str => parseInt(str));
  return numArr.reduce((a,b) => a * b);
} 

console.log(generateDecimal(100));
console.log(generateDecimal(100).length);
console.log(getDigit(10));
console.log(getDigit(5));
console.log(getTheProduct(10,100,1000,10000,100000,1000000))