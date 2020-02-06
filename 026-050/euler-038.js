/*

Take the number 192 and multiply it by each of 1, 2, and 3:

    192 × 1 = 192
    192 × 2 = 384
    192 × 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

*/
const areUniqueNums = require('../utils/Num').areUniqueNums;

const concatNums = (...arguments) => {
  if (arguments.length === 0) return 0;
  const args = arguments.map(arg => arg.toString());
  return parseInt(args.join(''));
}

const getConcatProduct = num => {
  let products = [];
  let count = 1;
  while (concatNums(...products) <= 100000000) {
    products.push(count * num);
    count++;
  }
  return concatNums(...products);
}

const isPandigital = num => {
  if (num < 1000000000) {
    if (areUniqueNums(num)) {
      return true;
    }
  }
  return false;
}

const greatestPandigital = (min, max) => {
  let result = 1;
  let digit = 1;
  for (let i = min; i <= max; i++) {
    let product = getConcatProduct(i);
    if (isPandigital(product)) {
      if (product > result) {
        result = product;
        digit = i;
      }
    }
  }
  return [result, digit];
}

console.log(greatestPandigital(1,100000));