/**
 *
 * Goal: Build encode and decode functions where encode transforms an array of strings into
 * single string, and where decode transforms the single string back to the array of strings
 *
 * <encode>
 * Input: array of strings
 * Output: string
 *
 * <decode>
 * Input: string
 * Output: array of strings
 *
 * Case 1
 * <encode>: ["lint","code","love","you"] => "lint...code...love...you"
 * <decode>: "lint...code...love...you" => ["lint","code","love","you"]
 *
 * Case 2
 * <encode>: ["we", "3say3", ":", "", "yes"] => "we...say...:...yes"
 * <decode>: "we...say...:...yes" => ["we", "say", ":", "yes"]
 *
 * Approach:
 * encode: put length of each string in front of each string (2we43say31:03yes)
 * decode:
 *  - loop over a string
 *  - create result array
 *  - number -> put the next 'number' of chars into the result array
 *  - return result array
 */

function encodeAndDecodeStrings(strings) {
  const encoded = encode(strings);
  return decode(encoded);
}

function encode(strings) {
  let encoded = "";
  for (let string of strings) {
    encoded += string.length + string;
  }
  return encoded;
}

function decode(string) {
  const decoded = [];
  for (let i = 0; i < string.length; i++) {
    let subString = "";
    let length = Number(string[i]);
    j = 1;
    while (j <= length) {
      subString += string[j + i];
      j += 1;
    }
    decoded.push(subString);
    i += length;
  }
  return decoded;
}

console.log(encode(["we", "3say3", ":", "", "yes"]));
console.log(decode("2we53say31:03yes"));
console.log(encodeAndDecodeStrings(["we", "3say3", ":", "", "yes"]))
