/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 *   - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

const stringify = (x, y) => `${x};${y}`;

function newIntersections(x, y) {
  const stringified = x.map((_, i) => stringify(x[i], y[i]));
  let count = 0;

  for (let i = 0; i < x.length; i += 1) {
    if (
      stringified.includes(stringify(x[i] - 1, y[i] - 1)) &&
      stringified.includes(stringify(x[i], y[i] - 2)) &&
      stringified.includes(stringify(x[i] + 1, y[i] - 1))
    ) count += 1;
  }
  return count;
}

module.exports = newIntersections;
