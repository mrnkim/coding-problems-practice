/** 88. Merge Sorted Array

 *
 * Goal: Merge two arrays in order
 *
 * Input: array1, m (number of array1), array2, n (number of array2)
 *        (array 1 & 2 consist of integers)
 * Output: array (consist of integers in array 1 & 2, sorted)
 *
 * Case 1:
 * [1,4,4,5], 4, [0,1,3,5,9], 5 => [0,1,1,3,4,4,5,9]
 * [0,1,4,4,5], [1,3,5,9]
 * [0,1,1,4,4,5], [3,5,9]
 * [0,1,1,3,4,4,5], [3,5,9]
 * Case 2:
 * [1,4,4], 3, [2,3,5,9], 4 => [1,2,3,4,4,5,9]
 *
 * Case 3:
 * [0], 0, [1], 1 => [1]
 *
 * Approach:
 *
 * 1. Compare the two first integer in array1 (a) and array2 (a')
 *  - a > a'? -> remove a' from array2 and put it in front of a
 *  - a <= a'? -> remove a' from array2 and put it after a
 * 2. Move on to the second, third... integer in array2 and do comparison
 * 3. When finished, concat 'front', array1, and 'back' array
 *
 *
 *
 */