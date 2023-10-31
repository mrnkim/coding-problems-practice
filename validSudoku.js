/**
 *
 * Goal: Determine 1) if each row and column contains 1-9 without duplication
 *       AND 2) if each 3 * 3 square contains 1-9 without duplication
 *
 * Input: array of 9 arrays
 * Output: true or false
 *
 * Case 1:
 * Input: board =
 *   [["5","3",".",".","7",".",".",".","."]
 *   ,["6",".",".","1","9","5",".",".","."]
 *   ,[".","9","8",".",".",".",".","6","."]
 *   ,["8",".",".",".","6",".",".",".","3"]
 *   ,["4",".",".","8",".","3",".",".","1"]
 *   ,["7",".",".",".","2",".",".",".","6"]
 *   ,[".","6",".",".",".",".","2","8","."]
 *   ,[".",".",".","4","1","9",".",".","5"]
 *   ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 *
 * Case 2:
 * Input: board =
 *   [["8","3",".",".","7",".",".",".","."]
 *   ,["6",".",".","1","9","5",".",".","."]
 *   ,[".","9","8",".",".",".",".","6","."]
 *   ,["8",".",".",".","6",".",".",".","3"]
 *   ,["4",".",".","8",".","3",".",".","1"]
 *   ,["7",".",".",".","2",".",".",".","6"]
 *   ,[".","6",".",".",".",".","2","8","."]
 *   ,[".",".",".","4","1","9",".",".","5"]
 *   ,[".",".",".",".","8",".",".","7","9"]]
 * Output: false
 *
 * Approach:
 *  1. Build a set
 *  2. Build keys to identify each number's row, col, and sub-box
 *  3. Loop through the board, return false if any key is part of set
 *  4. Return true
 *
 */

//board[r][c]

function validSudoku(board) {
  const seen = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== ".") {
        const rowKey = `${board[i][j]} found in row ${i}`;
        const colKey = `${board[i][j]} found in column ${j}`;
        const subBoxKey = `${board[i][j]} found in sub-box ${Math.floor(
          i / 3
        )}-${Math.floor(j / 3)}`;
        if (seen.has(rowKey) || seen.has(colKey) || seen.has(subBoxKey)) {
          return false;
        }
        seen.add(rowKey);
        seen.add(colKey);
        seen.add(subBoxKey);
        console.log("🚀 > validSudoku > seen=", seen);
      }
    }
  }
  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(validSudoku(board));



/* Initial Approach:
 *  1. Build a function which builds a counter for each number
 *     and see if any value is bigger than 1 => if so, return false
 *  2. Apply function from 1 to each row by looping over the array
 *  3. Apply function from 1 to the last items of each array by creating last items group by
 *     looping over the array
 *  4. Apply function from 1 to
 *     - 0~2nd items of array 0~2, array 3~5, array 6~8
 *     - 3~5th items of array 0~2, array 3~5, array 6~8
 *     - 6~8th items of array 0~2, array 3~5, array 6~8
 */
