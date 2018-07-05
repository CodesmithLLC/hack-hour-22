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
  let minIndex = 0;
  let maxIndex = 1;
  let currentMin = 0;
  let maxProfit = 0;

  if (stock_prices_yesterday.length < 2 || !Array.isArray(stock_prices_yesterday)) return 0;

  for (i in stock_prices_yesterday) {
    if (stock_prices_yesterday[i] < stock_prices_yesterday[currentMin]) currentMin = i;

    if (stock_prices_yesterday[maxIndex] - stock_prices_yesterday[minIndex] < stock_prices_yesterday[i] - stock_prices_yesterday[currentMin]) {
      maxIndex = i;
      minIndex = currentMin;
    }
  }

  maxProfit = stock_prices_yesterday[maxIndex] - stock_prices_yesterday[minIndex];
  return maxProfit;
}

module.exports = bestProfit;
// TESTS
// const appleArray = [500, 450, 100, , 470, -10, 501, 200, 100, 0, 449];
// console.log(bestProfit(appleArray));
