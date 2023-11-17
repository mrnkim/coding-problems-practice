"use strict";

/**
 *
 * Goal: Return the number of the longest consecutive sequence in an array
 *
 * Input: array of numbers
 * Output: number of the longest consecutive sequence
 *
 * ! O(n) time
 *
 * Case 1:
 *  [100,4,200,1,3,2] -> 4     4,3,1,2
 * 4 100 200 1 3 2
 * 4 100 1 200 3 2
 * 4 100 1 3 200 2
 * 4 100 1 3 2 200

 *
 * Case 2:
 *  [0,3,7,2,5,8,4,6,0,1] -> 9
 *
 * Approach:
 * Loop through an array
 *   if an array includes array[i]-1 -> move on
 *                                   -> if not, make a new set and add array[i]
 *                                      -> if array includes array[i]+1 -> add it to set
 *                                      -> if not, add set to sequences and move on
 *
 * Compare the size of sets and return the max size
 *
 */

function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  //edge case: nums is empty or only has one number
  if (nums.length <= 1) {
    return nums.length;
  }

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 0;
      while (numSet.has(num + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
}

// function longestConsecutive(nums) {
//   const consecutive = new Set();
//   let longest = 0;
//   //edge case: nums is empty or only has one number
//   if (nums.length <= 1) {
//     return nums.length;
//   }

//   for (let num of nums) {
//     if (!nums.includes(num - 1)) {
//       consecutive.add(num);

//       num += 1;
//       while (nums.includes(num)) {
//         consecutive.add(num);
//         num += 1;
//       }
//       consecutives.push(consecutive);
//     }
//   }
//   const sizes = consecutives.map((consecutive) => consecutive.size);
//   return Math.max(...sizes);
// }

console.log(longestConsecutive([-8, -2, -3, -9, -6, 7, 9, -8, 9, 2, -8]));
