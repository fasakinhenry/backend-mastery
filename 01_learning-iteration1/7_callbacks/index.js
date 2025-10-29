const fs = require('fs');

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log('Nigeria');
}

// The readFile function is asynchronous and uses a callback to handle the file content once it's read
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

person('Fasakin Henry', address);
