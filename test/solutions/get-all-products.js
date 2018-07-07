// Using Division
function getAllProducts(array) {
  var products = array.reduce(function(acc, curr) {
    return acc * curr;
  }, 1);
  return array.map(function(curr) {
    return products / curr;
  });
}

// Find Products Before and After
function getAllProducts(array) {
  if (!array || !array.length) {
    return [0];
  }

  var front = [];
  var back = [];
  var result = [];

  var productSoFar = 1;
  for (var i = 0; i < array.length; ++i) {
    front[i] = productSoFar;
    productSoFar *= array[i];
  }

  productSoFar = 1;
  for (var j = array.length - 1; j >= 0; --j) {
    back[j] = productSoFar;
    productSoFar *= array[j];
  }

  for (var k = 0; k < array.length; k++) {
    result[k] = front[k] * back[k];
  }

  return result;
}
