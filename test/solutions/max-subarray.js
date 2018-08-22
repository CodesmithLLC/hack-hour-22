
function maxSubarray(arr) {

  var currentMax = Number.NEGATIVE_INFINITY;
  var finalMax = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}
