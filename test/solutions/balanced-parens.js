
function balancedParens(input){
  var matches = {'[':']', '{':'}', '(':')'};
  var brackets = [];
  for (var i = 0; i < input.length; i++) {
    char = input[i];
    if (char in matches) {
      brackets.push(char);
    } else if (char === ']' || char === ')' || char === '}'){
      if (matches[brackets.pop()] !== char){
        return false;
      }
    }
  }
  return !brackets.length;
}
