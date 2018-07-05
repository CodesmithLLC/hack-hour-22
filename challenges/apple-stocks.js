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

const makeComparator = price => ({ buy: price, sell: -Infinity });

function bestProfit(stocks) {
  if (!(stocks instanceof Array) || stocks.length < 2) return 0;

  const comparators = [];
  const prices = [Infinity, ...stocks, -Infinity];
  for (let i = 1; i < prices.length; i += 1) {
    const [last, curr, next] = prices.slice(i - 1, i + 2);
    if (curr < last && curr < next) {
      comparators.push(makeComparator(curr));
    }
    if (curr > last && curr > next) {
      comparators.forEach((comparator) => {
        comparator.sell = Math.max(curr, comparator.sell);
      });
    }
  }
  return Math.max(...comparators.map(c => c.sell - c.buy), 0);
}

module.exports = bestProfit;
