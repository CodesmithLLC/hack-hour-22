// build up a string and eval it!
// the end result of funcCall is "func(args[0], args[1], args[2]);"
// yay closures!
function applyIt(func, args) {
  var funcCall = "func(";
  var argList = args.map(function(_, i) {
    return `args[${i}]`;
  });
  funcCall += argList.join(',') + ');';
  return function() {
    return eval(funcCall);
  };
}



// it is possible w/ spread operator from node v5
// but this is just syntactic sugar for using apply. they should be able to do it without spreading
function applyIt(func, args) {
  return function() {
    return func(...args);
  };
}
