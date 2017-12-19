/*

A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

Explain your solution and analyze its time and space complexities.

Example:

input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
Constraints:

[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer

*/


/* ---------- FIRST SOLUTION ---------- */

function shiftedArrSearch(arr, num) {
  // your code goes here
  //finding midpoint
  let pivot = 0;
  while (arr[pivot + 1] > arr[pivot]) {
    pivot++; //pivot is index of highest number
  }

  /*

   1. number outside of the range of the numbers in the array (theoreitcally handled by the first else )
   2. number within the range but not in the array
   3. number in the first half
   4. number in the second half...
   missing any?
   might we have an empty array?

   [4, 5, 6, 1, 2, 3] find 2
   pivot -> 2
   low -> 3
   high -> 5
   midpoint -> 4 (returns midpoint -> 4)



   [12, 14, 18, 0] find 0
   pivot -> 2
   low -> 3
   high -> 3
   midpoint -> 3 (returns midpoint -> 3)

   [6, 7, 0, 1, 2, 3] find 7
   pivot -> 1
   low -> 0
   high -> 1

   [8, 4, 4, 6] find 8
  */


  // check which side we should be on
  let high, low;
  if (arr[0] <= num && arr[pivot] >= num) {
    high = pivot;
    low = 0;
  }
  else if (arr[pivot + 1] <= num && arr[arr.length - 1] >= num) {
    low = pivot + 1;
    high = arr.length - 1;
  }
  else { return -1; }

  // then binary search the correct side
  while (high !== low) {
    let midpoint = Math.floor((high + low) / 2)
    if (arr[midpoint] === num) { return midpoint }
    else if(arr[high] === num) { return high }
    else if (arr[low] === num) { return low }
    else if (arr[midpoint] < num) {
      low = midpoint;
    }
    else { high = midpoint }
  }

  return arr[high] === num ? high : -1;

}

console.log('---- OUTPUT------ ', shiftedArrSearch([9, 12, 17, 2, 4, 5],2), '------ EXPECTED ------', 3)
console.log('---- OUTPUT------ ', shiftedArrSearch([4, 5, 6, 1, 2, 3], 2), '------ EXPECTED ------', 4)
console.log('---- OUTPUT------ ', shiftedArrSearch([12, 14, 18, 0], 0), '------ EXPECTED ------', 3)
console.log('---- OUTPUT------ ', shiftedArrSearch([8, 4, 4, 6], 8), '------ EXPECTED ------', 0)
console.log('---- OUTPUT------ ', shiftedArrSearch([6, 7, 0, 1, 2, 3], 7), '------ EXPECTED ------', 1)
console.log('---- OUTPUT------ ', shiftedArrSearch([6, 7, 0, 1, 2, 3], 10), '------ EXPECTED ------', -1)
console.log('---- OUTPUT------ ', shiftedArrSearch([6, 7, 0, 1, 2, 3], 5), '------ EXPECTED ------', -1)


/*
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
*/
