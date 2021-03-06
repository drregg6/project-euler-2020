/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

const isEven = num => true && num % 2 === 0;
const fibEven = num => {
  let prevNum = 1;
  let nextNum = 2;
  let result = 2;

  while ((prevNum + nextNum) < num) {
    let holdNum = nextNum;
    nextNum = prevNum + nextNum;

    if (isEven(nextNum)) {
      result += nextNum;
    }

    prevNum = holdNum;
  }

  return result;
}