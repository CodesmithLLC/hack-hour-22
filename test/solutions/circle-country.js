
// functional programming approach
function circleCountry (x, y, r, start_x, start_y, end_x, end_y) {
  var total = 0;
  for (var i = 0; i < x.length; i++){
    var d1 = Math.hypot(x[i]-start_x, y[i]-start_y);
    var d2 = Math.hypot(x[i]-end_x, y[i]-end_y);
    var radius = r[i];
    if (d1 < radius && d2 > radius || d1 > radius && d2 < radius){
      total++;
    }
  }
  return total;
}

// object-oriented
function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  var circlesToCross = 0;
  for (var i = 0; i < x.length; i++) {
    var circle = new Circle(x[i], y[i], r[i]);
    if (circle.contains(start_x, start_y) !== circle.contains(end_x, end_y))
      circlesToCross++;
  }
  return circlesToCross;
}

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

Circle.prototype.contains = function(x, y) {
  var distanceFromCenter = Math.hypot(this.x - x, this.y - y);
  return this.r >= distanceFromCenter;
};
