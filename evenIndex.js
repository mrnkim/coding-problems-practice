"use strict";

/**
 * Goal: return an array of index of even nums
 *
 * Input: array of numbers (integers)
 * Output: array of numbers (index of even nums)
 * *empty array => null
 *
 * Case 1 :
 * [2,3,5,7] => [0]
 *
 * Case 2:
 * [0, 3] => []
 *
 * Case 3:
 * [] => null
 *
 * Approach:
 * Loop over an array
 * Create result array
 * Check if number is even
 *  if so => add the index to the result array
 *  if not => do nothing
 * Return result array
 *
 */

function evenIndex(nums) {
  let result = [];

  if (nums.length === 0) {
    return null;
  }

  for (let num of nums) {
    if (num % 2 === 0) {
      result.push(nums.indexOf(num)); //indexOf -> only returns the first index
    }
  }
  return result;
}
