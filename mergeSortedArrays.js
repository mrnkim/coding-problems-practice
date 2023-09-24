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