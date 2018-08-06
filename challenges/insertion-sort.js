 function insertionSort(array) {
   for (let i = 0; i < array.length; i++){
     let j = i-1;
     let holder = array[i];
     while (j>=0 && array[j] > holder){
       array[j+1] = array[j];
       j--
     }
     array[j+1] = holder;
   }
   return array;
 }
 
 module.exports =  insertionSort;
