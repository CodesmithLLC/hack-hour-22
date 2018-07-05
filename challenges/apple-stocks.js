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
    const array = stock_prices_yesterday;
    
    let tallyObj ={
        diff: 0
    }
    for (let i = 0; i<array.length; i++){
        const min = array[i];
        for (let e = i+1; e <array.length; e++){
            if (isNaN(array[e])) return 0;
            const currentDiff = array[e] - min;
            if (currentDiff > 0 && currentDiff > tallyObj.diff){
                tallyObj.diff = currentDiff; 
            }
        }
    }
    return tallyObj.diff;
}

module.exports = bestProfit;
