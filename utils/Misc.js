module.exports = Misc = (() => {
  const createRange = (maxDigits) => {
    let max = '1';
    let min = '1';
    let count = 1;
    while (count <= maxDigits) {
      max += '0';
      if (count !== maxDigits) {
        min += '0';
      }
      count++;
    }
    max = parseInt(max);
    min = parseInt(min);
    
    return {min, max};
  }

  return {
    createRange
  }
})();