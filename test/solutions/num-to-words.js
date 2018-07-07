var ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
var PLACES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

function numToWords(num) {
  if (!num) return 'Zero';
  str = String(num);
  // make sure the length is divisible by 3
  while (str.length % 3) {
    str = '0' + str;
  }
  return recurringNum(str)
         .replace('TenOne', 'Eleven')
         .replace('TenTwo', 'Twelve')
         .replace('TenThree', 'Thirteen')
         .replace('TenFour', 'Fourteen')
         .replace('TenFive', 'Fifteen')
         .replace('TenSix', 'Sixteen')
         .replace('TenSeven', 'Seventeen')
         .replace('TenEight', 'Eighteen')
         .replace('TenNine', 'Nineteen');
}

function recurringNum(str) {
  if (!str.length) return '';
  var nextNums = str.slice(0,3);
  var nextWords;
  if (nextNums === '000') {
    nextWords = '';
  } else {
    var placesIndex = Math.floor(str.length / 3) - 1;
    nextWords = parseThree(nextNums) + PLACES[placesIndex];
  }
  return nextWords + recurringNum(str.slice(3));
}

function parseThree(digits) {
  var words;
  if (digits >= 100) {
    words = ONES[digits[0]] + 'Hundred' + TENS[digits[1]] + ONES[digits[2]];
  } else if (digits >= 10 ) {
    words = TENS[digits[1]] + ONES[digits[2]];
  } else {
    words = ONES[digits[2]];
  }
  return words;
}
