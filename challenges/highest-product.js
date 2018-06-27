/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function eitherOr(array) {
  return [array.filter(val => val <= 0), array.filter(val => val > 0)];
}

function negativeMaxima(array) {
  const maxima = [0, 0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < maxima[1]) {
      maxima.shift();
      maxima.push(array[i]);
    } else if (array[i] < maxima[0]) {
      maxima.shift();
      maxima.unshift(array[i]);
    }
  }
  return maxima;
}

function negativeMinima(array) {
  const maxima = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maxima[2]) {
      maxima.shift();
      maxima.push(array[i]);
    } else if (array[i] > maxima[1]) {
      maxima[0] = maxima[1];
      maxima[1] = array[i];
    } else if (array[i] > maxima[0]) {
      maxima.shift();
      maxima.unshift(array[i]);
    }
  }
  return maxima;
}

function positiveMaxima(array) {
  const maxima = [0, 0, 0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maxima[2]) {
      maxima.shift();
      maxima.push(array[i]);
    } else if (array[i] > maxima[1]) {
      maxima[0] = maxima[1];
      maxima[1] = array[i];
    } else if (array[i] > maxima[0]) {
      maxima.shift();
      maxima.unshift(array[i]);
    }
  }
  // note that we may be inserting zeroes here that weren't there originally.
  // we count on our highestProduct logic to make this unimportant!
  return maxima;
}

const multiply = arr => arr.reduce((a, b) => a * b);

function highestProduct(array) {
  if (!(array instanceof Array) || array.length < 3) {
    return 0;
  }
  if (array.length === 3) {
    return multiply(array);
  }

  // array is at least 4 long
  const [neg, pos] = eitherOr(array);
  if (pos.length === 0) {
    // array has at least 4 negatives
    return multiply(negativeMinima(neg));
  }

  // array has at least 1 positive
  const posMaxima = positiveMaxima(pos);
  if (neg.length >= 2) {
    // array has at least 2 negatives (meaning something good can happen!)
    const negMaxima = negativeMaxima(neg);
    if (multiply(negMaxima) > multiply(posMaxima.slice(0, 2))) {
      return multiply(negMaxima) * posMaxima[2];
    }
  }

  // array has 1 or 0 negatives, meaning array has at least 3 positives
  return multiply(posMaxima);
}

module.exports = highestProduct;
