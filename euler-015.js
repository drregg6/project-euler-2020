/*

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

const factorial = num => {
  let res = 1;
  while (num > 1) {
    res *= num;
    num--;
  }
  return res;
}

const pathsOnGrid = dimension => Math.floor(factorial(dimension*2)/(factorial(dimension)*factorial(dimension)));

console.log(pathsOnGrid(20));