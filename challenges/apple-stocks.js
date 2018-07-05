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
	if (stock_prices_yesterday.length === 0) return 0;
	let sorted = stock_prices_yesterday.slice().sort((a, b) => {
		return a - b;
	});
	let low = sorted[0];
	let high = sorted[sorted.length - 1];
	let lowI = stock_prices_yesterday.indexOf(low);
	let highI = stock_prices_yesterday.indexOf(high);
	if (lowI < highI) return high - low;
	let beforeH = bestProfit(stock_prices_yesterday.slice(0, highI));
	let afterL = bestProfit(stock_prices_yesterday.slice(lowI));
	return (beforeH > afterL) ?  beforeH :  afterL;
}

module.exports = bestProfit;
