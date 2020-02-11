module.exports = Num = (() => {
  const isEven = num => num % 2 === 0;

  const separateNumToArr = num => {
    let str = num.toString();
    let arr = [...str];
    return arr.map(str => parseInt(str));
  }

  const convertToBigInt = num => BigInt(num);

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
    return results;
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

  const factorial = num => {
    let res = 1;
    while (num > 1) {
      res *= num;
      num--;
    }
    return res;
  }

  const numLength = num => {
    const strNum = num.toString();
    return strNum.length;
  }

  return {
    isEven,
    factorial,
    separateNumToArr,
    convertToBigInt,
    listTheDivisors,
    areUniqueNums,
    numLength
  }
})();