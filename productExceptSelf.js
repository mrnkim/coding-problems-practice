"use strict";

/**
 * Goal: return an array that has the products of nums (except for the num at the
 * index) at the input array
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
 *
 * pre :  (1), 1, 2, 6
 * post: 24, 12, 4, (1)
 * output: (1)*24, 1*12, 2*4, 6*(1)
 *
 */

function productExceptSelf(nums) {
  let result = [];
  let pre = 1;
  let post = 1;

  for (let i=0; i<nums.length-1; i++) {
result[i] = pre;
pre *= nums[i]
  }
}