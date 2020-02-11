/*

The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

*/

// Modular arithmetic: Not a concept I have ever come across
// My code reaches an Infinite limit with 1000^1000
// notMyCode has no such limit

const getDigits = (num, lastDigits) => {
  const numArr = num.toString().split('');
  const start = numArr.length + 1;
  const stop = numArr.length - lastDigits;
  let resultArr = [];
  for (let k = start; k >= stop; k--) {
    resultArr.unshift(numArr[k]);
  }

  return parseInt(resultArr.join(''));
}

const sumOfSquares = (num, lastDigits) => {
  let sum = BigInt(0);
  for (let i = 1; i <= num; i++) {
    let product = BigInt(i**i);
    sum += product;
  }

  return getDigits(sum, lastDigits);
}

const notMyCode = (num, digits) => {
  let result = 0;
  let moduloStr = '1';
  let count = 0;
  while (count < digits) {
    moduloStr += '0';
    count++;
  }
  const modulo = parseInt(moduloStr);

  for (let i = 0; i <= num; i++) {
    let temp = i;
    for (let j = 1; j < i; j++) {
      temp *= i;
      temp %= modulo;
    }
    result += temp;
    result %= modulo;
  }

  return result;
}

console.log(notMyCode(1000, 10));