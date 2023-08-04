/**
 *
 * Goal: decode an input string and returns a decoded string
 *
 * Input: string that always has 2 nums (starting with num)
 * Output: decoded string
 *
 * decoder:
 *  - always starts with a num ("skip digit")
 *      how many times to skip
 *  - next skip digit
 *
 * Case 1:
 * "2abh0i" => "hi"
 *
 * Case 2:
 * "1two1mw" => "wow"
 *
 * Case 3:
 * "11" => ""
 *
 * Case 4:
 * "1 1" => "1"
 *
 * Approach:
 * Create result string variable
 * Set left pointer
 *    If value at left pointer is number
 *        skip that number of alphabets (move left pointer to curr + number)
 *    If not,
 *        add the alphabet at the pointer to result string
 * Continue until going through all chars of string
 * Return result string
 *
 */

function decodeString(string) {
  let decoded = "";
  let i = string[0]+1;

  for (let i = string[0]+1; i < string.length; i++) {
    
  }
}
