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
 const highestPrice = Math.max(...stock_prices_yesterday);
 const lowestPrice = Math.min(...stock_prices_yesterday);

 const profit = highestPrice-lowestPrice;
 if (profit === undefined || profit === 0 || isNaN(profit)) return 0;
 
 

}

const prices = [1, 2 , 'b', 900, 4, 1000, 3, 9]
console.log(bestProfit(prices));
module.exports = bestProfit;
