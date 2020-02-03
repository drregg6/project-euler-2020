/*

In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

It is possible to make £2 in the following way:

    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £2 be made using any number of coins?

*/

const howManyWays = target => {
  let currencies = [200, 100, 50, 20, 10, 5, 2];
  let ways = 0;
  
  for (let a = target; a >= 0; a = a - currencies[0]) {
    for (let b = a; b >= 0; b = b - currencies[1]) {
      for (let c = b; c >= 0; c = c - currencies[2]) {
        for (let d = c; d >= 0; d = d - currencies[3]) {
          for (let e = d; e >= 0; e = e - currencies[4]) {
            for (let f = e; f >= 0; f = f - currencies[5]) {
              for (let g = f; g >= 0; g = g - currencies[6]) {
                ways++;
              }
            }
          }
        }
      }
    }
  }
  return ways;
}

console.log(howManyWays(200));