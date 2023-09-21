/**
 * Goal: reverses the given string
 *
 * Input: string
 * Output: string (reversed)
 *
 * Case 1:
 * "Hi My name is Andrei" => "ierdnA si eman yM iH"
 *
 * Case 2:
 * "" => ""
 *
 * Approach:
 * Loop over a string backwards
 * Create an array and put each character from input string to the array
 * Convert the array to string
 */

function reverse(string) {
  if (string.length < 2) {
    return string;
  }

  // add validations for non-string or falsy types
  if (!string || typeof string !== "string") {
    return false;
  }

  const resultArr = [];
  for (i = string.length - 1; i >= 0; i--) {
    resultArr.push(string[i]);
  }

  return resultArr.join("");
}

module.exports = reverse;
