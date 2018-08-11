/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

const distance = (a, b, x, y) =>
  Math.sqrt(((a - x) ** 2) + ((b - y) ** 2));

const contains = (a, b, x, y, r) =>
  distance(a, b, x, y) < r;

const merge = (arr1, arr2, arr3) =>
  arr1.reduce((res, val, idx) => [...res, [val, arr2[idx], arr3[idx]]], []);

function circleCountry(x, y, r, startX, startY, endX, endY) {
  const circles = merge(x, y, r);

  return circles.filter((circle) => {
    const startInside = contains(startX, startY, ...circle);
    const endInside = contains(endX, endY, ...circle);
    return startInside !== endInside; // one and only one circle contains it
  }).length;
}


module.exports = circleCountry;
