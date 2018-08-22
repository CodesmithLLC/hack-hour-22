/**
* Refactored to work on any number of array arguments
*/
function commonElements() {
  const args = [...arguments];
  const memory = {};
  var common;
  var i;

  args.forEach((arr, index) => {
    for (i = 0; i < arr.length; i++) {
      if (!memory[arr[i]]) {
        memory[arr[i]] = 1;
      } else if (memory[arr[i]] === index) {
        memory[arr[i]] ++;
      }
    }
  });

  common = Object.keys(memory).filter(key => memory[key] === args.length);

  if (common.length === 0) return 'Nothing in Common!';

  return common;
}
