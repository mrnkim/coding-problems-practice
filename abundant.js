/**
 *
 * Goal: Return true if a given number is abundant number
 * (if sum of factors excluding itself is higher than the number)
 *
 * Input: Integer
 * Output: Array of abundant numbers
 *
 * Case 1:
 * [4,5,12,18,20] => [12, 18, 20]
 *
 * Case 2:
 * [5] => []
 *
 * Approach:
 *
 * Create result array
 * Create a function to check if the num is abundant or not
 *   Create factors array
 *    Loop from 1~num
 *    if each num is divisible by num => add to factors array
 *   Compare last num & sum of the previous nums of factors array
 * Loop over an array
 *  put num into the 2nd function => if true, push to the result array
 *
 * Return result array
 *
 */

function filterAbundantNumbers(nums) {
  let result = [];
  for (let num of nums) {
    if (isAbundant(num)) {
      result.push(num);
    }
  }
  return result;
}

function isAbundant(num) {
  let factors = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  let sum = 0;
  for (let factor of factors) {
    sum += factor;
  }
  return sum < num;
}
