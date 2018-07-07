
function reverseInPlace(array) {
  if (!array || !array.length) return [];

  var head = 0;
  var tail = array.length-1;

  while(tail>head){
    var temp = array[head];
    array[head++] = array[tail];
    array[tail--] = temp;
  }
  return array;
}

function reverseInPlace(array) {
  var temp;
  for (var i = 0, j = array.length - 1; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
