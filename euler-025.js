/*

The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

Hence the first 12 terms will be:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144
    F13 = 233
    F14 = 377
    F15 = 610
    F16 = 987
    F17 = 1597

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

const digitCount = num => {
  const str = num.toString();
  return str.length;
}

// stop at the max number of digits
const fibSeq = max => {
  // cont fib seq until digitCount === max
  let count = 3;
  let firstDigit = BigInt(1);
  let secondDigit = BigInt(2);

  while (digitCount(secondDigit) !== max) {
    let tempDigit = BigInt(secondDigit);
    secondDigit = firstDigit + secondDigit;
    firstDigit = tempDigit;

    count++;
  }

  return count;
}

console.log(fibSeq(1000));