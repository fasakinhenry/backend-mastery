function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('Promise lecture starts');

delayFn(2000).then(() => console.log('After 2 seconds promise resolves'));
console.log('Promise ends');

// Create a new promise with resolve and reject
function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('Cannot perform division by zero');
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 5)
  .then((result) => console.log('Result', result))
  .catch((error) => console.log('Error:', error));
