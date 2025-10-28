// Add function
function add(a, b) {
  return a + b;
}

// Subtract function
function subtract(a, b) {
  return a - b;
}

// Multiply function
function multiply(a, b) {
  return a * b;
}

// Divide function
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
