const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((acc, cur) => {
    return acc+cur;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => {
    return acc*cur;
  }, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let p = 1;
  for (let i = 2; i <= n; i++) {
    p *= i;
  }
  return p;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
