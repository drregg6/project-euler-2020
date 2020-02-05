module.exports = Num = (() => {
  const separateNumToArr = num => {
    let str = num.toString();
    let arr = [...str];
    return arr.map(str => parseInt(str));
  }

  const convertNumToBigInt = num => BigInt(num);

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

  return {
    factorial,
    separateNumToArr,
    convertNumToBigInt,
    listTheDivisors,
    areUniqueNums
  }
})();