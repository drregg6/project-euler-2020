const Num = () => {
  const separateNumToArr = num => {
    let str = num.toString();
    let arr = [...str];
    return arr.map(str => parseInt(str));
  }

  const convertNumToBigInt = num => BigInt(num);

  return {
    separateNumToArr,
    convertNumToBigInt
  }
}

module.exports = Num();