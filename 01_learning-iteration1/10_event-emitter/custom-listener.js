const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello';
  }

  greet(name) {
    this.emit('greeting', `${this.greeting}, ${name}`);
  }
}

const myCustomEmitter = new MyCustomEmitter();

// Create the listener for greeting
myCustomEmitter.on('greeting', (input) => {
  console.log('Greeting event', input);
});

myCustomEmitter.greet('Fasakin Henry');
