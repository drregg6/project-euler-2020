module.exports = Arr = (() => {
  const sumOfArr = arr => arr.reduce((a,b) => a+b);
  const quotientOfArr = arr => arr.reduce((a,b) => a/b);

  const combiningArrs = (...arguments) => {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
      arr = [...arr, ...arguments[i]];
    }
    return arr;
  }

  return {
    sumOfArr,
    quotientOfArr,
    combiningArrs
  }
})();