const Prime = function() {
  const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    let max = Math.floor(Math.sqrt(num));
    let count = 4;
    while (count <= max) {
      if (num % count === 0) return false;
      count++;
    }
    return true;
  }
  return {
    isPrime
  }
}

module.exports = Prime();