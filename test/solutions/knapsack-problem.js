
// Recursively explore all options
function solveKnapsack(itemsLeft, weightAvailable) {

  if (itemsLeft.length === 0 || weightAvailable === 0) return 0;

  // if first item is too heavy to fit, consider other items
  if (itemsLeft[0].weight > weightAvailable) {
    return solveKnapsack(itemsLeft.slice(1), weightAvailable);
  }
  //if first item does fit
  else {
    var left = itemsLeft.slice(1);
    var takeItem = itemsLeft[0].value + solveKnapsack(left, weightAvailable - itemsLeft[0].weight);
    var leaveItem = solveKnapsack(left, weightAvailable);

    return (takeItem > leaveItem) ? takeItem : leaveItem;
  }
}

// Recursive solution + track selected items
//######### keep track of values + items to select
function solveKnapsack(itemsLeft, weightAvailable) {

  var selected = {
    value : 0,
    list : []
  };

  if (itemsLeft.length === 0 || weightAvailable === 0) return selected;

  // if first item is too heavy to fit, consider other items
  if (itemsLeft[0].weight > weightAvailable) {
    return solveKnapsack(itemsLeft.slice(1), weightAvailable);
  }
  //if first item does fit
  else {
    // for some reason the ordering of leaveitem and takeitem matters. leaveitem
    // has to come first for the right result
    var leaveItem = solveKnapsack(itemsLeft.slice(1), weightAvailable);
    var considerTakeItem = solveKnapsack(itemsLeft.slice(1), weightAvailable - itemsLeft[0].weight);
    considerTakeItem.list.push(itemsLeft[0]);
    var takeItem = {
      value : itemsLeft[0].value + considerTakeItem.value,
      list : considerTakeItem.list
    };

    return (takeItem.value > leaveItem.value) ? takeItem : leaveItem;
  }
}

// Solve with Dynamic Programming
function solveKnapsack(itemsLeft, weightAvailable) {
  var memo = [];

  // build the table
  for (var n = 0; n <= itemsLeft.length; n++) {
    memo.push([]);
    for (var w = 0; w <= weightAvailable; w++) {

      // if 0 items in consideration or 0 weight available, set value to zero
      if (n === 0 || w === 0) memo[n][w] = 0;

      // if item.weight > weightAvailable, return memo[n-1][w]
      // current item is itemsLeft[n-1] because we start from n = 1
      else if (itemsLeft[n-1].weight > w) {
        memo[n][w] = memo[n-1][w];
      }

      else {
        var item = itemsLeft[n-1];
        var take = item.value + memo[n-1][w-item.weight];
        var leave = memo[n-1][w];
        memo[n][w] = (take > leave) ? take : leave;
      }
    }
  }

  // after we exit the for loops, the table (memo) will have been built,
  // with the answer we want saved at the bottom right most corner of the table
  return memo[itemsLeft.length][weightAvailable];
}
