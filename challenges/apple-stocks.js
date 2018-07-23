/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  //store closing price (should be index 0)
  //loop through input array, map by subtracting closing price - current price
  //math.max on new array of differences
  //check that math.max > 0 && input is valid for net profit

  let closingPrice = stock_prices_yesterday[0];
  let profitsAndLosses = stock_prices_yesterday.map((el, i) => el - closingPrice);
  let bestProfitOrLoss = Math.max(...profitsAndLosses);
  return bestProfitOrLoss <= 0 || !bestProfitOrLoss ? 0 : bestProfitOrLoss;
}

module.exports = bestProfit;
