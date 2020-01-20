/*

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/

const NUM_AS_LETTERS = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

const TENS_AS_LETTERS = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

const firstDigitOfNum = num => {
  num = num.toString();
  return parseInt(num[0]);
}

const handleExceptions = num => {
  return NUM_AS_LETTERS[num];
}
const tensInLetters = num => {
  num = num.toString();
  let arr = num.split('');
  arr = arr.map(num => parseInt(num));

  arr = arr.map((num, i) => {
    if (i === 0) {
      return TENS_AS_LETTERS[num];
    } else {
      return NUM_AS_LETTERS[num];
    }
  });
  return arr.join('');
}
const hundredsInLetters = num => {
  num = num.toString();
  let arr = num.split('');
  arr = arr.map(num => parseInt(num));

  arr = arr.map((num, i) => {
    if (i === 0) {
      return `${NUM_AS_LETTERS[num]}hundred`;
    } else if (i === 1 && num > 1) {
      return `and${TENS_AS_LETTERS[num]}`;
    } else if (i === 2) {
      let addedNums = parseInt(`${arr[1]}${arr[2]}`);
      if (arr[1] === 1 && arr[2] === 0) {
        return `and${NUM_AS_LETTERS[addedNums]}`;
      } else if (arr[1] < 2 && arr[2] !== 0) {
        return `and${NUM_AS_LETTERS[addedNums]}`;
      } else {
        return `${NUM_AS_LETTERS[num]}`;
      }
    }
  });
  if (arr.length === 4) {
    return 'onethousand';
  } else {
    return arr.join('');
  }
}

const findNum = num => {
  let numInLetters = '';
  if (num >= 1 && num <= 19) {
    numInLetters = handleExceptions(num);
  } else if (num >= 20 && num <= 99) {
    numInLetters = tensInLetters(num)
  } else {
    numInLetters = hundredsInLetters(num);
  }
  return numInLetters;
}

const countTheDigits = max => {
  let count = 1;
  let res = '';
  while (count <= max) {
    res += findNum(count);
    count++;
  }
  return res.length;
}

console.log(countTheDigits(1000));