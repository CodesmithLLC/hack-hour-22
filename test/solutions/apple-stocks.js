// Brute-Force
function bestProfit(stock_prices_yesterday) {
  var best = 0;
  for (var i = 0; i < stock_prices_yesterday.length; i++) {
    for (var j = i; j < stock_prices_yesterday.length; j++) {
      best = Math.max(best, stock_prices_yesterday[j] - stock_prices_yesterday[i]);
    }
  }
  return best;
}


// Better Solution
function bestProfit(stock_prices_yesterday) {
  var maxProfit = 0;
  var possibleProfit = 0;
  var minI = 0, maxI = 0;
  if (stock_prices_yesterday) {
    for (var i = 0; i < stock_prices_yesterday.length; i++) {
      if (stock_prices_yesterday[i] < stock_prices_yesterday[minI]) {
        minI = i;
      }

      possibleProfit = stock_prices_yesterday[i] - stock_prices_yesterday[minI];

      if (possibleProfit > maxProfit) {
        maxProfit = possibleProfit;
        maxI = i;
      }
    }
  }
  return maxProfit;
}
