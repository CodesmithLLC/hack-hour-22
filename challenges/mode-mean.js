/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {

   let total = 0, mean, modeObj = {}, modeCount, mode;

   if (array.length === 0){
     return true;
   }

   /*
   total = array.reduce((acc, val) => {
     return acc += val;
   });
   */

   for (let i = 0; i < array.length; i++){
     total += array[i];
     if (array[i] in modeObj){
       modeObj[array[i]] += 1;
     }else{
       modeObj[array[i]] = 1;
     }
   }

   mean = Math.floor(total / array.length);
   modeCount = Math.max(...Object.values(modeObj));

   for (let key in modeObj){
     if (modeObj[key] === modeCount ){
       mode = parseInt(key);
       // modeObj is already sorted by keys and hence will overwrite if a bigger
       // key is found, hence giving max of modes
     }
   }

   return mode === mean;
 }

module.exports = modemean;
