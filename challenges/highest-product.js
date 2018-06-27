/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) return 'error';
	array.sort((a, b) => {
		return a-b;
	});
	let hi = array.slice(-3);
	let hiLo = array.slice(0, 2)
	hiLo.push(hi[2])
	if (hi.reduce(product) > hiLo.reduce(product)) return hi.reduce(product);
	else return hiLo.reduce(product);
}

function product(a, b) {
	return a * b;
}

module.exports = { 
	highestProduct,
	product
};

