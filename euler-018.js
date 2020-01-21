/*

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

      r:0                     75
      r:1                    95 64
      r:2                  17 47 82
      r:3                18 35 87 10
      r:4               20 04 82 47 65
      r:5              19 01 23 75 03 34
      r:6             88 02 77 73 07 63 67
      r:7            99 65 04 28 06 16 70 92
      r:8          41 41 26 56 83 40 80 70 33
      r:9         41 48 72 33 47 32 37 16 94 29
      r:10       53 71 44 65 25 43 91 52 97 51 14
      r:11      70 11 33 28 77 73 17 78 39 68 17 57
      r:12     91 71 52 38 17 14 91 43 58 50 27 29 48
      r:13    63 66 04 68 89 53 67 30 73 16 69 87 40 31
      r:14   04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

*/

const TEST_ARR = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

const ARR = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

const findMaxTotal = arr => {
  let startingPoint = arr.length - 2;
  // rows
  for (let i = startingPoint; i > -1; i--) {
    // data
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0) {
        if (arr[i+1][j] > arr[i+1][j+1]) {
          return arr[i][0] + arr[i+1][j];
        } else {
          return arr[i][0] + arr[i+1][j+1];
        }
      }
      if (arr[i+1][j] > arr[i+1][j+1]) {
        arr[i][j] += arr[i+1][j];
      } else if (arr[i+1][j+1] > arr[i+1][j]) {
        arr[i][j] += arr[i+1][j+1];
      }
    }
  }
}

console.log(findMaxTotal(ARR));




// Place it in an array
// For each row
// Placement is i
// In the next array, find which is larger between i and i+1

// original solution
// results in 1064
const findMaxTotalFail = arr => {
  let resArr = [];
  let positionI = 0;
  let positionJ = 0;

  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0 && j === 0) {
        resArr.push(arr[i][j]);
      }
      if (i === positionI && j === positionJ) {
        if (arr[i+1][j] > arr[i+1][j+1]) {
          resArr.push(arr[i+1][j]);
          positionI = i+1;
          positionJ = j;
        } else if (arr[i+1][j+1] > arr[i+1][j]) {
          resArr.push(arr[i+1][j+1]);
          positionI = i+1;
          positionJ = j+1;
        }
      }
    }
  }
  console.log(resArr);
  return resArr.reduce((a, b) => a + b);
}