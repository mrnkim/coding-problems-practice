/**
 *
 * Goal: Starting from 2, returns n number of prime numbers
 * Input: number (n)
 * Output: array of n prime numbers
 *
 * Case 1:
 * 3 => [2,3,5]
 *
 * Case 2:
 * 1 => [2]
 *
 * Case 3:
 * 4 => [2,3,5,7]
 *
 * Case 4:
 * 0 => []
 *
 * Approach:
 * Create a result array
 * Go through number starting from 2
 *   Check if the number is only divisible 1 and itself => create function
 *      if so, push that number to result
 *      if not, move on to the next number
 *   Continue until the result array has n elements
 *
 *
 * func checkPrime(num)
 *  Create a factors array
 *  Starting from 1 to num, check if target num is divisible by curr num
 *  if so, add curr num to factors array
 *  if factors array has more than 2 elements => return false
 *  otherwise => return true
 *
 */

function showNumPrimes(num) {
  let primes = [];
  let i = 2;

  while (primes.length < num) {
  }
}

function isPrime(num) {
  let factors = [];
  for (let i=0; i<num)
}