function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('Promise lecture starts');

delayFn(2000).then(() => console.log('After 2 seconds promise resolves'));
console.log("Promise ends");
