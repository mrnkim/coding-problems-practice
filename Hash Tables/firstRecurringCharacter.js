/** First Recurring Character
 *
 * Goal: a function that returns the first character that repeats
 *
 * Input: array of numbers
 * Output: number (that repeats for the first time)
 *
 * Case 1
 * Input: [2,5,1,2,3,5,1,2,4]
 * Output: 2
 *
 * Case 2
 * Input: [2,1,1,2,3,5,1,2,4]
 * Output: 1
 *
 * Case 3
 * Input: [2,3,4,5]
 * Output: undefined
 *
 * Approach:
 * Create 'checked' array
 * Loop through an input array, see if an item is already in the 'checked' array
 *  - if there is -> return the item
 *  - if not -> put it in the 'checked' array and move on
 * Return undefined if a loop is over and nothing has been returned
 *
 */

function firstRecurringCharacter(arr) {
  const checked = [];

  for (let num of arr) {
    if (checked.includes(num)) {
      return num;
    } else {
      checked.push(num);
    }
  }
  return undefined;
}

module.exports = firstRecurringCharacter;
