/*

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised? // yields the most sequences

*/

const returnSequences = p => {
  let results = [];
  let max = p / 3;
  for (let a = 2; a <= max; a++) {
    if ((p * (p - 2 * a)) % (2 * (p - a)) === 0) {
      let c = (p * (p - 2 * a)) / (2 * (p - a));
      results.push({ a, p, c });
    }
  }
  return results;
}

const findTheSolutions = max => {
  let p = 0;
  let numberOfSolutions = 0;
  
  for (let i = 2; i <= max; i = i + 2) {
    let tempSolutions = returnSequences(i).length;
    if (tempSolutions > numberOfSolutions) {
      numberOfSolutions = tempSolutions;
      p = i;
    }
  }
  return {
    p,
    numberOfSolutions,
    sequences: returnSequences(p)
  }
}

console.log(findTheSolutions(1000));