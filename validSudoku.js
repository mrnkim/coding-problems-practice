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
 *  1. Build a set for each row
 *  2. Build a set for each col
 *  3. Build a set for each 3 * 3 square
 *     (e.g., [1,1] contains 9 numbers of 0~2nd items of array 0~2)
 *  4. If 1~3 has any duplicates => return false
 *
 */

function validSudoku() {
  
}












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