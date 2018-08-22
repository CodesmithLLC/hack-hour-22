
function binToDec(binary) {
  var len = binary.length;
  var dec = 0;
  var BASE = 2;
  for (var i = 0; i < len; i++){
    dec += binary[i] * Math.pow(BASE,len-1-i);
  }
  return dec;
}
//incomplete: doesn't account for plain 0. does account for leading 0



function decToBin(decimal) {
  let dec = decimal;
  let bin = '';
  let binSpaces = Math.floor(Math.log2(dec));
  while (binSpaces >= 0){
    let temp = Math.pow(2, binSpaces);
    if (dec == temp) {
      bin += '1' + '0'.repeat(binSpaces);
      return bin;
    }
    if (dec > temp) {
      bin += '1';
      dec -= temp;
    } else bin+='0';
    binSpaces--;
  }
  return bin;
}
