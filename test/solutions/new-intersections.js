// new type that takes an array of numbers and picks the least and greatest values.
function Range(arr) {
  this.contents = [Math.min.apply(this, arr), Math.max.apply(this, arr)];
}

// method to tell us if a number is between the range
Range.prototype.contains = function(num) {
  return this.contents[0] < num && num < this.contents[1];
}


function newIntersections(x, y){
  var yCounts, horizontals = {},
      xCounts, verticals = {};

  xCounts = count(x);
  yCounts = count(y);

  // find vertical lines and place into an object. The keys are the x-coordinates where the line is at and the values are arrays of y-coordinates along that line
  for (var coor in xCounts) {
    if (xCounts[coor] > 1) { // only check for a line if there are multiple points at this value
      for (var i in x) {
        if (x[i] == coor) {
          verticals[coor] = (verticals[coor] || []).concat(y[i]); // add it to list of coordinates
        }
      }
    }
  }

  // find horizontal lines and place into an object. The keys are the y-coordinates where the line is at and the values are arrays of x-coordinates along that line
  for (var coor in yCounts) {
    if (yCounts[coor] > 1) {
      for (var i in y) {
        if (y[i] == coor) {
          horizontals[coor] = (horizontals[coor] || []).concat(x[i]);
        }
      }
    }
  }

  rangify(verticals);
  rangify(horizontals);

  var newPoints = 0;

  for (var yCoor in horizontals) {
    var xRange = horizontals[yCoor];
    for (var xCoor in verticals) {
      var yRange = verticals[xCoor];
      if (xRange.contains(xCoor) && yRange.contains(yCoor)) {
        newPoints++;
      }
    }
  }
  return newPoints;
}

// count the number of elements in the array and return an object 
function count(arr) {
  return arr.reduce((counts, num) => {
    counts[num] = (counts[num] + 1) || 1;
    return counts;
  }, {});
}
/*
[3, 3, 1, 4, 4, 4, 4, 4] will return
{
  '3': 2,
  '1': 1,
  '4': 5
}
*/

// take the arrays of coordinates and turn them into ranges
function rangify(lines) {
  for (var coor in lines) {
    var arr = lines[coor];
    lines[coor] = new Range(arr);
  }
}
