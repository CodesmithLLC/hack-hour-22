function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < array.length; i++){
      if(array[i+1]< array[i]){
        let holder = array[i]
        array[i] = array[i+1];
        array[i+1] = holder;
        swapped = true;
      }
    } 
  } while (swapped)
  return array;
}







module.exports = bubbleSort;
