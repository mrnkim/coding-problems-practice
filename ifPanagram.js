"use strict";

/**
 *
 * Goal: Determines if a given string uses each alphabet at least once
 *
 * Input: string (can include alphabets only, case-insensitive, could be empty)
 * Output: boolean
 *
 * Case 1:
 * "abcdefghijklmnopqrstuvwxyzzzz" => true
 *
 * Case 2:
 * "abC" => false
 *
 * Case 3:
 * "" => false
 *
 * Approach:
 *
 * Convert input string to lowercase
 * Create a counter function where each alphabet being a key
 * Check if keys of the counter includes every alphabet
 *    create a reference with all alphabets
 *
 *
 */

//TODO: Build more solid pseudo code
//TODO: Think of Big O

// function ifPanagram(string) {
//   let string = string.toLowerCase(); //O(n) abc
//   const ALPHABET = "abcdefghijklmnopqrstuzwxyz";

//   const counter = alphabetCounter(string); //O(n) {a:1, b:1, c:1}
//   const keys = Object.keys(counter); //O(m) [a,b,c]
//   const keysToString = keys.join("").sort(); //O(m * n*log(n))

//   return ALPHABET === keysToString;
// }

// function alphabetCounter(string) {
//   let counter = {};

//   for (let char of string) {
//     if (counter[char]) {
//       counter[char] += 1;
//     } else {
//       counter[char] = 1;
//     }
//   }
// }

function ifPanagram(string) {
  string = string.toLowerCase(); //O(n) abc
  const ALPHABET = "abcdefghijklmnopqrstuzwxyz";

  const counter = alphabetCounter(string); //O(n) {a:1, b:1, c:1}
  const keys = Object.keys(counter); //O(m) [a,b,c]
  const keysToString = keys.sort().join(""); //O(m * n*log(n))

  return ALPHABET === keysToString;
}

/*
 * Case 1:
 * "abcdefghijklmnopqrstuvwxyzzzz" => true
 */

function alphabetCounter(string) {
  let counter = {};

  for (let char of string) {
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }
}
