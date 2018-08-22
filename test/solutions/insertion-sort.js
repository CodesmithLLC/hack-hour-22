// Worst case : O(n^2)
// Best case: already sorted O(n)

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var j = i;
    while (array[j] < array[j-1] && j > 0) {
      var temp = array[j];
      array[j] = array[j-1];
      array[--j] = temp;
    }
  }
  return array;
}
