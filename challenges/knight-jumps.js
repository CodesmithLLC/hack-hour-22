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
// split str to string;
    let sanitizedTxt = str.replace(/\(/g, "");
    sanitizedTxt = sanitizedTxt.replace(/\)/g, "");

    const array = sanitizedTxt.split(" ");
    const x = parseInt(array[0]);
    const y = parseInt(array[1]);
    console.log(x,y)

    let possibleMoves = 8;


    if (y === 7 || y === 1 ) {
        possibleMoves -= 2;
    }

    if (x === 7 || x === 1  ) {
        possibleMoves -= 2;
    }

    if (x == 8  ) {
        console.log('x is 8')
        possibleMoves -= 4;
    }
    if (y === 8  ) {
        possibleMoves -= 2;
    }
    
    if (y > 2 && x > 2 && y< 6 && x < 6) return possibleMoves;

    return possibleMoves;
    

}
// console.log(knightjumps("(4 5)"));
console.log(knightjumps("(8 8)"));
module.exports = knightjumps;
