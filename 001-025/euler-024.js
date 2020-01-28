/*

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

https://initjs.org/all-permutations-of-a-set-f1be174c79f8

*/

/*

Get all permutations with Heaps Algorithm

- allPermutations([1,2,3]) = [1 + allPermutations[2,3]] + [2 + allPermutations([1,3])] + [3 + allPermutations([1,2])]
- allPermutations([1,2]) = [1 + allPermutations([2])] + [2 + allPermutations([1])]
- allPermutations([1]) = [1]

- BASECASE: when arr.length === 1, return

*/

// n = location
function permutate(n, array) {
  const len = array.length
  for (let i = 0; i < n - 1; i++) {
    let k, l;
    for (let j = 0; j < al - 1; j++) {
      if (array[j] < array[j + 1]) { // keep it in lexicographic order
        k = j
      }
    }
    for (let j = k; j < len; j++) {
      if (array[k] < array[j]) {
        l = j
      }
    }
    let tmp = array[k]
    array[k] = array[l]
    array[l] = tmp
    let begin = k + 1
    let end = len - 1
    while (begin < end) {
      tmp = array[begin]
      array[begin] = array[end]
      array[end] = tmp
      begin += 1
      end -= 1
    }
  }
  return array
}
console.log(permutate(1000000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).join(""))