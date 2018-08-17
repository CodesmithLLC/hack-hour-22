// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

const jumps = [[2, 1], [1, 2], [-2, 1], [-1, 2], [2, -1], [1, -2], [-2, -1], [-1, -2]];

function combine(start, jump) {
  return [start[0] + jump[0], start[1] + jump[1]];
}

function test(candidate) {
  return 1 <= candidate[0] && candidate[0] <= 8 && 1 <= candidate[1] && candidate[1] <= 8;
}

function knightjumps(str) {
  const start = [parseInt(str[1]), parseInt(str[3])];
  
  let total = 0;
  for (const jump of jumps) {
    const candidate = combine(start, jump);
    
    total += test(candidate);
  }
  
  return total;
}


module.exports = knightjumps;

