// you'll need to hard-code SOMETHING. probably best to just hard-code these
var pad = {
  "1": ['1', '2', '4'],
  "2": ['1', '2', '3', '5'],
  "3": ['2', '3', '6'],
  "4": ['1', '4', '5', '7'],
  "5": ['2', '4', '5', '6', '8'],
  "6": ['3', '5', '6', '9'],
  "7": ['4', '7', '8'],
  "8": ['5', '7', '8', '9', '0'],
  "9": ['6', '8', '9'],
  "0": ['8', '0'],
};


// recursive solution
function getPINs(observed) {

  var possibilities = [];

  function getAdjacents(observed, path) {
    if (!observed) {
      return possibilities.push(path);
    }
    var adjacent = pad[observed[0]];
    observed = observed.slice(1);
    for (var i = 0; i < adjacent.length; i++) {   // avoid doing a recursive call inside a "forEach". The callback given to forEach will end up doubling the size of the callstack. Use a "for" loop instead
      getAdjacents(observed, path + adjacent[i]);
    }
  }
  
  getAdjacents(observed, '');
  return possibilities;
}


// iterative solution
// slightly faster
// http://jsperf.com/observed-pin-hack-hour
function getPINs(observed) {
  var possibilities = [''];
  while (observed) {
    var adjacents = pad[observed[0]];
    var newPossibles = [];
    for (var i = 0; i < adjacents.length; i++) {
      for (var j = 0; j < possibilities.length; j++) {
        newPossibles.push(possibilities[j] + adjacents[i]);
      } 
    }
    possibilities = newPossibles;
    observed = observed.slice(1);
  }
  return possibilities;
}
