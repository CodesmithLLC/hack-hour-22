// Iterative
function pascalTriangle(numRows) {

  if (numRows < 1) return [];

  var triangle = [[1]];
  var row;

  for (var j = 0; j < numRows-1; j++) {
    row = [1];

    // start from k = 1 because the first elem in the row is always 1, and is
    // already in the row
    // we iterate until we are at where the previous row ends.
    // on each iteration we add the two values from the previous row
    for (var k = 1; k < triangle[j].length; k ++) {
      row[k] = triangle[j][k] + triangle[j][k-1];
    }
    // push the trailing 1 to complete the row
    row.push(1);
    triangle.push(row);
  }

  return triangle;
}

// Recursive
function pascalTriangle(n, triangle) {
  if (!n || n < 1) return [];

  // this line handles the initial call which may not pass in a triangle
  triangle = triangle || [[1]];

  // base case : n is 1. Return whatever our triangle is at that point.
  if (n < 2) return triangle;

  // recursive case:
  var row = [1];
  var prevRow = triangle[triangle.length - 1];

  for (var i = 1; i < prevRow.length; i ++) {
    row.push(prevRow[i] + prevRow[i-1]);
  }

  row.push(1);
  triangle.push(row);

  // at the end of the recursive case, make the recursive call with n - 1
  // keep in mind, n is only used as a counter. we build from triangle, which
  // will start from [[1]]
  return pascalTriangle(n - 1, triangle);
}
