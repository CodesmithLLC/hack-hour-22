// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let movecounts = 0;
  // parse string for number positions
  const posX = parseInt(str.charAt(1));
  const posY = parseInt(str.charAt(4));
  
  // if moving L/R/U/D 2, L/R/U/D 1, check that final coordinates between 1 & 8
  // add 1 to movecounts for each successful case
  if (posX - 2 >= 1) {
    if (posY + 1 <= 8) movecounts++;
    if (posY - 1 >= 1) movecounts++;
  }
  if (posX + 2 <= 8) {
    if (posY + 1 <= 8) movecounts++;
    if (posY - 1 >= 1) movecounts++;
  }
  if (posY + 2 <= 8) {
    if (posX + 1 <= 8) movecounts++;
    if (posX - 1 >= 1) movecounts++;
  }
  if (posY + 2 >= 1) {
    if (posX + 1 <= 8) movecounts++;
    if (posX - 1 >= 1) movecounts++;
  }

  return movecounts;
}

console.log(knightjumps('(8, 5)'))

module.exports = knightjumps;
