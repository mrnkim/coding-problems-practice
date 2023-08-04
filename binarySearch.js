"use strict";

/**
 * Goal: Implement binary search
 *
 * Input: array of nums
 * Output: target value or -1
 *
 * Case 1:
 * [1,3,2,4], 4 => 4
 *
 * Case 2:
 * [1,3,2,4], 5 => -1
 *
 * Case 3:
 * [], 5 => -1
 *
 * Approach:
 * Set left pointer & right pointer
 *
 * While left pointer <= right pointer
 *    Set middle pointer
 *    if value at middle pointer > target value
 *      no need to check right (move right pointer to middle pointer-1)
 *    if value at middle pointer < target value
 *      no need to check left (move left pointer to middle pointer+1)
 *    if value at middle pointer = target value
 *      return target value
 *
 * Return -1
 */

function binarySearch(nums, target) {
  if (nums.length < 1) {
    return -1;
  }
  
  let left = nums[0];
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return target;
    }
  }
  return -1;
}
