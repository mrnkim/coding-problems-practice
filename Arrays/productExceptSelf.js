"use strict";

/**
 * Goal: return an array that has the products of nums, except for the num at the
 * index at the input array
 *
 *  ! Don't use division operation
 *  ! Must be O(n) runtime
 *
 * Case 1
 *  [1,2,3,4] => [24, 12, 8, 6]
 *
 * Case 2
 *  [-1, 1, 0, -3, 3] => [0, 0, 9, 0, 0]
 *
 * Approach:
 * Create 'pre' and 'post' array
 *    pre : (1), 1, 1*2, 1*2*3
 *        Loop over the input array, product of accumulating numbers before the curr index
 *    post: 4*3*2, 4*3, 4, (1)
 *        Loop over the input array from the end, product of accumulating (backwards) numbers
 * Return output, product of pre & post [(1)*4*3*2, 1*4*3, 1*2*4, 1*2*3*(1)]
 *
 */

function productExceptSelf(nums) {
  let pre = new Array(nums.length).fill(1);
  let post = new Array(nums.length).fill(1);
  let result = new Array(nums.length);

  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    post[j] = post[j + 1] * nums[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = pre[i] * post[i];
  }

  return result;
}
