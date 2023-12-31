/** 88. Merge Sorted Array
 *
 * Goal: Merge two arrays in order
 *
 * Input: array1, m (number of items in array1), array2, n (number of items in array2)
 *        (array 1 & 2 consist of integers)
 * Output: array (consist of integers in array 1 & 2, sorted)
 *
 * Case 1:
 * nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * =>  [1,2,2,3,5,6]
 *
 * Case 2:
 * nums1 = [1], m = 1, nums2 = [], n = 0
 * => [1]
 *
 * Case 3: nums1 = [0], m = 0, nums2 = [1], n = 1
 * => [1]
 *
 * Approach:
 * Compare the two last items in each array and put bigger num to the very last index
 * For the array that had bigger num => Move on to the next last item
 * Repeat until both pointers are 0
 */

function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let last = m + n - 1;

  while (i >= 0 || j >= 0) {
    if (j < 0 || nums1[i] > nums2[j]) {
      nums1[last] = nums1[i];
      i--;
    } else {
      nums1[last] = nums2[j];
      j--;
    }
    last--;
  }

  return nums1;
}

/* Improvement: using multiple if statements to compare the elements means that
more than one assignment can occur in each iteration of the loop.
This can overwrite values in nums1 and lead to incorrect results.

To fix this issue, you should use if-else statements to ensure that only one assignment
is made in each iteration.
*/
