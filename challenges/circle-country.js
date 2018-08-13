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

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
    // print out all the 
    // check if the start_x, start_y is inside each circle
    // check if the end_x, start_y is inside each circle
    let circleCtr = 0;

    // check if the distance between start and end point are inside the the circle...
    // 

    for (let i = 0; i < r.length; i++){
        let circle = new Circle(x[i], y[i], r[i]);
        if (circle.contains(start_x, start_y) !== circle.contains(end_x, end_y))
        circleCtr++;
      }
      return circleCtr;
}
function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  Circle.prototype.contains = function(x, y) {
    let distanceFromCenter = Math.hypot(this.x - x, this.y - y);
    return this.r >= distanceFromCenter;
  };

const x = [20, 20, ];
const y = [20, 20];
const r = [1, 2];
const start_x = 0;
const start_y = 0;
const end_x =  4;
const end_y = 4;

console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y))
module.exports = circleCountry;
