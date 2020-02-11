module.exports = Prime = (() => {
  const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    let max = num - 1;
    let count = 2;
    if (num > 100) {
      max = Math.floor(Math.sqrt(num));
    }
    while (count <= max) {
      if (num % count === 0) return false;
      count++;
    }
    return true;
  }

  const generatePrimes = terms => {
    let results = [];
    let count = 2;
    while (results.length !== terms) {
      if (isPrime(count)) results.push(count);
      count++;
    }
    return results;
  }
  return {
    isPrime,
    generatePrimes
  }
})();