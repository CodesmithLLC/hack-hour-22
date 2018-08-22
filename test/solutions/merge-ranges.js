
function mergeRanges(array) {
  array.sort(function(a, b) {
    return a[0] - b[0];
  });
  var result = [array[0]];
  for (var i = 1; i < array.length; i++) {
    var curr = array[i];
    var last = result[result.length - 1];
    if (curr[0] > last[1]) {
      result.push(curr);
    } else if (curr[1] > last[1]) {
      last[1] = curr[1];
    }
  }
  return result;
}
