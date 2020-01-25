/*

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/

const factorial = num => {
  let res = BigInt(1);
  while (num > 1) {
    res = BigInt(res * BigInt(num));
    num--;
  }
  return res;
}

const sumOfNums = num => {
  let numStr = num.toString();
  let arrStr = numStr.split('');
  let arrNums = arrStr.map(num => parseInt(num));

  return arrNums.reduce((a,b) => a+b);
}

const sumOfFactorials = num => {
  const product = factorial(num);
  return sumOfNums(product);
}

console.log(sumOfFactorials(100));